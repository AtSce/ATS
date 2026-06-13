import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/construction.jpg";

export const Route = createFileRoute("/network/construction")({
  head: () => ({
    meta: [
      { title: "Construction — Industries We Serve | \n" },
      {
        name: "description",
        content:
          "Reliable, efficient construction services supporting sustainable development across Singapore and the region.",
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
      title="Construction"
      subtitle="Supporting sustainable development through reliable and efficient construction services."
      nav={
        <PageNav
          title="Field of Business"
          links={networkLinks}
          currentPath="/network/construction"
        />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Construction site" className="h-64 w-full object-cover " />
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
