import { Section } from "@/components/section";

const stack = ["Nix", "NixOS", "Rust", "Go", "Bash", "Kubernetes", "Argo CD", "Grafana", "Prometheus", "QEMU/KVM", "Neovim", "Forgejo", "Tailscale", "Netmaker"];

export default function StackPage() {
  return (
    <Section eyebrow="Stack" title="Tools as an operating system." description="A public inventory of the tools, environments, and systems that shape the work.">
      <div className="flex flex-wrap gap-3">
        {stack.map((item) => (
          <span key={item} className="rounded-full border border-line bg-panel/70 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
