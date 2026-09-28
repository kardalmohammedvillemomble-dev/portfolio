import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" title="Profil">
      <p className="max-w-2xl leading-relaxed text-muted">
        Diplômé d&apos;un Master en Ingénierie des Systèmes d&apos;Information,
        je construis des applications web de bout en bout (Django, Symfony,
        Vue.js, React) et j&apos;ai administré des systèmes IBM i / AS400 en
        production. Ce double ancrage, développement moderne et systèmes
        critiques, m&apos;a appris à livrer un code fiable, à comprendre
        l&apos;infrastructure sur laquelle il tourne, et à travailler en
        autonomie du besoin jusqu&apos;à la mise en production.
      </p>
    </Section>
  );
}