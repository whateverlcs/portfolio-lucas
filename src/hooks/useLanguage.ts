import { useState, useEffect } from "react";
import { type Language } from "../translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("portfolio-language") as Language;
    if (savedLang) return savedLang;

    const browserLang = navigator.language.split("-")[0];
    return browserLang === "en" ? "en" : "pt";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return { language, toggleLanguage, setLanguage };
}
