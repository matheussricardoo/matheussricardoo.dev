use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Home() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 1000px; padding-top: 80px; padding-bottom: 80px;">
            <div style="display: flex; gap: 48px; align-items: flex-start; justify-content: space-between; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 300px;">
                    <div class="mono" style="color: #888; margin-bottom: 24px;">
                        {move || if lang.get() == Language::En { "// INITIALIZING.PORTFOLIO...V1.0.0" } else { "// INICIALIZANDO.PORTFÓLIO...V1.0.0" }}
                    </div>
                    <h1 style="font-size: clamp(48px, 8vw, 84px); font-weight: 900; line-height: 0.9; margin-bottom: 24px; letter-spacing: -0.04em;">
                        {move || if lang.get() == Language::En { "HELLO, I'M MATHEUS./DEV" } else { "OLÁ, EU SOU MATHEUS./DEV" }}
                    </h1>
                    
                    <p style="font-size: 18px; color: var(--text-main); line-height: 1.6; max-width: 500px; margin-bottom: 40px;">
                        {move || if lang.get() == Language::En {
                            view! {
                                "Backend and iOS Developer building resilient systems and fluid experiences. "<span class="mono" style="background:#e5e5e5;padding:2px 6px;">"[ DEV ]"</span>" Focused on high-performance infrastructure, clean architecture, and solving complex problems at the intersection of backend engineering and native iOS tooling."
                            }.into_any()
                        } else {
                            view! {
                                "Desenvolvedor Backend e iOS construindo sistemas resilientes e experiências fluidas. "<span class="mono" style="background:#e5e5e5;padding:2px 6px;">"[ DEV ]"</span>" Focado em infraestrutura de alta performance, arquitetura limpa e resolução de problemas complexos na interseção entre engenharia de backend e ferramentas nativas do iOS."
                            }.into_any()
                        }}
                    </p>
                    
                    <div style="display: flex; gap: 16px;">
                        <a href="/projects" class="btn-inverse" style="text-decoration:none;">
                            {move || if lang.get() == Language::En { "VIEW WORK" } else { "VER PROJETOS" }}
                        </a>
                        <a href=move || if lang.get() == Language::En { "/cv-en.pdf" } else { "/cv-pt.pdf" } target="_blank" class="btn-primary" style="text-decoration: none;">
                            {move || if lang.get() == Language::En { "RESUME . PDF" } else { "CURRÍCULO . PDF" }}
                        </a>
                    </div>
                </div>
                
                <div style="width: 100%; max-width: 400px; height: 480px; background-color: #eee; border: 1px solid var(--border-color); display: flex; align-items: flex-end; justify-content: flex-end; padding: 16px; box-sizing: border-box; background-image: url('assets/Profile.jpeg'); background-size: cover; background-position: center; flex-shrink: 0;">
                </div>
            </div>
            
            <div style="margin-top: 120px;">
                <h3 style="font-size: 24px; font-weight: 900; letter-spacing: -0.02em; margin-bottom: 8px;">
                    {move || if lang.get() == Language::En { "TECHNICAL EXPERTISE" } else { "EXPERIÊNCIA TÉCNICA" }}
                </h3>
                <div style="height: 1px; width: 40px; background-color: var(--text-main); margin-bottom: 24px;"></div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 48px;">
                    <div>
                        <div class="mono" style="color: #888; margin-bottom: 12px;">"01"</div>
                        <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 12px;">
                            {move || if lang.get() == Language::En { "LANGUAGES" } else { "LINGUAGENS" }}
                        </h4>
                        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                            "Rust, Go, Java, Python, Swift, SQL, HTML/CSS"
                        </p>
                    </div>
                    <div>
                        <div class="mono" style="color: #888; margin-bottom: 12px;">"02"</div>
                        <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 12px;">
                            "FRAMEWORKS"
                        </h4>
                        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                            "Spring Boot, SwiftUI, Leptos, Dioxus"
                        </p>
                    </div>
                    <div>
                        <div class="mono" style="color: #888; margin-bottom: 12px;">"03"</div>
                        <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 12px;">
                            {move || if lang.get() == Language::En { "CLOUD & TOOLS" } else { "NUVEM E FERRAMENTAS" }}
                        </h4>
                        <p style="font-size: 14px; color: var(--text-muted); line-height: 1.6;">
                            "AWS, GCP, Git, Figma, Power BI, Agile"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    }
}
