'use client';
import { createContext, useState, ReactNode, useMemo, useEffect } from "react";

export interface LanguageContextValue {
  language: string;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<string>(() => {
    // Get the language from localStorage on first render (this is for retaining the language value after the page refreshes)
    const storedLanguage = window.localStorage.getItem("language");
    return storedLanguage ?? "en";
  });

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  // Update the localStorage value whenever the language changes
  useEffect(() => {
    window.localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };