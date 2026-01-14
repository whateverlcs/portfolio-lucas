import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe, Download } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useLanguageContext } from "../../hooks/useLanguageContext";
import { type TranslationKey } from "../../translations";
import { contactInfo } from "../../config/contact";

interface Section {
  id: string;
  labelKey: TranslationKey;
}

const sections: Section[] = [
  { id: "hero", labelKey: "home" },
  { id: "tech-skills", labelKey: "skills" },
  { id: "projects", labelKey: "projects" },
  { id: "experience", labelKey: "experience" },
  { id: "contact", labelKey: "contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguageContext();

  const handleDownloadCV = () => {
    const cvId =
      language === "pt" ? contactInfo.cvIds.pt : contactInfo.cvIds.en;
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${cvId}`;
    const filename = `CV_Lucas_Batistao_${language === "pt" ? "PT" : "EN"}.pdf`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-white/95 dark:bg-portfolioBackgroundDark/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="font-supermercado text-[48px] font-bold bg-gradient-to-r from-portfolioMain to-portfolioTitleLight dark:from-portfolioTitleDark dark:to-portfolioTitleDark bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            LB
          </button>

          {/* Menu Desktop */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8 ml-44">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "text-portfolioMain dark:text-portfolioMenuDark border-b-2 border-portfolioMain dark:border-portfolioMenuDark"
                    : "text-portfolioDescriptionLight dark:text-portfolioTitleDark hover:text-portfolioMain dark:hover:text-portfolioMenuDark"
                }`}
              >
                {t[section.labelKey]}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 w-auto justify-end">
            {/* Botão Download CV */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-portfolioMain text-white hover:bg-portfolioMainHover transition-colors group relative whitespace-nowrap"
              aria-label="Download CV"
              title="Download CV"
            >
              <Download size={18} />
              <span className="text-xs font-medium">Download CV</span>
              <span className="absolute top-10 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Download PDF
              </span>
            </button>

            {/* Botão de Idioma */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors group relative"
              aria-label={t.toggleLanguage}
              title={
                language === "pt" ? "Switch to English" : "Mudar para Português"
              }
            >
              <Globe
                size={20}
                className="transition-transform group-hover:rotate-12"
              />
              <span className="absolute top-11 left-1/2 transform -translate-x-1/2 text-xs font-semibold bg-gray-800 dark:bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {language === "pt" ? "EN" : "PT"}
              </span>
            </button>

            {/* Botão de Tema */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={t.toggleTheme}
            >
              {theme === "light" ? (
                <Moon
                  size={20}
                  className="transition-transform hover:rotate-12"
                />
              ) : (
                <Sun
                  size={20}
                  className="transition-transform hover:rotate-45"
                />
              )}
            </button>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ml-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-col space-y-4 mb-4 px-2">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                >
                  <Download size={18} />
                  <span className="font-medium">
                    {language === "pt" ? "Baixar CV" : "Download Resume"}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.toggleLanguage}
                  </span>
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-bold">
                      {language === "pt" ? "EN" : "PT"}
                    </span>
                  </button>
                </div>

                <div className="flex items-center gap-4 flex-1">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t.toggleTheme}
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-4 py-3 text-left rounded-lg transition-colors ${
                    activeSection === section.id
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-portfolioMenuDark font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {t[section.labelKey]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
