import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="About" title="About Me" />

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-8 sm:p-10">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm a beginner frontend developer passionate about creating things for the web.
            Right now I'm learning React, improving my JavaScript skills every day and building
            practical projects to apply what I study. I care about writing clean code and
            designing interfaces that feel simple and intuitive. My goal is to join a team where
            I can contribute, keep growing and become a strong frontend developer.
          </p>
        </div>
      </div>
    </section>
  );
}
