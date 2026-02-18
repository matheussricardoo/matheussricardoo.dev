use crate::{Language, Screen};
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Sidebar(
    set_screen: WriteSignal<Screen>,
    current_screen: ReadSignal<Screen>,
) -> impl IntoView {
    let active_class = "nav-link active";
    let inactive_class = "nav-link";

    let set_lang = use_context::<WriteSignal<Language>>().expect("Set Lang context missing");
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <aside class="sidebar">
            <div class="profile">
                <div class="profile-info">
                    <h2 style="font-size: 18px;">"Matheus Ricardo"</h2>
                    <p>"Software Engineer"</p>
                </div>
            </div>

            <nav>
                <a
                    href="#"
                    class=move || if current_screen.get() == Screen::Home { active_class } else { inactive_class }
                    on:click=move |_| set_screen.set(Screen::Home)
                >
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    {move || if lang.get() == Language::En { "Home" } else { "Início" }}
                </a>

                <a
                    href="#"
                    class=move || if current_screen.get() == Screen::Projects { active_class } else { inactive_class }
                    on:click=move |_| set_screen.set(Screen::Projects)
                >
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    {move || if lang.get() == Language::En { "Projects" } else { "Projetos" }}
                </a>

                <a
                    href="#"
                    class=move || if current_screen.get() == Screen::Work { active_class } else { inactive_class }
                    on:click=move |_| set_screen.set(Screen::Work)
                >
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    {move || if lang.get() == Language::En { "Experience" } else { "Experiência" }}
                </a>

                <a
                    href="#"
                    class=move || if current_screen.get() == Screen::Stack { active_class } else { inactive_class }
                    on:click=move |_| set_screen.set(Screen::Stack)
                >
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect width="16" height="16" x="4" y="4" rx="2"></rect>
                        <rect width="6" height="6" x="9" y="9" rx="1"></rect>
                        <path d="M15 2v2"></path><path d="M15 20v2"></path>
                        <path d="M2 15h2"></path><path d="M2 9h2"></path>
                        <path d="M20 15h2"></path><path d="M20 9h2"></path>
                        <path d="M9 2v2"></path><path d="M9 20v2"></path>
                    </svg>
                    "Stack"
                </a>
            </nav>

            <div style="border-top: 1px solid #222; padding-top: 20px;">
                <div style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <button
                        on:click=move |_| set_lang.set(Language::En)
                        style=move || if lang.get() == Language::En { "color: #fff; font-weight: bold; background: none; border: none; cursor: pointer;" } else { "color: #444; background: none; border: none; cursor: pointer;" }
                    >
                        "EN"
                    </button>
                    <span style="color: #444;">"|"</span>
                    <button
                        on:click=move |_| set_lang.set(Language::Pt)
                        style=move || if lang.get() == Language::Pt { "color: #fff; font-weight: bold; background: none; border: none; cursor: pointer;" } else { "color: #444; background: none; border: none; cursor: pointer;" }
                    >
                        "PT-BR"
                    </button>
                </div>

                <p style="font-size: 11px; color: #444; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">
                    {move || if lang.get() == Language::En { "Connect" } else { "Contato" }}
                </p>

                <a href="https://github.com/matheussricardoo" target="_blank" class="nav-link">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    "GitHub"
                </a>

                <a href="https://www.linkedin.com/in/matheus-ricardo-426452266/" target="_blank" class="nav-link">
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    "LinkedIn"
                </a>
            </div>
        </aside>
    }
}
