import { Section } from "@/components/section";

export default function RoboticsPage() {
  return (
    <Section
      eyebrow="Robotics"
      title="Robotics is where infrastructure becomes embodied."
      description="This section will track the convergence of edge compute, sensor systems, simulation, controls, agent workflows, and field reliability."
    >
      <div className="rounded-[2rem] border border-line bg-panel/76 p-6 text-muted">
        <p className="max-w-3xl leading-8">
          The first version will collect learning notes and project logs around embodied AI, ROS-adjacent systems, edge deployment, RF/Wi-Fi sensing, hardware bring-up, and the infrastructure required to make autonomous systems practical outside clean demo environments.
        </p>
      </div>
    </Section>
  );
}
