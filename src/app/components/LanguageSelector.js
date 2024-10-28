export default function LanguageSelector() {

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setLanguage('en')}
            className={`px-2 py-1 rounded-md text-sm transition-colors ${
              language === 'en'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('pt')}
            className={`px-2 py-1 rounded-md text-sm transition-colors ${
              language === 'pt'
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </div>
  );
}
