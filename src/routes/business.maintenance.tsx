import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/maintenance")({
  head: () => ({
    meta: [
      { title: "Plant Maintenance Works — AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "Mechanical maintenance, piping repairs, structural maintenance, turnaround and shutdown support for process plants.",
      },
    ],
  }),
  component: Maintenance,
});

function Maintenance() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Plant Maintenance Works"
      subtitle=""
      nav={
        <PageNav title="Our Business" links={businessLinks} currentPath="/business/maintenance" />
      }
    >
      <div className="lp-prose space-y-4">
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., we provide comprehensive maintenance
          services for refineries and process plant facilities, ensuring safe, reliable, and
          continuous plant operations. Our maintenance solutions are designed to support oil &amp;
          gas, petrochemical, and industrial clients in maintaining asset integrity, minimizing
          downtime, and improving operational efficiency.
        </p>
        <p>
          Our scope of work includes mechanical maintenance, piping repairs and replacement,
          structural maintenance, equipment servicing, and plant modification works. We also support
          turnaround and shutdown activities, providing manpower, supervision, and execution
          resources for time critical maintenance works. In addition, we undertake preventive and
          corrective maintenance activities to ensure the long-term reliability of plant systems and
          equipment.
        </p>
        <p>
          With experienced supervisors, skilled technicians, and strong site execution capability,
          AtripleS ensures all maintenance works are carried out in strict compliance with safety
          standards, client procedures, and regulatory requirements. Our focus on planning,
          coordination, and efficient execution enables us to deliver maintenance services with
          minimal disruption to plant operations while maintaining the highest levels of safety and
          quality.
        </p>
      </div>
    </PageLayout>
  );
}
