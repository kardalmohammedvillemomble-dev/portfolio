import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <section id="projects" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Projets</h2>
      </section>
      <section id="contact" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section>
    </main>
  );
}