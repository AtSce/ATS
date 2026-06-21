import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About AtripleS Construction & Engineering — Corporate Profile" },
      {
        name: "description",
        content:
          "Singapore-based engineering and construction company serving oil & gas, petrochemical, refinery, energy and industrial sectors.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Corporate Profile"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about" />}
    >
      <div className="lp-prose max-w-none">
        <p>
          Established in 2025, AtripleS Construction & Engineering Pte. Ltd. is a Singapore based
          engineering and construction company serving the oil &amp; gas, petrochemical, refinery,
          energy, and industrial sectors. Although newly founded, our company is built upon decades
          of combined industry experience, technical expertise, and leadership gained through
          delivering complex projects across various industrial environments.
        </p>
        <p>
          AtripleS specializes in Engineering, Procurement and Construction (EPC), piping and
          mechanical works, scaffolding services, industrial construction, maintenance support and
          skilled manpower solutions. Our experienced team is committed to providing safe, reliable
          and cost-effective services tailored to meet the unique requirements of each client.
        </p>
        <p>
          We take pride in our commitment to quality workmanship, operational excellence and strict
          adherence to safety standards. By combining strong engineering judgment with practical
          field experience, we strive to deliver projects efficiently, on schedule and to the
          highest industry standards.
        </p>
        <p>
          At AtripleS, we believe that long term success is built on trust, integrity and
          performance. We work closely with our clients to understand their goals and deliver
          solutions that create lasting value. As we continue to grow, our vision is to become a
          trusted engineering partner and preferred service provider for industrial projects across
          Singapore and the region.
        </p>
        <p>
          Driven by experience, guided by safety, and committed to excellence, AtripleS is ready to
          support the evolving needs of today&apos;s industrial landscape.
        </p>
      </div>
    </PageLayout>
  );
}
