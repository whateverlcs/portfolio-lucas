import { motion } from "framer-motion";
import { Mail, Phone, MapPin, type LucideProps } from "lucide-react";
import {
  useTranslations,
  useLanguageContext,
} from "../../hooks/useLanguageContext";
import { type Language } from "../../translations";
import { contactInfo as configContactInfo } from "../../config/contact";

interface ContactInfo {
  icon: React.ComponentType<LucideProps>;
  title: Record<Language, string>;
  value: Record<Language, string> | string;
  href: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    title: {
      pt: "Email",
      en: "Email",
    },
    value: configContactInfo.email,
    href: `mailto:${configContactInfo.email}`,
  },
  {
    icon: Phone,
    title: {
      pt: "Telefone",
      en: "Phone",
    },
    value: configContactInfo.phone,
    href: `tel:${configContactInfo.phoneWithoutPattern}`,
  },
  {
    icon: MapPin,
    title: {
      pt: "Localização",
      en: "Location",
    },
    value: {
      pt: configContactInfo.locationBR,
      en: configContactInfo.locationEN,
    },
    href: "#",
  },
];

export function Contact() {
  const t = useTranslations();
  const { language } = useLanguageContext();

  return (
    <section
      id="contact"
      className="section-padding bg-white dark:bg-background-dark transition-colors duration-200"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolioTitleLight dark:text-portfolioTitleDark mb-4 transition-colors duration-200">
            {t.contactTitle}
          </h2>
          <p className="text-portfolioDescriptionLight dark:text-portfolioDescriptionDark text-center text-lg mb-12 max-w-2xl mx-auto transition-colors duration-200">
            {t.contactSubtitle}
          </p>

          <div className="grid gap-8 justify-center">
            {/* Informações de contato */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 h-full transition-all duration-200">
                <h3 className="text-2xl font-bold text-portfolioTitleLight dark:text-portfolioTitleDark mb-8 transition-colors duration-200">
                  {t.contactInfo}
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-200">
                        <info.icon
                          className="text-blue-600 dark:text-blue-400"
                          size={20}
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-portfolioTitleLight dark:text-portfolioTitleDark transition-colors duration-200">
                          {info.title[language]}
                        </h4>
                        <p className="text-portfolioDescriptionLight dark:text-portfolioDescriptionDark group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                          {typeof info.value === "string"
                            ? info.value
                            : (info.value as Record<Language, string>)[
                                language
                              ]}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
