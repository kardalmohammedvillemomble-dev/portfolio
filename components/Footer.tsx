const socials = [
  { label: "GitHub", href: "https://github.com/medkaad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammed-kardal-7748021a9/" },
  { label: "Email", href: "mailto:kardalm132@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-sm text-muted">
      <ul className="flex flex-wrap justify-center gap-5">
        {socials.map((social) => (
          <li key={social.label}>
            <a href={social.href} className="hover:text-accent">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4">© {new Date().getFullYear()} Mohammed Kardal</p>
    </footer>
  );
}