import Section from "@/components/Section";

const groups = [
  { category: "Langages", items: ["Python", "PHP 8", "JavaScript", "TypeScript", "C", "Java"] },
  { category: "Frameworks", items: ["Django / DRF", "Symfony 6", "Vue.js", "React", "Next.js"] },
  { category: "Bases de données", items: ["PostgreSQL", "MySQL", "DB2"] },
  { category: "Mainframe / IBM i", items: ["COBOL", "JCL", "RPG", "CL", "DB2 for i", "HMC", "Flashcopy"] },
  { category: "Outils & DevOps", items: ["Docker", "Git / GitHub", "Linux", "Postman"] },
  { category: "Réseaux", items: ["TCP/IP", "SSH", "JDBC/ODBC"] },
  { category: "Méthodologies", items: ["Agile / Scrum", "UML"] },
];

export default function Skills() {
  return (
    <Section id="skills" title="Compétences">
      <dl>
        {groups.map((group) => (
          <div
            key={group.category}
            className="grid gap-2 border-b border-border py-4 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
          >
            <dt className="font-mono text-sm text-muted">{group.category}</dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded border border-border bg-white px-2.5 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}