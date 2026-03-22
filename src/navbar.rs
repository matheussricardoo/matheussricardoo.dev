use leptos::prelude::*;
use crate::{Screen, Language};

#[component]
pub fn Navbar(
    set_screen: WriteSignal<Screen>,
    current_screen: ReadSignal<Screen>,
) -> impl IntoView {
    let lang = expect_context::<ReadSignal<Language>>();
    let set_lang = expect_context::<WriteSignal<Language>>();

    view! {
        <nav class="navbar">
            <div class="nav-brand" on:click=move |_| set_screen.set(Screen::Home)>
                "MATHEUS./DEV"
            </div>
            
            <div class="nav-links">
                <a class=move || if matches!(current_screen.get(), Screen::Home) { "nav-link active" } else { "nav-link" }
                   on:click=move |_| set_screen.set(Screen::Home)>
                    {move || if lang.get() == Language::En { "Home" } else { "Início" }}
                </a>
                <a class=move || if matches!(current_screen.get(), Screen::Projects) { "nav-link active" } else { "nav-link" }
                   on:click=move |_| set_screen.set(Screen::Projects)>
                    {move || if lang.get() == Language::En { "Projects" } else { "Projetos" }}
                </a>
                <a class=move || if matches!(current_screen.get(), Screen::Work) { "nav-link active" } else { "nav-link" }
                   on:click=move |_| set_screen.set(Screen::Work)>
                    {move || if lang.get() == Language::En { "Experience" } else { "Trajetória" }}
                </a>
                <a class=move || if matches!(current_screen.get(), Screen::Stack) { "nav-link active" } else { "nav-link" }
                   on:click=move |_| set_screen.set(Screen::Stack)>
                    {move || if lang.get() == Language::En { "Stack" } else { "Stack" }}
                </a>
                <a class=move || if matches!(current_screen.get(), Screen::Articles(_)) || matches!(current_screen.get(), Screen::ArticleDetail(_, _)) { "nav-link active" } else { "nav-link" }
                   on:click=move |_| set_screen.set(Screen::Articles(vec![]))>
                    {move || if lang.get() == Language::En { "Articles" } else { "Artigos" }}
                </a>
            </div>
            
            <div style="display: flex; align-items: center; gap: 16px;">
                <div class="mono" style="cursor: pointer; color: var(--text-muted);" 
                     on:click=move |_| {
                         set_lang.update(|l| *l = match l {
                             Language::En => Language::Pt,
                             Language::Pt => Language::En,
                         });
                    }>
                    {move || match lang.get() {
                        Language::En => "[EN]",
                        Language::Pt => "[PT]",
                    }}
                </div>
            </div>
        </nav>
    }
}
