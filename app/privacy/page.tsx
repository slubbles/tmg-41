import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Thela Media Group collects, uses, discloses, and safeguards your information.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "1. Information We Collect",
    body: [
      "1.1 Information You Provide. We collect information you provide directly to us, including: name, email address, phone number, and company information when you contact us or sign up for services; account credentials and profile information when you create an account; payment information when you purchase services (processed securely through third-party payment processors); communications you send to us, including emails, support tickets, and feedback; and marketing preferences and communication settings.",
      "1.2 Information Collected Automatically. When you access our website or platform, we automatically collect certain information: device information (IP address, browser type, operating system); usage data (pages visited, time spent, clicks, navigation paths); cookies and similar tracking technologies; log files and analytics data; and performance and diagnostic information.",
      "1.3 Information from Third Parties. We may receive information about you from third-party sources: marketing platforms and advertising partners; data providers and analytics services; social media platforms (if you connect your accounts); and business partners and referral sources.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "We use the information we collect for the following purposes: service delivery (to provide, maintain, and improve our marketing services and technology platforms); account management (to create and manage your account, process transactions, and provide customer support); communication (to send you service updates, marketing communications, and respond to your inquiries); personalization (to customize your experience and deliver relevant content and recommendations); analytics (to analyze usage patterns, improve our services, and develop new features); security (to detect, prevent, and address fraud, security issues, and technical problems); legal compliance (to comply with legal obligations and enforce our terms of service); and marketing (to send promotional materials, event invitations, and industry insights, with your consent).",
    ],
  },
  {
    heading: "3. How We Share Your Information",
    body: [
      "We may share your information with service providers (vendors who perform services on our behalf such as hosting, analytics, payment processing, and customer support); business partners (partners who help us deliver services, subject to confidentiality obligations); when required by law, court order, or government request; in connection with a merger, acquisition, or sale of assets; with your consent; and as aggregated, de-identified data that cannot reasonably identify you.",
      "We do not sell your personal information to third parties for their marketing purposes.",
    ],
  },
  {
    heading: "4. Data Security",
    body: [
      "We implement appropriate technical and organizational measures to protect your information: encryption of data in transit and at rest using industry-standard protocols; secure data centers with physical and network security controls; access controls limiting employee access to personal information; regular security assessments and vulnerability testing; incident response procedures and breach notification protocols; and employee training on data protection and security best practices.",
      "While we strive to protect your information, no method of transmission or storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your data using industry best practices.",
    ],
  },
  {
    heading: "5. Your Privacy Rights",
    body: [
      "Depending on your location, you may have the following rights: access (request access to the personal information we hold about you); correction (request correction of inaccurate or incomplete information); deletion (request deletion of your personal information, subject to legal obligations); portability (request a copy of your data in a machine-readable format); restriction (request limitation on how we process your information); objection (object to processing based on legitimate interests or for direct marketing); and withdrawal of consent where processing is based on consent. To exercise these rights, contact us. We will respond within 30 days of receiving your request.",
    ],
  },
  {
    heading: "6. Cookies and Tracking Technologies",
    body: [
      "We use cookies and similar technologies to collect information and improve our services: essential cookies (required for basic website functionality and security); analytics cookies (help us understand how visitors use our website); marketing cookies (used to deliver relevant advertising and measure campaign effectiveness); and preference cookies (remember your settings and preferences). You can control cookies through your browser settings. Note that disabling cookies may limit certain features of our website.",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "We retain your information for as long as necessary to fulfill the purposes described in this Privacy Policy, unless a longer retention period is required by law. When determining retention periods, we consider the nature of the information, why we collect it, and the sensitivity of the data.",
    ],
  },
  {
    heading: "8. International Data Transfers",
    body: [
      "Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information, including Standard Contractual Clauses approved by the European Commission.",
    ],
  },
  {
    heading: "9. Children's Privacy",
    body: [
      "Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete the information.",
    ],
  },
  {
    heading: "10. California Privacy Rights",
    body: [
      "If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA): the right to know what personal information we collect, use, disclose, and sell; the right to delete personal information we have collected; the right to opt out of the sale of personal information (we do not sell personal information); and the right to non-discrimination for exercising your privacy rights.",
    ],
  },
  {
    heading: "11. European Privacy Rights",
    body: [
      "If you are located in the European Economic Area (EEA) or United Kingdom, you have rights under the General Data Protection Regulation (GDPR). We process your information based on legal grounds including consent, contractual necessity, legal obligation, and legitimate interests, always balanced against your data protection rights.",
    ],
  },
  {
    heading: "12. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and updating the “Last Updated” date above.",
    ],
  },
  {
    heading: "13. Contact Us",
    body: [
      "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us: Thela Media Group, LLC DBA TMG, Austin, TX — or call 348-7753434.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main>
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "var(--bg)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 32px",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 20,
            }}
          >
            Legal Document
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 56,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              margin: "16px 0 0",
              fontSize: 16,
              color: "var(--muted)",
            }}
          >
            Last Updated: November 3, 2024
          </p>
          <p
            style={{
              marginTop: 32,
              fontSize: 18,
              lineHeight: 1.7,
              color: "var(--fg)",
            }}
          >
            Thela Media Group, LLC DBA TMG (“TMG,” “we,” “our,” or “us”) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit our website, use our services, or interact with us. By
            using our services, you agree to the practices described here.
          </p>
        </div>
      </section>
      <section
        style={{
          paddingTop: 96,
          paddingBottom: 96,
          background: "#ffffff",
          borderTop: "1px solid rgba(28,25,22,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          {sections.map((section) => (
            <div key={section.heading}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  lineHeight: 1.2,
                  margin: "0 0 16px",
                }}
              >
                {section.heading}
              </h2>
              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    margin: i === 0 ? 0 : "14px 0 0",
                    fontSize: 16,
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
