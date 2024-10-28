export const themeClasses = {
  // Classes para cards
  card: 'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-xl transition-theme',
  
  // Classes para textos
  text: {
    primary: 'text-light-text-primary dark:text-dark-text-primary',
    secondary: 'text-light-text-secondary dark:text-dark-text-secondary',
    accent: 'text-light-text-accent dark:text-dark-text-accent',
  },
  
  // Classes para botões
  button: {
    primary: 'bg-light-text-accent dark:bg-dark-text-accent text-white hover:opacity-90 transition-theme',
    secondary: 'border border-light-border dark:border-dark-border hover:bg-light-hover-background dark:hover:bg-dark-hover-background transition-theme',
  },
  
  // Classes para gradientes
  gradient: {
    text: 'bg-gradient-to-r from-light-gradient-start via-light-gradient-middle to-light-gradient-end dark:from-dark-gradient-start dark:via-dark-gradient-middle dark:to-dark-gradient-end bg-clip-text text-transparent',
    background: 'bg-gradient-to-r from-light-gradient-start/30 via-light-gradient-middle/30 to-light-gradient-end/30 dark:from-dark-gradient-start/20 dark:via-dark-gradient-middle/20 dark:to-dark-gradient-end/20',
  }
};
