import { Section } from "@/components/section";

export default function NowPage() {
  return (
    <Section
      eyebrow="Now"
      title="Current operating context."
      description="A living page for what I am building, studying, and testing now."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          ["Building", "AI infrastructure product surfaces, Nix-driven environments, and agent-facing systems workflows."],
          ["Studying", "Robotics, embodied AI, hardware autonomy, sensing, and field-deployable compute."],
          ["Sharpening", "Rust systems tools, Kubernetes control planes, performance validation, and technical writing."],
        ].map(([title, body]) => (
          <article key={title} className="rounded-[2rem] border border-line bg-panel/76 p-6">
            <h2 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
