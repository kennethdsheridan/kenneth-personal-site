import { CapabilityCard } from "@/components/cards";
import { Section } from "@/components/section";
import { systemLayers } from "@/lib/site";

export default function SystemsPage() {
  return (
    <Section
      eyebrow="Systems"
      title="Delivered systems, not abstract categories."
      description="Each card now starts from concrete work: GPU bring-up, 800G fabrics, reproducible environments, Kubernetes product delivery, and human-machine operating workflows."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {systemLayers.map((layer) => (
          <CapabilityCard key={layer.title} {...layer} />
        ))}
      </div>
    </Section>
  );
}
