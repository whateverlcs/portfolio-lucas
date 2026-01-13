import { Header } from "./Header";
import { Footer } from "./Footer";
import { LanguageProvider } from "../../contexts/LanguageContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark transition-colors duration-200">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
