use crate::articles_data::{get_all_articles, get_article_by_id};
use crate::{Language, Screen};
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Articles(set_screen: WriteSignal<Screen>, initial_path: Vec<String>) -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");
    let (current_path, set_current_path) = signal(initial_path);

    view! {
        <div style="max-width: 1000px; padding-top: 40px; padding-bottom: 80px;">
            <div style="display: flex; gap: 48px; align-items: flex-end; flex-wrap: wrap; margin-bottom: 80px;">
                <div style="flex: 1; min-width: 300px;">
                    <div class="mono" style="color: #888; margin-bottom: 12px; font-weight: bold;">
                        "// ARCHIVE_SYSTEM.04"
                    </div>
                    <h1 style="font-size: clamp(48px, 8vw, 96px); font-weight: 900; line-height: 0.9; margin: 0; letter-spacing: -0.04em;">
                        {move || if lang.get() == Language::En { "REFLECTIONS / DEV" } else { "REFLEXÕES / DEV" }}
                    </h1>
                </div>
                <div style="border-left: 1px solid var(--border-color); padding-left: 24px; max-width: 350px;">
                    <p class="mono" style="color: #666; font-size: 11px; line-height: 1.6; text-transform: none; margin-bottom: 16px;">
                        {move || if lang.get() == Language::En {
                            "Tech articles about things I've built or problems I'm playing around with. It's going to be a pleasant read."
                        } else {
                            "Artigos tech de coisas que construí ou de problemas que ando resolvendo para brincar, vai ser uma leitura agradável."
                        }}
                    </p>
                    <div class="mono" style="font-size: 10px; color: #aaa; display: none;">
                    </div>
                </div>
            </div>

            {move || {
                let cp = current_path.get();
                if !cp.is_empty() {
                    view! {
                        <div style="display: flex; align-items: center; margin-bottom: 40px; border-bottom: 1px dashed var(--border-color); padding-bottom: 16px;">
                            <button 
                                class="btn-inverse" 
                                style="padding: 6px 16px; font-size: 10px; border: 1px solid var(--border-color); color: var(--text-main); background: transparent;"
                                on:click=move |_| {
                                    let mut p = current_path.get();
                                    p.pop();
                                    set_current_path.set(p);
                                }
                            >
                                {if lang.get() == Language::En { "<- BACK" } else { "<- VOLTAR" }}
                            </button>
                            <span class="mono" style="color: #666; margin-left: 16px; font-size: 12px; font-weight: bold;">
                                "[_ROOT_] / "{cp.join(" / ")}
                            </span>
                        </div>
                    }.into_any()
                } else {
                    view! { <span></span> }.into_any()
                }
            }}

            <div style="display: flex; flex-direction: column; gap: 48px;">
                {
                    move || {
                        let articles = get_all_articles(lang.get());
                        let cp = current_path.get();
                        let mut folders = std::collections::BTreeSet::new();
                        let mut files = Vec::new();

                        for article in articles.into_iter() {
                            if article.path.starts_with(&cp) {
                                if article.path.len() == cp.len() {
                                    files.push(article.clone());
                                } else {
                                    folders.insert(article.path[cp.len()].clone());
                                }
                            }
                        }

                        let mut items = Vec::new();
                        for folder in folders {
                            let folder_clone = folder.clone();
                            items.push(view! {
                                <div class="folder-card" style="cursor: pointer; display: flex; align-items: center; gap: 24px; padding: 24px; border: 1px solid var(--border-color); background-color: var(--bg-color); transition: background-color 0.2s;" 
                                     on:click=move |_| {
                                         let mut p = current_path.get();
                                         p.push(folder_clone.clone());
                                         set_current_path.set(p);
                                     }
                                >
                                    <div class="mono" style="font-size: 20px; color: var(--text-main); font-weight: bold;">"+"</div>
                                    <h2 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em;">{folder.to_uppercase()}</h2>
                                    <div class="mono" style="margin-left: auto; color: #888; font-size: 10px;">"[ DIRECTORY ]"</div>
                                </div>
                            }.into_any());
                        }

                        for article in files {
                            let id_clone = article.id.clone();
                            items.push(view! {
                                <div style="display: flex; gap: 40px; border-bottom: 1px solid var(--border-color); padding-bottom: 48px; flex-wrap: wrap;">
                                    // Article Left side (Image placeholder + Info)
                                    <div style="flex: 2; min-width: 300px;">
                                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
                                            <span class="mono" style="background-color: var(--text-main); color: var(--bg-color); padding: 4px 8px; font-size: 10px; font-weight: bold;">
                                                {move || if lang.get() == Language::En { "ARTICLE" } else { "ARTIGO" }}
                                            </span>
                                            <span class="mono" style="color: #888; font-size: 10px;">{article.date.clone()}</span>
                                        </div>
                                        
                                        <h2 style="font-size: 32px; font-weight: 900; margin: 0 0 16px 0; letter-spacing: -0.02em; line-height: 1.1;">
                                            {article.title.clone().to_uppercase()}
                                        </h2>
                                        
                                        <p style="font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 32px;">
                                            {article.description.clone()}
                                        </p>
                                        
                                        <div style="cursor: pointer; display: inline-flex; align-items: center; gap: 8px; font-family: var(--font-mono); font-size: 11px; font-weight: bold; letter-spacing: 0.1em; color: var(--text-main);"
                                             on:click=move |_| set_screen.set(Screen::ArticleDetail(id_clone.clone(), current_path.get()))
                                        >
                                            {move || if lang.get() == Language::En { "[ READ ARTICLE ] ->" } else { "[ LER ARTIGO ] ->" }}
                                        </div>
                                    </div>
                                    
                                    // Article Right side (Meta Data)
                                    <div style="flex: 1; min-width: 250px; border-left: 1px dashed var(--border-color); padding-left: 32px; display: flex; flex-direction: column; justify-content: center;">
                                        <div class="mono" style="color: #666; font-size: 10px; margin-bottom: 24px; letter-spacing: 0.2em;">"META DATA"</div>
                                        
                                        <div style="display: flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 12px; margin-bottom: 12px;">
                                            <span class="mono" style="color: #888; font-size: 10px;">"READ_TIME"</span>
                                            <span class="mono" style="color: var(--text-main); font-size: 10px; font-weight: bold;">
                                                {format!("{} MIN", article.read_time)}
                                            </span>
                                        </div>
                                        
                                        <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid var(--border-color); padding-bottom: 12px;">
                                            <span class="mono" style="color: #888; font-size: 10px;">"TAGS"</span>
                                            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
                                                {article.tags.iter().map(|t| {
                                                    view! { <span class="mono" style="color: var(--text-main); font-size: 10px; font-weight: bold;">{t.clone().to_uppercase()}</span> }
                                                }).collect::<Vec<_>>()}
                                            </div>
                                        </div>
                                        
                                        <div style="display: flex; gap: 16px; margin-top: 24px;">
                                            {if let Some(url) = article.github_url.clone() {
                                                view! {
                                                    <a href=url target="_blank" class="mono" style="color: var(--text-main); font-size: 10px; font-weight: bold; text-decoration: none; border: 1px solid var(--text-main); padding: 6px 12px;">
                                                        "-> CODE"
                                                    </a>
                                                }.into_any()
                                            } else {
                                                view! { <span></span> }.into_any()
                                            }}
                                            {if let Some(url) = article.challenge_url.clone() {
                                                view! {
                                                    <a href=url target="_blank" class="mono" style="color: var(--text-main); font-size: 10px; font-weight: bold; text-decoration: none; border: 1px solid var(--text-main); padding: 6px 12px;">
                                                        "-> CHALLENGE"
                                                    </a>
                                                }.into_any()
                                            } else {
                                                view! { <span></span> }.into_any()
                                            }}
                                        </div>
                                    </div>
                                </div>
                            }.into_any());
                        }
                        
                        items
                    }
                }
            </div>
        </div>
    }
}

#[component]
pub fn ArticleDetail(id: String, back_path: Vec<String>, set_screen: WriteSignal<Screen>) -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 800px; padding-top: 40px; padding-bottom: 80px;">
            <button 
                class="btn-inverse" 
                style="margin-bottom: 48px; border: 1px solid var(--border-color); color: var(--text-main); background: transparent; padding: 8px 16px; font-size: 11px;"
                on:click=move |_| set_screen.set(Screen::Articles(back_path.clone()))
            >
                {move || if lang.get() == Language::En { "<- BACK TO REFLECTIONS" } else { "<- VOLTAR PARA REFLEXÕES" }}
            </button>

            {move || match get_article_by_id(&id, lang.get()) {
                Some(article) => view! {
                    <article class="markdown-body" style="background: var(--bg-color); padding: 48px; border: 1px solid var(--border-color);">
                        <header style="margin-bottom: 48px; border-bottom: 2px solid var(--text-main); padding-bottom: 32px;">
                            <div class="mono" style="color: #888; font-size: 12px; margin-bottom: 16px;">
                                "// PARSING_NODE: " {article.date.clone()} 
                            </div>
                            <h1 style="font-size: clamp(32px, 5vw, 48px); font-weight: 900; line-height: 1.1; margin-bottom: 24px; letter-spacing: -0.02em; color: var(--text-main);">
                                {article.title.to_uppercase()}
                            </h1>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                {article.tags.into_iter().map(|t| {
                                    view! { <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; font-size: 10px; color: #666;">"> "{t.to_uppercase()}</span> }
                                }).collect::<Vec<_>>()}
                            </div>
                        </header>
                        
                        <div class="article-content" inner_html=article.html_content />
                    </article>
                }.into_any(),
                None => view! {
                    <div style="padding: 48px; border: 1px dashed red; color: red;">
                        <h2 class="mono">"[ERROR: 404_NODE_NOT_FOUND]"</h2>
                    </div>
                }.into_any()
            }}
        </div>
    }
}
