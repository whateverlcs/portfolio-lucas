import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import {
  useTranslations,
  useLanguageContext,
} from "../../hooks/useLanguageContext";
import { type Language } from "../../translations";

interface ExperienceItem {
  title: Record<Language, string>;
  company: string;
  period: Record<Language, string>;
  location: Record<Language, string>;
  description: Record<Language, string>;
  achievements?: Record<Language, string[]>;
}

const experiences: ExperienceItem[] = [
  {
    title: {
      pt: "Analista de Desenvolvimento de Sistemas Júnior",
      en: "Systems Development Analyst",
    },
    company: "Mastersul COMEX",
    period: {
      pt: "Julho 2021 - Abril 2024",
      en: "July 2022 - April 2024",
    },
    location: {
      pt: "Híbrido",
      en: "Hybrid",
    },
    description: {
      pt: "Trabalhava com C#, JavaScript e React, realizando manutenção de sistemas legados (ASP.NET) e modernização do .NET Framework 4.5.2 para .NET 8. Desenvolvia novas features, APIs, integrações entre sistemas e automações para tarefas, como web scraping e extração de dados de PDF, otimizando processos internos da empresa.",
      en: "Worked with C#, JavaScript, and some React, handling legacy system maintenance (ASP.NET) and modernizing systems from .NET Framework 4.5.2 to .NET 8. Developed new features, APIs, and system integrations while implementing automation solutions such as web scraping and PDF data extraction to optimize company processes.",
    },
    achievements: {
      pt: [
        "Modernização de sistema legado de .NET Framework 4.5.2 para .NET 8",
        "Desenvolvimento de APIs RESTful para integração entre sistemas",
        "Automação de processos com web scraping e extração de PDFs",
      ],
      en: [
        "Legacy system modernization from .NET Framework 4.5.2 to .NET 8",
        "Development of RESTful APIs for system integration",
        "Process automation with web scraping and PDF data extraction",
      ],
    },
  },
];

export function Experience() {
  const t = useTranslations();
  const { language } = useLanguageContext();

  return (
    <section
      id="experience"
      className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container-custom mb-56">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolioTitleLight dark:text-portfolioTitleDark mb-12 transition-colors duration-200">
            {t.experienceTitle}
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600"></div>

            {experiences.map((exp, index) => {
              const isLeftAligned = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeftAligned ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`mb-8 relative ${
                    isLeftAligned ? "md:pr-8 md:text-right" : "md:pl-8"
                  }`}
                >
                  {/* Ponto na linha do tempo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div
                    className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-200 ml-8 md:ml-0 ${
                      isLeftAligned ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                        <Briefcase
                          className="text-blue-600 dark:text-blue-400"
                          size={24}
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {exp.title[language]}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-3 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{exp.period[language]}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{exp.location[language]}</span>
                          </div>
                        </div>

                        <p className="mt-4 text-gray-700 dark:text-gray-300">
                          {exp.description[language]}
                        </p>

                        {/* Seção de Principais Conquistas */}
                        {exp.achievements && (
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h4
                              className={`text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 ${
                                isLeftAligned ? "md:text-right" : ""
                              }`}
                            >
                              {language === "en"
                                ? "Key Achievements"
                                : "Principais Conquistas"}
                            </h4>

                            <div className="space-y-3">
                              {exp.achievements[language].map(
                                (achievement, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{
                                      opacity: 0,
                                      x: isLeftAligned ? -10 : 10,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.3,
                                      delay: idx * 0.1,
                                    }}
                                    className={`flex items-start gap-3 ${
                                      isLeftAligned
                                        ? "md:flex-row-reverse md:text-right"
                                        : ""
                                    }`}
                                  >
                                    <div className="flex-shrink-0 mt-1">
                                      <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                        <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                                      </div>
                                    </div>

                                    <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base flex-grow">
                                      {achievement}
                                    </span>
                                  </motion.div>
                                )
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
