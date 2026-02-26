use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Work() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 900px; padding-top: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                {move || {
                    if lang.get() == Language::En {
                        "Work Experience"
                    } else {
                        "Experiência Profissional"
                    }
                }}
            </h1>

            <div style="position: relative; padding-left: 20px;">

                // ── Apple Developer Academy ───────────────────────────────────
                <div class="experience-card" style="margin-left: 20px;">

                    // Header
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px; margin-bottom: 4px;">
                        <div class="role-title">
                            {move || {
                                if lang.get() == Language::En {
                                    "Junior Learner — iOS Developer"
                                } else {
                                    "Junior Learner — Desenvolvedor iOS"
                                }
                            }}
                        </div>
                        <span class="date-badge">
                            {move || {
                                if lang.get() == Language::En {
                                    "Feb 2025 – Jul 2025"
                                } else {
                                    "Fev 2025 – Jul 2025"
                                }
                            }}
                        </span>
                    </div>

                    <div class="company-name">"Apple Developer Academy | Mackenzie"</div>

                    // Summary
                    <p style="color: #ccc; line-height: 1.7; font-size: 14px; margin-bottom: 20px;">
                        {move || {
                            if lang.get() == Language::En {
                                "Involved in the full iOS development cycle from ideation and UI/UX prototyping to App Store publication. Worked in a multidisciplinary team applying Challenge-Based Learning (CBL) methodology."
                            } else {
                                "Envolvido no ciclo completo de desenvolvimento iOS da ideação e prototipagem de UI/UX à publicação na App Store. Trabalhei em uma equipe multidisciplinar aplicando a metodologia Challenge-Based Learning (CBL)."
                            }
                        }}
                    </p>

                    // Achievements
                    <div style="margin-bottom: 20px;">
                        <p style="color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; font-weight: 600;">
                            {move || {
                                if lang.get() == Language::En { "Highlights" } else { "Destaques" }
                            }}
                        </p>
                        <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px;">

                            <li style="display: flex; gap: 10px; align-items: flex-start;">
                                <span style="color: #444; margin-top: 2px; flex-shrink: 0;">
                                    "→"
                                </span>
                                <span style="color: #bbb; font-size: 14px; line-height: 1.6;">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Translated Figma wireframes into production-ready SwiftUI screens, reducing the design-to-code handoff time within the team."
                                        } else {
                                            "Traduzi wireframes do Figma em telas SwiftUI prontas para produção, reduzindo o tempo de handoff design-código dentro da equipe."
                                        }
                                    }}
                                </span>
                            </li>

                            <li style="display: flex; gap: 10px; align-items: flex-start;">
                                <span style="color: #444; margin-top: 2px; flex-shrink: 0;">
                                    "→"
                                </span>
                                <span style="color: #bbb; font-size: 14px; line-height: 1.6;">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Architected the local persistence layer of DBoard using CoreData, supporting offline-first usage for the entire app."
                                        } else {
                                            "Arquitetei a camada de persistência local do DBoard com CoreData, suportando uso offline-first em todo o app."
                                        }
                                    }}
                                </span>
                            </li>

                            <li style="display: flex; gap: 10px; align-items: flex-start;">
                                <span style="color: #444; margin-top: 2px; flex-shrink: 0;">
                                    "→"
                                </span>
                                <span style="color: #bbb; font-size: 14px; line-height: 1.6;">
                                    {move || {
                                        if lang.get() == Language::En {
                                            "Led the App Store submission process end-to-end provisioning profiles, TestFlight distribution, review guidelines compliance, and final release."
                                        } else {
                                            "Conduzi o processo de submissão na App Store de ponta a ponta perfis de provisionamento, distribuição via TestFlight, conformidade com as diretrizes de revisão e publicação final."
                                        }
                                    }}
                                </span>
                            </li>
                        </ul>
                    </div>

                    // Skills used
                    <div style="margin-bottom: 20px;">
                        <p style="color: #555; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; font-weight: 600;">
                            {move || {
                                if lang.get() == Language::En { "Skills" } else { "Habilidades" }
                            }}
                        </p>
                        <div class="tech-grid">
                            <span class="tech-tag">"Swift"</span>
                            <span class="tech-tag">"SwiftUI"</span>
                            <span class="tech-tag">"CoreData"</span>
                            <span class="tech-tag">"Xcode"</span>
                            <span class="tech-tag">"TestFlight"</span>
                            <span class="tech-tag">"Figma"</span>
                            <span class="tech-tag">"CBL"</span>
                        </div>
                    </div>

                    // Key project link
                    <div style="padding-top: 16px; border-top: 1px dashed #222;">
                        <span style="color: #555; font-size: 12px; margin-right: 10px;">
                            {move || {
                                if lang.get() == Language::En {
                                    "Key Project:"
                                } else {
                                    "Projeto Principal:"
                                }
                            }}
                        </span>
                        <a
                            href="https://apps.apple.com/br/app/dboard/id6747050797"
                            target="_blank"
                            style="color: #fff; text-decoration: none; font-weight: 600; font-size: 13px; border-bottom: 1px solid #444; padding-bottom: 1px; transition: border-color 0.2s;"
                        >
                            "DBoard ↗"
                        </a>
                    </div>

                </div>

            </div>
        </div>
    }
}
