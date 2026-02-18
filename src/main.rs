use leptos::IntoView;
use leptos::prelude::*;

mod overview;
mod projects;
mod sidebar;
mod stack;
mod work;

use overview::Home as HomeView;
use projects::Projects;
use sidebar::Sidebar;
use stack::Stack;
use work::Work;

#[derive(Clone, PartialEq)]
pub enum Screen {
    Home,
    Projects,
    Work,
    Stack,
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
fn App() -> impl IntoView {
    let (screen, set_screen) = signal(Screen::Home);
    let (lang, set_lang) = signal(Language::En);

    provide_context(lang);
    provide_context(set_lang);

    view! {
        <div class="app-shell">
            <Sidebar set_screen=set_screen current_screen=screen />

            <main class="main-content">
                {move || match screen.get() {
                    Screen::Home => view! { <HomeView /> }.into_any(),
                    Screen::Projects => view! { <Projects /> }.into_any(),
                    Screen::Work => view! { <Work /> }.into_any(),
                    Screen::Stack => view! { <Stack /> }.into_any(),
                }}
            </main>
        </div>
    }
}

