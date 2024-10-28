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
  { name: 'Part03', path: 'Part_3', displayName: 'Part03' }
];

const EXERCISES = {
  'Part_1': [
    { name: 'Part01_01.Sandbox', className: 'Sandbox', path: 'Part_1/Part01_01.Sandbox/src/main/java/Sandbox.java' },
    { name: 'Part01_02.AdaLovelace', className: 'AdaLovelace', path: 'Part_1/Part01_02.AdaLovelace/src/main/java/AdaLovelace.java' },
    { name: 'Part01_03.OnceUponATime', className: 'OnceUponATime', path: 'Part_1/Part01_03.OnceUponATime/src/main/java/OnceUponATime.java' },
    { name: 'Part01_04.Dinosaur', className: 'Dinosaur', path: 'Part_1/Part01_04.Dinosaur/src/main/java/Dinosaur.java' },
    { name: 'Part01_05.Message', className: 'Message', path: 'Part_1/Part01_05.Message/src/main/java/Message.java' },
    { name: 'Part01_06.HiAdaLovelace', className: 'HiAdaLovelace', path: 'Part_1/Part01_06.HiAdaLovelace/src/main/java/HiAdaLovelace.java' },
    { name: 'Part01_07.MessageThreeTimes', className: 'MessageThreeTimes', path: 'Part_1/Part01_07.MessageThreeTimes/src/main/java/MessageThreeTimes.java' },
    { name: 'Part01_08.Greeting', className: 'Greeting', path: 'Part_1/Part01_08.Greeting/src/main/java/Greeting.java' },
    { name: 'Part01_09.Conversation', className: 'Conversation', path: 'Part_1/Part01_09.Conversation/src/main/java/Conversation.java' },
    { name: 'Part01_10.Story', className: 'Story', path: 'Part_1/Part01_10.Story/src/main/java/Story.java' },
    { name: 'Part01_11.VariousVariables', className: 'VariousVariables', path: 'Part_1/Part01_11.VariousVariables/src/main/java/VariousVariables.java' },
    { name: 'Part01_12.IntegerInput', className: 'IntegerInput', path: 'Part_1/Part01_12.IntegerInput/src/main/java/IntegerInput.java' },
    { name: 'Part01_13.DoubleInput', className: 'DoubleInput', path: 'Part_1/Part01_13.DoubleInput/src/main/java/DoubleInput.java' },
    { name: 'Part01_14.BooleanInput', className: 'BooleanInput', path: 'Part_1/Part01_14.BooleanInput/src/main/java/BooleanInput.java' },
    { name: 'Part01_15.DifferentTypesOfInput', className: 'DifferentTypesOfInput', path: 'Part_1/Part01_15.DifferentTypesOfInput/src/main/java/DifferentTypesOfInput.java' },
    { name: 'Part01_16.SecondsInADay', className: 'SecondsInADay', path: 'Part_1/Part01_16.SecondsInADay/src/main/java/SecondsInADay.java' },
    { name: 'Part01_17.SumOfTwoNumbers', className: 'SumOfTwoNumbers', path: 'Part_1/Part01_17.SumOfTwoNumbers/src/main/java/SumOfTwoNumbers.java' },
    { name: 'Part01_18.SumOfThreeNumbers', className: 'SumOfThreeNumbers', path: 'Part_1/Part01_18.SumOfThreeNumbers/src/main/java/SumOfThreeNumbers.java' },
    { name: 'Part01_19.AdditionFormula', className: 'AdditionFormula', path: 'Part_1/Part01_19.AdditionFormula/src/main/java/AdditionFormula.java' },
    { name: 'Part01_20.MultiplicationFormula', className: 'MultiplicationFormula', path: 'Part_1/Part01_20.MultiplicationFormula/src/main/java/MultiplicationFormula.java' },
    { name: 'Part01_21.AverageOfTwoNumbers', className: 'AverageOfTwoNumbers', path: 'Part_1/Part01_21.AverageOfTwoNumbers/src/main/java/AverageOfTwoNumbers.java' },
    { name: 'Part01_22.AverageOfThreeNumbers', className: 'AverageOfThreeNumbers', path: 'Part_1/Part01_22.AverageOfThreeNumbers/src/main/java/AverageOfThreeNumbers.java' },
    { name: 'Part01_23.SimpleCalculator', className: 'SimpleCalculator', path: 'Part_1/Part01_23.SimpleCalculator/src/main/java/SimpleCalculator.java' },
    { name: 'Part01_24.SpeedingTicket', className: 'SpeedingTicket', path: 'Part_1/Part01_24.SpeedingTicket/src/main/java/SpeedingTicket.java' },
    { name: 'Part01_25.CheckYourIndentation', className: 'CheckYourIndentation', path: 'Part_1/Part01_25.CheckYourIndentation/src/main/java/CheckYourIndentation.java' },
    { name: 'Part01_26.Orwell', className: 'Orwell', path: 'Part_1/Part01_26.Orwell/src/main/java/Orwell.java' },
    { name: 'Part01_27.Ancient', className: 'Ancient', path: 'Part_1/Part01_27.Ancient/src/main/java/Ancient.java' },
    { name: 'Part01_28.Positivity', className: 'Positivity', path: 'Part_1/Part01_28.Positivity/src/main/java/Positivity.java' },
    { name: 'Part01_29.Adulthood', className: 'Adulthood', path: 'Part_1/Part01_29.Adulthood/src/main/java/Adulthood.java' },
    { name: 'Part01_30.LargerThanOrEqualTo', className: 'LargerThanOrEqualTo', path: 'Part_1/Part01_30.LargerThanOrEqualTo/src/main/java/LargerThanOrEqualTo.java' },
    { name: 'Part01_31.GradesAndPoints', className: 'GradesAndPoints', path: 'Part_1/Part01_31.GradesAndPoints/src/main/java/GradesAndPoints.java' },
    { name: 'Part01_32.OddOrEven', className: 'OddOrEven', path: 'Part_1/Part01_32.OddOrEven/src/main/java/OddOrEven.java' },
    { name: 'Part01_33.Password', className: 'Password', path: 'Part_1/Part01_33.Password/src/main/java/Password.java' },
    { name: 'Part01_34.Same', className: 'Same', path: 'Part_1/Part01_34.Same/src/main/java/Same.java' },
    { name: 'Part01_35.CheckingTheAge', className: 'CheckingTheAge', path: 'Part_1/Part01_35.CheckingTheAge/src/main/java/CheckingTheAge.java' },
    { name: 'Part01_36.LeapYear', className: 'LeapYear', path: 'Part_1/Part01_36.LeapYear/src/main/java/LeapYear.java' },
    { name: 'Part01_37.GiftTax', className: 'GiftTax', path: 'Part_1/Part01_37.GiftTax/src/main/java/GiftTax.java' }
  ],
  'Part_2': [
    { name: 'Part02_01.Squared', className: 'Squared', path: 'Part_2/Part02_01.Squared/src/main/java/Squared.java' },
    { name: 'Part02_02.SquareRootOfSum', className: 'SquareRootOfSum', path: 'Part_2/Part02_02.SquareRootOfSum/src/main/java/SquareRootOfSum.java' },
    { name: 'Part02_03.AbsoluteValue', className: 'AbsoluteValue', path: 'Part_2/Part02_03.AbsoluteValue/src/main/java/AbsoluteValue.java' },
    { name: 'Part02_04.ComparingNumbers', className: 'ComparingNumbers', path: 'Part_2/Part02_04.ComparingNumbers/src/main/java/ComparingNumbers.java' },
    { name: 'Part02_05.CarryOn', className: 'CarryOn', path: 'Part_2/Part02_05.CarryOn/src/main/java/CarryOn.java' },
    { name: 'Part02_06.AreWeThereYet', className: 'AreWeThereYet', path: 'Part_2/Part02_06.AreWeThereYet/src/main/java/AreWeThereYet.java' },
    { name: 'Part02_07.OnlyPositives', className: 'OnlyPositives', path: 'Part_2/Part02_07.OnlyPositives/src/main/java/OnlyPositives.java' },
    { name: 'Part02_08.NumberOfNumbers', className: 'NumberOfNumbers', path: 'Part_2/Part02_08.NumberOfNumbers/src/main/java/NumberOfNumbers.java' },
    { name: 'Part02_09.NumberOfNegativeNumbers', className: 'NumberOfNegativeNumbers', path: 'Part_2/Part02_09.NumberOfNegativeNumbers/src/main/java/NumberOfNegativeNumbers.java' },
    { name: 'Part02_10.SumOfNumbers', className: 'SumOfNumbers', path: 'Part_2/Part02_10.SumOfNumbers/src/main/java/SumOfNumbers.java' },
    { name: 'Part02_11.NumberAndSumOfNumbers', className: 'NumberAndSumOfNumbers', path: 'Part_2/Part02_11.NumberAndSumOfNumbers/src/main/java/NumberAndSumOfNumbers.java' },
    { name: 'Part02_12.AverageOfNumbers', className: 'AverageOfNumbers', path: 'Part_2/Part02_12.AverageOfNumbers/src/main/java/AverageOfNumbers.java' },
    { name: 'Part02_13.AverageOfPositiveNumbers', className: 'AverageOfPositiveNumbers', path: 'Part_2/Part02_13.AverageOfPositiveNumbers/src/main/java/AverageOfPositiveNumbers.java' },
    { name: 'Part02_14.Counting', className: 'Counting', path: 'Part_2/Part02_14.Counting/src/main/java/Counting.java' },
    { name: 'Part02_15.CountingToHundred', className: 'CountingToHundred', path: 'Part_2/Part02_15.CountingToHundred/src/main/java/CountingToHundred.java' },
    { name: 'Part02_16.FromWhereToWhere', className: 'FromWhereToWhere', path: 'Part_2/Part02_16.FromWhereToWhere/src/main/java/FromWhereToWhere.java' },
    { name: 'Part02_17.SumOfASequence', className: 'SumOfASequence', path: 'Part_2/Part02_17.SumOfASequence/src/main/java/SumOfASequence.java' },
    { name: 'Part02_18.SumOfASequenceTheSequel', className: 'SumOfASequenceTheSequel', path: 'Part_2/Part02_18.SumOfASequenceTheSequel/src/main/java/SumOfASequenceTheSequel.java' },
    { name: 'Part02_19.Factorial', className: 'Factorial', path: 'Part_2/Part02_19.Factorial/src/main/java/Factorial.java' },
    { name: 'Part02_20.RepeatingBreakingAndRemembering', className: 'RepeatingBreakingAndRemembering', path: 'Part_2/Part02_20.RepeatingBreakingAndRemembering/src/main/java/RepeatingBreakingAndRemembering.java' },
    { name: 'Part02_21.InAHoleInTheGround', className: 'InAHoleInTheGround', path: 'Part_2/Part02_21.InAHoleInTheGround/src/main/java/InAHoleInTheGround.java' },
    { name: 'Part02_22.Reprint', className: 'Reprint', path: 'Part_2/Part02_22.Reprint/src/main/java/Reprint.java' },
    { name: 'Part02_23.FromOneToParameter', className: 'FromOneToParameter', path: 'Part_2/Part02_23.FromOneToParameter/src/main/java/FromOneToParameter.java' },
    { name: 'Part02_24.FromParameterToOne', className: 'FromParameterToOne', path: 'Part_2/Part02_24.FromParameterToOne/src/main/java/FromParameterToOne.java' },
    { name: 'Part02_25.Division', className: 'Division', path: 'Part_2/Part02_25.Division/src/main/java/Division.java' },
    { name: 'Part02_26.DivisibleByThree', className: 'DivisibleByThree', path: 'Part_2/Part02_26.DivisibleByThree/src/main/java/DivisibleByThree.java' },
    { name: 'Part02_27.NumberUno', className: 'NumberUno', path: 'Part_2/Part02_27.NumberUno/src/main/java/NumberUno.java' },
    { name: 'Part02_28.Word', className: 'Word', path: 'Part_2/Part02_28.Word/src/main/java/Word.java' },
    { name: 'Part02_29.Summation', className: 'Summation', path: 'Part_2/Part02_29.Summation/src/main/java/Summation.java' },
    { name: 'Part02_30.Smallest', className: 'Smallest', path: 'Part_2/Part02_30.Smallest/src/main/java/Smallest.java' },
    { name: 'Part02_31.Greatest', className: 'Greatest', path: 'Part_2/Part02_31.Greatest/src/main/java/Greatest.java' },
    { name: 'Part02_32.Averaging', className: 'Averaging', path: 'Part_2/Part02_32.Averaging/src/main/java/Averaging.java' },
    { name: 'Part02_33.StarSign', className: 'StarSign', path: 'Part_2/Part02_33.StarSign/src/main/java/StarSign.java' },
    { name: 'Part02_34.AdvancedAstrology', className: 'AdvancedAstrology', path: 'Part_2/Part02_34.AdvancedAstrology/src/main/java/AdvancedAstrology.java' }
  ],
  'Part_3': [
    { name: 'Part03_01.ThirdElement', className: 'ThirdElement', path: 'Part_3/Part03_01.ThirdElement/src/main/java/ThirdElement.java' },
    { name: 'Part03_02.SecondPlusThird', className: 'SecondPlusThird', path: 'Part_3/Part03_02.SecondPlusThird/src/main/java/SecondPlusThird.java' },
    { name: 'Part03_03.IndexOutOfBoundsException', className: 'IndexOutOfBoundsException', path: 'Part_3/Part03_03.IndexOutOfBoundsException/src/main/java/IndexOutOfBoundsException.java' },
    { name: 'Part03_04.ListSize', className: 'ListSize', path: 'Part_3/Part03_04.ListSize/src/main/java/ListSize.java' },
    { name: 'Part03_05.LastInList', className: 'LastInList', path: 'Part_3/Part03_05.LastInList/src/main/java/LastInList.java' },
    { name: 'Part03_06.FirstAndLast', className: 'FirstAndLast', path: 'Part_3/Part03_06.FirstAndLast/src/main/java/FirstAndLast.java' },
    { name: 'Part03_07.RememberTheseNumbers', className: 'RememberTheseNumbers', path: 'Part_3/Part03_07.RememberTheseNumbers/src/main/java/RememberTheseNumbers.java' },
    { name: 'Part03_08.OnlyTheseNumbers', className: 'OnlyTheseNumbers', path: 'Part_3/Part03_08.OnlyTheseNumbers/src/main/java/OnlyTheseNumbers.java' },
    { name: 'Part03_09.GreatestInList', className: 'GreatestInList', path: 'Part_3/Part03_09.GreatestInList/src/main/java/GreatestInList.java' },
    { name: 'Part03_10.IndexOf', className: 'IndexOf', path: 'Part_3/Part03_10.IndexOf/src/main/java/IndexOf.java' },
    { name: 'Part03_11.IndexOfSmallest', className: 'IndexOfSmallest', path: 'Part_3/Part03_11.IndexOfSmallest/src/main/java/IndexOfSmallest.java' },
    { name: 'Part03_12.SumOfAList', className: 'SumOfAList', path: 'Part_3/Part03_12.SumOfAList/src/main/java/SumOfAList.java' },
    { name: 'Part03_13.AverageOfAList', className: 'AverageOfAList', path: 'Part_3/Part03_13.AverageOfAList/src/main/java/AverageOfAList.java' },
    { name: 'Part03_14.OnTheList', className: 'OnTheList', path: 'Part_3/Part03_14.OnTheList/src/main/java/OnTheList.java' },
    { name: 'Part03_15.PrintInRange', className: 'PrintInRange', path: 'Part_3/Part03_15.PrintInRange/src/main/java/PrintInRange.java' },
    { name: 'Part03_16.Sum', className: 'Sum', path: 'Part_3/Part03_16.Sum/src/main/java/Sum.java' },
    { name: 'Part03_17.RemoveLast', className: 'RemoveLast', path: 'Part_3/Part03_17.RemoveLast/src/main/java/RemoveLast.java' }
  ]
};

// Função para obter o link direto do arquivo no GitHub
function getGithubFileUrl(path) {
  return `https://github.com/matheussricardoo/java-programming1-mooc-helsinki/blob/main/${path}`;
}

// Função para obter o link raw do arquivo
function getRawFileUrl(path) {
  return `https://raw.githubusercontent.com/matheussricardoo/java-programming1-mooc-helsinki/main/${path}`;
}

// Função para criar o link do JDoodle com o código
function createJDoodleLink(exercise) {
  return `https://www.jdoodle.com/embed/v0/0?stdin=0&arg=0&rw=1&source=${encodeURIComponent(
    `// ${exercise.name}\n` +
    `// Link: ${getGithubFileUrl(exercise.path)}\n\n` +
    `// O código será carregado automaticamente aqui\n` +
    `public class ${exercise.className} {\n` +
    `    public static void main(String[] args) {\n` +
    `        // Seu código aqui\n` +
    `    }\n` +
    `}`
  )}&libs=0&testcases=&title=${encodeURIComponent(exercise.name)}`;
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

export default function MoocContent() {
  const { t } = useLanguage();
  const [selectedPart, setSelectedPart] = useState(PARTS[0]);
  const [exercises, setExercises] = useState(EXERCISES[PARTS[0].path]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setLoading(true);
    if (selectedPart.path === 'all') {
      const allExercises = Object.values(EXERCISES).flat();
      setExercises(allExercises);
    } else {
      setExercises(EXERCISES[selectedPart.path]);
    }
    setLoading(false);
  }, [selectedPart]);

  // Filtrar exercícios baseado na pesquisa
  const filteredExercises = exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                    <Link
                      href={createJDoodleLink(exercise)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300 flex items-center gap-2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627"/>
                        </svg>
                        <span className="truncate">{t.testIn} JDoodle</span>
                      </span>
                      <svg className="w-4 h-4 flex-shrink-0 text-gray-500 dark:text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Nenhum exercício encontrado para &quot;{searchTerm}&quot;
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
