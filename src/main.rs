use leptos::prelude::*;

mod sidebar;

use sidebar::Sidebar;

fn main() {
    leptos::mount::mount_to_body(|| view! { <App/> })
}

#[component]
fn App() -> impl IntoView {
    view! {
        <div class="app-shell">

        <Sidebar/>

        <main class="main-content">
            <h1>"Hello, Leptos Portfolio!"</h1>
            <p>"Built with Rust and WebAssembly."</p>
        </main>
        </div>
    }
}
