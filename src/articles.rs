use crate::articles_data::{get_all_articles, get_article_by_id};
use crate::{Language, Screen};
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Articles(set_screen: WriteSignal<Screen>, initial_path: Vec<String>) -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");
    let (current_path, set_current_path) = signal(initial_path);

    view! {
        <div style="max-width: 48rem; padding-top: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                {move || {
                    if lang.get() == Language::En {
                        "Articles"
                    } else {
                        "Artigos"
                    }
                }}
            </h1>

            {move || {
                let cp = current_path.get();
                if !cp.is_empty() {
                    view! {
                        <div style="display: flex; align-items: center; margin-bottom: 24px;">
                            <button 
                                class="btn-secondary" 
                                style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; font-size: 13px;"
                                on:click=move |_| {
                                    let mut p = current_path.get();
                                    p.pop();
                                    set_current_path.set(p);
                                }
                            >
                                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="m15 18-6-6 6-6"/>
                                </svg>
                                {if lang.get() == Language::En { "Back" } else { "Voltar" }}
                            </button>
                            <span style="color: #666; margin-left: 12px; font-size: 14px;">
                                {cp.join(" / ")}
                            </span>
                        </div>
                    }.into_any()
                } else {
                    view! { <span></span> }.into_any()
                }
            }}

            <div style="display: flex; flex-direction: column; gap: 24px;">
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
                                <div class="project-card" style="cursor: pointer; display: flex; align-items: center; gap: 16px; padding: 20px;" 
                                    on:click=move |_| {
                                        let mut p = current_path.get();
                                        p.push(folder_clone.clone());
                                        set_current_path.set(p);
                                    }
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                    <h2 class="project-name" style="margin: 0; font-size: 16px;">{folder}</h2>
                                </div>
                            }.into_any());
                        }

                        for article in files {
                            let id_clone = article.id.clone();
                            items.push(view! {
                                <div class="project-card" style="cursor: pointer;" on:click=move |_| set_screen.set(Screen::ArticleDetail(id_clone.clone(), current_path.get()))>
                                    <div class="project-card-header">
                                        <div>
                                            <div class="project-title-row">
                                                <h2 class="project-name">{article.title.clone()}</h2>
                                            </div>
                                            <p class="project-subtitle">{article.date.clone()}</p>
                                        </div>
                                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                            {if let Some(url) = article.github_url.clone() {
                                                view! {
                                                    <a
                                                        href=url
                                                        target="_blank"
                                                        class="btn-secondary"
                                                        style="font-size: 12px; padding: 8px 16px; white-space: nowrap;"
                                                        on:click=|e| e.stop_propagation()
                                                    >
                                                        {if lang.get() == Language::En {
                                                            "View Code ↗"
                                                        } else {
                                                            "Ver Código ↗"
                                                        }}
                                                    </a>
                                                }.into_any()
                                            } else {
                                                view! { <span></span> }.into_any()
                                            }}
                                            {if let Some(url) = article.challenge_url.clone() {
                                                view! {
                                                    <a
                                                        href=url
                                                        target="_blank"
                                                        class="btn-secondary"
                                                        style="font-size: 12px; padding: 8px 16px; white-space: nowrap;"
                                                        on:click=|e| e.stop_propagation()
                                                    >
                                                        {if lang.get() == Language::En {
                                                            "Challenge ↗"
                                                        } else {
                                                            "Desafio ↗"
                                                        }}
                                                    </a>
                                                }.into_any()
                                            } else {
                                                view! { <span></span> }.into_any()
                                            }}
                                        </div>
                                    </div>
                                    
                                    <p class="project-description">
                                        {article.description.clone()}
                                    </p>

                                    <div class="tech-grid">
                                        {article.tags.iter().map(|t| {
                                            view! { <span class="tech-tag">{t.clone()}</span> }
                                        }).collect::<Vec<_>>()}
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
        <div style="max-width: 48rem; padding-top: 20px; padding-bottom: 60px;">
            <button 
                class="btn-secondary" 
                style="margin-bottom: 24px; display: inline-flex; align-items: center; gap: 8px;"
                on:click=move |_| set_screen.set(Screen::Articles(back_path.clone()))
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
                {move || if lang.get() == Language::En { "Back to Articles" } else { "Voltar para Artigos" }}
            </button>

            {move || match get_article_by_id(&id, lang.get()) {
                Some(article) => view! {
                    <article class="markdown-body">
                        <header style="margin-bottom: 32px; border-bottom: 1px solid #222; padding-bottom: 24px;">
                            <h1 style="font-size: 32px; margin-bottom: 12px; font-weight: 700;">{article.title}</h1>
                            <div style="display: flex; gap: 16px; align-items: center; color: #888; font-size: 14px;">
                                <time>{article.date}</time>
                                <div class="tech-grid" style="margin-top: 0;">
                                    {article.tags.into_iter().map(|t| {
                                        view! { <span class="tech-tag" style="padding: 2px 8px; font-size: 11px;">{t}</span> }
                                    }).collect::<Vec<_>>()}
                                </div>
                            </div>
                        </header>
                        
                        <div class="article-content" inner_html=article.html_content />
                    </article>
                }.into_any(),
                None => view! {
                    <div>
                        <h2>{if lang.get() == Language::En { "Article not found" } else { "Artigo não encontrado" }}</h2>
                    </div>
                }.into_any()
            }}
        </div>
    }
}
