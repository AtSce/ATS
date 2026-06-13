import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/hsse")({
  head: () => ({
    meta: [
      { title: "HSSE Philosophy — AtripleS Construction & Engineering" },
      { name: "description", content: "Health, Safety, Security, and Environment policies." },
    ],
  }),
  component: HssePhilosophy,
});

function HssePhilosophy() {
  return (
    <PageLayout
      eyebrow="OUR COMMITMENT"
      title="HSSE Philosophy"
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/hsse" />}
    >
      <div className="lp-prose space-y-6">
        <p>
          Health, Safety, Security & Environment (HSSE) performance is a fundamental priority at and
          a critical factor in the successful delivery of every project. We are fully committed to
          protecting the health and safety of our employees, clients, subcontractors, and the
          environment by integrating HSSE into all aspects of our business operations and project
          execution. AtripleS adopts a structured HSSE Management System that includes key elements
          such as HSSE policies and procedures, safety training, toolbox meetings, incident
          reporting and investigation, hazard identification and risk assessment, subcontractor
          control, site inspections, maintenance practices, emergency preparedness, and occupational
          health and environmental protection programs. We continuously promote a strong safety
          culture through awareness, communication, and strict compliance with applicable
          regulations and industry standards, while striving for continuous improvement in all HSSE
          performance areas. AtripleS is committed to aligning with internationally recognized
          standards such as ISO 9001 and ISO 14001 as well as achieving and maintaining BizSAFE Star
          certification, the highest level of Singapore’s Workplace Safety and Health (WSH)
          framework, demonstrating our commitment to strong safety leadership and risk management
          practices. We believe that strong HSSE performance not only protects lives and the
          environment but also enhances productivity, efficiency, and long term value for our
          clients.{" "}
        </p>
      </div>
    </PageLayout>
  );
}
