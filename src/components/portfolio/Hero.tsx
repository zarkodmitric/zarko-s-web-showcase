export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-40 -left-24 h-80 w-80 rounded-full bg-glow/15 blur-3xl" />
        <div className="absolute top-64 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <span className="mb-6 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
          Available for junior frontend roles
        </span>

        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I'm <span className="gradient-text">Zarko Dmitric</span>
        </h1>
        <p className="mt-4 font-display text-xl font-medium text-foreground/90 sm:text-2xl">
          Junior Frontend Developer
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I focus on building responsive, user-friendly web applications using React,
          JavaScript, HTML and CSS. I enjoy turning ideas into clean and functional interfaces.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
