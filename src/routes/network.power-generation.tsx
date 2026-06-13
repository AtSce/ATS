import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/power_generation.jpg";

export const Route = createFileRoute("/network/power-generation")({
  head: () => ({
    meta: [
      { title: "Power Generation — Industries We Serve | AtripleS" },
      {
        name: "description",
        content:
          "Plant maintenance, turnaround and mechanical services supporting uninterrupted power production.",
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
      title="Power Generation"
      subtitle="Supporting uninterrupted power production through dependable plant maintenance and turnaround services."
      nav={
        <PageNav
          title="Field of Business"
          links={networkLinks}
          currentPath="/network/power-generation"
        />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Power generation plant" className="h-64 w-full object-cover " />
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
