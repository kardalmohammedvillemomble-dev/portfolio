import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <section id="contact" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Contact</h2>
      </section>
    </main>
  );
}