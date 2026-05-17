export const focusAreas = [
  "AI infrastructure",
  "robotics and embodied AI",
  "GPU and HPC platforms",
  "Nix and reproducible systems",
  "Rust automation",
  "edge and disconnected operations",
  "Kubernetes control planes",
  "observability and validation",
];

export const metrics = [
  { value: "10K+", label: "GPUs automated across heterogeneous providers and clusters" },
  { value: "800G+", label: "InfiniBand, RoCE, and NVMe-oF fabric experience" },
  { value: "10+ yrs", label: "production infrastructure, hardware, and systems delivery" },
];

export const systemLayers = [
  {
    title: "2,000 H100 bring-up at SF Compute",
    tags: ["H100", "H200", "B200", "B300", "MI300X", "Redfish"],
    description:
      "Led automated bring-up that moved bare metal into operational Kubernetes clusters through a single-command Rust workflow, scaling onboarding from 8 nodes to hundreds within weeks.",
  },
  {
    title: "800G fabric and storage validation",
    tags: ["InfiniBand", "RoCE", "NVMe-oF", "SONiC", "Weka", "Ceph"],
    description:
      "Benchmarked NVIDIA InfiniBand and AMD RoCE designs, including high-bandwidth all_reduce testing, storage paths, congestion awareness, and practical workload placement.",
  },
  {
    title: "Reproducible AI environments",
    tags: ["Linux", "NixOS", "QEMU/KVM", "macOS", "Tailscale"],
    description:
      "Use Nix and QEMU/KVM to create repeatable package, sandboxing, isolation, deployment, and validation environments for AI-first infrastructure work.",
  },
  {
    title: "Kubernetes product delivery",
    tags: ["Kubernetes", "Argo CD", "Grafana", "Prometheus", "Raft"],
    description:
      "Shape infrastructure products across cluster operations, control-plane integration, observability, deployment workflows, and customer-facing operational adoption.",
  },
  {
    title: "Human-machine operating workflows",
    tags: ["MCP", "OpenClaw", "Neovim", "agents", "docs"],
    description:
      "Build agent-facing workflows, durable editor/tooling systems, and technical documentation that help humans operate complex infrastructure with evidence and context.",
  },
];

export const experienceTimeline = [
  {
    period: "2026-present",
    role: "Member of Technical Staff - Infrastructure Product",
    org: "Andromeda",
    summary:
      "Senior product-engineering contributor across AI-first infrastructure, robotics, edge, Kubernetes, observability, platform delivery, and customer-facing workflows.",
  },
  {
    period: "2024-2026",
    role: "Senior Supercomputing Infrastructure Engineer",
    org: "San Francisco Compute Company",
    summary:
      "Delivered global GPU marketplace infrastructure, automated H100 bring-up, Rust fleet tooling, and high-performance storage/network validation.",
  },
  {
    period: "2024",
    role: "Senior AI and HPC Infrastructure Engineer",
    org: "TensorWave",
    summary:
      "Architected AMD MI300X cluster patterns and vendor-agnostic AI/ML infrastructure across RoCE, InfiniBand, and operational handoff paths.",
  },
  {
    period: "2017-2023",
    role: "Senior hardware infrastructure and performance engineer",
    org: "ServiceNow",
    summary:
      "Validated enterprise hardware for storage, networking, BIOS, firmware, PCIe, FPGA, SmartNIC, Weka, VAST, Ceph, IL5, FedRAMP, and FedRAMP High environments.",
  },
  {
    period: "2007-2015",
    role: "Meteorology instructor and systems operator",
    org: "U.S. Marine Corps",
    summary:
      "Administered modular data centers, maintained meteorology computing infrastructure, virtualized instructional environments, and produced operational forecasts and warnings.",
  },
];

export const publicSurfaces = [
  {
    title: "Forgejo portfolio",
    href: "https://forgejo.kennysheridan.io",
    summary:
      "Self-hosted code forge for public/private systems architecture, hardware lifecycle work, Nix systems, validation tooling, and long-term technical ownership.",
  },
  {
    title: "GitHub profile",
    href: "https://github.com/kennethdsheridan",
    summary:
      "Public Rust, Nix, GPU, MCP, infrastructure profiling, developer tooling, and Neovim work presented through a mainstream open-source surface.",
  },
  {
    title: "LinkedIn profile",
    href: "https://www.linkedin.com/in/kennethdashensheridan/",
    summary:
      "Professional network surface for infrastructure product engineering, accelerated compute, AI/ML platforms, and systems architecture roles.",
  },
  {
    title: "Resume PDF",
    href: "/resume/resume.pdf",
    summary:
      "The concise external artifact for defense AI infrastructure engineering, selected work, certifications, recognition, and technical scope.",
  },
];

export const projects = [
  {
    title: "Automated GPU bring-up",
    eyebrow: "Rust / Kubernetes / bare metal",
    summary:
      "Single-command automation for moving large NVIDIA H100 fleets from bare metal into operational Kubernetes clusters.",
  },
  {
    title: "Repeatable AI infrastructure environments",
    eyebrow: "Nix / QEMU / model-serving paths",
    summary:
      "Deterministic environments for secure packaging, sandboxed validation, and repeatable AI infrastructure testing.",
  },
  {
    title: "Hardware inventory and throughput profiling",
    eyebrow: "Rust / object storage / network profiling",
    summary:
      "Portable tooling for serialized hardware reports and network/object-storage throughput profiling across AI/HPC fleets.",
  },
  {
    title: "Self-hosted forge and operating surface",
    eyebrow: "Forgejo / Git / systems architecture",
    summary:
      "A self-hosted code forge for public and private systems work, infrastructure experiments, and long-term technical ownership.",
  },
];

export const proofPoints = [
  "Former U.S. Marine Corps meteorology instructor with operational computing and forecasting experience.",
  "Hands-on delivery across NVIDIA and AMD GPU platforms for AI/ML, robotics, edge, simulation, and datacenter workloads.",
  "Built and open-sourced Rust tooling for serialized hardware reports and portable throughput profiling.",
  "Worked across startup velocity and Fortune 500 operational maturity, from pre-seed through post-Series A and ServiceNow scale.",
];

export const writingSeeds = [
  "How to think about AI infrastructure as a system of constraints",
  "What robotics inherits from HPC, edge, and field operations",
  "Nix as an operating discipline, not just a package manager",
  "Why validation-first engineering matters for accelerated compute",
];
