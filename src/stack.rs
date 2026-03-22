use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Stack() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 1000px; padding-top: 40px; padding-bottom: 80px;">
            <div style="display: flex; flex-direction: column; gap: 80px;">
                
                <div style="display: flex; flex-direction: column; gap: 32px;">
                    <div>
                        <div class="mono" style="color: #888; margin-bottom: 12px; font-weight: bold;">
                            "// SYSTEM.MANIFESTO"
                        </div>
                        <h1 style="font-size: clamp(48px, 7vw, 96px); font-weight: 900; line-height: 0.9; margin: 0; letter-spacing: -0.04em; word-break: break-word;">
                            {move || if lang.get() == Language::En { "THE ECOSYSTEM" } else { "O ECOSSISTEMA" }}
                        </h1>
                    </div>
                    <div style="max-width: 500px; border-left: 2px solid var(--text-main); padding-left: 24px;">
                        <p class="mono" style="color: #666; font-size: 11px; line-height: 1.6; text-transform: none;">
                            {move || if lang.get() == Language::En {
                                "[LOG]: A curated selection of technologies driving the current architectural cycle. Focus on scalability, type-safety, and logic-first design."
                            } else {
                                "[LOG]: Uma seleção de tecnologias curada que impulsiona o atual ciclo de arquitetura. Foco em escalabilidade, segurança de tipos e design guiado pela lógica."
                            }}
                        </p>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 48px;">
                    <div>
                        <div style="display: flex; align-items: baseline; gap: 16px; margin-bottom: 32px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;">
                            <span style="font-weight: 900; font-size: 20px;">"01."</span>
                            <h2 style="font-size: 20px; font-weight: 900; margin: 0;">
                                {move || if lang.get() == Language::En { "LANGUAGES" } else { "LINGUAGENS" }}
                            </h2>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                            
                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; flex-direction: column;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                                    <div style="font-weight: 900; font-size: 24px;">"Rust & Go"</div>
                                </div>
                                <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">"Systems & Performance"</h3>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
                                    {move || if lang.get() == Language::En { "Core selection for high-performance and safe backend microservices." } else { "Seleção principal para microsserviços backend seguros e de alta performance." }}
                                </p>
                            </div>

                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; flex-direction: column;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                                    <div style="font-weight: 900; font-size: 24px;">"Swift"</div>
                                </div>
                                <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">"Apple Ecosystem"</h3>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
                                    {move || if lang.get() == Language::En { "Native, protocol-oriented development for fluid iOS applications." } else { "Desenvolvimento nativo orientado a protocolos para fluidas aplicações iOS." }}
                                </p>
                            </div>

                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; flex-direction: column;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                                    <div style="font-weight: 900; font-size: 24px;">"Java & Python"</div>
                                </div>
                                <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">"Enterprise & AI"</h3>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
                                    {move || if lang.get() == Language::En { "Robust enterprise solutions and rapid prototyping with leading AI libraries." } else { "Soluções corporativas robustas e prototipagem rápida." }}
                                </p>
                            </div>

                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; flex-direction: column;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 24px;">
                                    <div style="font-weight: 900; font-size: 24px;">"SQL & Web"</div>
                                </div>
                                <h3 style="font-size: 16px; font-weight: 800; margin-bottom: 12px;">"Data & Interfaces"</h3>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
                                    {move || if lang.get() == Language::En { "Relational data modeling and structuring pure HTML/CSS layouts." } else { "Modelagem de dados relacionais e estruturação de interfaces." }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style="display: flex; align-items: baseline; gap: 16px; margin-bottom: 32px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;">
                            <span style="font-weight: 900; font-size: 20px;">"02."</span>
                            <h2 style="font-size: 20px; font-weight: 900; margin: 0;">
                                "FRAMEWORKS"
                            </h2>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                            
                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color);">
                                <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 12px;">"Spring Boot & SwiftUI"</h3>
                                <div class="mono" style="color: #aaa; margin-bottom: 16px; font-size: 10px; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px;">"// PLATFORM DEPENDENCIES"</div>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 24px;">
                                    {move || if lang.get() == Language::En { "From robust dependency injection backends to declarative UI states." } else { "De backends robustos até interfaces declarativas e modernas." }}
                                </p>
                            </div>

                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color);">
                                <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 12px;">"Leptos & Dioxus"</h3>
                                <div class="mono" style="color: #aaa; margin-bottom: 16px; font-size: 10px; border-bottom: 1px dashed var(--border-color); padding-bottom: 8px;">"// RUST_WEB"</div>
                                <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                                    {move || if lang.get() == Language::En { "Next-generation frontend tooling powered by Rust and WebAssembly." } else { "Ferramentas frontend de nova geração desenvolvidas em Rust e WebAssembly." }}
                                </p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div style="display: flex; align-items: baseline; gap: 16px; margin-bottom: 32px; border-bottom: 1px solid var(--border-color); padding-bottom: 16px;">
                            <span style="font-weight: 900; font-size: 20px;">"03."</span>
                            <h2 style="font-size: 20px; font-weight: 900; margin: 0;">
                                {move || if lang.get() == Language::En { "CLOUD & TOOLS" } else { "NUVEM E FERRAMENTAS" }}
                            </h2>
                        </div>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
                            
                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; gap: 24px; align-items: flex-start;">
                                <div>
                                    <h3 style="font-size: 16px; font-weight: 900; margin: 0 0 16px 0;">"AWS & GCP"</h3>
                                    <p style="font-size: 12px; color: #666; margin: 0 0 16px 0; line-height: 1.5;">
                                        {move || if lang.get() == Language::En { "Cloud orchestrations, certified fundamentals, and highly available architectures." } else { "Orquestrações em nuvem, certificações e arquiteturas de alta disponibilidade." }}
                                    </p>
                                    <div class="mono" style="font-size: 10px; color: #888;">"[INFRASTRUCTURE]"</div>
                                </div>
                            </div>

                            <div style="border: 1px solid var(--border-color); padding: 32px; background-color: var(--bg-color); display: flex; gap: 24px; align-items: flex-start;">
                                <div>
                                    <h3 style="font-size: 16px; font-weight: 900; margin: 0 0 16px 0;">"Git, Figma, Agile & BI"</h3>
                                    <p style="font-size: 12px; color: #666; margin: 0 0 16px 0; line-height: 1.5;">
                                        {move || if lang.get() == Language::En { "Version control, UI design delivery, and metrics-driven development cycles." } else { "Controle de versão, design de UI, e ciclos de desenvolvimento orientados a dados." }}
                                    </p>
                                    <div class="mono" style="font-size: 10px; color: #888;">"[OPERATIONS]"</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}
