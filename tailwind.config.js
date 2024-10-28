/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f8fafc', 
          card: '#ffffff',
          text: {
            primary: '#334155', 
            secondary: '#64748b', 
            accent: '#3b82f6', 
          },
          border: '#e2e8f0',
          hover: {
            background: '#f1f5f9',
            border: '#cbd5e1', 
          },
          gradient: {
            start: '#60a5fa', 
            middle: '#a78bfa', 
            end: '#f472b6', 
          }
        },
        dark: {

          background: '#111827',
          card: '#1f2937',
          text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            accent: '#60a5fa',
          },
          border: '#374151',
          hover: {
            background: '#374151',
            border: '#4b5563',
          },
          gradient: {
            start: '#1d4ed8',
            middle: '#7e22ce',
            end: '#be185d',
          }
        }
      },
    },
  },
  plugins: [],
};
