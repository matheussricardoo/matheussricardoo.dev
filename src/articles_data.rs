use chrono::NaiveDate;
use gray_matter::engine::YAML;
use gray_matter::Matter;
use include_dir::{include_dir, Dir};
use serde::Deserialize;
use crate::Language;

static ARTICLES_DIR: Dir = include_dir!("$CARGO_MANIFEST_DIR/src/content/articles");

#[derive(Debug, Clone, PartialEq)]
pub struct TocEntry {
    pub level: usize,
    pub text: String,
    pub id: String,
}

#[derive(Debug, Clone, PartialEq)]
pub struct Article {
    pub id: String,
    pub title: String,
    pub date: String,
    pub description: String,
    pub tags: Vec<String>,
    pub html_content: String,
    pub path: Vec<String>,
    pub github_url: Option<String>,
    pub challenge_url: Option<String>,
    pub read_time: u32,
    pub toc: Vec<TocEntry>,
}

#[derive(Deserialize, Debug)]
struct FrontMatter {
    title: String,
    date: String,
    description: String,
    tags: Vec<String>,
    github_url: Option<String>,
    challenge_url: Option<String>,
}

pub fn get_all_articles(lang: Language) -> Vec<Article> {
    let mut articles = Vec::new();
    let matter = Matter::<YAML>::new();
    let lang_suffix = if lang == Language::En { "en.md" } else { "pt-br.md" };

    collect_articles(&ARTICLES_DIR, &matter, &mut articles, lang_suffix);

    // Sort by date descending
    articles.sort_by(|a, b| {
        let a_date = NaiveDate::parse_from_str(&a.date, "%Y-%m-%d").unwrap_or(NaiveDate::MIN);
        let b_date = NaiveDate::parse_from_str(&b.date, "%Y-%m-%d").unwrap_or(NaiveDate::MIN);
        b_date.cmp(&a_date)
    });

    articles
}

fn collect_articles(dir: &Dir, matter: &Matter<YAML>, articles: &mut Vec<Article>, lang_suffix: &str) {
    for file in dir.files() {
        if let Some(path_str) = file.path().to_str() {
            if !path_str.ends_with(lang_suffix) {
                continue;
            }

            let mut relative_path = path_str.trim_end_matches(lang_suffix);
            relative_path = relative_path.trim_end_matches('-');
            relative_path = relative_path.trim_end_matches('.');
            relative_path = relative_path.trim_end_matches('/');

            let id = relative_path.to_string();
            let dirs: Vec<String> = relative_path.split('/').map(|s| s.to_string()).collect();

            let file_contents = file.contents_utf8().unwrap_or_default();
            
            if let Ok(parsed) = matter.parse::<FrontMatter>(file_contents) {
                if let Some(front_matter) = parsed.data {
                    let (html_content, toc) = parse_markdown(&parsed.content);
                    let word_count = parsed.content.split_whitespace().count();
                    let read_time = std::cmp::max(1, (word_count as f64 / 200.0).ceil() as u32);
                    
                    articles.push(Article {
                        id,
                        title: front_matter.title,
                        date: front_matter.date,
                        description: front_matter.description,
                        tags: front_matter.tags,
                        html_content,
                        path: dirs,
                        github_url: front_matter.github_url,
                        challenge_url: front_matter.challenge_url,
                        read_time,
                        toc,
                    });
                }
            }
        }
    }
    
    for subdir in dir.dirs() {
        collect_articles(subdir, matter, articles, lang_suffix);
    }
}

pub fn get_article_by_id(id: &str, lang: Language) -> Option<Article> {
    get_all_articles(lang).into_iter().find(|a| a.id == id)
}

fn slugify(text: &str) -> String {
    let mut slug = String::with_capacity(text.len());
    for c in text.chars() {
        if c.is_alphanumeric() {
            slug.push(c.to_ascii_lowercase());
        } else if c.is_whitespace() || c == '-' || c == '_' {
            if !slug.ends_with('-') && !slug.is_empty() {
                slug.push('-');
            }
        }
    }
    slug.trim_end_matches('-').to_string()
}

fn parse_markdown(markdown: &str) -> (String, Vec<TocEntry>) {
    use pulldown_cmark::{html, Parser, Options, Event, Tag, HeadingLevel, TagEnd};

    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);
    options.insert(Options::ENABLE_TABLES);
    options.insert(Options::ENABLE_SMART_PUNCTUATION);
    options.insert(Options::ENABLE_HEADING_ATTRIBUTES);
    
    let parser = Parser::new_ext(markdown, options);
    let events: Vec<Event> = parser.collect();
    let mut new_events = Vec::with_capacity(events.len());
    let mut toc = Vec::new();
    
    let mut i = 0;
    while i < events.len() {
        if let Event::Start(Tag::Heading { level, id: _, classes, attrs }) = &events[i] {
            let mut text = String::new();
            let mut j = i + 1;
            while j < events.len() {
                match &events[j] {
                    Event::Text(t) | Event::Code(t) => text.push_str(t),
                    Event::End(TagEnd::Heading(_)) => break,
                    _ => {}
                }
                j += 1;
            }
            
            let slug = slugify(&text);
            let current_level = match level {
                HeadingLevel::H1 => 1,
                HeadingLevel::H2 => 2,
                HeadingLevel::H3 => 3,
                HeadingLevel::H4 => 4,
                HeadingLevel::H5 => 5,
                HeadingLevel::H6 => 6,
            };
            
            if !slug.is_empty() {
                toc.push(TocEntry {
                    level: current_level,
                    text,
                    id: slug.clone(),
                });
            }

            new_events.push(Event::Start(Tag::Heading {
                level: *level,
                id: (!slug.is_empty()).then(|| slug.into()),
                classes: classes.clone(),
                attrs: attrs.clone(),
            }));
        } else {
            new_events.push(events[i].clone());
        }
        i += 1;
    }
    
    let mut html_output = String::new();
    html::push_html(&mut html_output, new_events.into_iter());
    
    (html_output, toc)
}
