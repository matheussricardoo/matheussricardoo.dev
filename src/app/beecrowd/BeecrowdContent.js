'use client';

import { useState } from 'react';
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

// Função para determinar o ambiente de teste baseado na linguagem
function getTestEnvironment(extension) {
  const environments = {
    'java': {
      url: 'https://www.jdoodle.com/online-java-compiler/',
      name: 'JDoodle',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
        </svg>
      )
    },
    'py': {
      url: 'https://www.programiz.com/python-programming/online-compiler/',
      name: 'Python Online Compiler',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
        </svg>
      )
    }
  };

  return environments[extension];
}

const EXERCISES = {
  'java': [
    { name: 'problem_1003.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1003.java' },
    { name: 'problem_1004.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1004.java' },
    { name: 'problem_1006.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1006.java' },
    { name: 'problem_1007.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1007.java' },
    { name: 'problem_1014.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1014.java' },
    { name: 'problem_1015.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1015.java' },
    { name: 'problem_1016.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1016.java' },
    { name: 'problem_1017.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1017.java' },
    { name: 'problem_1019.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1019.java' },
    { name: 'problem_1038.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1038.java' },
    { name: 'problem_1059.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1059.java' },
    { name: 'problem_1060.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1060.java' },
    { name: 'problem_1065.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1065.java' },
    { name: 'problem_1066.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1066.java' },
    { name: 'problem_1070.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1070.java' },
    { name: 'problem_1072.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1072.java' },
    { name: 'problem_1073.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1073.java' },
    { name: 'problem_1078.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1078.java' },
    { name: 'problem_1079.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1079.java' },
    { name: 'problem_1095.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1095.java' },
    { name: 'problem_1096.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1096.java' },
    { name: 'problem_1097.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1097.java' },
    { name: 'problem_1099.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1099.java' },
    { name: 'problem_1113.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1113.java' },
    { name: 'problem_1114.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1114.java' },
    { name: 'problem_1115.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1115.java' },
    { name: 'problem_1116.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1116.java' },
    { name: 'problem_1117.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1117.java' },
    { name: 'problem_1131.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1131.java' },
    { name: 'problem_1132.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1132.java' },
    { name: 'problem_1134.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1134.java' },
    { name: 'problem_1142.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1142.java' },
    { name: 'problem_1143.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1143.java' },
    { name: 'problem_1144.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1144.java' },
    { name: 'problem_1149.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1149.java' },
    { name: 'problem_1150.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1150.java' },
    { name: 'problem_1153.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1153.java' },
    { name: 'problem_1154.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1154.java' },
    { name: 'problem_1157.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1157.java' },
    { name: 'problem_1158.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1158.java' },
    { name: 'problem_1172.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1172.java' },
    { name: 'problem_1173.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1173.java' },
    { name: 'problem_1177.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1177.java' },
    { name: 'problem_1188.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1188.java' },
    { name: 'problem_1190.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1190.java' },
    { name: 'problem_1478.java', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1478.java' }
  ],
  'py': [
    { name: 'problem_1003.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1003.py' },
    { name: 'problem_1004.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1004.py' },
    { name: 'problem_1006.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1006.py' },
    { name: 'problem_1007.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1007.py' },
    { name: 'problem_1014.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1014.py' },
    { name: 'problem_1015.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1015.py' },
    { name: 'problem_1016.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1016.py' },
    { name: 'problem_1017.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1017.py' },
    { name: 'problem_1019.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1019.py' },
    { name: 'problem_1038.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1038.py' },
    { name: 'problem_1059.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1059.py' },
    { name: 'problem_1060.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1060.py' },
    { name: 'problem_1065.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1065.py' },
    { name: 'problem_1066.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1066.py' },
    { name: 'problem_1070.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1070.py' },
    { name: 'problem_1072.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1072.py' },
    { name: 'problem_1073.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1073.py' },
    { name: 'problem_1078.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1078.py' },
    { name: 'problem_1079.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1079.py' },
    { name: 'problem_1095.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1095.py' },
    { name: 'problem_1096.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1096.py' },
    { name: 'problem_1097.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1097.py' },
    { name: 'problem_1099.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1099.py' },
    { name: 'problem_1113.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1113.py' },
    { name: 'problem_1114.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1114.py' },
    { name: 'problem_1115.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1115.py' },
    { name: 'problem_1116.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1116.py' },
    { name: 'problem_1117.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1117.py' },
    { name: 'problem_1131.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1131.py' },
    { name: 'problem_1132.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1132.py' },
    { name: 'problem_1134.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1134.py' },
    { name: 'problem_1142.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1142.py' },
    { name: 'problem_1143.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1143.py' },
    { name: 'problem_1144.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1144.py' },
    { name: 'problem_1149.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1149.py' },
    { name: 'problem_1150.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1150.py' },
    { name: 'problem_1153.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1153.py' },
    { name: 'problem_1154.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1154.py' },
    { name: 'problem_1157.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1157.py' },
    { name: 'problem_1158.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1158.py' },
    { name: 'problem_1172.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1172.py' },
    { name: 'problem_1173.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1173.py' },
    { name: 'problem_1177.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1177.py' },
    { name: 'problem_1188.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1188.py' },
    { name: 'problem_1190.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1190.py' },
    { name: 'problem_1478.py', url: 'https://github.com/matheussricardoo/beecrowd-solutions/blob/main/Level_1/problem_1478.py' }
  ]
};

export default function BeecrowdContent() {
  const { t } = useLanguage();
  const [selectedLanguages, setSelectedLanguages] = useState(['java', 'py']);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para obter os exercícios filtrados
  const getFilteredExercises = () => {
    let allExercises = [];
    selectedLanguages.forEach(lang => {
      if (EXERCISES[lang]) {
        allExercises = [...allExercises, ...EXERCISES[lang]];
      }
    });
    return allExercises.sort((a, b) => {
      const numA = parseInt(a.name.match(/\d+/)[0]);
      const numB = parseInt(b.name.match(/\d+/)[0]);
      return numA - numB;
    });
  };

  const toggleLanguage = (language) => {
    const extensionMap = {
      'java': 'java',
      'python': 'py'
    };

    const extension = extensionMap[language];
    
    setSelectedLanguages(prev => {
      if (prev.includes(extension)) {
        if (prev.length === 2) {
          return prev.filter(l => l !== extension);
        }
        return prev;
      }
      return [...prev, extension];
    });
  };

  const selectAllLanguages = () => {
    setSelectedLanguages(['java', 'py']);
  };

  // Filtrar exercícios baseado na pesquisa
  const filteredExercises = getFilteredExercises().filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative"
    >
      {/* Gradientes de fundo */}
      <div className="fixed -z-10 top-[-50%] right-[-50%] w-[100%] h-[100%] rounded-full bg-gradient-to-br from-blue-100/30 via-purple-100/30 to-pink-100/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 blur-3xl"/>
      <div className="fixed -z-10 bottom-[-20%] left-[-20%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-green-100/30 via-emerald-100/30 to-teal-100/30 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 blur-3xl"/>
      
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
            {t.beecrowdTitle}
          </h1>
        </div>

        {/* Filtros e Pesquisa */}
        <div className="space-y-6 mb-8">
          {/* Filtro de Linguagens */}
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => toggleLanguage('java')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedLanguages.includes('java')
                  ? 'bg-white dark:bg-white text-gray-900 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 hover:shadow-md'
              }`}
            >
              Java
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={() => toggleLanguage('python')}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedLanguages.includes('py')
                  ? 'bg-white dark:bg-white text-gray-900 shadow-md'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-white dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 hover:shadow-md'
              }`}
            >
              Python
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={selectAllLanguages}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedLanguages.length === 2
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
            filteredExercises.map((exercise, index) => (
              <motion.div
                key={exercise.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all flex flex-col min-h-[200px] relative overflow-hidden"
              >
                {/* Efeito de gradiente no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Conteúdo do card */}
                <div className="relative">
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Problem {exercise.name.match(/\d+/)[0]}
                    </h3>
                    <span className={`px-3 py-1 text-sm rounded-full ${
                      exercise.name.split('.').pop().toLowerCase() === 'java' 
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                    }`}>
                      {exercise.name.split('.').pop().toUpperCase()}
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-3 mt-auto">
                    {/* Link para o código */}
                    <Link
                      href={exercise.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewCode}</span>
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    {/* Link para testar */}
                    {getTestEnvironment(exercise.name.split('.').pop().toLowerCase()) && (
                      <Link
                        href={getTestEnvironment(exercise.name.split('.').pop().toLowerCase()).url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <span className="w-5 h-5 flex items-center justify-center">
                            {getTestEnvironment(exercise.name.split('.').pop().toLowerCase()).icon}
                          </span>
                          {t.testIn} {getTestEnvironment(exercise.name.split('.').pop().toLowerCase()).name}
                        </span>
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    )}

                    {/* Link para o problema */}
                    <Link
                      href={`https://www.beecrowd.com.br/judge/pt/problems/view/${exercise.name.match(/\d+/)[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.viewProblem}</span>
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
                Nenhum exercício encontrado para "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
