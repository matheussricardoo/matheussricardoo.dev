use crate::Language;
use leptos::IntoView;
use leptos::prelude::*;

#[component]
pub fn Home() -> impl IntoView {
    let lang = use_context::<ReadSignal<Language>>().expect("Lang context missing");

    view! {
        <div style="max-width: 800px; padding-top: 40px;">

            <div style="margin-bottom: 40px;">
                <div class="status-badge">
                    <span style="width: 8px; height: 8px; background: currentColor; border-radius: 50%; display: inline-block;"></span>
                    {move || if lang.get() == Language::En { "Open to work" } else { "Disponível para trabalho" }}
                </div>
                <h1 style="font-size: 36px; font-weight: 700; color: #fff; margin: 16px 0;">
                    {move || if lang.get() == Language::En { "Hello, I'm Matheus." } else { "Olá, sou o Matheus." }}
                </h1>
                <p style="font-size: 18px; color: #888; line-height: 1.6; max-width: 600px;">
                    {move || if lang.get() == Language::En {
                        "Software Engineer & Apple Developer Academy Alumni. I build high-performance backends and native mobile experiences."
                    } else {
                        "Engenheiro de Software e Alumni da Apple Developer Academy. Construo backends de alta performance e experiências móveis nativas."
                    }}
                </p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

                <div style="background: #111; padding: 24px; border-radius: 12px; border: 1px solid #222;">
                    <h3 style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                        {move || if lang.get() == Language::En { "Current Focus" } else { "Foco Atual" }}
                    </h3>
                    <div style="font-size: 16px; color: #fff; font-weight: 500;">
                        {move || if lang.get() == Language::En { "Mastering Rust & System Architecture" } else { "Dominando Rust e Arquitetura de Sistemas" }}
                    </div>
                </div>

                <div style="background: #111; padding: 24px; border-radius: 12px; border: 1px solid #222;">
                    <h3 style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">
                        {move || if lang.get() == Language::En { "Based In" } else { "Localização" }}
                    </h3>
                    <div style="font-size: 16px; color: #fff; font-weight: 500;">
                        "São Paulo, Brazil 🇧🇷"
                    </div>
                </div>

            </div>

            <div style="margin-top: 40px; border-top: 1px solid #222; padding-top: 40px;">
                <h3 style="color: #fff; font-size: 18px; margin-bottom: 16px;">
                    {move || if lang.get() == Language::En { "Background" } else { "Sobre Mim" }}
                </h3>
                <p style="color: #ccc; line-height: 1.8; font-size: 15px; margin-bottom: 20px;">
                    {move || if lang.get() == Language::En {
                        "I am currently pursuing a Bachelor's degree in Information Systems at Mackenzie Presbyterian University. I am driven by challenges that span the entire software development cycle, from conception to scalable cloud infrastructure."
                    } else {
                        "Atualmente cursando Bacharelado em Sistemas de Informação na Universidade Presbiteriana Mackenzie. Sou movido por desafios que abrangem todo o ciclo de desenvolvimento de software, da concepção à infraestrutura escalável na nuvem."
                    }}
                </p>
                <p style="color: #ccc; line-height: 1.8; font-size: 15px;">
                    {move || if lang.get() == Language::En {
                        "I enjoy transforming prototypes into functional and robust code, focusing on creating high-impact solutions. Whether it's compiling Rust or deploying iOS apps, I'm always building."
                    } else {
                        "Gosto de transformar protótipos em código funcional e robusto, focando em criar soluções de alto impacto. Seja compilando Rust ou publicando apps iOS, estou sempre construindo."
                    }}
                </p>
            </div>

        </div>
    }
}
