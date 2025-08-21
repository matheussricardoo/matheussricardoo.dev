
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
      className="py-16 sm:py-24 bg-secondary/50 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
            <Wrench className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">{translations.skills.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div key={category.title} custom={i} initial="initial" animate="animate" variants={cardAnimation} className="flex">
              <Card className="flex flex-col w-full">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 flex-grow">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="rounded-md">{skill}</Badge>
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
