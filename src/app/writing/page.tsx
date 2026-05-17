import { Section } from "@/components/section";
import { writingSeeds } from "@/lib/site";

export default function WritingPage() {
  return (
    <Section
      eyebrow="Writing"
      title="Short, technical, and useful."
      description="Writing will become the adoption loop for the site: systems notes, AI infrastructure tradeoffs, robotics field notes, and operating philosophy."
    >
      <div className="grid gap-3">
        {writingSeeds.map((seed) => (
          <article key={seed} className="rounded-2xl border border-line bg-panel/70 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">Seed</p>
            <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">{seed}</h2>
          </article>
        ))}
      </div>
    </Section>
  );
}
