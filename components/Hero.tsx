import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-grid border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <p className="font-mono text-sm text-muted">
          Île-de-France · disponible immédiatement
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Mohammed Kardal
        </h1>
        <p className="mt-3 text-xl text-muted">
          Ingénieur Études &amp; Développement
        </p>

        <p className="mt-6 max-w-xl leading-relaxed">
          Je conçois et déploie des applications web de bout en bout, de
          l&apos;analyse du besoin à la mise en production, et j&apos;administre
          des systèmes IBM i en production. Autonome, je fais le lien entre
          développement moderne et systèmes critiques.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          
          <Link
            href="/projects"
            className="rounded bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
          >
          Voir mes projets
          </Link>
          <Link
            href="/contact"
            className="rounded border border-border px-5 py-2.5 font-medium hover:border-accent hover:text-accent"
          >
          Me contacter
          </Link>
        </div>

        <p className="mt-10 font-mono text-sm text-muted">
          Django · Symfony · Vue.js · React · IBM i
        </p>
      </div>
    </section>
  );
}