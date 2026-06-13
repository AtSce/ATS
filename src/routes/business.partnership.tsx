import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, businessLinks } from "@/components/PageNav";

export const Route = createFileRoute("/business/partnership")({
  head: () => ({
    meta: [
      { title: "Core Partnership Services — Scaffolding, Machining, Torqueing, NDT" },
      {
        name: "description",
        content:
          "Specialized industrial support services: scaffolding, machining, high torqueing, NDT and equipment rental.",
      },
    ],
  }),
  component: Partnership,
});

const services = [
  {
    title: "Scaffolding Services",
    body: "We provide safe and reliable scaffolding solutions for construction, maintenance, and shutdown activities. Our services include scaffolding design support, erection, dismantling, inspection, and certification. All scaffolding works are executed in accordance with Workplace Safety and Health (WSH) requirements to ensure safe access and working platforms for all project activities.",
  },
  {
    title: "Machining Services",
    body: "We undertake on site and workshop machining services to support repair, refurbishment, and modification works. Our capabilities include precision machining, flange facing, line boring, drilling, and component restoration. These services are essential in minimizing downtime and restoring equipment to operational condition efficiently and accurately.",
  },
  {
    title: "High Torque Services",
    body: "AtripleS provides controlled bolting and high torqueing services for flanged joints, equipment assembly, and piping systems. Using calibrated hydraulic torqueing and tensioning equipment, we ensure accurate bolt loading, leak free joints, and compliance with project specifications. All torqueing activities are performed by trained technicians following strict safety and quality procedures.",
  },
  {
    title: "Non Destructive Testing (NDT) Services",
    body: "AtripleS provides NDT services to ensure the integrity and safety of materials, welds, and structures without causing damage. Our capabilities include visual inspection, dye penetrant testing, magnetic particle testing, ultrasonic testing, and other client-required inspection methods to support quality assurance and compliance standards.",
  },
  {
    title: "Equipment Rental Support",
    body: "We also provide equipment rental support to assist construction and maintenance activities, including lifting tools, small machinery, torqueing equipment, and site support tools. Our well maintained equipment fleet helps clients improve efficiency, reduce downtime, and ensure smooth project execution.",
  },
];

function Partnership() {
  return (
    <PageLayout
      eyebrow="OUR SERVICES"
      title="Core Partnership Services"
      subtitle=""
      nav={
        <PageNav title="Our Business" links={businessLinks} currentPath="/business/partnership" />
      }
    >
      <div className="lp-prose space-y-6">
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., we also provide a range of
          specialized industrial support services that complement our EPC, construction, and
          maintenance capabilities. These services are carried out by trained personnel with strong
          emphasis on safety, precision, and compliance with industry standards.
        </p>
        {services.map((s) => (
          <div key={s.title}>
            <h2 className="lp-h text-lg font-bold text-[#1a1a1a]">{s.title}</h2>
            <p className="mt-2">{s.body}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
