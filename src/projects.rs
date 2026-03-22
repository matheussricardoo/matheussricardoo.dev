use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[derive(Clone)]
struct Project {
    name: &'static str,
    subtitle_en: &'static str,
    subtitle_pt: &'static str,
    description_en: &'static str,
    description_pt: &'static str,
    links: &'static [(&'static str, &'static str, &'static str)],
    tags: &'static [&'static str],
    badge_en: &'static str,
    badge_pt: &'static str,
    pulse: bool,
}

fn projects() -> Vec<Project> {
    vec![
        Project {
            name: "CLARITAS.READER",
            subtitle_en: "Desktop Epub Reader",
            subtitle_pt: "Leitor de Epub para Desktop",
            description_en: "I wasn't happy with the Thorium experience, so I decided to build my own to learn more about Rust and how epub readers work.",
            description_pt: "Não estava feliz com a experiência do Thorium e decidi criar o meu próprio para aprender mais de Rust e como funcionam os leitores de epub.",
            links: &[
                ("https://github.com/matheussricardoo/Claritas", "VIEW CODE", "VER CÓDIGO"),
                ("https://claritas-rs.github.io/claritas-website/", "WEBSITE", "SITE"),
            ],
            tags: &["RUST", "DIOXUS", "DESKTOP"],
            badge_en: "DESKTOP",
            badge_pt: "DESKTOP",
            pulse: false,
        },
        Project {
            name: "GIT.SAGE",
            subtitle_en: "AI Conventional Commit Generator",
            subtitle_pt: "Gerador de Commits Convencionais com IA",
            description_en: "I was always wondering what the best way to write a commit message was so people would follow the Conventional Commits convention. For this repetitive task I built a CLI that uses a local open-source model via Ollama to read the staged diff and craft the commit message for you.",
            description_pt: "Sempre pensei na melhor maneira de escrever mensagens de commit para que as pessoas seguissem a convenção do Conventional Commits. Para essa tarefa repetitiva, criei uma CLI que usa um modelo open source rodando localmente via Ollama, que lê o diff do projeto e constrói a mensagem do commit automaticamente.",
            links: &[
                ("https://github.com/matheussricardoo/git-sage", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["RUST", "OLLAMA", "LLM", "CLI"],
            badge_en: "CLI",
            badge_pt: "CLI",
            pulse: false,
        },
        Project {
            name: "DBOARD.IOS",
            subtitle_en: "iOS Productivity App",
            subtitle_pt: "App de Produtividade iOS",
            description_en: "Created to reduce the amount of apps used by designers. Centralizes everything a designer needs like drawings and pilot projects without getting lost in organization. Currently an MVP.",
            description_pt: "Criado para cessar a quantidade de apps utilizados pelos designers, centralizar tudo que um designer precisa como desenhos e projetos pilotos sem sair para outros apps. Atualmente está como um MVP.",
            links: &[
                ("https://apps.apple.com/br/app/dboard/id6747050797", "APP STORE", "APP STORE"),
            ],
            tags: &["SWIFT", "SWIFTUI", "COREDATA"],
            badge_en: "MVP",
            badge_pt: "MVP",
            pulse: true,
        },
    ]
}

pub fn project_count() -> usize {
    projects().len()
}

#[component]
pub fn Projects() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");
    let all_projects = projects();

    view! {
        <div style="max-width: 800px; padding-top: 40px; padding-bottom: 80px;">
            <div style="display: flex; flex-direction: column; gap: 32px; margin-bottom: 80px;">
                <div style="display: flex; align-items: flex-start;">
                    <div style="width: 4px; height: 100px; background-color: var(--text-main); margin-right: 24px;"></div>
                    <div>
                        <div class="mono" style="color: #888; margin-bottom: 12px;">"[ INDEX / 001 / PORTFOLIO ]"</div>
                        <h1 style="font-size: clamp(40px, 6vw, 64px); font-weight: 900; line-height: 0.9; margin: 0; letter-spacing: -0.04em;">
                            {move || if lang.get() == Language::En { "SELECTED REPOS" } else { "REPOSITÓRIOS SELECIONADOS" }}
                        </h1>
                    </div>
                </div>
                <div style="max-width: 500px; border-left: 1px solid var(--border-color); padding-left: 24px;">
                    <p style="font-family: Georgia, serif; font-style: italic; color: #666; font-size: 14px; line-height: 1.5; margin: 0;">
                        {move || if lang.get() == Language::En {
                            "Architecting high-performance digital ecosystems with surgical precision. Each entry represents a unique challenge in logic and scalability."
                        } else {
                            "Arquitetando ecossistemas digitais de alta performance com precisão cirúrgica. Cada entrada representa um desafio único em lógica e escalabilidade."
                        }}
                    </p>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 80px;">
                {all_projects
                    .into_iter()
                    .enumerate()
                    .map(|(idx, p)| {
                        let num = format!("{:02}", idx + 1);
                        view! {
                            <div style="border-top: 1px solid var(--border-color); padding-top: 40px;">
                                
                                <div style="display: flex; align-items: baseline; gap: 16px; margin-bottom: 16px; flex-wrap: wrap;">
                                    <span class="mono" style="color: #888; font-size: 14px;">"["{num}"]"</span>
                                    <h2 style="font-size: 28px; font-weight: 900; margin: 0; letter-spacing: -0.02em; word-break: break-word;">{p.name}</h2>
                                    {if !p.badge_en.is_empty() {
                                        view! {
                                            <span class="mono" style="background-color: var(--text-main); color: var(--bg-color); padding: 2px 6px; font-size: 10px; border-radius: 2px;">
                                                {move || {
                                                    if lang.get() == Language::En {
                                                        p.badge_en
                                                    } else {
                                                        p.badge_pt
                                                    }
                                                }}
                                            </span>
                                        }.into_any()
                                    } else {
                                        view! { <span></span> }.into_any()
                                    }}
                                </div>
                                
                                <p style="font-size: 15px; color: var(--text-muted); line-height: 1.6; max-width: 600px; margin-bottom: 24px;">
                                    {move || {
                                        if lang.get() == Language::En {
                                            p.description_en
                                        } else {
                                            p.description_pt
                                        }
                                    }}
                                </p>
                                
                                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; border-top: 1px dashed var(--border-color); border-bottom: 1px dashed var(--border-color); padding: 12px 0;">
                                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                        {p.tags.iter().map(|&t| view! {
                                            <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; color: #666; font-size: 10px;">
                                                "> "{t}
                                            </span>
                                        }).collect::<Vec<_>>()}
                                    </div>
                                    
                                    <div style="display: flex; gap: 16px; flex-wrap: wrap;">
                                        {p.links.iter().map(|&(url, label_en, label_pt)| {
                                            if !url.is_empty() {
                                                view! {
                                                    <a href=url target="_blank" class="mono" style="color: var(--text-main); text-decoration: none; font-weight: bold; font-size: 11px;">
                                                        "-> " {move || if lang.get() == Language::En { label_en } else { label_pt }}
                                                    </a>
                                                }.into_any()
                                            } else {
                                                view! { <span></span> }.into_any()
                                            }
                                        }).collect::<Vec<_>>()}
                                    </div>
                                </div>
                            </div>
                        }
                    })
                    .collect::<Vec<_>>()}
            </div>
        </div>
    }
}
