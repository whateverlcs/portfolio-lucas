import { motion } from "framer-motion";
import { Code, Palette, Cpu, Database, type LucideProps } from "lucide-react";
import { useTranslations } from "../../hooks/useLanguageContext";
import { type TranslationKey } from "../../translations";

interface SkillCategory {
  icon: React.ComponentType<LucideProps>;
  titleKey: TranslationKey;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    titleKey: "frontend",
    skills: ["React", "TypeScript", "Tailwind CSS", "CSS"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    titleKey: "backend",
    skills: ["Node.js", ".NET", "SQLServer", "MySQL", "PostgreSQL", "MongoDB"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    titleKey: "design",
    skills: ["Figma", "UI/UX", "Prototyping", "Wireframing"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    titleKey: "tools",
    skills: [
      "Git",
      "Bitbucket",
      "Docker",
      "RabbitMQ",
      "Apache Kafka",
      "Redis",
      "Visual Studio Code",
      "Visual Studio",
      "Postman",
    ],
    color: "from-orange-500 to-red-500",
  },
];

export function TechSkills() {
  const t = useTranslations();

  return (
    <section
      id="tech-skills"
      className="section-padding bg-white dark:bg-background-dark transition-colors duration-200"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolioTitleLight dark:text-portfolioTitleDark mb-20 transition-colors duration-200">
            {t.skillsTitle}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 md:mb-48">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-200"
                >
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color}`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-4 mb-4 transition-colors duration-200">
                    {t[category.titleKey]}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
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
