import Section from "@/components/Section";

const items = [
  { label: "Email", value: "kardalm132@gmail.com", href: "mailto:kardalm132@gmail.com" },
  { label: "Téléphone", value: "+33 7 69 48 31 90", href: "tel:+33769483190" },
  { label: "Localisation", value: "Villemomble, Île-de-France" },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="flex flex-wrap gap-x-10 gap-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <p className="font-mono text-xs text-muted">{item.label}</p>
            {item.href ? (
              <a href={item.href} className="hover:text-accent">
                {item.value}
              </a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        Français — courant · Anglais — technique · Arabe — natif
      </p>
    </Section>
  );
}