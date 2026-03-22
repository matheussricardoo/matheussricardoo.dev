use leptos::IntoView;
use leptos::prelude::*;

mod overview;
pub mod projects;
mod navbar;
mod stack;
mod work;
pub mod articles;
pub mod articles_data;

use overview::Home as HomeView;
use projects::Projects;
use navbar::Navbar;
use stack::Stack;
use work::Work;
use articles::{Articles, ArticleDetail};

#[derive(Clone, PartialEq)]
pub enum Screen {
    Home,
    Projects,
    Work,
    Stack,
    Articles(Vec<String>),
    ArticleDetail(String, Vec<String>),
}

#[derive(Clone, PartialEq, Copy)]
pub enum Language {
    Pt,
    En,
}

fn main() {
    leptos::mount::mount_to_body(|| view! { <App /> })
}

#[component]
fn SimpleFooter() -> impl IntoView {
    view! {
        <footer style="padding: 32px 48px; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-color); flex-wrap: wrap; gap: 16px; margin-top: auto;">
            <div class="mono" style="color: #aaa; font-size: 11px;">
                "© 2026 MATHEUS RICARDO"
            </div>
            <div class="footer-links">
                <a href="https://github.com/matheussricardoo" target="_blank" class="mono">
                    "GITHUB ↗"
                </a>
                <a href="https://www.linkedin.com/in/matheus-ricardo" target="_blank" class="mono">
                    "LINKEDIN ↗"
                </a>
                <a href="mailto:matheusri1@hotmail.com" class="mono">
                    "EMAIL ↗"
                </a>
            </div>
        </footer>
    }
}

#[component]
fn App() -> impl IntoView {
    let (screen, set_screen) = signal(Screen::Home);
    let (lang, set_lang) = signal(Language::En);

    provide_context(lang);
    provide_context(set_lang);

    view! {
        <div class="app-shell">
            <Navbar set_screen=set_screen current_screen=screen />

            <main class="main-content">
                {move || match screen.get() {
                    Screen::Home => view! { <HomeView set_screen=set_screen /> }.into_any(),
                    Screen::Projects => view! { <Projects /> }.into_any(),
                    Screen::Work => view! { <Work /> }.into_any(),
                    Screen::Stack => view! { <Stack /> }.into_any(),
                    Screen::Articles(path) => view! { <Articles set_screen=set_screen initial_path=path /> }.into_any(),
                    Screen::ArticleDetail(id, path) => view! { <ArticleDetail id=id back_path=path set_screen=set_screen /> }.into_any(),
                }}
            </main>
            <SimpleFooter />
        </div>
    }
}
