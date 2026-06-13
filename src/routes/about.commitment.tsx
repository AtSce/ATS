import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, commitmentLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/commitment")({
  head: () => ({
    meta: [
      { title: "Our Commitment — HSSE, Quality, Delivery & Client Satisfaction" },
      {
        name: "description",
        content:
          "Our HSSE philosophy, quality assurance, timely delivery and client satisfaction commitments.",
      },
    ],
  }),
  component: Commitment,
});

const items = [
  { title: "HSSE Philosophy", to: "/about/hsse" },
  { title: "Quality Assurance", to: "/about/quality" },
  { title: "Timely Delivery Assurance", to: "/about/delivery" },
  { title: "Client Satisfaction", to: "/about/client" },
] as const;

function Commitment() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Our Commitment"
      subtitle=""
      nav={
        <PageNav title="Our Commitment" links={commitmentLinks} currentPath="/about/commitment" />
      }
    >
      <div className="lp-prose space-y-4">
        <p>Our commitment to clients is delivered across four core areas. Explore each below:</p>
        <ul className="list-disc space-y-2 pl-6">
          {items.map((it) => (
            <li key={it.title}>
              <Link
                to={it.to}
                className="font-semibold text-[#1e40af] underline decoration-2 underline-offset-4 hover:text-[#ef6c1a]"
              >
                {it.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
