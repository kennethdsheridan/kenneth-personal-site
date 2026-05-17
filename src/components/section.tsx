import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="max-w-3xl">
        {eyebrow ? <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">{eyebrow}</p> : null}
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">{title}</h2>
        {description ? <p className="mt-5 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
