import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/oil_and_gas.jpg";

export const Route = createFileRoute("/network/oil-gas")({
  head: () => ({
    meta: [
      { title: "Oil & Gas — Industries We Serve | AtripleS" },
      {
        name: "description",
        content:
          "EPC, construction, piping, mechanical and maintenance services for oil & gas facilities, refineries, terminals and process plants.",
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
      title="Oil & Gas"
      subtitle="Providing integrated EPC, construction, piping, mechanical, and maintenance services for oil & gas facilities, refineries, terminals, and process plants."
      nav={
        <PageNav title="Field of Business" links={networkLinks} currentPath="/network/oil-gas" />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Oil & gas storage tanks" className="h-64 w-full object-cover " />
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
