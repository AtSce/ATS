import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/")({
  head: () => ({
    meta: [
      { title: "Our Services — Services Overview | AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "EPC mechanical, general construction, plant maintenance and core partnership services for industrial facilities.",
      },
    ],
  }),
  component: Business,
});

function Business() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Overview"
      subtitle=""
      nav={<PageNav title="Our Services" links={businessLinks} currentPath="/business" />}
    >
      <div className="lp-prose space-y-4">
        <h2 className="lp-h text-lg">Our Services Overview</h2>
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., we provide a comprehensive range of
          engineering, construction, and industrial support services for the oil &amp; gas,
          petrochemical, refinery, and infrastructure sectors. Our capabilities cover EPC mechanical
          project works including piping, structural steel, and equipment installation, along with
          plant maintenance services for refineries and process facilities. We also undertake
          general construction works such as LTA related repairs, road works, building works, and
          external maintenance services. In addition, we provide specialized support services
          including scaffolding, precision machining, and high torque bolting works. With a strong
          focus on safety, quality, and timely execution, AtripleS delivers reliable and cost
          effective solutions that support smooth project delivery and continuous plant operations.
        </p>
        <ul className="list-disc space-y-1 pl-6">
          <li>General Construction Works</li>
          <li>Project Works (EPC Mechanical)</li>
          <li>Plant Maintenance Works</li>
          <li>
            Core Partnership Services
            <ul className="mt-1 list-[circle] space-y-1 pl-6">
              <li>Scaffolding Services</li>
              <li>Machining Works</li>
              <li>High Torqueing Service</li>
              <li>Non Destructive Testing (NDT) Services</li>
              <li>Equipment Rental Support</li>
            </ul>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
}
