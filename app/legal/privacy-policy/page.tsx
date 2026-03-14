"use client";

import { NavbarDemo } from "@/components/sections/navbar-menu";
import { FooterDemo } from "@/components/sections/footer";
import { useEffect, useState } from "react";


export default function PrivacyPolicy() {
  
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  return (
    <>
      {/* Top Navigation */}
      <NavbarDemo />

    <main className="mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-[1fr_250px] gap-16 mt-30 mb-30">

  {/* LEFT CONTENT */}
  <article className="space-y-12">

    <header>
      <h1 className="text-5xl font-semibold">PI DOT Privacy Policy</h1>
      <p className="text-white/70 mt-3">
        <b>Effective Date:</b> <time dateTime="2025-11">November, 2025</time>
      </p>
      <p className="text-white/70">
        <b>Operator:</b> EMELEX Business Solutions LLP
      </p>
      <p className="text-white/70">
        <b>Platform:</b> PI DOT
      </p>
    </header>

    <section id="introduction" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
      <p className="text-white/70">
        PI DOT is a learning intelligence and simulation platform operated by <b>EMELEX Business Solutions LLP</b> ("Company", "we", "our", or "us"). The platform enables educational institutions, enterprises, and individual users to access interactive learning environments, training simulations, skill development programs, and AI-assisted learning tools.
      </p>

      <p className="text-white/70 mt-4">
        This Privacy Policy explains how PI DOT collects, processes, stores, and protects personal data when users interact with the platform.
      </p>

      <p className="text-white/70 mt-4">
        We are committed to ensuring that personal information is handled responsibly and in accordance with applicable data protection laws, including:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>Digital Personal Data Protection Act (India)</li>
        <li>Information Technology Act 2000</li>
        <li>General Data Protection Regulation (GDPR) where applicable</li>
        <li>Other applicable global privacy regulations</li>
      </ul>

      <p className="text-white/70 mt-4">
        By accessing or using PI DOT services, users acknowledge that they have read and understood this Privacy Policy.
      </p>
    </section>

    <section id="scope" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">2. Scope of This Policy</h2>

      <p className="text-white/70">
        This Privacy Policy applies to:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>Users of the PI DOT platform</li>
        <li>Educational institutions using PI DOT</li>
        <li>Enterprise clients deploying PI DOT solutions</li>
        <li>Individuals interacting with PI DOT services, websites, or training programs</li>
      </ul>

      <p className="text-white/70 mt-4">
        This policy covers personal data collected through:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>PI DOT web platform</li>
        <li>Mobile or web applications</li>
        <li>Training programs</li>
        <li>Simulations and workshops</li>
        <li>Customer support interactions</li>
        <li>Integrated third-party services</li>
      </ul>
    </section>

    <section id="collection" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">3. Categories of Information We Collect</h2>

      <p className="text-white/70">
        PI DOT collects information necessary to operate the platform,
        deliver learning services, and improve user experience.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3.1 Account Information</h3>
      <p className="text-white/70">
        When users create an account, we may collect:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Organization or institution name</li>
        <li>Role or designation</li>
        <li>Login credentials</li>
      </ul>

      <p className="text-white/70 mt-4">
        This information enables user authentication and account management.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3.2 Platform Usage Data</h3>
      <p className="text-white/70">
        We collect information about how users interact with the platform,
        including:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>Login timestamps</li>
        <li>Session activity</li>
        <li>Feature usage</li>
        <li>Device information</li>
        <li>Browser type</li>
        <li>IP address</li>
      </ul>

      <p className="text-white/70 mt-4">
        This data is used to improve platform performance and reliability.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3.3 Learning and Simulation Data</h3>
      <p className="text-white/70">
        When users participate in PI DOT simulations, programs,
        or training modules, we may collect:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>Responses within simulations</li>
        <li>Performance metrics</li>
        <li>Assessments or evaluations</li>
        <li>Learning progress</li>
        <li>Interaction with AI learning tools</li>
      </ul>

      <p className="text-white/70 mt-4">
        For institutional deployments, this information may belong to the
        respective institution.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3.4 Institutional Data</h3>
      <p className="text-white/70">
        Institutions or enterprise customers may upload:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>Training materials</li>
        <li>Organizational learning frameworks</li>
        <li>Student datasets</li>
        <li>Company workflows</li>
        <li>Knowledge base materials</li>
      </ul>

      <p className="text-white/70 mt-4">
        PI DOT processes this information solely to deliver the contracted services.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">3.5 Payment Information</h3>

      <p className="text-white/70">
        When payments are made for subscriptions or programs,
        we may collect:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>Billing details</li>
        <li>Payment transaction metadata</li>
      </ul>

      <p className="text-white/70 mt-4">
        Payment processing is handled by secure third-party providers
        compliant with industry payment security standards.
      </p>
    </section>

    <section id="usage" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">4. Legal Basis for Processing Data</h2>
      <p className="text-white/70 mb-2">
        PI DOT processes personal data based on one or more of the following legal grounds:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-3">
        <li><b>Contractual Necessity</b> — Processing required to provide services requested by the user or institution.</li>
        <li><b>Legitimate Interests</b> — Improving platform performance, preventing fraud, and maintaining service security.</li>
        <li><b>Consent</b> — When users voluntarily provide information or agree to specific processing activities.</li>
        <li><b>Legal Obligations</b> — Compliance with regulatory or legal requirements.</li>
      </ul>
    </section>

    <section id="data-use" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">5. How We Use Personal Data</h2>
      <p className="text-white/70 mb-2">
        PI DOT uses collected information to:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Provide platform access and authentication</li>
        <li>Deliver simulations and learning modules</li>
        <li>Improve learning intelligence systems</li>
        <li>Analyze platform usage patterns</li>
        <li>Communicate with users</li>
        <li>Manage institutional accounts</li>
        <li>Maintain system security</li>
        <li>Comply with legal obligations</li>
      </ul>
    </section>

    <section id="data-ownership" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">6. Data Ownership and Institutional Sovereignty</h2>

      <p className="text-white/70 mb-2">
        For enterprise and institutional deployments:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>institutions retain ownership of their uploaded data.</li>
        <li>PI DOT processes such data only to deliver services.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        Customer data may include:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Student learning data</li>
        <li>Training assessments</li>
        <li>Enterprise knowledge bases</li>
        <li>Institutional learning content</li>
      </ul>

      <p className="text-white/70 mt-4">
        PI DOT does not claim ownership of institutional data.
      </p>
    </section>

    <section id="artificial-intelligence" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">7. Artificial Intelligence and Data Processing</h2>

      <p className="text-white/70 mb-2">
        PI DOT may use artificial intelligence systems to power learning insights, adaptive feedback, and simulation environments.
      </p>

      <p className="text-white/70 mt-2 mb-2">
        AI systems may process:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>simulation inputs</li>
        <li>learning interactions</li>
        <li>anonymized usage patterns.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        Where AI training occurs, data used for model improvement is <b>aggregated and de-identified</b> to ensure it cannot identify individual users or institutions.
      </p>
      <p className="text-white/70 mt-4 mb-2">
        Enterprise customers may request <b>AI data isolation,</b> ensuring their data is not used for model training.
      </p>

    </section>

    <section id="data-sharing" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">8. Data Sharing and Third-Party Services</h2>

      <p className="text-white/70 mb-2">
        PI DOT may share data with trusted service providers that support platform operations.
      </p>

      <p className="text-white/70 mt-2 mb-2">
        These providers may assist with:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>cloud infrastructure</li>
        <li>analytics services</li>
        <li>AI processing</li>
        <li>payment processing</li>
        <li>customer support tools.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        All third parties are contractually required to protect user data.
      </p>

    </section>

    <section id="security" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">9. Data Security</h2>

      <p className="text-white/70 mb-2">
        PI DOT implements industry-standard security practices, including:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>Encryption of sensitive data</li>
        <li>Secure authentication systems</li>
        <li>Role-based access controls</li>
        <li>Monitoring for unauthorized activity</li>
        <li>Regular infrastructure security reviews</li>
      </ul>

      <p className="text-white/70 mt-4">
        While we take reasonable steps to protect information, no system can guarantee absolute security.
      </p>
    </section>

    <section id="data-retention" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>

      <p className="text-white/70 mb-2">
        Personal data is retained only as long as necessary to:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>provide services</li>
        <li>maintain account functionality</li>
        <li>comply with legal obligations</li>
        <li>resolve disputes or enforce agreements.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Institutional data may be deleted or returned upon termination of service agreements.
      </p>
    </section>

    <section id="user-rights" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">11. User Rights</h2>

      <p className="text-white/70 mb-2">
        Depending on jurisdiction, users may have the right to:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>access their personal data</li>
        <li>request correction of inaccurate information</li>
        <li>request deletion of their data</li>
        <li>restrict certain data processing activities</li>
        <li>withdraw consent where applicable.</li>
      </ul>

      <p className="text-white/70 mt-4">
        Requests may be submitted through the official PI DOT support channels.
      </p>
    </section>

    <section id="international-data-transfer" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">12. International Data Transfers</h2>

      <p className="text-white/70 mb-2">
        PI DOT may process data in multiple jurisdictions where its infrastructure providers operate.
      </p>

      <p className="text-white/70 mt-4">
        Where required, appropriate safeguards are implemented to ensure the protection of personal data across international transfers.
      </p>
    </section>

    <section id="childrens-data" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">13. Children's Data</h2>

      <p className="text-white/70 mb-2">
        PI DOT services intended for educational institutions may involve minors.
      </p>

      <p className="text-white/70 mt-4">
        Institutions deploying PI DOT are responsible for ensuring appropriate consent is obtained in accordance with applicable laws.
      </p>

      <p className="text-white/70 mt-4">
        PI DOT processes such data only under institutional instruction.
      </p>
    </section>

    <section id="changes" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">14. Changes to This Privacy Policy</h2>

      <p className="text-white/70 mb-2">
        PI DOT may update this Privacy Policy periodically to reflect changes in legal requirements, services, or technology.
      </p>

      <p className="text-white/70 mt-4">
        Users will be notified of significant changes through platform announcements or official communications.
      </p>
    </section>

    <section id="contact" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>

      <p className="text-white/70">
        For privacy inquiries, requests, or concerns, users may contact:
      </p>

      <p className="text-white/70 mt-4">
        <b>EMELEX Business Solutions LLP</b>
      </p>

      <p className="text-white/70">
        PI DOT Platform Administration
      </p>

      <p className="text-white/70 mt-2">
        Email: support@pidot.in
      </p>

      <p className="text-white/70">
        Address: 10-1-194\1, Pipe Line Rd, Shobana Colony, Balanagar, Hyderabad, Telangana 500018
      </p>
    </section>

  </article>

  {/* RIGHT SIDEBAR */}
  <aside className="hidden lg:block sticky top-18 h-fit">
    <nav className="text-sm">
      <h3 className="font-semibold mb-4">On this page</h3>

      <ul className="space-y-3 text-white/70">
        <li><a href="#introduction" className={`hover:text-[#f69507] ${
      activeSection === "introduction" ? "text-[#f69507]" : "text-white/70"
    }`}>Introduction</a></li>

        <li><a href="#scope" className={`hover:text-[#f69507] ${
      activeSection === "scope" ? "text-[#f69507]" : "text-white/70"
    }`}>Scope of This Policy</a></li>

        <li><a href="#collection" className={`hover:text-[#f69507] ${
      activeSection === "collection" ? "text-[#f69507]" : "text-white/70"
    }`}>Categories of Information We Collect</a></li>

        <li><a href="#usage" className={`hover:text-[#f69507] ${
      activeSection === "usage" ? "text-[#f69507]" : "text-white/70"
    }`}>Legal Basis for Processing Data</a></li>

        <li><a href="#data-use" className={`hover:text-[#f69507] ${
      activeSection === "data-use" ? "text-[#f69507]" : "text-white/70"
    }`}>How We Use Personal Data</a></li>

        <li><a href="#data-ownership" className={`hover:text-[#f69507] ${
      activeSection === "data-ownership" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Ownership and Institutional Sovereignty</a></li>

        <li><a href="#artificial-intelligence" className={`hover:text-[#f69507] ${
      activeSection === "artificial-intelligence" ? "text-[#f69507]" : "text-white/70"
    }`}>Artificial Intelligence and Data Processing</a></li>

        <li><a href="#data-sharing" className={`hover:text-[#f69507] ${
      activeSection === "data-sharing" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Sharing and Third-Party Services</a></li>

        <li><a href="#security" className={`hover:text-[#f69507] ${
      activeSection === "security" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Security</a></li>

        <li><a href="#data-retention" className={`hover:text-[#f69507] ${
      activeSection === "data-retention" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Retention</a></li>

        <li><a href="#user-rights" className={`hover:text-[#f69507] ${
      activeSection === "user-rights" ? "text-[#f69507]" : "text-white/70"
    }`}>User Rights</a></li>

        <li><a href="#international-data-transfer" className={`hover:text-[#f69507] ${
      activeSection === "international-data-transfer" ? "text-[#f69507]" : "text-white/70"
    }`}>International Data Transfer</a></li>

        <li><a href="#childrens-data" className={`hover:text-[#f69507] ${
      activeSection === "childrens-data" ? "text-[#f69507]" : "text-white/70"
    }`}>Children's Data</a></li>

        <li><a href="#changes" className={`hover:text-[#f69507] ${
      activeSection === "changes" ? "text-[#f69507]" : "text-white/70"
    }`}>Changes to This Privacy Policy</a></li>

        <li><a href="#contact" className={`hover:text-[#f69507] ${
      activeSection === "contact" ? "text-[#f69507]" : "text-white/70"
    }`}>Contact Information</a></li>
      </ul>
    </nav>
  </aside>

</main>

    {/* Bottom Footer */}
      <FooterDemo />
    </>
  )
}