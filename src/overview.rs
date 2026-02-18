use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Home() -> impl IntoView { 
    view! {
        <div style="max-width: 800px; padding-top: 40px;">
            
            <div style="margin-bottom: 40px;">
                <div class="status-badge">
                    <span style="width: 8px; height: 8px; background: currentColor; border-radius: 50%; display: inline-block;"></span>
                    "Open to work"
                </div>
                <h1 style="font-size: 36px; font-weight: 700; color: #fff; margin: 16px 0;">
                    "Hello, I'm Matheus."
                </h1>
                <p style="font-size: 18px; color: #888; line-height: 1.6; max-width: 600px;">
                    "Software Engineer & Apple Developer Academy Alumni. I build high-performance backends and native mobile experiences."
                </p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                
                <div style="background: #111; padding: 24px; border-radius: 12px; border: 1px solid #222;">
                    <h3 style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">"Current Focus"</h3>
                    <div style="font-size: 16px; color: #fff; font-weight: 500;">
                        "Mastering Rust & System Architecture"
                    </div>
                </div>

                <div style="background: #111; padding: 24px; border-radius: 12px; border: 1px solid #222;">
                    <h3 style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">"Based In"</h3>
                    <div style="font-size: 16px; color: #fff; font-weight: 500;">
                        "São Paulo, Brazil 🇧🇷"
                    </div>
                </div>

            </div>

            <div style="margin-top: 40px; border-top: 1px solid #222; padding-top: 40px;">
                <h3 style="color: #fff; font-size: 18px; margin-bottom: 16px;">"Background"</h3>
                <p style="color: #ccc; line-height: 1.8; font-size: 15px; margin-bottom: 20px;">
                    "I am currently pursuing a Bachelor's degree in Information Systems at Mackenzie Presbyterian University. I am driven by challenges that span the entire software development cycle, from conception to scalable cloud infrastructure."
                </p>
                <p style="color: #ccc; line-height: 1.8; font-size: 15px;">
                    "I enjoy transforming prototypes into functional and robust code, focusing on creating high-impact solutions. Whether it's compiling Rust or deploying iOS apps, I'm always building."
                </p>
            </div>

        </div>
    }
}