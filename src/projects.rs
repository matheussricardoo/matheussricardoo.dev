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
        Project {
            name: "THINK2ALGO",
            subtitle_en: "Interactive Algorithms Learning Platform",
            subtitle_pt: "Plataforma Interativa de Aprendizado de Algoritmos",
            description_en: "An interactive learning platform to master algorithms and data structures, featuring flashcard challenges, detailed explanations, and code templates. A full Rust rewrite is planned for the future.",
            description_pt: "Uma plataforma interativa para dominar algoritmos e estruturas de dados, com desafios em flashcards, explicações detalhadas e templates de código. Uma reescrita completa em Rust está planejada para o futuro.",
            links: &[
                ("https://github.com/matheussricardoo/Think2Algo", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["TYPESCRIPT", "NEXT.JS", "REACT", "TAILWINDCSS"],
            badge_en: "REWRITE IN RUST ->",
            badge_pt: "REESCREVER EM RUST ->",
            pulse: false,
        },
        Project {
            name: "FLUENTQUEST",
            subtitle_en: "Terminal Language Learning Game",
            subtitle_pt: "Jogo de Aprendizado de Idiomas no Terminal",
            description_en: "An interactive terminal-based game that turns language learning into a dynamic and engaging experience. With challenging mini-games and a reward system, it encourages consistent vocabulary and comprehension practice.",
            description_pt: "Um jogo interativo baseado em terminal que transforma o aprendizado de idiomas em uma experiência dinâmica e envolvente. Com mini-games desafiadores e um sistema de recompensas, incentiva a prática consistente de vocabulário e compreensão.",
            links: &[
                ("https://github.com/matheussricardoo/FluentQuest", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["SWIFT", "TERMINAL", "CLI", "LANGUAGE LEARNING"],
            badge_en: "MVP",
            badge_pt: "MVP",
            pulse: false,
        },
        Project {
            name: "FOCUSFLOW",
            subtitle_en: "Pomodoro Timer & Productivity",
            subtitle_pt: "Timer Pomodoro e Produtividade",
            description_en: "Minimalist Pomodoro timer with ambient sounds (forest, cavern, rain), task management, do not disturb mode, and bilingual support. Built it to use daily, a Rust rewrite is planned.",
            description_pt: "Timer Pomodoro minimalista com sons ambiente (floresta, caverna, chuva), gerenciamento de tarefas, modo não perturbe e suporte bilíngue. Uso no dia a dia, uma reescrita em Rust está planejada.",
            links: &[
                ("https://github.com/matheussricardoo/FocusFlow", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["NEXT.JS", "REACT", "TYPESCRIPT", "TAILWINDCSS"],
            badge_en: "REWRITE IN RUST ->",
            badge_pt: "REESCREVER EM RUST ->",
            pulse: false,
        },
        Project {
            name: "POKEDEX",
            subtitle_en: "Game Boy-inspired Pokédex",
            subtitle_pt: "Pokédex inspirada no Game Boy",
            description_en: "Game Boy-inspired Pokédex with retro design, bilingual support, Pokémon comparison, and a \"Who's that Pokémon?\" quiz mode. Nostalgia with modern stack.",
            description_pt: "Pokédex inspirada no Game Boy com design retrô, suporte bilíngue, comparação de Pokémon e modo quiz \"Quem é esse Pokémon?\". Nostalgia com stack moderna.",
            links: &[
                ("https://github.com/matheussricardoo/pokedex", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["TYPESCRIPT", "NEXT.JS", "TAILWINDCSS"],
            badge_en: "GAME BOY",
            badge_pt: "GAME BOY",
            pulse: false,
        },
        Project {
            name: "LOCALLLM.SECURITY",
            subtitle_en: "Autonomous Security Testing Agent",
            subtitle_pt: "Agente Autônomo de Testes de Segurança",
            description_en: "Privacy-first DAST agent powered by local LLMs via Ollama. Orchestrates tools to detect, validate, and report vulnerabilities without sending any data to external APIs.",
            description_pt: "Agente DAST com foco em privacidade, alimentado por LLMs locais via Ollama. Orquestra ferramentas para detectar, validar e reportar vulnerabilidades sem enviar dados para APIs externas.",
            links: &[
                ("https://github.com/matheussricardoo/LocalLLMSecurityAuditor", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["PYTHON", "OLLAMA", "SECURITY", "LLM"],
            badge_en: "DAST",
            badge_pt: "DAST",
            pulse: false,
        },
        Project {
            name: "IOT.RISK.PREVENTION",
            subtitle_en: "Environmental Risk Prevention (SDG 15)",
            subtitle_pt: "Prevenção de Riscos Ambientais (ODS 15)",
            description_en: "Simulates ESP32 sensors in Wokwi sending real-time temp/humidity data to AWS. Node-RED orchestrates the pipeline, stores data in InfluxDB, and uses OpenWeather API to predict wildfire risks with WhatsApp alerts.",
            description_pt: "Simula sensores ESP32 no Wokwi enviando dados de temperatura/umidade em tempo real para AWS. Node-RED orquestra o pipeline, armazena no InfluxDB e usa a API do OpenWeather para prever riscos de incêndio com alertas no WhatsApp.",
            links: &[
                ("https://github.com/matheussricardoo/iot-risk-prevention", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["C++", "ESP32", "AWS", "NODE-RED", "INFLUXDB", "IOT"],
            badge_en: "ACADEMIC",
            badge_pt: "ACADÊMICO",
            pulse: false,
        },
        Project {
            name: "TASKS.CRUD.AWS",
            subtitle_en: "Task Management API on AWS",
            subtitle_pt: "API de Gerenciamento de Tarefas na AWS",
            description_en: "Full task management API containerized with Docker and deployed on AWS using EC2, RDS, Lambda, and API Gateway. Built for the Cloud Computing course.",
            description_pt: "API completa de gerenciamento de tarefas containerizada com Docker e implantada na AWS usando EC2, RDS, Lambda e API Gateway. Construída para a disciplina de Computação em Nuvem.",
            links: &[
                ("https://github.com/matheussricardoo/TasksCrudAWS", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["PYTHON", "FLASK", "DOCKER", "AWS"],
            badge_en: "ACADEMIC",
            badge_pt: "ACADÊMICO",
            pulse: false,
        },
        Project {
            name: "AWS.BIRTHDAY.REMINDER",
            subtitle_en: "Birthday Reminder Web App on AWS",
            subtitle_pt: "App de Lembretes de Aniversário na AWS",
            description_en: "Birthday reminder web app with Flask frontend (port 8080) and isolated backend API (port 25000) deployed on AWS with Docker containers and secure VPC configuration.",
            description_pt: "App web de lembretes de aniversário com frontend Flask (porta 8080) e API backend isolada (porta 25000) implantado na AWS com containers Docker e configuração segura de VPC.",
            links: &[
                ("https://github.com/matheussricardoo/CollegeProjectAWSBirthdayReminder", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["PYTHON", "FLASK", "DOCKER", "AWS", "VPC"],
            badge_en: "ACADEMIC",
            badge_pt: "ACADÊMICO",
            pulse: false,
        },
        Project {
            name: "AWS.CANDY.SHOP",
            subtitle_en: "Candy Shop Web App on AWS",
            subtitle_pt: "App Web de Confeitaria na AWS",
            description_en: "Flask-based candy shop with catalog, inventory, and orders management, deployed on AWS following the same architecture patterns as the Birthday Reminder project.",
            description_pt: "App Flask de confeitaria com catálogo, inventário e gerenciamento de pedidos, implantado na AWS seguindo os mesmos padrões de arquitetura do projeto Birthday Reminder.",
            links: &[
                ("https://github.com/matheussricardoo/CollegeProjectAWSCandyShop", "VIEW CODE", "VER CÓDIGO"),
            ],
            tags: &["PYTHON", "FLASK", "DOCKER", "AWS"],
            badge_en: "ACADEMIC",
            badge_pt: "ACADÊMICO",
            pulse: false,
        }
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
