import { createContext, type ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { translations, type Translations } from "../translations";

interface LanguageContextType {
  language: "pt" | "en";
  toggleLanguage: () => void;
  setLanguage: (lang: "pt" | "en") => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = translations[language];

  const value = {
    language,
    toggleLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
