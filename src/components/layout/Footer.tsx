import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useTranslations } from "../../hooks/useLanguageContext";
import { contactInfo } from "../../config/contact";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-400 mt-2">
              © {currentYear} - {t.rights}
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex space-x-6">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 hover:bg-blue-700 rounded-full transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="p-2 bg-gray-800 hover:bg-red-600 rounded-full transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            {t.madeWith}{" "}
            <Heart size={16} className="fill-red-500 text-red-500" /> {t.using}
          </p>
        </div>
      </div>
    </footer>
  );
}
