use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Projects() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div class="max-w-3xl pt-5">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                {move || {
                    if lang.get() == Language::En {
                        "Selected Projects"
                    } else {
                        "Projetos Selecionados"
                    }
                }}
            </h1>

            <div class="flex flex-col gap-6">

                // ── Claritas ──────────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"Claritas"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Working"
                                        } else {
                                            "Em andamento"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">"Desktop Epub Reader"</p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/Claritas"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>

                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "I wasn't happy with the Thorium experience, so I decided to build my own to learn more about Rust and how epub readers work."
                            } else {
                                "Não estava feliz com a experiência do Thorium e decidi criar o meu próprio para aprender mais de Rust e como funcionam os leitores de epub."
                            }
                        }}
                    </p>

                    <div class="tech-grid">
                        <span class="tech-tag">"Rust"</span>
                        <span class="tech-tag">"Dioxus"</span>
                        <span class="tech-tag">"Desktop"</span>
                    </div>
                </div>

                // ── DBoard ────────────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"DBoard"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-400 border border-violet-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    "MVP"
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">"iOS Productivity App"</p>
                        </div>
                        <a
                            href="https://apps.apple.com/br/app/dboard/id6747050797"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "App Store ↗"
                                } else {
                                    "App Store ↗"
                                }
                            }}
                        </a>
                    </div>

                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Created to reduce the amount of apps used by designers. Centralizes everything a designer needs like drawings and pilot projects without getting lost in organization. Currently an MVP."
                            } else {
                                "Criado para cessar a quantidade de apps utilizados pelos designers, centralizar tudo que um designer precisa como desenhos e projetos pilotos sem sair para outros apps. Atualmente está como um MVP."
                            }
                        }}
                    </p>

                    <div class="tech-grid">
                        <span class="tech-tag">"Swift"</span>
                        <span class="tech-tag">"SwiftUI"</span>
                        <span class="tech-tag">"CoreData"</span>
                    </div>
                </div>

                // ── Think2Algo ───────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"Think2Algo"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "→ Rewrite in Rust"
                                        } else {
                                            "→ Reescrever em Rust"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Interactive Algorithm Learning Platform"
                                    } else {
                                        "Plataforma Interativa de Aprendizado de Algoritmos"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/Think2Algo"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>

                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "An interactive learning platform to master algorithms and data structures, featuring flashcard challenges, detailed explanations, and code templates. A full Rust rewrite is planned for the future."
                            } else {
                                "Uma plataforma interativa para dominar algoritmos e estruturas de dados, com desafios em flashcards, explicações detalhadas e templates de código. Uma reescrita completa em Rust está planejada para o futuro."
                            }
                        }}
                    </p>

                    <div class="tech-grid">
                        <span class="tech-tag">"TypeScript"</span>
                        <span class="tech-tag">"Next.js"</span>
                        <span class="tech-tag">"React"</span>
                        <span class="tech-tag">"TailwindCSS"</span>
                    </div>
                </div>

                // ── FluentQuest ───────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"FluentQuest"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-400 border border-violet-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    "MVP"
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Terminal Language Learning Game"
                                    } else {
                                        "Jogo de Aprendizado de Idiomas no Terminal"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/FluentQuest"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>

                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "An interactive terminal-based game that turns language learning into a dynamic and engaging experience. With challenging mini-games and a reward system, it encourages consistent vocabulary and comprehension practice."
                            } else {
                                "Um jogo interativo baseado em terminal que transforma o aprendizado de idiomas em uma experiência dinâmica e envolvente. Com mini-games desafiadores e um sistema de recompensas, incentiva a prática consistente de vocabulário e compreensão."
                            }
                        }}
                    </p>

                    <div class="tech-grid">
                        <span class="tech-tag">"Swift"</span>
                        <span class="tech-tag">"Terminal"</span>
                        <span class="tech-tag">"CLI"</span>
                        <span class="tech-tag">"Language Learning"</span>
                    </div>
                </div>

                // ── FocusFlow ─────────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"FocusFlow"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-orange-500/10 text-orange-400 border border-orange-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "→ Rewrite in Rust"
                                        } else {
                                            "→ Reescrever em Rust"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Pomodoro Timer & Productivity"
                                    } else {
                                        "Timer Pomodoro e Produtividade"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/FocusFlow"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Minimalist Pomodoro timer with ambient sounds (forest, cavern, rain), task management, do not disturb mode, and bilingual support. Built it to use daily a Rust rewrite is planned."
                            } else {
                                "Timer Pomodoro minimalista com sons ambiente (floresta, caverna, chuva), gerenciamento de tarefas, modo não perturbe e suporte bilíngue. Uso no dia a dia uma reescrita em Rust está planejada."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"Next.js"</span>
                        <span class="tech-tag">"React"</span>
                        <span class="tech-tag">"TypeScript"</span>
                        <span class="tech-tag">"TailwindCSS"</span>
                    </div>
                </div>

                // ── Pokédex ───────────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">"Pokédex"</h2>
                                <span class="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 border border-yellow-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    "Game Boy"
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Retro-inspired Pokédex"
                                    } else {
                                        "Pokédex inspirada no Game Boy"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/pokedex"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Game Boy-inspired Pokédex with retro design, bilingual support, Pokémon comparison, and a \"Who's that Pokémon?\" quiz mode. Nostalgia with modern stack."
                            } else {
                                "Pokédex inspirada no Game Boy com design retrô, suporte bilíngue, comparação de Pokémon e modo quiz \"Quem é esse Pokémon?\". Nostalgia com stack moderna."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"TypeScript"</span>
                        <span class="tech-tag">"Next.js"</span>
                        <span class="tech-tag">"TailwindCSS"</span>
                    </div>
                </div>

                // ── LocalLLMSecurityAuditor ───────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">
                                    "LocalLLM Security Auditor"
                                </h2>
                                <span class="inline-flex items-center gap-1.5 bg-red-500/10 text-red-400 border border-red-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    "DAST"
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Autonomous Security Testing Agent"
                                    } else {
                                        "Agente Autônomo de Testes de Segurança"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/LocalLLMSecurityAuditor"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Privacy-first DAST agent powered by local LLMs via Ollama. Orchestrates tools to detect, validate, and report vulnerabilities without sending any data to external APIs."
                            } else {
                                "Agente DAST com foco em privacidade, alimentado por LLMs locais via Ollama. Orquestra ferramentas para detectar, validar e reportar vulnerabilidades sem enviar dados para APIs externas."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"Python"</span>
                        <span class="tech-tag">"Ollama"</span>
                        <span class="tech-tag">"Security"</span>
                        <span class="tech-tag">"LLM"</span>
                    </div>
                </div>

                // ── iot-risk-prevention ───────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">
                                    "IoT Risk Prevention"
                                </h2>
                                <span class="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Academic"
                                        } else {
                                            "Acadêmico"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Environmental Risk Prevention (SDG 15)"
                                    } else {
                                        "Prevenção de Riscos Ambientais (ODS 15)"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/iot-risk-prevention"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Simulates ESP32 sensors in Wokwi sending real-time temp/humidity data to AWS. Node-RED orchestrates the pipeline, stores data in InfluxDB, and uses OpenWeather API to predict wildfire risks with WhatsApp alerts."
                            } else {
                                "Simula sensores ESP32 no Wokwi enviando dados de temperatura/umidade em tempo real para AWS. Node-RED orquestra o pipeline, armazena no InfluxDB e usa a API do OpenWeather para prever riscos de incêndio com alertas no WhatsApp."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"C++"</span>
                        <span class="tech-tag">"ESP32"</span>
                        <span class="tech-tag">"AWS"</span>
                        <span class="tech-tag">"Node-RED"</span>
                        <span class="tech-tag">"InfluxDB"</span>
                        <span class="tech-tag">"IoT"</span>
                    </div>
                </div>

                // ── TasksCrudAWS ──────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">
                                    "TasksCrud AWS"
                                </h2>
                                <span class="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Academic"
                                        } else {
                                            "Acadêmico"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Task Management API on AWS"
                                    } else {
                                        "API de Gerenciamento de Tarefas na AWS"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/TasksCrudAWS"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Full task management API containerized with Docker and deployed on AWS using EC2, RDS, Lambda, and API Gateway. Built for the Cloud Computing course."
                            } else {
                                "API completa de gerenciamento de tarefas containerizada com Docker e implantada na AWS usando EC2, RDS, Lambda e API Gateway. Construída para a disciplina de Computação em Nuvem."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"Python"</span>
                        <span class="tech-tag">"Flask"</span>
                        <span class="tech-tag">"Docker"</span>
                        <span class="tech-tag">"AWS"</span>
                    </div>
                </div>

                // ── CollegeProjectAWSBirthdayReminder ─────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">
                                    "Birthday Reminder AWS"
                                </h2>
                                <span class="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Academic"
                                        } else {
                                            "Acadêmico"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Birthday Reminder App on AWS"
                                    } else {
                                        "App de Lembretes de Aniversário na AWS"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/CollegeProjectAWSBirthdayReminder"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Birthday reminder web app with Flask frontend (port 8080) and isolated backend API (port 25000) deployed on AWS with Docker containers and secure VPC configuration."
                            } else {
                                "App web de lembretes de aniversário com frontend Flask (porta 8080) e API backend isolada (porta 25000) implantado na AWS com containers Docker e configuração segura de VPC."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"Python"</span>
                        <span class="tech-tag">"Flask"</span>
                        <span class="tech-tag">"Docker"</span>
                        <span class="tech-tag">"AWS"</span>
                        <span class="tech-tag">"VPC"</span>
                    </div>
                </div>

                // ── CollegeProjectAWSCandyShop ────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-colors duration-200 group">
                    <div class="flex justify-between items-start mb-5">
                        <div>
                            <div class="flex items-center gap-3 mb-1">
                                <h2 class="text-white text-xl font-semibold m-0">
                                    "Candy Shop AWS"
                                </h2>
                                <span class="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/25 text-xs font-medium px-2.5 py-1 rounded-full">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Academic"
                                        } else {
                                            "Acadêmico"
                                        }
                                    }}
                                </span>
                            </div>
                            <p class="text-[#666] text-sm mt-1">
                                {move || {
                                    if lang.get() == Language::En {
                                        "Candy Shop Web App on AWS"
                                    } else {
                                        "App Web de Confeitaria na AWS"
                                    }
                                }}
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/CollegeProjectAWSCandyShop"
                            target="_blank"
                            class="btn-secondary group-hover:border-[#555] transition-colors"
                            style="font-size: 12px; padding: 8px 16px;"
                        >
                            {move || {
                                if lang.get() == Language::En {
                                    "View Code ↗"
                                } else {
                                    "Ver Código ↗"
                                }
                            }}
                        </a>
                    </div>
                    <p class="text-[#ccc] leading-relaxed text-sm mb-6">
                        {move || {
                            if lang.get() == Language::En {
                                "Flask-based candy shop with catalog, inventory, and orders management, deployed on AWS following the same architecture patterns as the Birthday Reminder project."
                            } else {
                                "App Flask de confeitaria com catálogo, inventário e gerenciamento de pedidos, implantado na AWS seguindo os mesmos padrões de arquitetura do projeto Birthday Reminder."
                            }
                        }}
                    </p>
                    <div class="tech-grid">
                        <span class="tech-tag">"Python"</span>
                        <span class="tech-tag">"Flask"</span>
                        <span class="tech-tag">"Docker"</span>
                        <span class="tech-tag">"AWS"</span>
                    </div>
                </div>

            </div>
        </div>
    }
}
