use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Work() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 1000px; padding-top: 40px; padding-bottom: 80px;">
            <div style="display: flex; flex-direction: column; gap: 80px;">
                <div style="display: flex; gap: 48px; border-left: 2px solid var(--text-main); padding-left: 32px; min-height: 200px; flex-wrap: wrap;">
                    <div style="flex: 1;">
                        <div class="mono" style="color: #888; margin-bottom: 12px; font-weight: bold;">
                            {move || if lang.get() == Language::En { "[ ROOT / EXPERIENCE ]" } else { "[ RAIZ / EXPERIÊNCIA ]" }}
                        </div>
                        <h1 style="font-size: clamp(48px, 6vw, 72px); font-weight: 900; line-height: 0.9; margin: 0; letter-spacing: -0.04em;">
                            {move || if lang.get() == Language::En { "LOG OF TENURES" } else { "REGISTRO DE ATUAÇÕES" }}
                        </h1>
                        <div style="width: 40px; height: 1px; background-color: var(--text-muted); margin: 32px 0;"></div>
                        <div class="mono" style="color: #666; display: flex; flex-direction: column; gap: 4px; font-size: 11px;">
                            <span>{move || if lang.get() == Language::En { "// SCRIPT RUNTIME: 2 YEARS" } else { "// TEMPO EXECUÇÃO: 2 ANOS" }}</span>
                            <span>{move || if lang.get() == Language::En { "// STATUS: ACTIVE_DEVELOPER" } else { "// ESTADO: DESENVOLVEDOR_ATIVO" }}</span>
                            <span>{move || if lang.get() == Language::En { "// ARCHITECTURE: MOBILE_&_SYSTEMS" } else { "// ARQUITETURA: MOBILE_SISTEMAS" }}</span>
                        </div>
                    </div>
                </div>

                <div style="display: flex; flex-direction: column; gap: 64px; border-top: 1px solid var(--border-color); padding-top: 64px;">
                    // ── Apple Developer Academy ───────────────────────────────────
                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 16px;">
                            <div class="mono" style="color: #888; font-weight: bold; font-size: 12px;">"[ 01 ]"</div>
                            <div class="mono" style="color: var(--text-muted); font-size: 11px; letter-spacing: 0.1em;">
                                {move || if lang.get() == Language::En { "FEB 2025 - JUL 2025" } else { "FEV 2025 - JUL 2025" }}
                            </div>
                        </div>
                        
                        <div>
                            <h2 style="font-size: 28px; font-weight: 900; margin: 0; letter-spacing: -0.02em;">
                                {move || if lang.get() == Language::En { "Junior Learner — iOS Developer" } else { "Junior Learner — Desenvolvedor iOS" }}
                            </h2>
                            <div style="font-size: 16px; color: var(--text-muted); margin-top: 4px;">"Apple Developer Academy | Mackenzie"</div>
                        </div>

                        <div style="font-family: var(--font-mono); font-size: 13px; color: var(--text-main); line-height: 1.8; margin-top: 16px; max-width: 800px; display: flex; flex-direction: column; gap: 16px;">
                            <div style="display: flex; gap: 16px;">
                                <span style="color: var(--text-muted);">">>"</span>
                                <div>
                                    {move || if lang.get() == Language::En {
                                        "Translated Figma wireframes into production-ready SwiftUI screens, reducing the design-to-code handoff time within the multidisciplinary team."
                                    } else {
                                        "Traduzi wireframes do Figma em telas SwiftUI prontas para produção, reduzindo o tempo de handoff design-código dentro da equipe multidisciplinar."
                                    }}
                                </div>
                            </div>
                            <div style="display: flex; gap: 16px;">
                                <span style="color: var(--text-muted);">">>"</span>
                                <div>
                                    {move || if lang.get() == Language::En {
                                        "Architected the local persistence layer of DBoard using CoreData, supporting offline-first usage for the entire application."
                                    } else {
                                        "Arquitetei a camada de persistência local do DBoard com CoreData, suportando uso offline-first em toda a aplicação."
                                    }}
                                </div>
                            </div>
                            <div style="display: flex; gap: 16px;">
                                <span style="color: var(--text-muted);">">>"</span>
                                <div>
                                    {move || if lang.get() == Language::En {
                                        "Led the App Store submission process end-to-end, including provisioning profiles, TestFlight distribution, and review guidelines compliance."
                                    } else {
                                        "Conduzi o processo de submissão na App Store de ponta a ponta, incluindo perfis de provisionamento, distribuição via TestFlight e conformidade com as diretrizes de revisão."
                                    }}
                                </div>
                            </div>
                        </div>

                        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 24px;">
                            <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; color: #666; font-size: 10px;">"#SWIFT"</span>
                            <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; color: #666; font-size: 10px;">"#SWIFTUI"</span>
                            <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; color: #666; font-size: 10px;">"#COREDATA"</span>
                            <span class="mono" style="border: 1px solid var(--border-color); padding: 4px 8px; color: #666; font-size: 10px;">"#TESTFLIGHT"</span>
                        </div>
                    </div>
                </div>

                <div style="margin-top: 64px; border-top: 1px dashed var(--border-color); padding-top: 48px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px;">
                    <div>
                        <h3 style="font-size: 20px; font-weight: 900; margin-bottom: 8px;">
                            {move || if lang.get() == Language::En { "ACADEMIC BACKGROUND" } else { "FORMAÇÃO ACADÊMICA" }}
                        </h3>
                        <p style="color: var(--text-muted); font-size: 14px;">
                            "Universidade Presbiteriana Mackenzie — Bacharelado em Sistemas de Informação (2023 - 2027)"
                        </p>
                    </div>
                    <a href=move || if lang.get() == Language::En { "/cv-en.pdf" } else { "/cv-pt.pdf" } target="_blank" class="btn-inverse" style="background-color: transparent; border: 1px solid var(--text-main); color: var(--text-main); text-decoration: none; padding: 12px 24px; font-size: 11px;">
                        {move || if lang.get() == Language::En { "DOWNLOAD FULL CV" } else { "BAIXAR CV COMPLETO" }}
                    </a>
                </div>
            </div>
        </div>
    }
}
