
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Languages } from 'lucide-react';
import { useLanguage, Language } from '@/context/language-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const { translations, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-headline font-bold text-lg">{translations.header.title}</Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.home}</Link>
          <Link href="/work" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.work}</Link>
          <Link href="/projects" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.projects}</Link>
          <Link href="/skills" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.skills}</Link>
          <a href="https://committolearnn.github.io/CommitToLearn/" target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.blog}</a>
        </nav>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('pt-br')}>
                Português
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/matheussricardoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.linkedin.com/in/matheus-ricardo-426452266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:matheusri1@hotmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
