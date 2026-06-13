import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/strengths")({
  head: () => ({
    meta: [
      { title: "Operational Strengths — \n" },
      {
        name: "description",
        content:
          "Our capabilities, people, resources and technology — the foundations of reliable project delivery.",
      },
    ],
  }),
  component: Strengths,
});

const sections = [
  {
    title: "Our Capabilities",
    body: "At \n, we specialize in delivering integrated engineering solutions with strong capability in EPC project execution and single-source maintenance services. Our expertise covers a full range of engineering disciplines, enabling us to provide complete project solutions under one roof for oil & gas, petrochemical, refinery, and industrial sectors. This integrated approach allows us to support clients with efficient, reliable, and coordinated execution from planning to completion.",
  },
  {
    title: "Our People",
    body: "Our strength lies in our people. AtripleS is led by Executive Directors and senior management professionals with more than 20 years of experience in the oil & gas and chemical terminal industries. Our team includes experienced project managers, engineers, and technical specialists, many of whom bring over 15 years of industry expertise. We are committed to continuous training and development to ensure our workforce remains skilled, competent, and capable of delivering high quality work in demanding industrial environments. Our people are our key asset, driving performance, safety, and excellence in every project.",
  },
  {
    title: "Our Resources",
    body: "AtripleS is supported by strong operational resources, including a well maintained and growing fleet of construction equipment. These resources enable us to execute projects efficiently, handle large scale requirements, and respond quickly to emergency shutdowns and maintenance needs. Our ability to mobilize equipment and manpower effectively provides a strong advantage in delivering projects on time while maintaining cost efficiency and operational reliability.",
  },
  {
    title: "Our Technology",
    body: "We adopt modern project management practices supported by advanced digital tools and systems to enhance productivity, coordination, and execution efficiency. The use of structured planning platforms and project control systems enables us to improve communication, monitor progress effectively, and ensure accurate resource allocation across all sites. By integrating technology into our operations, AtripleS strengthens its capability to deliver projects with greater precision, efficiency, and control.",
  },
];

function Strengths() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Our Strengths"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/strengths" />}
    >
      <div className="lp-prose space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="lp-h text-lg">{s.title}</h2>
            <p className="mt-3">{s.body}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
