
"use client";

import { Wrench } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/context/language-context';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function SkillsPage() {
  const { translations } = useLanguage();
  const skillCategories = translations.skills.categories;

  useEffect(() => {
    document.title = translations.titles.skills;
  }, [translations]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.4 }
  };

  const cardAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.5,
      },
    }),
  };

  return (
    <motion.section 
      id="skills" 
      className="py-8 sm:py-16 lg:py-24 bg-secondary/50 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold">{translations.skills.title}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div key={category.title} custom={i} initial="initial" animate="animate" variants={cardAnimation} className="flex">
              <Card className="flex flex-col w-full">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-headline text-lg sm:text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1 sm:gap-2 flex-grow p-4 sm:p-6 pt-0">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-md text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
