
"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Languages, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/context/language-context';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const { translations, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-headline font-bold text-lg">{translations.header.title}</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.home}</Link>
          <Link href="/work" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.work}</Link>
          <Link href="/projects" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.projects}</Link>
          <Link href="/skills" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.skills}</Link>
          <a href="https://committolearn.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors">{translations.header.blog}</a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col h-full">
              <SheetHeader className="pb-6">
                <SheetTitle className="font-headline font-bold text-lg text-left">
                  {translations.header.title}
                </SheetTitle>
              </SheetHeader>
              
              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-4 mb-8 flex-1">
                <Link 
                  href="/" 
                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors py-2" 
                  onClick={handleLinkClick}
                >
                  {translations.header.home}
                </Link>
                <Link 
                  href="/work" 
                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors py-2" 
                  onClick={handleLinkClick}
                >
                  {translations.header.work}
                </Link>
                <Link 
                  href="/projects" 
                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors py-2" 
                  onClick={handleLinkClick}
                >
                  {translations.header.projects}
                </Link>
                <Link 
                  href="/skills" 
                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors py-2" 
                  onClick={handleLinkClick}
                >
                  {translations.header.skills}
                </Link>
                <a 
                  href="https://committolearn.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-medium text-base text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={handleLinkClick}
                >
                  {translations.header.blog}
                </a>
              </nav>

              {/* Mobile Language & Social */}
              <div className="mt-auto space-y-6">
                <div className="border-t pt-6">
                  <p className="text-sm font-medium mb-3">{translations.header.language || 'Language'}</p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setLanguage('en');
                        handleLinkClick();
                      }}
                    >
                      English
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => {
                        setLanguage('pt-br');
                        handleLinkClick();
                      }}
                    >
                      Português
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm font-medium mb-3">{translations.header.social || 'Social'}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://github.com/matheussricardoo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="https://www.linkedin.com/in/matheus-ricardo-426452266/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href="mailto:matheusri1@hotmail.com" aria-label="Email">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
