type CapabilityCardProps = {
  title: string;
  description: string;
  tags?: string[];
};

export function CapabilityCard({ title, description, tags = [] }: CapabilityCardProps) {
  return (
    <article className="rounded-[2rem] border border-line bg-panel/82 p-6 shadow-2xl shadow-black/20 backdrop-blur">
      <h3 className="text-xl font-semibold tracking-[-0.02em] text-foreground">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
      {tags.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-blueprint">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}

type ArtifactCardProps = {
  eyebrow: string;
  title: string;
  summary: string;
  href?: string;
};

export function ArtifactCard({ eyebrow, title, summary, href }: ArtifactCardProps) {
  const content = (
    <article className="group h-full rounded-[1.6rem] border border-line bg-panel/72 p-5 transition hover:-translate-y-1 hover:border-gold/60 hover:bg-panel-strong/88">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{summary}</p>
    </article>
  );

  if (!href) return content;

  return <a href={href}>{content}</a>;
}
