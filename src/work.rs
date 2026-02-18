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

            <div class="experience-card" style="margin-left: 20px;">
                <div class="role-title">"Junior Learner (iOS Developer)"</div>
                <div class="company-name">"Apple Developer Academy | Mackenzie"</div>
                <div class="date-badge">
                    {move || {
                        if lang.get() == Language::En {
                            "Feb 2025 - Jul 2025"
                        } else {
                            "Fev 2025 - Jul 2025"
                        }
                    }}
                </div>

                <p style="color: #ccc; line-height: 1.6; font-size: 15px;">
                    {move || {
                        if lang.get() == Language::En {
                            "Involved in the complete development cycle of iOS applications, from idea conception to App Store publication. I was responsible for translating wireframes and UI/UX prototypes into functional and robust code using Swift and SwiftUI."
                        } else {
                            "Envolvido no ciclo completo de desenvolvimento de aplicações iOS, da concepção à publicação na App Store. Fui responsável por traduzir wireframes e protótipos de UI/UX em código funcional e robusto usando Swift e SwiftUI."
                        }
                    }}
                </p>

                <div style="margin-top: 20px; padding-top: 15px; border-top: 1px dashed #333;">
                    <span style="color: #666; font-size: 12px; margin-right: 10px;">
                        {move || {
                            if lang.get() == Language::En {
                                "Key Project:"
                            } else {
                                "Projeto Chave:"
                            }
                        }}
                    </span>
                    <a
                        href="https://apps.apple.com/br/app/dboard/id6747050797"
                        target="_blank"
                        style="color: #fff; text-decoration: none; font-weight: bold; border-bottom: 1px solid #666;"
                    >
                        "DBoard ↗"
                    </a>
                </div>
            </div>

        </div>
    }
}
