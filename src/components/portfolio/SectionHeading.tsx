interface SectionHeadingProps {
  kicker: string;
  title: string;
}

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {kicker}
      </span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-glow" />
    </div>
  );
}
