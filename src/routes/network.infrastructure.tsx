import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, networkLinks } from "@/components/PageNav";
import hero from "/imgs/infrastructure.jpg";

export const Route = createFileRoute("/network/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure — Industries We Serve | \n" },
      {
        name: "description",
        content:
          "Road works, civil construction, repair, maintenance and public facility upgrading projects across Singapore.",
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
      title="Infrastructure"
      subtitle="Providing comprehensive infrastructure solutions, including road works, civil construction, repair, maintenance, and public facility upgrading projects."
      nav={
        <PageNav
          title="Field of Business"
          links={networkLinks}
          currentPath="/network/infrastructure"
        />
      }
    >
      <div className="overflow-hidden rounded-sm border border-black/14">
        <img src={hero} alt="Infrastructure works" className="h-64 w-full object-cover " />
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
