use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Stack() -> impl IntoView {
    view! {
        <div style="max-width: 800px; padding-top: 20px;">
            <h1 style="font-size: 24px; margin-bottom: 40px; border-bottom: 1px solid #222; padding-bottom: 20px;">
                "Tech Stack"
            </h1>

            <div style="margin-bottom: 40px;">
                <h3 style="color: #888; font-size: 14px; text-transform: uppercase; margin-bottom: 15px;">"Core Languages"</h3>
                <div class="tech-grid"> 
                    <span class="tech-tag">"Swift"</span>
                    <span class="tech-tag">"Rust"</span>
                    <span class="tech-tag">"Go"</span>
                    <span class="tech-tag">"Python"</span>
                    <span class="tech-tag">"Java"</span>
                </div>
            </div>

            <div style="margin-bottom: 40px;">
                <h3 style="color: #888; font-size: 14px; text-transform: uppercase; margin-bottom: 15px;">"Infrastructure & Tools"</h3>
                <div class="tech-grid">
                    <span class="tech-tag">"Docker"</span>
                    <span class="tech-tag">"AWS"</span>
                    <span class="tech-tag">"Google Cloud"</span>
                    <span class="tech-tag">"Linux (Mint/Ubuntu)"</span>
                    <span class="tech-tag">"Git"</span>
                    <span class="tech-tag">"PostgreSQL"</span>
                </div>
            </div>

            <div>
                <h3 style="color: #888; font-size: 14px; text-transform: uppercase; margin-bottom: 15px;">"Frameworks"</h3>
                <div class="tech-grid">
                    <span class="tech-tag">"SwiftUI"</span>
                    <span class="tech-tag">"UIKit"</span>
                    <span class="tech-tag">"Leptos"</span>
                    <span class="tech-tag">"Dioxus"</span>
                    <span class="tech-tag">"Spring Boot"</span>
                </div>
            </div>
        </div>
    }
}