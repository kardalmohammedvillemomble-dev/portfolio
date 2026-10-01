import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center">
      <p className="font-mono text-sm text-muted">Erreur 404</p>
      <h1 className="mt-4 text-3xl font-bold">Page introuvable</h1>
      <p className="mt-3 text-muted">
        La page que tu cherches n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="mt-8 rounded bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
