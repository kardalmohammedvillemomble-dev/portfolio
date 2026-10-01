import Section from "@/components/Section";

type Project = {
  name: string;
  stack: string[];
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "Activity Planner SaaS",
    stack: ["Django REST", "React", "PostgreSQL", "Redis", "Celery", "Docker", "IA générative"],
    description:
      "Application SaaS destinée aux enseignants, avec génération d'activités pédagogiques par IA générative.",
  },
  {
    name: "EntreIci Marketplace",
    stack: ["Django REST", "React", "Docker", "Ollama (LLM local)"],
    description:
      "Plateforme d'annonces locales avec messagerie privée et détection d'arnaques par IA locale.",
  },
  {
    name: "Task Manager ML",
    stack: ["Django REST", "Vue.js", "Machine Learning", "Docker", "JWT"],
    description:
      "Gestion de tâches et de projets avec authentification JWT et prédiction de priorité par apprentissage automatique.",
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projets">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded border border-border bg-white p-5"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="mt-1 font-mono text-xs text-muted">
              {project.stack.join(" · ")}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-accent hover:underline"
              >
                Voir le projet
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}