import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership & Management Approach — AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "Disciplined execution, strong leadership and full accountability across AtripleS operations.",
      },
    ],
  }),
  component: Leadership,
});

const principles: Array<[string, string]> = [
  [
    "Safety First Culture",
    "Safety is embedded in every activity, decision, and stage of execution",
  ],
  ["Leadership with Integrity", "Transparent, responsible, and ethical leadership at all levels"],
  ["Structured Execution", "Clear planning, coordination, and controlled project delivery"],
  ["Quality Commitment", "Ensuring compliance with industry standards and client requirements"],
  ["Continuous Improvement", "Enhancing skills, systems, and performance through learning"],
  ["People & Performance Focus", "Developing a competent and safety conscious workforce"],
  ["Client Satisfaction", "Delivering reliable, timely, and cost effective solutions"],
];

function Leadership() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Leadership & Management Approach"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/leadership" />}
    >
      <div className="lp-prose space-y-8">
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., our leadership and Management
          approach is built on disciplined execution, strong leadership, and full accountability. We
          are committed to delivering safe, efficient, and high quality engineering solutions that
          consistently meet client expectations.
        </p>

        {/* Main Section Heading Container */}
        <div>
          {/* FIX: Increased text size to text-2xl and added tracking-tight to make it look prominent */}
          <h2 className="lp-h text-2xl font-black text-black tracking-tight">Core Principles</h2>
          <p className="mt-1.5 text-black/75">
            Our operations are guided by the following principles:
          </p>
        </div>

        {/* Principles Mapping Section */}
        <div className="space-y-6">
          {principles.map(([t, b]) => (
            <div key={t} className="space-y-1.5">
              {/* Set subheadings to text-lg to keep the overall typography proportional */}
              <h3 className="lp-h text-lg font-bold text-black">{t} </h3>
              <p className="pl-4 text-sm text-black/65 leading-relaxed">{b}</p>
            </div>
          ))}
        </div>

        {/* Commitment Section */}
        <div className="space-y-1.5 pt-2">
          <h3 className="lp-h text-lg font-bold text-black">Our Commitment </h3>
          <p className="pl-4 text-sm text-black/65 leading-relaxed">
            AtripleS is committed to maintaining a strong safety driven management approach,
            ensuring operational excellence, risk control, and long term trust with our clients and
            partners in every project we undertake.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
