import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/client")({
  head: () => ({
    meta: [
      { title: "Client Satisfaction — AtripleS Construction & Engineering" },
      {
        name: "description",
        content: "Long-term partnerships through reliability and elite performance.",
      },
    ],
  }),
  component: ClientSatisfaction,
});

function ClientSatisfaction() {
  return (
    <PageLayout
      eyebrow="OUR COMMITMENT"
      title="Client Satisfaction"
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/client" />}
    >
      <div className="lp-prose space-y-6">
        <p>
          Client Satisfaction Assurance is a fundamental commitment at AtripleS Construction &
          Engineering Pte. Ltd. and forms the basis of our long term business relationships. We are
          dedicated to understanding our clients’ requirements in detail and delivering engineering
          and construction solutions that meet or exceed their expectations in terms of safety,
          quality, cost, and schedule. AtripleS adopts a clientfocused approach through close
          communication, responsive project support, and proactive problem-solving throughout the
          project life cycle. Our experienced team ensures that all deliverables are executed in
          accordance with agreed specifications and industry standards, while maintaining
          transparency and accountability at every stage. We continuously seek feedback from clients
          to improve our performance and strengthen service delivery. AtripleS believes that client
          satisfaction is achieved through trust, consistency, and reliable execution, and we are
          committed to building long term partnerships based on performance, integrity, and mutual
          success.{" "}
        </p>
      </div>
    </PageLayout>
  );
}
