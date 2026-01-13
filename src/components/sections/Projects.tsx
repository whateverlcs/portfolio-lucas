import { motion } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import {
  useTranslations,
  useLanguageContext,
} from "../../hooks/useLanguageContext";
import { type Language } from "../../translations";
import letmeaskImage from "../../assets/letmeask.png";
import moveitImage from "../../assets/moveit.png";
import pdfReaderImage from "../../assets/pdfreader.jpg";
import readitImage from "../../assets/readit.png";
import videoDownloaderImage from "../../assets/videodownloader.jpg";
import whatismyweatherImage from "../../assets/whatismyweather.png";

interface Project {
  title: Record<Language, string>;
  description: Record<Language, string>;
  tech: string[];
  github: string;
  live: string;
  picture: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    title: {
      pt: "Readit",
      en: "Readit",
    },
    description: {
      pt: "Plataforma completa para leitura e gerenciamento de Mangás, Manhwas e Donghuas, com autenticação de usuários e controle personalizado das obras.",
      en: "Complete platform for reading and managing Manga, Manhwa, and Donghua, featuring user authentication and personalized content management.",
    },
    tech: [
      ".NET",
      "WPF",
      "SQLServer",
      "Entity Framework",
      "Dapper",
      "BCrypt",
      "Material Design",
      "Serilog",
    ],
    github: "https://github.com/whateverlcs/readit",
    live: "#",
    picture: readitImage,
    featured: true,
  },
  {
    title: {
      pt: "Let me ask",
      en: "Let me ask",
    },
    description: {
      pt: "Plataforma para criação de salas de perguntas e respostas em ambientes de livestream, permitindo interação e esclarecimento de dúvidas em tempo real.",
      en: "Platform for creating Q&A rooms in livestream environments, enabling real-time interaction and question handling.",
    },
    tech: ["React.js", "Typescript", "SASS", "Classnames", "Firebase"],
    github: "https://github.com/whateverlcs/letmeask",
    live: "#",
    picture: letmeaskImage,
    featured: true,
  },
  {
    title: {
      pt: "PDF Reader",
      en: "PDF Reader",
    },
    description: {
      pt: "Ferramenta simples para leitura de PDFs, com identificação automática de arquivos em uma pasta selecionada e navegação entre eles.",
      en: "Simple PDF reading tool with automatic detection of files in a selected folder and navigation between them.",
    },
    tech: [".NET", "WPF", "Material Design", "Web View", "Serilog"],
    github: "https://github.com/whateverlcs/pdf-reader",
    live: "#",
    picture: pdfReaderImage,
    featured: false,
  },
  {
    title: {
      pt: "What is my weather",
      en: "What is my weather",
    },
    description: {
      pt: "Sistema de previsão do tempo baseado na cidade informada pelo usuário, utilizando a API da HG Brasil em uma aplicação desktop desenvolvida em WPF.",
      en: "Weather forecast system based on the city entered by the user, using the HG Brasil API in a desktop application developed with WPF.",
    },
    tech: [".NET", "WPF", "Material Design", "API HG Brasil", "Serilog"],
    github: "https://github.com/whateverlcs/whatismyweather",
    live: "#",
    picture: whatismyweatherImage,
    featured: false,
  },
  {
    title: {
      pt: "Video Downloader",
      en: "Video Downloader",
    },
    description: {
      pt: "Ferramenta para download de vídeos e áudios, com suporte a múltiplas fontes, utilizando YoutubeDLSharp, FFmpeg e FxTwitter.",
      en: "Tool for downloading videos and audio, with support for multiple sources, using YoutubeDLSharp, FFmpeg, and FxTwitter.",
    },
    tech: [
      ".NET",
      "WPF",
      "Material Design",
      "FFmpeg",
      "YoutubeDLSharp",
      "Serilog",
    ],
    github: "https://github.com/whateverlcs/videodownloader",
    live: "#",
    picture: videoDownloaderImage,
    featured: false,
  },
  {
    title: {
      pt: "Move-it",
      en: "Move-it",
    },
    description: {
      pt: "Aplicação voltada a incentivar hábitos saudáveis por meio de um sistema de gamificação, onde os usuários ganham XP ao concluir tarefas e evoluem de nível.",
      en: "Application designed to encourage healthy habits through a gamification system, where users earn XP by completing tasks and level up.",
    },
    tech: ["React.js", "Typescript", "Next.js", "JS-Cookie", "Vercel"],
    github: "https://github.com/whateverlcs/move-it",
    live: "#",
    picture: moveitImage,
    featured: true,
  },
];

export function Projects() {
  const t = useTranslations();
  const { language } = useLanguageContext();

  return (
    <section
      id="projects"
      className="section-padding bg-gray-50 dark:bg-gray-900 transition-colors duration-200"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolioTitleLight dark:text-portfolioTitleDark mb-12 transition-colors duration-200">
            {t.projectsTitle}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Destaque */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    <Star size={14} className="fill-white" />
                    {t.featured}
                  </div>
                )}

                {/* Imagem do projeto (placeholder) */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.picture}
                    alt={project.title[language]}
                    className="w-full h-full object-cover object-[30%_0%] group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {project.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description[language]}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
                    >
                      <Github size={18} />
                      {t.code}
                    </a>
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors duration-200"
                      >
                        <ExternalLink size={18} />
                        {t.demo}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão ver mais */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/whateverlcs?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              {t.viewAllProjects}
              <ExternalLink size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
