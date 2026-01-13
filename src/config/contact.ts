export const contactInfo = {
  email: import.meta.env.VITE_EMAIL || "email@gmail.com",
  phone: import.meta.env.VITE_PHONE || "+55 (11) 99999-9999",
  phoneWithoutPattern:
    import.meta.env.VITE_PHONE_WITHOUT_PATTERN || "+5511999999999",
  locationBR: import.meta.env.VITE_LOCATION_BR || "São Paulo, Brasil",
  locationEN: import.meta.env.VITE_LOCATION_EN || "São Paulo, Brazil",

  github: "https://github.com/whateverlcs",
  linkedin:
    import.meta.env.VITE_LINKEDIN || "https://www.linkedin.com/in/example/",

  cvIds: {
    pt: import.meta.env.VITE_CV_PT_ID || "ID_DO_GOOGLE_DRIVE_EXEMPLO_PT",
    en: import.meta.env.VITE_CV_EN_ID || "ID_DO_GOOGLE_DRIVE_EXEMPLO_EN",
  },
};
