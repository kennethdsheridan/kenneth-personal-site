import Image from "next/image";
import {
  resumeCertifications,
  resumeContacts,
  resumeEducation,
  resumeExperience,
  resumeMetrics,
  resumeProjects,
  resumeRecognition,
  resumeSkills,
  resumeStrengths,
  resumeSummary,
} from "@/lib/resume";

function ResumePanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1.4rem] border border-[#d9d9d2] bg-[#f7f7f3]/90 p-5 text-[#15140f] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
      <h2 className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#050505]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function ResumeDocument() {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#d9d9d2] bg-white text-[#15140f] shadow-2xl shadow-black/20">
      <header className="relative border-b border-[#c7a24a] bg-[linear-gradient(135deg,rgba(184,134,45,0.10),transparent_34%),linear-gradient(180deg,#ffffff_0%,#f7f7f3_100%)] p-6 sm:p-10">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#050505,#b8862d,#b31b1b,#4b5320)]" />
        <div className="grid gap-6 sm:grid-cols-[1fr_7rem]">
          <div>
            <p className="font-mono text-xs font-extrabold uppercase tracking-[0.28em] text-[#b8862d]">Defense AI infrastructure engineering</p>
            <h1 className="mt-3 text-5xl font-black tracking-[-0.065em] text-[#15140f] sm:text-6xl">Kenny Sheridan</h1>
            <p className="mt-4 max-w-3xl text-lg font-bold leading-7 text-[#050505]">
              Infrastructure Product Engineer for AI, robotics, edge, agentic workflows, and supercomputing systems.
            </p>
            <div className="mt-5 grid gap-2 text-sm leading-7 text-[#2f302b]">
              {resumeSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <Image src="/kenny-profile.jpeg" alt="Kenny Sheridan" width={112} height={112} className="rounded-3xl border-2 border-[#b8862d]/65 object-cover" priority />
        </div>
        <div className="mt-7 grid gap-3 md:grid-cols-3">
          {resumeMetrics.map((metric) => (
            <div key={metric.value} className="rounded-2xl border border-[#d9d9d2] bg-white/85 p-4">
              <p className="text-2xl font-black text-[#b8862d]">{metric.value}</p>
              <p className="mt-1 text-xs font-semibold leading-5 text-[#4f5148]">{metric.label}</p>
            </div>
          ))}
        </div>
        <address className="mt-4 flex flex-wrap gap-3 rounded-2xl border border-[#d9d9d2] bg-white/85 p-4 not-italic">
          {resumeContacts.map((contact) => {
            const value = <span className="font-semibold text-[#15140f]">{contact.value}</span>;
            return (
              <div key={contact.label} className="flex items-baseline gap-2 text-xs">
                <span className="font-mono uppercase tracking-[0.16em] text-[#4b5320]">{contact.label}</span>
                {contact.href ? <a href={contact.href}>{value}</a> : value}
              </div>
            );
          })}
        </address>
      </header>

      <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_19rem]">
        <main>
          <section>
            <h2 className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#050505]">Experience</h2>
            <div className="mt-5 grid gap-6">
              {resumeExperience.map((item) => (
                <article key={`${item.role}-${item.org}`} className="border-l-2 border-[#b8862d] pl-5">
                  <h3 className="text-xl font-bold tracking-[-0.03em] text-[#15140f]">{item.role} | {item.org}</h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#4b5320]">{item.meta}</p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-[#2f302b] marker:text-[#b8862d]">
                    {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs font-black uppercase tracking-[0.22em] text-[#050505]">Selected Engineering Work</h2>
            <div className="mt-5 grid gap-5">
              {resumeProjects.map(([title, meta, summary]) => (
                <article key={title} className="border-l-2 border-[#b8862d] pl-5">
                  <h3 className="text-lg font-bold tracking-[-0.03em] text-[#15140f]">{title}</h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-[#4b5320]">{meta}</p>
                  <p className="mt-2 text-sm leading-7 text-[#2f302b]">{summary}</p>
                </article>
              ))}
            </div>
          </section>
        </main>

        <aside className="grid content-start gap-4">
          <ResumePanel title="Skills">
            <div className="grid gap-2">
              {resumeSkills.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[5rem_1fr] gap-2 text-xs leading-5">
                  <strong className="font-mono uppercase tracking-[0.12em] text-[#4b5320]">{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </ResumePanel>
          <ResumePanel title="Strengths">
            <ul className="grid gap-3 text-sm leading-6">
              {resumeStrengths.map(([title, body]) => (
                <li key={title}><strong>{title}</strong><span className="block text-[#625c50]">{body}</span></li>
              ))}
            </ul>
          </ResumePanel>
          <ResumePanel title="Education">
            <p className="text-sm font-bold">{resumeEducation[0]}</p>
            <p className="mt-1 text-sm leading-6 text-[#625c50]">{resumeEducation[1]}</p>
          </ResumePanel>
          <ResumePanel title="Certifications">
            <ul className="grid gap-2 text-sm leading-6 text-[#625c50]">{resumeCertifications.map((item) => <li key={item}>{item}</li>)}</ul>
          </ResumePanel>
          <ResumePanel title="Recognition">
            <ul className="grid gap-2 text-sm leading-6 text-[#625c50]">{resumeRecognition.map((item) => <li key={item}>{item}</li>)}</ul>
          </ResumePanel>
        </aside>
      </div>
    </article>
  );
}
