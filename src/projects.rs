use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Projects() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div class="max-w-3xl pt-5">
            <h1 class="text-2xl font-semibold text-white mb-10 pb-5 border-b border-[#222]">
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
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-all duration-200 group">
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
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-all duration-200 group">
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
                                "Criado para secar a quantidade de apps utilizados pelos designers, centralizar tudo que um designer precisa como desenhos e projetos pilotos sem sair para outros apps. Atualmente está como um MVP."
                            }
                        }}
                    </p>

                    <div class="tech-grid">
                        <span class="tech-tag">"Swift"</span>
                        <span class="tech-tag">"SwiftUI"</span>
                        <span class="tech-tag">"CoreData"</span>
                    </div>
                </div>

                // ── FluentQuest ───────────────────────────────────────────────
                <div class="bg-[#111] border border-[#222] rounded-2xl p-7 hover:border-[#333] transition-all duration-200 group">
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

            </div>
        </div>
    }
}
