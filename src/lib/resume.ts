export const resumeMetrics = [
  { value: "10K+", label: "GPUs automated across heterogeneous providers and clusters" },
  { value: "800G+", label: "InfiniBand and NVMe-oF fabric experience" },
  { value: "10+ yrs", label: "Production infrastructure and product monetization" },
];

export const resumeContacts = [
  { label: "Location", value: "Seattle, WA" },
  { label: "Email", value: "kennethdashensheridan@gmail.com", href: "mailto:kennethdashensheridan@gmail.com" },
  { label: "GitHub", value: "github.com/kennethdsheridan", href: "https://github.com/kennethdsheridan" },
  { label: "Forgejo", value: "forgejo.kennysheridan.io", href: "https://forgejo.kennysheridan.io" },
  { label: "Codeberg", value: "codeberg.org/kennysheridan", href: "https://codeberg.org/kennysheridan" },
  { label: "LinkedIn", value: "linkedin.com/in/kennethdashensheridan", href: "https://www.linkedin.com/in/kennethdashensheridan/" },
];

export const resumeSummary = [
  "Systems engineer with 10+ years of experience turning complex infrastructure into production-ready platforms.",
  "I build and evaluate reproducible AI-first, robotics, edge, and datacenter systems for agentic workloads, including offline AI and HPC for regulated or contested environments, bare-metal GPU orchestration, Kubernetes control planes, distributed Raft-backed reconciliation loops, high-performance networking and storage, QEMU/KVM sandboxing, observability, benchmarking, workload-to-hardware matching, and technical stack/infrastructure viability assessments.",
  "My experience spans medium-sized companies scaling into Fortune 500 operations, as well as pre-seed through post-Series A startups valued from $300M to $1B. I work well in startup environments where priorities change quickly and ideas need to become shipped systems without losing reliability or technical depth. I’m a former U.S. Marine Corps meteorology instructor with hands-on HPC delivery experience across NVIDIA and AMD platforms for AI/ML, robotics, edge, simulation, and datacenter workloads.",
];

export const resumeExperience = [
  {
    role: "Member of Technical Staff - Infrastructure Product",
    org: "Andromeda",
    meta: "Greater Seattle Area, Remote | March 2026 - Present | andromeda.ai",
    bullets: [
      "Serve as a senior product-engineering contributor shaping AI-first infrastructure product direction across robotics, edge, Kubernetes, observability, platform delivery, and customer-facing workflows.",
      "Delivered major infrastructure products on compressed iteration cycles, translating ambiguous product and infrastructure requirements into shipped systems, automation, and operational patterns.",
      "Drive Kubernetes platform work beyond observability, including deployment workflows, control-plane integration, cluster operations, developer experience, and productized infrastructure paths.",
      "Create rich Kubernetes and infrastructure product documentation for customer-facing workflows, designed for online hosting, mobile viewing, and clear operational adoption.",
      "Use Nix, Kubernetes, and QEMU/KVM to build reproducible package, sandboxing, isolation, deployment, and repeatable infrastructure validation environments.",
      "Guide performance engineering, system modeling, cache strategy, storage evaluation, offload analysis, and workload placement so products reach market quickly without losing operational reliability.",
    ],
  },
  {
    role: "Senior Supercomputing Infrastructure Engineer",
    org: "San Francisco Compute Company",
    meta: "Greater Seattle Area, Remote | September 2024 - March 2026 | sfcompute.com",
    bullets: [
      "Led automated bring-up for 2,000 NVIDIA H100 GPUs, moving bare metal into operational Kubernetes clusters through a single-command Rust-based deployment workflow.",
      "Scaled onboarding from 8 nodes to hundreds of GPU nodes within weeks, reducing product iteration time by eliminating manual provisioning across hardware, networking, and company infrastructure integration.",
      "Deployed distributed supercomputing infrastructure globally for GPU marketplace capacity, with emphasis on scalable utilization, reliability, and operational repeatability.",
      "Built and open-sourced Rust tooling for serialized infrastructure inventory plus object-storage and network throughput profiling across bare-metal AI/HPC environments.",
      "Designed a private Linux-side hardware discovery and lifecycle agent for bare-metal fleet introspection, host validation, and infrastructure control-plane integration.",
      "Optimized compute, SDN, network fabric, high-performance storage, performance testing, custom Kubernetes controllers/operators, resource management, near-metal validation, and repeatable systems setup.",
    ],
  },
  {
    role: "Senior AI and HPC Infrastructure Engineer",
    org: "TensorWave",
    meta: "Greater Seattle Area, Remote | May 2024 - July 2024 | tensorwave.com",
    bullets: [
      "Architected on-premises AMD MI300X GPU clusters using EPYC CPUs and RDMA over Converged Ethernet on traditional TCP/IP networks.",
      "Benchmarked NVIDIA InfiniBand and AMD RoCE designs, including high-bandwidth all_reduce testing over 800G switching infrastructure.",
      "Designed vendor-agnostic AI/ML infrastructure patterns capable of scaling toward hundreds of nodes while reducing accelerator lock-in.",
      "Created deployment documentation for GPU cluster setup, configuration, and operational handoff.",
    ],
  },
  {
    role: "Senior Hardware Infrastructure Automation Engineer",
    org: "ServiceNow",
    meta: "Kirkland, WA | February 2022 - December 2023 | servicenow.com",
    bullets: [
      "Engineered HPC system testing software for distributed enterprise infrastructure, including stress validation, benchmarking, and reliability assessment workflows.",
      "Validated infrastructure hardware for IL5, FedRAMP, and FedRAMP High environments, including Thales SafeNet security devices.",
      "Led migration of internal automation from Python and Bash to Go, improving efficiency across heterogeneous hardware environments.",
      "Built Redfish-based SKU auditing, NIC benchmarking, and GitLab CI/CD workflows for hardware-software validation.",
    ],
  },
  {
    role: "Senior Cloud Hardware Performance Test Engineer",
    org: "ServiceNow",
    meta: "Kirkland, WA | May 2017 - February 2022 | servicenow.com",
    bullets: [
      "Led hardware performance testing across storage, networking, BIOS, firmware, PCIe, FPGAs, SmartNICs, Smart Storage cards, NVMe, Linux filesystems, Weka, VAST, and Ceph.",
      "Worked with ODMs, system engineers, CTO stakeholders, and product teams to refine infrastructure roadmaps and train engineers on repeatable test methods.",
    ],
  },
  {
    role: "System Administrator",
    org: "NexLevel Information Technology",
    meta: "Sacramento, CA | August 2015 - May 2017 | nexlevelit.com",
    bullets: [
      "Provided Tier 3 Unix and Windows server support for biometric systems serving 300+ remote clients, including storage recovery, monitoring scripts, and production baseline improvements.",
    ],
  },
  {
    role: "Technical Instructor of Meteorology",
    org: "U.S. Marine Corps",
    meta: "Quantico, VA | May 2007 - June 2015 | marines.mil",
    bullets: [
      "Administered two modular data centers, maintained METMF(R) computing infrastructure, virtualized instructional environments, and managed WAN-connected remote sensing sites.",
      "Produced 300+ surface observations, 100+ forecasts, and 50+ weather warnings cited in Navy and Marine Corps Achievement Medal recognition.",
    ],
  },
];

export const resumeProjects = [
  ["Repeatable AI infrastructure environments", "Nix | QEMU/KVM | Secure packaging | Model-serving cache paths", "Set up deterministic infrastructure environments that use Nix for secure packages, QEMU/KVM for sandboxed validation, and caching strategies to serve AI models quickly."],
  ["AI-first infrastructure product delivery", "Kubernetes | Product engineering | Observability | GPU platforms", "Delivered customer-facing and internal infrastructure products at 9,000+ GPU scale, balancing fast iteration, operational adoption, Kubernetes platform work, and production reliability."],
  ["Automated GPU bring-up and onboarding", "Rust | Kubernetes | Bare metal | NVIDIA H100", "Single-command workflow that deploys hardware, joins company infrastructure, configures networking, and removes manual intervention from large-scale GPU node onboarding."],
  ["Infrastructure inventory and throughput profiling", "Rust | Hardware inventory | Object storage | Network profiling", "Built public tooling for serialized hardware reports and portable object-storage and network throughput profiling, supporting faster validation across bare-metal AI/HPC fleets."],
  ["Bare-metal lifecycle agent", "Rust | Linux agents | Hardware discovery | Control-plane integration", "Designed private host-side agent work for hardware discovery, lifecycle state, fleet validation, and integration with infrastructure control planes."],
  ["Multi-node GPU cluster networking", "AMD MI300X | NVIDIA | RoCE | InfiniBand | 800G fabrics", "Designed vendor-agnostic topologies across AMD and NVIDIA accelerators, including RoCE on TCP/IP networks and InfiniBand benchmarking for large-scale AI/HPC clusters."],
];

export const resumeSkills = [
  ["Code", "Linux, Rust, Go, Bash, NixOS"],
  ["Build", "Nix packaging, QEMU/KVM"],
  ["Control", "Kubernetes operators, GitOps, Argo CD"],
  ["Agentic", "Workflows, harnesses, MCP"],
  ["Data", "Raft reconciliation, embedded databases"],
  ["Hardware", "Bare metal, Redfish, H100, H200, B200, B300, MI300X"],
  ["GPU", "CUDA, ROCm, NCCL"],
  ["Fabric", "RoCE, InfiniBand, NVMe-oF, SONiC, SDN"],
  ["Storage", "Weka, VAST, Ceph"],
  ["Telemetry", "OpenTelemetry, Prometheus, Grafana"],
];

export const resumeStrengths = [
  ["Defense AI infrastructure", "Build offline AI and HPC platforms for regulated, contested, edge, simulation, and datacenter workloads."],
  ["Reproducible systems", "Make infrastructure repeatable, auditable, and safe to operate across environments."],
  ["GPU and edge orchestration", "Automate accelerator fleets across providers, clusters, and constrained networks."],
  ["Fabric and storage paths", "Design data movement, storage access, offload paths, and telemetry for reliable workloads."],
  ["Validation-first delivery", "Benchmark, stress, profile, model, and place workloads with operational evidence."],
];

export const resumeEducation = ["Air University / Community College of the Air Force", "Keesler AFB | 62 credits in meteorology, forecasting, and atmospheric physics"];
export const resumeCertifications = ["Introduction to Blockchain - Amazon Web Services, 2021", "Basic Instructor Course - Community College of the Air Force, 2012", "Meteorology and Oceanography Analyst Forecaster - Community College of the Air Force, 2008"];
export const resumeRecognition = ["Navy and Marine Corps Achievement Medal", "Good Conduct Medal", "Letter of Appreciation, Director of Meteorology"];
