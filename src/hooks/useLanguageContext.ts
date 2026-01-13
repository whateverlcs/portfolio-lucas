import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error(
      "useLanguageContext must be used within a LanguageProvider"
    );
  }
  return context;
}

export function useTranslations() {
  const { t } = useLanguageContext();
  return t;
}
