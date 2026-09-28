import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <section id="about" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Profil</h2>
      </section>
      <section id="skills" className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Compétences</h2>
      </section>
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