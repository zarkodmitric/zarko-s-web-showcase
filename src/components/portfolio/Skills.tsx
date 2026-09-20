import { SectionHeading } from "./SectionHeading";

const skills = [
  { name: "HTML", level: "Markup" },
  { name: "CSS", level: "Styling" },
  { name: "JavaScript", level: "Core language" },
  { name: "React", level: "UI library" },
  { name: "Git", level: "Version control" },
  { name: "GitHub", level: "Collaboration" },
  { name: "Responsive Design", level: "Mobile first" },
  { name: "Basic API Integration", level: "Fetching data" },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="Skills" title="What I Work With" />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-hover rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-glow/20 font-display text-sm font-bold text-primary">
                {skill.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground sm:text-base">
                {skill.name}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
