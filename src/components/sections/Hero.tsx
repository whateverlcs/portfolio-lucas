import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import profilePicture from "../../assets/foto-perfil.jpeg";
import { useTranslations } from "../../hooks/useLanguageContext";
import { contactInfo } from "../../config/contact";

export function Hero() {
  const t = useTranslations();

  const scrollToNext = () => {
    const element = document.getElementById("tech-skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-background-dark transition-colors duration-200"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Conteúdo Textual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl text-center md:text-left mt-5 md:mt-0 sm:text-5xl md:text-6xl font-bold text-portfolioTitleLight dark:text-portfolioTitleDark mb-4 transition-colors duration-200">
              {t.heroTitle}
            </h1>
            <h2 className="text-2xl md:text-3xl text-center md:text-left text-portfolioSubtitleLight dark:text-portfolioSubtitleDark mb-6 transition-colors duration-200">
              {t.heroSubtitle}
            </h2>
            <p className="text-portfolioDescriptionLight dark:text-portfolioDescriptionDark text-justify md:text-left mb-8 text-lg leading-relaxed transition-colors duration-200">
              {t.heroDescription}
              <span className="font-bold"> {t.heroHighlight}</span>
            </p>

            {/* Botão de contato */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a
                href={`mailto:${contactInfo.email}`}
                className="btn-primary flex items-center gap-2 shadow-2xl shadow-portfolioMain dark:shadow-portfolioMain/50"
              >
                {t.contactButton}
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-10/12 md:h-[500px]">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <img
                  src={profilePicture}
                  alt={`${t.heroTitle} - ${t.heroSubtitle}`}
                  className="w-full h-full object-cover object-[30%_20%]"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Botão de Scroll */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <ArrowDown
            className="text-gray-400 hover:text-blue-600 dark:hover:text-portfolioMenuDark transition-colors duration-200"
            size={28}
          />
        </motion.div>
      </div>
    </section>
  );
}
