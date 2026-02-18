use leptos::prelude::*;
use leptos::IntoView;

#[component]
pub fn Sidebar() -> impl IntoView {
    view! {
        <aside class="sidebar">
            <div style="margin-bottom: 40px;">
                <h1 style="font-size: 20px; font-weight: bold; letter-spacing: -0.5px;">
                    "Matheus Ricardo"
                </h1>
                <p style="color: #666; font-size: 14px;">"Software Engineer"</p>
            </div>

            <nav>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 12px;">
                        <a href="#" style="color: #fff; text-decoration: none; font-weight: 500;">
                            "Home"
                        </a>
                    </li>
                    <li style="margin-bottom: 12px;">
                        <a href="#" style="color: #888; text-decoration: none;">
                            "Projects"
                        </a>
                    </li>
                    <li style="margin-bottom: 12px;">
                        <a href="#" style="color: #888; text-decoration: none;">
                            "Stack"
                        </a>
                    </li>
                    <li>
                        <a href="#" style="color: #888; text-decoration: none;">
                            "Contact"
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    }
}
