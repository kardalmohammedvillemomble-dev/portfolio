export default function Home() {
  return (
    <main id="top">
      <section className="p-8">
        <h1 className="text-3xl font-bold">Mohammed Kardal</h1>
        <p className="mt-2 text-lg text-muted">
          Ingénieur Études &amp; Développement — Full-Stack &amp; IBM i.
        </p>
        <p className="mt-4 font-mono text-sm text-muted">
          Django · Symfony · IBM i
        </p>
      </section>
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