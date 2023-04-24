'use client';
import { createContext, useState, ReactNode } from "react";

interface LanguageContextValue {
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
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };