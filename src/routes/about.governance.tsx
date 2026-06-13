import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/components/PageLayout";
import { PageNav, aboutLinks } from "@/components/PageNav";

export const Route = createFileRoute("/about/governance")({
  head: () => ({
    meta: [
      { title: "Governance, Ethics & Compliance — AtripleS Construction & Engineering" },
      {
        name: "description",
        content:
          "Code of conduct, integrity, HSE responsibilities and ethical business commitments at AtripleS.",
      },
    ],
  }),
  component: Governance,
});

function Governance() {
  return (
    <PageLayout
      eyebrow="ABOUT US"
      title="Code of Conduct"
      subtitle=""
      nav={<PageNav title="About Us" links={aboutLinks} currentPath="/about/governance" />}
    >
      <div className="lp-prose space-y-5">
        <h2 className="lp-h text-lg">Commitment to Ethical Business</h2>
        <p>
          At AtripleS Construction &amp; Engineering Pte. Ltd., we are committed to conducting all
          business activities with integrity, transparency, and professionalism. This Code of
          Conduct applies to all employees, subcontractors, and representatives of the company.
        </p>

        <h2 className="lp-h text-lg">Integrity &amp; Compliance</h2>
        <p>
          We maintain a strict policy of honesty and fairness in all operations. Bribery,
          corruption, fraud, and unethical practices are not tolerated. All personnel must comply
          with applicable laws, regulations, and contractual requirements.
        </p>

        <h2 className="lp-h text-lg">Health, Safety &amp; Environment (HSE)</h2>
        <p>
          Safety is our top priority. All employees are required to follow safety procedures, use
          proper protective equipment, and work responsibly to protect people, assets, and the
          environment.
        </p>

        <h2 className="lp-h text-lg">Professional Conduct</h2>
        <p>
          We expect respectful, responsible, and disciplined behavior in the workplace.
          Discrimination, harassment, and unsafe practices are strictly prohibited.
        </p>

        <h2 className="lp-h text-lg">Confidentiality</h2>
        <p>
          All company and client information must be protected and used only for authorized business
          purposes.
        </p>

        <h2 className="lp-h text-lg">Reporting Responsibility</h2>
        <p>
          Any violation of this Code must be reported to management. AtripleS ensures
          confidentiality and proper handling of all reports.
        </p>

        <h2 className="lp-h text-lg">Our Commitment</h2>
        <p>
          AtripleS Construction &amp; Engineering Pte. Ltd. is committed to maintaining high ethical
          standards, strong governance, and trusted partnerships in every project we undertake.
        </p>
      </div>
    </PageLayout>
  );
}
