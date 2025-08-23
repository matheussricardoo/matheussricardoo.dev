
"use client";

import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from '@/context/language-context';
import { motion } from "framer-motion";
import { useEffect } from 'react';

export default function WorkPage() {
  const { translations } = useLanguage();
  const workExperience = translations.work.experiences;

  useEffect(() => {
    document.title = translations.titles.work;
  }, [translations]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 }
  };

  return (
    <motion.section 
      id="work" 
      className="py-8 sm:py-16 lg:py-24 bg-secondary/50 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold">{translations.work.title}</h2>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {workExperience.map((exp) => (
            <Card key={exp.company}>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4">
                    <div className="flex-1">
                        <CardTitle className="font-headline text-lg sm:text-xl leading-tight">{exp.role}</CardTitle>
                        <p className="text-primary font-medium text-sm sm:text-base mt-1">{exp.company}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground flex-shrink-0 sm:text-right">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                {exp.description.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-sm sm:text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: paragraph }} 
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
