import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}