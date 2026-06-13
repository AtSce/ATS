import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/construction")({
  head: () => ({
    meta: [
      { title: "General Construction Works — AtripleS Construction & Engineering Pte. Ltd." },
      {
        name: "description",
        content:
          "Civil works, structural steel, concrete, foundations and supporting infrastructure for industrial facilities.",
      },
    ],
  }),
  component: Construction,
});

function Construction() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="General Construction Works"
      subtitle=""
      nav={
        <PageNav title="Our Business" links={businessLinks} currentPath="/business/construction" />
      }
    >
      <div className="lp-prose space-y-4">
        <p>
          At AtripleS Construction & Engineering Pte. Ltd., we provide comprehensive general
          construction services supported by strong technical capability and experienced project
          execution teams. Our scope covers industrial, commercial, and infrastructure development
          projects, delivered with a strong focus on safety, quality, and timely completion.
        </p>
        <p>
          We undertake a wide range of construction activities including civil works, structural
          steel works, concrete works, earthworks, foundations, building construction, and site
          development. In addition, we provide full supporting infrastructure works such as roads
          and accessways, drainage systems, underground utilities, pipe racks, equipment
          foundations, concrete platforms, and associated facility works required for industrial
          operations.
        </p>
        <p>
          Our approach emphasizes proper planning, efficient coordination, and strict adherence to
          engineering standards and client specifications. We ensure that all construction
          activities are carried out in compliance with safety regulations and quality requirements
          to achieve reliable and durable results.
        </p>
        <p>
          With a skilled workforce, strong project management capability, and commitment to
          excellence, AtripleS delivers general construction and infrastructure solutions that
          support the successful development and long-term performance of industrial facilities
          across Singapore and the region.
        </p>
      </div>
    </PageLayout>
  );
}
