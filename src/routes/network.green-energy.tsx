import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/green_energy.jpg";

export const Route = createFileRoute("/network/green-energy")({
  head: () => ({
    meta: [
      { title: "Green Energy — Industries We Serve | AtripleS" },
      {
        name: "description",
        content:
          "Engineering, construction, maintenance and infrastructure support for renewable and sustainable energy projects.",
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
      title="Green Energy"
      subtitle="Supporting renewable and sustainable energy projects through reliable engineering, construction, maintenance and infrastructure solutions."
      nav={
        <PageNav
          title="Field of Business"
          links={networkLinks}
          currentPath="/network/green-energy"
        />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Green energy facility" className="h-64 w-full object-cover " />
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
