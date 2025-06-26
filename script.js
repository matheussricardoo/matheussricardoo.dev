const GITHUB_USERNAME = 'matheussricardoo';
let allProjects = []; // Armazena todos os projetos

// Objeto de traduções movido para o escopo global
const translations = {
    'pt-br': {
        'Projetos': 'Projetos',
        'Contato': 'Contato',
        'Meu Portfólio': 'Meu Portfólio',
        'Tema Escuro': 'Tema Escuro',
        'Tema Claro': 'Tema Claro',
        'English': 'English',
        'Português': 'Português',
        'hero-subtitle': 'Bem-vindo ao meu portfólio! Sou um entusiasta de tecnologia, sempre buscando aprender e criar coisas novas. Explore meus projetos abaixo.',
        'Ver no GitHub': 'Ver no GitHub',
        'Sem descrição': 'Sem descrição.',
        'Todos': 'Todos'
    },
    'en': {
        'Projetos': 'Projects',
        'Contato': 'Contact',
        'Meu Portfólio': 'My Portfolio',
        'Tema Escuro': 'Dark Theme',
        'Tema Claro': 'Light Theme',
        'English': 'English',
        'Português': 'Português',
        'hero-subtitle': 'Welcome to my portfolio! I am a technology enthusiast, always looking to learn and create new things. Explore my projects below.',
        'Ver no GitHub': 'View on GitHub',
        'Sem descrição': 'No description.',
        'Todos': 'All'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    const projectsContainer = document.getElementById('projects-container');
    const filterButtonsContainer = document.getElementById('filter-buttons');

    /**
     * Inicializa ou atualiza a animação particles.js com base no tema.
     * @param {string} theme - O tema atual ('light-theme' ou 'dark-theme').
     */
    function initParticles(theme) {
        // Destrói a instância anterior para evitar sobreposição de canvases
        if (window.pJSDom && window.pJSDom.length > 0) {
            window.pJSDom[0].pJS.fn.vendors.destroypJS();
            window.pJSDom = [];
        }

        // Define as cores das partículas com base no tema, usando as variáveis do CSS para consistência
        const particleColor = theme === 'light-theme' ? '#334155' : '#ccd6f6';
        const particleLinesColor = theme === 'light-theme' ? '#cbd5e1' : '#334155';

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
                    "value": particleColor // Cor das partículas atualizada
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
                    "color": particleLinesColor, // Cor das linhas atualizada
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
    }

    // Carregar tema salvo e inicializar partículas
    const currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.classList.add(currentTheme);
    initParticles(currentTheme); // Chamada inicial para configurar as partículas

    // Carregar idioma salvo
    const currentLang = localStorage.getItem('lang') || 'pt-br';
    updateText(currentLang);

    // Mudar tema
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        document.body.classList.toggle('light-theme');
        
        const newTheme = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
        localStorage.setItem('theme', newTheme);
        
        // Atualiza o texto do botão de tema e reinicia as partículas com as novas cores
        updateText(localStorage.getItem('lang') || 'pt-br');
        initParticles(newTheme);
    });

    // Mudar idioma
    langToggle.addEventListener('click', () => {
        const newLang = (localStorage.getItem('lang') || 'pt-br') === 'pt-br' ? 'en' : 'pt-br';
        localStorage.setItem('lang', newLang);
        updateText(newLang);
    });

    // Buscar projetos do GitHub
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`)
        .then(response => response.json())
        .then(data => {
            allProjects = data;
            // A chamada inicial para display e create buttons será feita dentro de updateText
            updateText(localStorage.getItem('lang') || 'pt-br');
        })
        .catch(error => console.error('Erro ao buscar projetos:', error));


    function displayProjects(projects, lang) {
        projectsContainer.innerHTML = '';
        projects.forEach(repo => {
            let tagsHTML = '';
            if (repo.topics && repo.topics.length > 0) {
                tagsHTML = '<div class="project-tags">';
                repo.topics.forEach(topic => {
                    tagsHTML += `<span>${topic}</span>`;
                });
                tagsHTML += '</div>';
            }

            const projectCardHTML = `
                <div class="project-card" data-topics="${repo.topics.join(' ')}">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || translations[lang]['Sem descrição']}</p>
                    ${tagsHTML}
                    <a href="${repo.html_url}" target="_blank">${translations[lang]['Ver no GitHub']}</a>
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
                }
            });
        }, { threshold: 0.1 });

        projectCards.forEach(card => {
            observer.observe(card);
        });
    }

    function createFilterButtons(projects, lang) {
        const topics = new Set();
        projects.forEach(p => p.topics.forEach(t => topics.add(t)));

        let buttonsHTML = `<button class="filter-btn active" data-filter="all">${translations[lang]['Todos']}</button>`;
        topics.forEach(topic => {
            buttonsHTML += `<button class="filter-btn" data-filter="${topic}">${topic}</button>`;
        });

        filterButtonsContainer.innerHTML = buttonsHTML;

        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.filter-btn.active').classList.remove('active');
                button.classList.add('active');
            });
        });
    }

    function updateText(lang){
        document.documentElement.lang = lang;

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

        // Atualiza os projetos e botões com o novo idioma
        if (allProjects.length > 0) {
            displayProjects(allProjects, lang);
            createFilterButtons(allProjects, lang);
        }
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
});
