import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance — AtripleS Construction & Engineering" },
      {
        name: "description",
        content: "Our industrial quality standards and compliance frameworks.",
      },
    ],
  }),
  component: QualityAssurance,
});

function QualityAssurance() {
  return (
    <PageLayout
      eyebrow="OUR COMMITMENT"
      title="Quality Assurance"
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/quality" />}
    >
      <div className="lp-prose space-y-6">
        <p>
          Quality Assurance is a core principle at AtripleS Construction & Engineering Pte. Ltd. and
          forms an integral part of our project execution strategy. We are committed to delivering
          engineering and construction services that consistently meet or exceed client
          requirements, contractual specifications, and applicable industry standards. AtripleS
          implements a structured Quality Management System covering all stages of project delivery,
          including planning, procurement, construction, inspection, testing, and final handover.
          Our approach emphasizes strict adherence to approved procedures, competent workmanship,
          continuous monitoring, and effective quality control measures to ensure defect free and
          reliable outcomes. We also focus on continuous improvement through regular audits,
          performance reviews, and lessons learned from ongoing and completed projects. By
          maintaining high quality standards and aligning with internationally recognized systems
          such as ISO 9001, AtripleS ensures that every project is delivered with precision,
          reliability, and long term performance, strengthening client confidence and project
          success.{" "}
        </p>
      </div>
    </PageLayout>
  );
}
