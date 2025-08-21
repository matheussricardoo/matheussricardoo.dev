
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
      className="py-16 sm:py-24 bg-secondary/50 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">{translations.work.title}</h2>
        </div>
        <div className="space-y-8">
          {workExperience.map((exp) => (
            <Card key={exp.company}>
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="font-headline text-xl">{exp.role}</CardTitle>
                        <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
                {exp.description.map((paragraph, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
