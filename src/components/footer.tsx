
"use client";

import { useLanguage } from "@/context/language-context";

export function Footer() {
    const { translations } = useLanguage();
    
    return (
        <footer className="py-4 sm:py-6 border-t">
            <div className="container px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
                <p className="text-sm sm:text-base">
                    &copy; {new Date().getFullYear()} Matheus Ricardo. {translations.footer.text}
                </p>
            </div>
        </footer>
    );
}
