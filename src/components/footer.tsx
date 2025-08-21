
"use client";

import { useLanguage } from "@/context/language-context";

export function Footer() {
    const { translations } = useLanguage();
    
    return (
        <footer className="py-6 border-t">
            <div className="container text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Matheus Ricardo. {translations.footer.text}</p>
            </div>
        </footer>
    );
}
