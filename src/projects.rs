use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Projects() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 900px; padding-top: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                {move || {
                    if lang.get() == Language::En {
                        "Selected Projects"
                    } else {
                        "Projetos Selecionados"
                    }
                }}
            </h1>

            <div style="display: grid; grid-template-columns: 1fr; gap: 30px;">

                <div style="background: #111; border: 1px solid #222; border-radius: 16px; padding: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                        <div>
                            <h2 style="margin: 0; color: #fff; font-size: 20px;">"Claritas"</h2>
                            <p style="color: #666; font-size: 14px; margin-top: 5px;">
                                "Desktop Epub Reader"
                            </p>
                        </div>
                        <a
                            href="https://github.com/matheussricardoo/Claritas"
                            target="_blank"
                            class="btn-secondary"
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

                    <p style="color: #ccc; line-height: 1.7; font-size: 15px; margin-bottom: 25px;">
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

                <div style="background: #111; border: 1px solid #222; border-radius: 16px; padding: 30px;">
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px;">
                        <div>
                            <h2 style="margin: 0; color: #fff; font-size: 20px;">"DBoard"</h2>
                            <p style="color: #666; font-size: 14px; margin-top: 5px;">
                                "iOS Productivity App"
                            </p>
                        </div>
                        <a
                            href="https://apps.apple.com/br/app/dboard/id6747050797"
                            target="_blank"
                            class="btn-secondary"
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

                    <p style="color: #ccc; line-height: 1.7; font-size: 15px; margin-bottom: 25px;">
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

            </div>
        </div>
    }
}
