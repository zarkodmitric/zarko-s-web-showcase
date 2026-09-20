import { useState, type FormEvent } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Demo only — no backend. Reset the form and show a confirmation.
    event.currentTarget.reset();
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading kicker="Contact" title="Get In Touch" />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <div className="space-y-4 lg:col-span-2">
            <a
              href="mailto:dmitricc52@gmail.com"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M3 6h18v12H3z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">Email</span>
                <span className="block truncate text-sm text-muted-foreground">
                  dmitricc52@gmail.com
                </span>
              </span>
            </a>

            <a
              href="https://github.com/zarkodmitric"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.27 5.67.41.36.78 1.05.78 2.13v3.16c0 .31.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">GitHub</span>
                <span className="block truncate text-sm text-muted-foreground">
                  github.com/zarkodmitric
                </span>
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/zarkodmitric"
              target="_blank"
              rel="noreferrer"
              className="card-hover flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5A2.49 2.49 0 002.5 6a2.49 2.49 0 002.48 2.5A2.49 2.49 0 007.47 6a2.49 2.49 0 00-2.49-2.5zM2.9 21.5h4.16V9.75H2.9V21.5zm7.1-11.75v11.75h4.16v-6.17c0-1.88.36-3.7 2.68-3.7 2.29 0 2.32 2.14 2.32 3.82v6.05h4.16v-6.76c0-3.44-.74-6.09-4.76-6.09-1.93 0-3.23 1.06-3.76 2.06h-.05V9.75H10z" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground">LinkedIn</span>
                <span className="block truncate text-sm text-muted-foreground">
                  linkedin.com/in/zarkodmitric
                </span>
              </span>
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40 sm:w-auto"
            >
              Send Message
            </button>

            {sent && (
              <p className="mt-4 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">
                Thanks for reaching out! I'll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
