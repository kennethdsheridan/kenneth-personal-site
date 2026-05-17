import type { Metadata } from "next";
import { ResumeDocument } from "./resume-document";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume for Kenny Sheridan, infrastructure product engineer for AI, robotics, edge, agentic workflows, and supercomputing systems.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
      <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-line bg-panel/76 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">Canonical resume</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">Hosted here, backed by static artifacts.</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
            This site is now the canonical resume host. The standalone HTML and PDF remain available for sharing, printing, and fallback use.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#f0c76c]" href="/resume/resume.pdf">
            Download PDF
          </a>
          <a className="rounded-full border border-line px-5 py-3 text-center text-sm font-semibold text-foreground transition hover:border-gold/70 hover:bg-gold-soft" href="/resume/standalone/index.html">
            Standalone HTML
          </a>
        </div>
      </div>
      <ResumeDocument />
    </div>
  );
}
