import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/project-works")({
  head: () => ({
    meta: [
      { title: "Project Works (EPC Mechanical) — AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "EPC mechanical project works including piping, structural steel and equipment installation.",
      },
    ],
  }),
  component: ProjectWorks,
});

function ProjectWorks() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Project Works"
      subtitle=""
      nav={
        <PageNav title="Our Business" links={businessLinks} currentPath="/business/project-works" />
      }
    >
      <div className="lp-prose space-y-4">
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., we specialize in delivering EPC
          mechanical project works for the oil &amp; gas, petrochemical, refinery, and industrial
          sectors. Our scope includes complete engineering, procurement, fabrication support,
          installation, testing, and commissioning of mechanical systems, ensuring safe, efficient,
          and reliable project execution.
        </p>
        <p>
          Our expertise covers piping and structure works, including fabrication, installation,
          modification, hydrotesting, and commissioning of process and utility piping systems. We
          also undertake structural steel works, such as fabrication and erection of steel
          structures, platforms, pipe racks, and supporting frameworks required for industrial
          facilities. In addition, we provide equipment installation services, including static and
          rotating equipment such as vessels, heat exchangers, pumps, compressors, and other process
          equipment, ensuring precise alignment and compliance with project specifications.
        </p>
        <p>
          With a strong focus on safety, quality, and schedule adherence, our experienced project
          teams ensure smooth coordination across all disciplines and seamless integration of
          mechanical systems. Through disciplined execution, skilled manpower, and proven site
          experience, AtripleS delivers reliable EPC mechanical solutions that meet client
          expectations and industry standards.
        </p>
      </div>
    </PageLayout>
  );
}
