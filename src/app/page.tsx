
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
          className="container py-16 sm:py-24"
          initial="initial"
          animate="animate"
          variants={fadeInAnimation}
        >
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">{translations.home.name}</h1>
            <h2 className="text-2xl font-medium text-primary mt-2">{translations.home.title}</h2>
            <div className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto md:mx-0 space-y-4">
              {translations.home.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
