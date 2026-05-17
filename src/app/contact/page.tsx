import { Section } from "@/components/section";

export default function ContactPage() {
  return (
    <Section eyebrow="Contact" title="Reach out about systems, AI infrastructure, robotics, or hard technical problems.">
      <div className="grid gap-4 md:grid-cols-2">
        <a className="rounded-2xl border border-line bg-panel/72 p-5 transition hover:border-gold/60" href="mailto:kennethdashensheridan@gmail.com">kennethdashensheridan@gmail.com</a>
        <a className="rounded-2xl border border-line bg-panel/72 p-5 transition hover:border-gold/60" href="https://www.linkedin.com/in/kennethdashensheridan/">LinkedIn</a>
        <a className="rounded-2xl border border-line bg-panel/72 p-5 transition hover:border-gold/60" href="https://forgejo.kennysheridan.io">Forgejo</a>
        <a className="rounded-2xl border border-line bg-panel/72 p-5 transition hover:border-gold/60" href="https://github.com/kennethdsheridan">GitHub</a>
      </div>
    </Section>
  );
}
