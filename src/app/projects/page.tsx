
"use client";

import { AppWindow, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/language-context";
import { useState, useEffect, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

type FilterType = 'all' | 'topic' | 'live';

export default function ProjectsPage() {
  const { translations } = useLanguage();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
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
        
        const manualProjects: Project[] = [
          {
            id: -1, // Using a unique ID
            name: 'CommitToLearn Blog',
            description: 'A personal blog to document studies and share knowledge about software development, technology, and career.',
            html_url: 'https://github.com/committolearnn/CommitToLearn',
            homepage: 'https://committolearnn.github.io/CommitToLearn/',
            topics: ['Blog', 'GitHub Pages', 'Education']
          },
          {
            id: -2,
            name: 'Think2Algo',
            description: 'An interactive learning platform to master algorithms and data structures, featuring flashcard challenges, detailed explanations, and code templates. Built with Next.js, React, and TailwindCSS.',
            html_url: '', // Private repo
            homepage: 'https://think2algo.vercel.app/',
            topics: ['Next.js', 'React', 'TypeScript', 'Education', 'Algorithms']
          }
        ];

        const sortedProjects = data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        
        setProjects([...manualProjects, ...sortedProjects]);

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
    if (activeFilter === 'live') {
      return projects.filter(p => p.homepage);
    }
    if (activeFilter === 'topic' && selectedTopic) {
      return projects.filter(p => p.topics.includes(selectedTopic));
    }
    return projects;
  }, [projects, activeFilter, selectedTopic]);

  const handleTopicClick = (topic: string) => {
    setActiveFilter('topic');
    setSelectedTopic(topic);
  };

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
    setSelectedTopic(null);
  }

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  };

  return (
    <motion.section 
      id="projects" 
      className="py-8 sm:py-16 lg:py-24 h-full"
      initial="initial"
      animate="animate"
      variants={fadeInAnimation}
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <AppWindow className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold">{translations.projects.title}</h2>
        </div>

        {!loading && !error && (
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'secondary'}
              onClick={() => handleFilterClick('all')}
              size="sm"
              className="text-xs sm:text-sm"
            >
              {translations.projects.all_projects}
            </Button>
             <Button
              variant={activeFilter === 'live' ? 'default' : 'secondary'}
              onClick={() => handleFilterClick('live')}
              size="sm"
              className="text-xs sm:text-sm"
            >
              {translations.projects.live_demos}
            </Button>
            {allTopics.map(topic => (
              <Button
                key={topic}
                variant={activeFilter === 'topic' && selectedTopic === topic ? 'default' : 'secondary'}
                onClick={() => handleTopicClick(topic)}
                size="sm"
                className="text-xs sm:text-sm"
              >
                {topic}
              </Button>
            ))}
          </div>
        )}
        
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="p-4 sm:p-6">
                  <Skeleton className="h-5 sm:h-6 w-3/4" />
                </CardHeader>
                <CardContent className="flex-grow p-4 sm:p-6 pt-0">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full mt-2" />
                  <Skeleton className="h-4 w-1/2 mt-2" />
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 p-4 sm:p-6">
                    <Skeleton className="h-8 sm:h-10 w-20 sm:w-24" />
                    <Skeleton className="h-8 sm:h-10 w-20 sm:w-24" />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {error && <p className="text-destructive text-center text-sm sm:text-base">{error}</p>}

        {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
                <Card key={project.id} className="flex flex-col">
                <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="font-headline text-lg sm:text-xl leading-tight">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    <CardDescription className="text-sm sm:text-base leading-relaxed">
                      {project.description || 'No description available.'}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.topics.map(topic => (
                        <Badge key={topic} variant="outline" className="text-xs">{topic}</Badge>
                      ))}
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-4 pt-4 p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        {project.homepage && (
                            <Button asChild size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                                <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                    {translations.projects.live_demo}
                                </a>
                            </Button>
                        )}
                        {project.html_url && (
                          <Button asChild variant="secondary" size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                                  {translations.projects.source}
                              </a>
                          </Button>
                        )}
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
