import Image from "next/image";
import Link from "next/link";
import { ArtifactCard, CapabilityCard } from "@/components/cards";
import { Section } from "@/components/section";
import { experienceTimeline, focusAreas, metrics, projects, proofPoints, publicSurfaces, systemLayers, writingSeeds } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:py-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.34em] text-gold">Defense AI infrastructure engineering</p>
          <h1 className="marine-display-title mt-6 max-w-5xl text-5xl text-foreground sm:text-7xl lg:text-8xl">
            Systems for AI, robotics, and machines that have to keep working.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-9 text-muted sm:text-xl">
            I build reproducible infrastructure, hardware validation paths, and operating systems for accelerated compute, edge environments, agentic workflows, and the coming robotics age.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#f0c76c]" href="/systems">
              Explore Systems
            </Link>
            <Link className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground transition hover:border-gold/70 hover:bg-gold-soft" href="/projects">
              View Projects
            </Link>
          </div>
        </div>
        <div className="rounded-[2.4rem] border border-line bg-panel/78 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-5">
            <Image
              src="/kenny-profile.jpeg"
              alt="Kenny Sheridan"
              width={112}
              height={112}
              priority
              className="rounded-3xl border border-gold/30 object-cover shadow-2xl shadow-black/40"
            />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.26em] text-gold">Seattle, WA</p>
              <p className="mt-2 text-sm leading-6 text-muted">Infrastructure product engineer for AI, robotics, edge, agentic workflows, and supercomputing systems.</p>
            </div>
          </div>
          <div className="terminal-rule" />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.26em] text-blueprint">Current operating context</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span key={area} className="rounded-full border border-line bg-background/40 px-3 py-2 text-sm text-muted">
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-3">
            {metrics.map((metric) => (
              <div key={metric.value} className="rounded-2xl border border-line bg-background/35 p-4">
                <p className="text-3xl font-semibold text-gold">{metric.value}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        eyebrow="Evidence"
        title="Real systems work, organized by what was delivered."
        description="These are not placeholder capability tiles. They are the first pass at turning résumé bullets into explorable technical evidence."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {systemLayers.map((layer) => (
            <CapabilityCard key={layer.title} {...layer} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="A path from field operations to accelerated infrastructure.">
        <div className="grid gap-4">
          {experienceTimeline.map((item) => (
            <article key={`${item.period}-${item.org}`} className="grid gap-4 rounded-[1.6rem] border border-line bg-panel/68 p-5 md:grid-cols-[10rem_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{item.period}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em]">{item.role}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-blueprint">{item.org}</p>
                <p className="mt-3 text-sm leading-7 text-muted">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Public surfaces" title="Where the proof lives today.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {publicSurfaces.map((surface) => (
            <ArtifactCard key={surface.title} eyebrow="Profile" title={surface.title} summary={surface.summary} href={surface.href} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Selected artifacts" title="Project pages should become case studies next.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <ArtifactCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Signal" title="The through-line is validation-first systems judgment.">
        <div className="grid gap-3 md:grid-cols-2">
          {proofPoints.map((point) => (
            <div key={point} className="rounded-2xl border border-line bg-panel/58 p-5 text-sm leading-7 text-muted">
              {point}
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Writing queue"
        title="A public lab notebook for systems, infrastructure, and embodied AI."
        description="The first writing pass will be short, concrete, and useful: notes, diagrams, tradeoffs, and field observations over polished thought leadership."
      >
        <div className="grid gap-3">
          {writingSeeds.map((seed) => (
            <div key={seed} className="rounded-2xl border border-line bg-panel/58 p-5 font-mono text-sm text-muted">
              {seed}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
