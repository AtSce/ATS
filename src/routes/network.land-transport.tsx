import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/land_transport_authority.jpg";

export const Route = createFileRoute("/network/land-transport")({
  head: () => ({
    meta: [
      { title: "Land Transport Authority — Industries We Serve | \n" },
      {
        name: "description",
        content:
          "Civil works, road maintenance and repair services supporting transport infrastructure development.",
      },
    ],
  }),
  component: Page,
});

const capabilities: Array<[string, string]> = [];

function Page() {
  return (
    <PageLayout
      eyebrow="Field of Business · Sector"
      title="Land Transport Authority"
      subtitle="Supporting transport infrastructure development through civil works, road maintenance and repair services."
      nav={
        <PageNav
          title="Field of Business"
          links={networkLinks}
          currentPath="/network/land-transport"
        />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Land transport works" className="h-64 w-full object-cover " />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {capabilities.map(([t, b]) => (
          <div key={t} className="lp-card">
            <h3 className="lp-h text-base">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{b}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
