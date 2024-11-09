'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Componente de Loading
function ExerciseCardSkeleton() {
  return (
    <div className="animate-pulse bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800">
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/2"></div>
    </div>
  );
}

const PARTS = [
  { name: 'Part01', path: 'Part_1', displayName: 'Part01' },
  { name: 'Part02', path: 'Part_2', displayName: 'Part02' },
  { name: 'Part03', path: 'Part_3', displayName: 'Part03' },
  { name: 'Part04', path: 'Part_4', displayName: 'Part04' },
  { name: 'Part05', path: 'Part_5', displayName: 'Part05' },
  { name: 'Part06', path: 'Part_6', displayName: 'Part06' },
  { name: 'Part07', path: 'Part_7', displayName: 'Part07' }
];

// Componente de Barra de Pesquisa
function SearchBar({ onSearch }) {
  return (
    <div className="relative mb-8">
      <input
        type="text"
        placeholder="Pesquisar exercícios..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all"
      />
      <svg
        className="absolute left-3 top-2.5 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}

export default function MoocContent() {
  const { t } = useLanguage();
  const [selectedPart, setSelectedPart] = useState(PARTS[0]);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchExercises() {
      try {
        setLoading(true);
        let exerciseList = [];

        if (selectedPart.path === 'all') {
          // Buscar exercícios de todas as partes
          for (const part of PARTS) {
            const response = await fetch(`https://api.github.com/repos/matheussricardoo/java-programming1-mooc-helsinki/contents/${part.path}`);
            if (response.ok) {
              const files = await response.json();
              const partExercises = files
                .filter(file => file.type === 'dir')
                .map(file => {
                  const exercise = {
                    name: file.name,
                    className: file.name.split('.')[1],
                    path: `${part.path}/${file.name}/src/main/java`,
                    url: file.html_url
                  };

                  // Adicionar URL do código para Part 1, 2 e 3
                  if (['Part_1', 'Part_2', 'Part_3'].includes(part.path)) {
                    exercise.codeUrl = `https://raw.githubusercontent.com/matheussricardoo/java-programming1-mooc-helsinki/main/${part.path}/${file.name}/src/main/java/${exercise.className}.java`;
                  }

                  return exercise;
                });
              exerciseList = [...exerciseList, ...partExercises];
            }
          }
        } else {
          const response = await fetch(`https://api.github.com/repos/matheussricardoo/java-programming1-mooc-helsinki/contents/${selectedPart.path}`);
          
          if (!response.ok) throw new Error('Failed to fetch');
          
          const files = await response.json();
          exerciseList = files
            .filter(file => file.type === 'dir')
            .map(file => {
              const exercise = {
                name: file.name,
                className: file.name.split('.')[1],
                path: `${selectedPart.path}/${file.name}/src/main/java`,
                url: file.html_url
              };

              // Adicionar URL do código para Part 1, 2 e 3
              if (['Part_1', 'Part_2', 'Part_3'].includes(selectedPart.path)) {
                exercise.codeUrl = `https://raw.githubusercontent.com/matheussricardoo/java-programming1-mooc-helsinki/main/${selectedPart.path}/${file.name}/src/main/java/${exercise.className}.java`;
              }

              return exercise;
            });
        }

        setExercises(exerciseList);
      } catch (error) {
        console.error('Erro ao buscar exercícios:', error);
        setExercises([]);
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, [selectedPart]);

  // Função para obter o link direto do arquivo no GitHub
  function getGithubFileUrl(path) {
    return `https://github.com/matheussricardoo/java-programming1-mooc-helsinki/blob/main/${path}`;
  }

  // Função para criar o link do JDoodle com o código
  async function createJDoodleLink(exercise) {
    let sourceCode = '';

    if (exercise.codeUrl) {
      try {
        const response = await fetch(exercise.codeUrl);
        if (response.ok) {
          sourceCode = await response.text();
        }
      } catch (error) {
        console.error('Erro ao buscar código:', error);
      }
    }

    if (!sourceCode) {
      sourceCode = `// ${exercise.name}\n` +
        `// Link: ${getGithubFileUrl(exercise.path)}\n\n` +
        `public class ${exercise.className} {\n` +
        `    public static void main(String[] args) {\n` +
        `        // Seu código aqui\n` +
        `    }\n` +
        `}`;
    }

    // Retorna o link direto para o JDoodle
    return `https://www.jdoodle.com/online-java-compiler/?code=${encodeURIComponent(sourceCode)}`;
  }

  // Filtrar exercícios baseado na pesquisa
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Adicione esta função no componente
  const handleJDoodleClick = async (e, exercise) => {
    e.preventDefault();
    const jdoodleUrl = await createJDoodleLink(exercise);
    window.open(jdoodleUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Gradientes de fundo */}
      <div className="fixed -z-10 top-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 blur-3xl"/>
      <div className="fixed -z-10 bottom-[-20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-green-100/30 via-emerald-100/30 to-teal-100/30 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 blur-3xl"/>
      
      {/* Resto do conteúdo */}
      <div className="relative">
        {/* Header com navegação */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.back}
            </Link>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            {t.moocTitle}
          </h1>
        </div>

        {/* Filtros e Pesquisa */}
        <div className="space-y-6 mb-8">
          {/* Filtro de Partes */}
          <div className="flex flex-wrap gap-4">
            {PARTS.map((part) => (
              <motion.button
                key={part.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setSelectedPart(part)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedPart.path === part.path
                    ? 'bg-white dark:bg-white text-gray-900 shadow-md'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 hover:shadow-md'
                }`}
              >
                {part.displayName}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => setSelectedPart({ name: 'All', path: 'all', displayName: t.all })}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedPart.path === 'all'
                  ? 'bg-white dark:bg-white text-gray-900 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 hover:shadow-md'
              }`}
            >
              {t.all}
            </motion.button>
          </div>

          {/* Barra de Pesquisa */}
          <SearchBar onSearch={setSearchTerm} />
        </div>

        {/* Grid de Exercícios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            [...Array(6)].map((_, i) => <ExerciseCardSkeleton key={i} />)
          ) : filteredExercises.length > 0 ? (
            filteredExercises.map((exercise) => (
              <motion.div
                key={exercise.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="group bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all flex flex-col min-h-[200px] relative overflow-hidden"
              >
                {/* Efeito de gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Conteúdo do card */}
                <div className="relative">
                  {/* Cabeçalho do Card */}
                  <div className="flex items-start gap-3 mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white truncate flex-1">
                      {exercise.name}
                    </h3>
                    <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 flex-shrink-0">
                      JAVA
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {/* Link para o código */}
                    <Link
                      href={getGithubFileUrl(exercise.path)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewCode}</span>
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Link para testar */}
                    <a
                      href="#"
                      onClick={(e) => handleJDoodleClick(e, exercise)}
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
                        </svg>
                        <span className="truncate">{t.testIn} JDoodle</span>
                      </span>
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-500 dark:text-gray-400">
                Nenhum exercício encontrado para &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
