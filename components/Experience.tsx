import Section from "@/components/Section";

type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
  env?: string;
};

const jobs: Job[] = [
  {
    role: "Développeur Backend Django",
    company: "Arimayi — Paris",
    period: "Nov. 2025 – Fév. 2026",
    points: [
      "Développement backend avec Django et Django REST Framework",
      "Conception et implémentation d'API REST",
      "Tests unitaires, correction de bugs, environnement Agile",
    ],
  },
  {
    role: "Administrateur IBM i",
    company: "Armonie — Paris",
    period: "Avr. 2023 – Déc. 2023",
    points: [
      "Administration et supervision de systèmes IBM i (AS400) en production",
      "Mise en place d'une solution de sauvegarde de la production avec Flashcopy",
      "Création de l'interface utilisateur, connexions JDBC/ODBC, configuration SSH et TCP/IP",
      "Gestion des travaux (jobs), des tables SQL, administration HMC et de la baie de stockage",
      "Analyse et résolution d'incidents techniques, continuité de service",
    ],
    env: "IBM i · PHP · HTML/CSS · HMC · Flashcopy · Zend Server",
  },
  {
    role: "Développeur Full-Stack Symfony & Vue.js",
    company: "Norsys Afrique — Maroc",
    period: "Fév. 2022 – Août 2022",
    points: [
      "Conception d'une application de gestion des tâches de secrétariat, d'évènements et de reporting",
      "Étude du besoin, wireframe, création de la base de données",
      "Mise en place de l'authentification, du routage, des pages et des formulaires",
      "Dockerisation de l'environnement de développement, intégration Bootstrap, design responsive",
    ],
    env: "PHP · Symfony · Composer · Vue.js · MySQL · Docker · Git",
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Expérience">
      <ol className="border-l border-border">
        {jobs.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pb-10 pl-6 last:pb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[6px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
            />
            <p className="font-mono text-sm text-muted">{job.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
            <p className="text-accent">{job.company}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {job.env && (
              <p className="mt-3 font-mono text-xs text-muted">{job.env}</p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}