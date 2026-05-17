import { ArtifactCard } from "@/components/cards";
import { Section } from "@/components/section";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <Section
      eyebrow="Projects"
      title="Case studies over repository lists."
      description="Each project page should explain the system, constraints, tradeoffs, evidence, and what changed because it existed."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ArtifactCard key={project.title} {...project} />
        ))}
      </div>
    </Section>
  );
}
