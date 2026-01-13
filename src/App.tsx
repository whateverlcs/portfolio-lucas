// src/App.tsx
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { TechSkills } from "./components/sections/TechSkills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <Layout>
      <Hero />
      <TechSkills />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop />
    </Layout>
  );
}

export default App;
