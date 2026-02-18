use leptos::prelude::*;

fn main() {
    leptos::mount::mount_to_body(|| view! { <App/> })
}

#[component]
fn App() -> impl IntoView {
    view! {
        <div style="font-family: sans-serif; text-align: center; padding: 50px;">
            <h1>"Hello, Leptos Portfolio!"</h1>
            <p>"Built with Rust and WebAssembly."</p>
        </div>
    }
}
