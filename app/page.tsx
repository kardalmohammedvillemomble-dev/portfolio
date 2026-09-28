import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Skills />
      <section id="experience" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Expérience</h2>
      </section>
      <section id="projects" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Projets</h2>
      </section>
      <section id="contact" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section>
    </main>
  );
}