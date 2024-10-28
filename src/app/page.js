'use client';
import { Suspense, useState, useEffect } from "react";
import { useLanguage } from './contexts/LanguageContext';
import { motion } from 'framer-motion';

// Função para buscar repositórios
async function getGithubRepos() {
  try {
    const response = await fetch('https://api.github.com/users/matheussricardoo/repos', {
      next: { revalidate: 3600 }
    });
    
    if (!response.ok) throw new Error('Failed to fetch');
    
    const repos = await response.json();
    return repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .filter(repo => !repo.fork && repo.name !== 'matheussricardoo') 
      .slice(0, 6);
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    return [];
  }
}

// Componente de Loading para os cards
function RepositoryCardSkeleton() {
  return (
    <div className="animate-pulse bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 h-[250px]">
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-2/3"></div>
      <div className="mt-8 flex gap-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
      </div>
    </div>
  );
}

// Função para gerar URL do StackBlitz
function getStackBlitzUrl(repo) {
  return `https://stackblitz.com/github/${repo.full_name}`;
}

// Função para gerar URL do CodeSandbox
function getCodeSandboxUrl(repo) {
  return `https://codesandbox.io/s/github/${repo.full_name}`;
}

// Função para determinar o ambiente de teste baseado na linguagem
function getTestEnvironment(repo) {
  const language = repo.language?.toLowerCase();
  
  // Configurações específicas para o Jokenpo Game
  if (repo.name === 'jokenpo_game') {
    return {
      url: 'https://www.programiz.com/python-programming/online-compiler/',
      name: 'Python Online Compiler',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      codeUrl: 'https://github.com/matheussricardoo/jokenpo_game/blob/main/Jokenpo.py'
    };
  }
  
  // Configurações específicas para o Password Creator
  if (repo.name === 'Password_creator') {
    return {
      url: 'https://www.programiz.com/python-programming/online-compiler/',
      name: 'Python Online Compiler',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      ),
      codeUrl: 'https://github.com/matheussricardoo/Password_creator/blob/main/Password_creator.py'
    };
  }
  
  if (language === 'java') {
    return {
      url: `https://www.jdoodle.com/embed/v0/0?stdin=0&arg=0&rw=1&source=${encodeURIComponent(
        `// ${repo.name}\n` +
        `// Link: ${repo.html_url}\n\n` +
        `public class Main {\n` +
        `    public static void main(String[] args) {\n` +
        `        // Seu código aqui\n` +
        `    }\n` +
        `}`
      )}`,
      name: 'JDoodle',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
        </svg>
      )
    };
  }
  
  if (language === 'python' || repo.name === 'jokenpo_game' || repo.name === 'Password_creator') {
    return {
      url: 'https://www.programiz.com/python-programming/online-compiler/',
      name: 'Python Online Compiler',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05z"/>
        </svg>
      ),
      codeUrl: repo.name === 'jokenpo_game' 
        ? 'https://github.com/matheussricardoo/jokenpo_game/blob/main/Jokenpo.py'
        : 'https://github.com/matheussricardoo/Password_creator/blob/main/Password_creator.py'
    };
  }
  
  // Para projetos web (JavaScript, TypeScript, etc)
  return {
    url: `https://stackblitz.com/github/matheussricardoo/${repo.name}`,
    name: 'StackBlitz',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  };
}

// Função para verificar se é um repositório grande de exercícios
function isExerciseRepo(repoName) {
  return ['beecrowd-solutions', 'java-programming1-mooc-helsinki'].includes(repoName);
}

// Função para determinar as linguagens disponíveis por repositório
function getRepoLanguages(repoName) {
  const languages = {
    'beecrowd-solutions': ['Java', 'Python', 'SQL'],
    'java-programming1-mooc-helsinki': ['Java']
  };
  return languages[repoName] || [];
}

export default function Home() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch('https://api.github.com/users/matheussricardoo/repos', {
          next: { revalidate: 3600 }
        });
        
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        const filteredRepos = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .filter(repo => !repo.fork && repo.name !== 'matheussricardoo')
          .slice(0, 6);
        
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
        setRepos([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="min-h-full bg-white dark:bg-gray-950 relative">
      {/* Elementos decorativos de fundo */}
      <div className="fixed -z-10 top-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 blur-3xl"/>
      <div className="fixed -z-10 bottom-[-20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-green-100/30 via-emerald-100/30 to-teal-100/30 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 blur-3xl"/>
      
      <main className="max-w-4xl mx-auto px-4 py-20">
        {/* Hero Section - melhorada para mobile */}
        <section className="space-y-6 md:space-y-8 animate-fadeIn relative">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"/>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight relative">
            {t.greeting}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
              Matheus Ricardo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
            {t.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projetos"
              className="w-full sm:w-auto text-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-105 transition-all"
            >
              {t.viewProjects}
            </a>
            <a
              href="#contato"
              className="w-full sm:w-auto text-center px-6 py-3 border border-gray-200 dark:border-gray-700 rounded-full hover:scale-105 transition-all"
            >
              {t.contact}
            </a>
          </div>
        </section>

        {/* Seção de Repositórios - melhorada para mobile */}
        <section id="projetos" className="mt-24 md:mt-32 scroll-mt-20">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              {t.projects}
            </h2>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card do Beecrowd */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all flex flex-col min-h-[200px]"
            >
              {/* Efeito de gradiente no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full">
                {/* Cabeçalho do Card */}
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate flex-1">
                    beecrowd-solutions
                  </h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                      JAVA
                    </span>
                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                      PYTHON
                    </span>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {t.beecrowdDesc}
                </p>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  {/* Link para ver exercícios */}
                  <a
                    href="/beecrowd"
                    className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewExercises}</span>
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Link para o repositório */}
                  <a
                    href="https://github.com/matheussricardoo/beecrowd-solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewCode}</span>
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Card do MOOC Helsinki */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all flex flex-col min-h-[200px]"
            >
              {/* Efeito de gradiente no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate flex-1">
                    java-programming1-mooc-helsinki
                  </h3>
                  <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                    JAVA
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {t.moocDesc}
                </p>
                <div className="flex flex-col gap-3">
                  {/* Link para ver exercícios */}
                  <a
                    href="/mooc"
                    className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewExercises}</span>
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* Link para o repositório */}
                  <a
                    href="https://github.com/matheussricardoo/java-programming1-mooc-helsinki"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewCode}</span>
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Outros repositórios */}
            {loading ? (
              [...Array(4)].map((_, i) => <RepositoryCardSkeleton key={i} />)
            ) : (
              repos
                .filter(repo => !['beecrowd-solutions', 'java-programming1-mooc-helsinki'].includes(repo.name))
                .map((repo) => {
                  const getDescKey = (repoName) => {
                    const keyMap = {
                      'jokenpo_game': 'jokenpoDesc',
                      'Password_creator': 'passwordCreatorDesc',
                      'ACME-Developers': 'acmeDesc',
                      'Heranca': 'herancasDesc'      // Corrigido para 'Heranca' com H maiúsculo
                    };
                    return keyMap[repoName] || null;
                  };

                  const descKey = getDescKey(repo.name);
                  const env = getTestEnvironment(repo);
                  const language = repo.language?.toUpperCase() || 'N/A';
                  const languageClass = language === 'JAVA' 
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                    : language === 'PYTHON' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';
                  
                  return (
                    <motion.div
                      key={repo.id}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="group relative overflow-hidden bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all flex flex-col"
                    >
                      {/* Efeito de gradiente no hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="relative flex flex-col h-full">
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              {repo.name}
                            </h3>
                            {repo.language && (
                              <span className={`px-3 py-1 text-sm rounded-full ${languageClass}`}>
                                {language}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {descKey ? t[descKey] : t.noDescription}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3">
                          <a
                            href={env.codeUrl || repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                          >
                            <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewCode}</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>

                          <a
                            href={env.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                          >
                            <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                              <span className="flex-shrink-0">{env.icon}</span>
                              <span className="truncate">{t.testIn} {env.name}</span>
                            </span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })
            )}
          </div>
        </section>

        {/* Seção de Contato - melhorada para mobile */}
        <section id="contato" className="mt-24 md:mt-32 scroll-mt-20 mb-20">
          <div className="relative bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 overflow-hidden">
            <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]"/>
            <div className="relative">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                {t.letsConnect}
              </h2>
              <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                <a
                  href="https://github.com/matheussricardoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-white text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/matheus-ricardo-426452266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 rounded-full bg-gray-50 dark:bg-gray-900 hover:bg-gray-900 dark:hover:bg-white text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-gray-900 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
