const links = [
  { href: "#about", label: "Profil" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold">
          Mohammed Kardal
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}