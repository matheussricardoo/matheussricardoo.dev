
"use client";

import { AppWindow, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { useState, useEffect, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

export default function ProjectsPage() {
  const { translations } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  useEffect(() => {
    document.title = translations.titles.projects;
  }, [translations]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.github.com/users/matheussricardoo/repos");
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        const sortedProjects = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setProjects(sortedProjects);
      } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const allTopics = useMemo(() => {
    const topicsSet = new Set<string>();
    projects.forEach(p => p.topics.forEach(t => topicsSet.add(t)));
    return Array.from(topicsSet);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!selectedTopic) {
      return projects;
    }
    return projects.filter(p => p.topics.includes(selectedTopic));
  }, [projects, selectedTopic]);

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-16 sm:py-24 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container">
        <div className="flex items-center gap-4 mb-8">
            <AppWindow className="w-8 h-8 text-primary" />
            <h2 className="font-headline text-3xl sm:text-4xl font-bold">{translations.projects.title}</h2>
        </div>

        {!loading && !error && allTopics.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            <Button
              variant={selectedTopic === null ? 'default' : 'secondary'}
              onClick={() => setSelectedTopic(null)}
            >
              {translations.projects.all_projects}
            </Button>
            {allTopics.map(topic => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? 'default' : 'secondary'}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </Button>
            ))}
          </div>
        )}
        
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="flex-grow">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                </CardContent>
                <CardFooter className="flex justify-between items-end">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-24" />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {error && <p className="text-destructive text-center">{error}</p>}

        {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <CardDescription>{project.description || 'No description available.'}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.topics.map(topic => (
                        <Badge key={topic} variant="outline">{topic}</Badge>
                      ))}
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between items-end pt-4">
                    <div className="flex gap-2">
                        {project.homepage && (
                            <Button asChild size="sm">
                                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink />
                                    {translations.projects.live_demo}
                                </a>
                            </Button>
                        )}
                        <Button asChild variant="secondary" size="sm">
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                <Github />
                                {translations.projects.source}
                            </a>
                        </Button>
                    </div>
                </CardFooter>
                </Card>
            ))}
            </div>
        )}
      </div>
    </motion.section>
  );
}
