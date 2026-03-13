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
    url: &'static str,
    link_label_en: &'static str,
    link_label_pt: &'static str,
    tags: &'static [&'static str],
    badge_en: &'static str,
    badge_pt: &'static str,
    badge_color: &'static str,
    pulse: bool,
}

fn projects() -> Vec<Project> {
    vec![
        Project {
            name: "Claritas",
            subtitle_en: "Desktop Epub Reader",
            subtitle_pt: "Leitor de Epub para Desktop",
            description_en: "I wasn't happy with the Thorium experience, so I decided to build my own to learn more about Rust and how epub readers work.",
            description_pt: "Não estava feliz com a experiência do Thorium e decidi criar o meu próprio para aprender mais de Rust e como funcionam os leitores de epub.",
            url: "https://github.com/matheussricardoo/Claritas",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Rust", "Dioxus", "Desktop"],
            badge_en: "Working",
            badge_pt: "Em andamento",
            badge_color: "amber",
            pulse: true,
        },
        Project {
            name: "git-sage",
            subtitle_en: "AI Conventional Commit Generator",
            subtitle_pt: "Gerador de Commits Convencionais com IA",
            description_en: "I was always wondering what the best way to write a commit message was so people would follow the Conventional Commits convention. For this repetitive task I built a CLI that uses a local open-source model via Ollama to read the staged diff and craft the commit message for you.",
            description_pt: "Sempre pensei na melhor maneira de escrever mensagens de commit para que as pessoas seguissem a convenção do Conventional Commits. Para essa tarefa repetitiva, criei uma CLI que usa um modelo open source rodando localmente via Ollama, que lê o diff do projeto e constrói a mensagem do commit automaticamente.",
            url: "https://github.com/matheussricardoo/git-sage",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Rust", "Ollama", "LLM", "CLI", "Git"],
            badge_en: "CLI",
            badge_pt: "CLI",
            badge_color: "green",
            pulse: false,
        },
        Project {
            name: "DBoard",
            subtitle_en: "iOS Productivity App",
            subtitle_pt: "App de Produtividade iOS",
            description_en: "Created to reduce the amount of apps used by designers. Centralizes everything a designer needs like drawings and pilot projects without getting lost in organization. Currently an MVP.",
            description_pt: "Criado para cessar a quantidade de apps utilizados pelos designers, centralizar tudo que um designer precisa como desenhos e projetos pilotos sem sair para outros apps. Atualmente está como um MVP.",
            url: "https://apps.apple.com/br/app/dboard/id6747050797",
            link_label_en: "App Store ↗",
            link_label_pt: "App Store ↗",
            tags: &["Swift", "SwiftUI", "CoreData"],
            badge_en: "MVP",
            badge_pt: "MVP",
            badge_color: "violet",
            pulse: false,
        },
        Project {
            name: "Think2Algo",
            subtitle_en: "Interactive Algorithm Learning Platform",
            subtitle_pt: "Plataforma Interativa de Aprendizado de Algoritmos",
            description_en: "An interactive learning platform to master algorithms and data structures, featuring flashcard challenges, detailed explanations, and code templates. A full Rust rewrite is planned for the future.",
            description_pt: "Uma plataforma interativa para dominar algoritmos e estruturas de dados, com desafios em flashcards, explicações detalhadas e templates de código. Uma reescrita completa em Rust está planejada para o futuro.",
            url: "https://github.com/matheussricardoo/Think2Algo",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["TypeScript", "Next.js", "React", "TailwindCSS"],
            badge_en: "→ Rewrite in Rust",
            badge_pt: "→ Reescrever em Rust",
            badge_color: "orange",
            pulse: false,
        },
        Project {
            name: "FluentQuest",
            subtitle_en: "Terminal Language Learning Game",
            subtitle_pt: "Jogo de Aprendizado de Idiomas no Terminal",
            description_en: "An interactive terminal-based game that turns language learning into a dynamic and engaging experience. With challenging mini-games and a reward system, it encourages consistent vocabulary and comprehension practice.",
            description_pt: "Um jogo interativo baseado em terminal que transforma o aprendizado de idiomas em uma experiência dinâmica e envolvente. Com mini-games desafiadores e um sistema de recompensas, incentiva a prática consistente de vocabulário e compreensão.",
            url: "https://github.com/matheussricardoo/FluentQuest",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Swift", "Terminal", "CLI", "Language Learning"],
            badge_en: "MVP",
            badge_pt: "MVP",
            badge_color: "violet",
            pulse: false,
        },
        Project {
            name: "FocusFlow",
            subtitle_en: "Pomodoro Timer & Productivity",
            subtitle_pt: "Timer Pomodoro e Produtividade",
            description_en: "Minimalist Pomodoro timer with ambient sounds (forest, cavern, rain), task management, do not disturb mode, and bilingual support. Built it to use daily — a Rust rewrite is planned.",
            description_pt: "Timer Pomodoro minimalista com sons ambiente (floresta, caverna, chuva), gerenciamento de tarefas, modo não perturbe e suporte bilíngue. Uso no dia a dia — uma reescrita em Rust está planejada.",
            url: "https://github.com/matheussricardoo/FocusFlow",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Next.js", "React", "TypeScript", "TailwindCSS"],
            badge_en: "→ Rewrite in Rust",
            badge_pt: "→ Reescrever em Rust",
            badge_color: "orange",
            pulse: false,
        },
        Project {
            name: "Pokédex",
            subtitle_en: "Retro-inspired Pokédex",
            subtitle_pt: "Pokédex inspirada no Game Boy",
            description_en: "Game Boy-inspired Pokédex with retro design, bilingual support, Pokémon comparison, and a \"Who's that Pokémon?\" quiz mode. Nostalgia with modern stack.",
            description_pt: "Pokédex inspirada no Game Boy com design retrô, suporte bilíngue, comparação de Pokémon e modo quiz \"Quem é esse Pokémon?\". Nostalgia com stack moderna.",
            url: "https://github.com/matheussricardoo/pokedex",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["TypeScript", "Next.js", "TailwindCSS"],
            badge_en: "Game Boy",
            badge_pt: "Game Boy",
            badge_color: "yellow",
            pulse: false,
        },
        Project {
            name: "LocalLLM Security Auditor",
            subtitle_en: "Autonomous Security Testing Agent",
            subtitle_pt: "Agente Autônomo de Testes de Segurança",
            description_en: "Privacy-first DAST agent powered by local LLMs via Ollama. Orchestrates tools to detect, validate, and report vulnerabilities without sending any data to external APIs.",
            description_pt: "Agente DAST com foco em privacidade, alimentado por LLMs locais via Ollama. Orquestra ferramentas para detectar, validar e reportar vulnerabilidades sem enviar dados para APIs externas.",
            url: "https://github.com/matheussricardoo/LocalLLMSecurityAuditor",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Python", "Ollama", "Security", "LLM"],
            badge_en: "DAST",
            badge_pt: "DAST",
            badge_color: "red",
            pulse: false,
        },
        Project {
            name: "IoT Risk Prevention",
            subtitle_en: "Environmental Risk Prevention (SDG 15)",
            subtitle_pt: "Prevenção de Riscos Ambientais (ODS 15)",
            description_en: "Simulates ESP32 sensors in Wokwi sending real-time temp/humidity data to AWS. Node-RED orchestrates the pipeline, stores data in InfluxDB, and uses OpenWeather API to predict wildfire risks with WhatsApp alerts.",
            description_pt: "Simula sensores ESP32 no Wokwi enviando dados de temperatura/umidade em tempo real para AWS. Node-RED orquestra o pipeline, armazena no InfluxDB e usa a API do OpenWeather para prever riscos de incêndio com alertas no WhatsApp.",
            url: "https://github.com/matheussricardoo/iot-risk-prevention",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["C++", "ESP32", "AWS", "Node-RED", "InfluxDB", "IoT"],
            badge_en: "Academic",
            badge_pt: "Acadêmico",
            badge_color: "blue",
            pulse: false,
        },
        Project {
            name: "TasksCrud AWS",
            subtitle_en: "Task Management API on AWS",
            subtitle_pt: "API de Gerenciamento de Tarefas na AWS",
            description_en: "Full task management API containerized with Docker and deployed on AWS using EC2, RDS, Lambda, and API Gateway. Built for the Cloud Computing course.",
            description_pt: "API completa de gerenciamento de tarefas containerizada com Docker e implantada na AWS usando EC2, RDS, Lambda e API Gateway. Construída para a disciplina de Computação em Nuvem.",
            url: "https://github.com/matheussricardoo/TasksCrudAWS",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Python", "Flask", "Docker", "AWS"],
            badge_en: "Academic",
            badge_pt: "Acadêmico",
            badge_color: "blue",
            pulse: false,
        },
        Project {
            name: "Birthday Reminder AWS",
            subtitle_en: "Birthday Reminder App on AWS",
            subtitle_pt: "App de Lembretes de Aniversário na AWS",
            description_en: "Birthday reminder web app with Flask frontend (port 8080) and isolated backend API (port 25000) deployed on AWS with Docker containers and secure VPC configuration.",
            description_pt: "App web de lembretes de aniversário com frontend Flask (porta 8080) e API backend isolada (porta 25000) implantado na AWS com containers Docker e configuração segura de VPC.",
            url: "https://github.com/matheussricardoo/CollegeProjectAWSBirthdayReminder",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Python", "Flask", "Docker", "AWS", "VPC"],
            badge_en: "Academic",
            badge_pt: "Acadêmico",
            badge_color: "blue",
            pulse: false,
        },
        Project {
            name: "Candy Shop AWS",
            subtitle_en: "Candy Shop Web App on AWS",
            subtitle_pt: "App Web de Confeitaria na AWS",
            description_en: "Flask-based candy shop with catalog, inventory, and orders management, deployed on AWS following the same architecture patterns as the Birthday Reminder project.",
            description_pt: "App Flask de confeitaria com catálogo, inventário e gerenciamento de pedidos, implantado na AWS seguindo os mesmos padrões de arquitetura do projeto Birthday Reminder.",
            url: "https://github.com/matheussricardoo/CollegeProjectAWSCandyShop",
            link_label_en: "View Code ↗",
            link_label_pt: "Ver Código ↗",
            tags: &["Python", "Flask", "Docker", "AWS"],
            badge_en: "Academic",
            badge_pt: "Acadêmico",
            badge_color: "blue",
            pulse: false,
        },
    ]
}

fn badge_styles(color: &str) -> (&'static str, &'static str) {
    match color {
        "amber" => ("badge badge-amber", "badge badge-amber"),
        "violet" => ("badge badge-violet", "badge badge-violet"),
        "orange" => ("badge badge-orange", "badge badge-orange"),
        "yellow" => ("badge badge-yellow", "badge badge-yellow"),
        "red" => ("badge badge-red", "badge badge-red"),
        "blue" => ("badge badge-blue", "badge badge-blue"),
        "green" => ("badge badge-green", "badge badge-green"),
        _ => ("badge badge-default", "badge badge-default"),
    }
}

pub fn project_count() -> usize {
    projects().len()
}

#[component]
pub fn Projects() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");
    let all_projects = projects();

    view! {
        <div style="max-width: 48rem; padding-top: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                {move || {
                    if lang.get() == Language::En {
                        "Selected Projects"
                    } else {
                        "Projetos Selecionados"
                    }
                }}
            </h1>

            <div style="display: flex; flex-direction: column; gap: 24px;">
                {all_projects
                    .into_iter()
                    .map(|p| {
                        let (badge_class, _) = badge_styles(p.badge_color);
                        view! {
                            <div class="project-card">
                                <div class="project-card-header">
                                    <div>
                                        <div class="project-title-row">
                                            <h2 class="project-name">{p.name}</h2>
                                            <span class=badge_class>
                                                {if p.pulse {
                                                    view! { <span class="badge-pulse"></span> }.into_any()
                                                } else {
                                                    view! { <span></span> }.into_any()
                                                }}
                                                {move || {
                                                    if lang.get() == Language::En {
                                                        p.badge_en
                                                    } else {
                                                        p.badge_pt
                                                    }
                                                }}
                                            </span>
                                        </div>
                                        <p class="project-subtitle">
                                            {move || {
                                                if lang.get() == Language::En {
                                                    p.subtitle_en
                                                } else {
                                                    p.subtitle_pt
                                                }
                                            }}
                                        </p>
                                    </div>
                                    {if !p.url.is_empty() {
                                        view! {
                                            <a
                                                href=p.url
                                                target="_blank"
                                                class="btn-secondary"
                                                style="font-size: 12px; padding: 8px 16px; white-space: nowrap;"
                                            >
                                                {move || {
                                                    if lang.get() == Language::En {
                                                        p.link_label_en
                                                    } else {
                                                        p.link_label_pt
                                                    }
                                                }}
                                            </a>
                                        }.into_any()
                                    } else {
                                        view! { <span></span> }.into_any()
                                    }}
                                </div>

                                <p class="project-description">
                                    {move || {
                                        if lang.get() == Language::En {
                                            p.description_en
                                        } else {
                                            p.description_pt
                                        }
                                    }}
                                </p>

                                <div class="tech-grid">
                                    {p
                                        .tags
                                        .iter()
                                        .map(|t| view! { <span class="tech-tag">{*t}</span> })
                                        .collect::<Vec<_>>()}
                                </div>
                            </div>
                        }
                    })
                    .collect::<Vec<_>>()}
            </div>
        </div>
    }
}
