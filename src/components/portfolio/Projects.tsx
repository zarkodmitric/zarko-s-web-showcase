import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    title: "eCommerce Product Page",
    description:
      "A responsive product details page with product image, price, description and Add to Cart button.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    title: "To Do App",
    description:
      "A simple task management app where users can add, complete and delete tasks.",
    technologies: ["React", "useState", "CSS"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A small dashboard that shows weather information using sample API data.",
    technologies: ["JavaScript", "API", "Responsive Design"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="Projects" title="Featured Work" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-hover flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              {/* Decorative preview area */}
              <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-glow/20">
                <span className="font-display text-4xl font-bold text-primary/40">
                  {"</>"}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://github.com/zarkodmitric"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Project
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
