const GITHUB_USERNAME = 'matheussricardoo'; // Substitua pelo seu nome de usuário

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const projectsContainer = document.getElementById('projects-container');

    // Carregar tema salvo
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);
    themeToggle.textContent = currentTheme === 'light-theme' ? 'Tema Escuro' : 'Tema Claro';

    // Carregar idioma salvo
    const currentLang = localStorage.getItem('lang') || 'pt-br';
    updateText(currentLang);
    langToggle.textContent = currentLang === 'pt-br' ? 'English' : 'Português';


    // Mudar tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        
        let theme = 'light-theme';
        if(document.body.classList.contains('dark-theme')){
            theme = 'dark-theme';
        }
        localStorage.setItem('theme', theme);
        themeToggle.textContent = theme === 'light-theme' ? 'Tema Escuro' : 'Tema Claro';
    });

    // Mudar idioma
    langToggle.addEventListener('click', () => {
        let lang = 'en';
        if(document.documentElement.lang === 'en'){
            lang = 'pt-br';
        }
        localStorage.setItem('lang', lang);
        updateText(lang);
        langToggle.textContent = lang === 'pt-br' ? 'English' : 'Português';
    });

    // Buscar projetos do GitHub
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`)
        .then(response => response.json())
        .then(data => {
            projectsContainer.innerHTML = '';
            data.forEach(repo => {
                let tagsHTML = '';
                if (repo.topics && repo.topics.length > 0) {
                    tagsHTML = '<div class="project-tags">';
                    repo.topics.forEach(topic => {
                        tagsHTML += `<span>${topic}</span>`;
                    });
                    tagsHTML += '</div>';
                }

                const projectCardHTML = `
                    <div class="project-card">
                        <h3>${repo.name}</h3>
                        <p>${repo.description || 'Sem descrição.'}</p>
                        ${tagsHTML}
                        <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
                    </div>
                `;
                projectsContainer.insertAdjacentHTML('beforeend', projectCardHTML);
            });

            // Animações ao rolar
            const projectCards = document.querySelectorAll('.project-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            projectCards.forEach(card => {
                observer.observe(card);
            });
        })
        .catch(error => console.error('Erro ao buscar projetos:', error));


    function updateText(lang){
        document.documentElement.lang = lang;
        const translations = {
            'pt-br': {
                'Projetos': 'Projetos',
                'Contato': 'Contato',
                'Meu Portfólio': 'Meu Portfólio',
                'Tema Escuro': 'Tema Escuro',
                'Tema Claro': 'Tema Claro',
                'English': 'English',
                'Português': 'Português',
                'hero-subtitle': 'Bem-vindo ao meu portfólio! Sou um entusiasta de tecnologia, sempre buscando aprender e criar coisas novas. Explore meus projetos abaixo.'
            },
            'en': {
                'Projetos': 'Projects',
                'Contato': 'Contact',
                'Meu Portfólio': 'My Portfolio',
                'Tema Escuro': 'Dark Theme',
                'Tema Claro': 'Light Theme',
                'English': 'English',
                'Português': 'Português',
                'hero-subtitle': 'Welcome to my portfolio! I am a technology enthusiast, always looking to learn and create new things. Explore my projects below.'
            }
        }

        document.title = translations[lang]['Meu Portfólio'];
        document.querySelector('.logo').textContent = translations[lang]['Meu Portfólio'];
        document.querySelector('a[href="#projects"]').textContent = translations[lang]['Projetos'];
        document.querySelector('a[href="#contact"]').textContent = translations[lang]['Contato'];
        document.querySelector('#projects h2').textContent = translations[lang]['Projetos'];
        document.querySelector('#contact h2').textContent = translations[lang]['Contato'];
        document.querySelector('.hero-subtitle').textContent = translations[lang]['hero-subtitle'];

        const theme = localStorage.getItem('theme') || 'light-theme';
        document.getElementById('theme-toggle').textContent = theme === 'light-theme' ? translations[lang]['Tema Escuro'] : translations[lang]['Tema Claro'];
        document.getElementById('lang-toggle').textContent = lang === 'pt-br' ? translations.en.English : translations['pt-br'].Português;
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Particles.js
    const theme = localStorage.getItem('theme') || 'light-theme';
    const particleColor = theme === 'light-theme' ? '#333333' : '#ffffff';
    const particleLinesColor = theme === 'light-theme' ? '#cccccc' : '#555555';

    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": particleColor
            },
            "shape": {
                "type": "circle",
            },
            "opacity": {
                "value": 0.5,
                "random": false,
            },
            "size": {
                "value": 3,
                "random": true,
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": particleLinesColor,
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                },
            }
        },
        "retina_detect": true
    });
});
