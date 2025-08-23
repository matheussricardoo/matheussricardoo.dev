
"use client";

import { useLanguage } from '@/context/language-context';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function PortfolioPage() {
  const { translations } = useLanguage();

  useEffect(() => {
    document.title = translations.titles.home;
  }, [translations]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col">
      <main>
        <motion.section 
          id="about" 
          className="container py-8 sm:py-16 lg:py-24"
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
        >
          <div className="text-center md:text-left px-4 sm:px-6 lg:px-8">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {translations.home.name}
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary mt-2 sm:mt-4">
              {translations.home.title}
            </h2>
            <div className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 space-y-3 sm:space-y-4">
              {translations.home.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
