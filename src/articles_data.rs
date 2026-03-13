use chrono::NaiveDate;
use gray_matter::engine::YAML;
use gray_matter::Matter;
use include_dir::{include_dir, Dir};
use serde::Deserialize;
use crate::Language;

static ARTICLES_DIR: Dir = include_dir!("$CARGO_MANIFEST_DIR/src/content/articles");

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
}

#[derive(Deserialize, Debug)]
struct FrontMatter {
    title: String,
    date: String,
    description: String,
    tags: Vec<String>,
    #[serde(default)]
    path: Vec<String>,
    github_url: Option<String>,
    challenge_url: Option<String>,
}

pub fn get_all_articles(lang: Language) -> Vec<Article> {
    let mut articles = Vec::new();
    let matter = Matter::<YAML>::new();
    let lang_str = if lang == Language::En { "en" } else { "pt-br" };

    if let Some(dir) = ARTICLES_DIR.get_dir(lang_str) {
        collect_articles(dir, &matter, &mut articles);
    }

    // Sort by date descending
    articles.sort_by(|a, b| {
        let a_date = NaiveDate::parse_from_str(&a.date, "%Y-%m-%d").unwrap_or(NaiveDate::MIN);
        let b_date = NaiveDate::parse_from_str(&b.date, "%Y-%m-%d").unwrap_or(NaiveDate::MIN);
        b_date.cmp(&a_date)
    });

    articles
}

fn collect_articles(dir: &Dir, matter: &Matter<YAML>, articles: &mut Vec<Article>) {
    for file in dir.files() {
        if let Some(path_str) = file.path().to_str() {
            if !path_str.ends_with(".md") {
                continue;
            }

            let mut id = path_str.trim_end_matches(".md").to_string();
            if id.starts_with("en/") {
                id = id["en/".len()..].to_string();
            } else if id.starts_with("pt-br/") {
                id = id["pt-br/".len()..].to_string();
            }

            let file_contents = file.contents_utf8().unwrap_or_default();
            
            if let Ok(parsed) = matter.parse::<FrontMatter>(file_contents) {
                if let Some(front_matter) = parsed.data {
                    let html_content = parse_markdown(&parsed.content);
                    
                    articles.push(Article {
                        id,
                        title: front_matter.title,
                        date: front_matter.date,
                        description: front_matter.description,
                        tags: front_matter.tags,
                        html_content,
                        path: front_matter.path,
                        github_url: front_matter.github_url,
                        challenge_url: front_matter.challenge_url,
                    });
                }
            }
        }
    }
    
    for subdir in dir.dirs() {
        collect_articles(subdir, matter, articles);
    }
}

pub fn get_article_by_id(id: &str, lang: Language) -> Option<Article> {
    get_all_articles(lang).into_iter().find(|a| a.id == id)
}

fn parse_markdown(markdown: &str) -> String {
    use pulldown_cmark::{html, Parser, Options};

    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);
    options.insert(Options::ENABLE_TABLES);
    options.insert(Options::ENABLE_SMART_PUNCTUATION);
    options.insert(Options::ENABLE_HEADING_ATTRIBUTES);
    
    let parser = Parser::new_ext(markdown, options);
    let mut html_output = String::new();
    html::push_html(&mut html_output, parser);
    
    html_output
}
