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
      <h1 className="text-5xl font-semibold">PI DOT Terms of Service</h1>
      <p className="text-white/70 mt-3">
        <b>Effective Date:</b> <time dateTime="2025-11">November, 2025</time>
      </p>
      <p className="text-white/70 mt-4">
        These Terms of Service (“Terms”) govern access to and use of the PI DOT platform and services provided by <b>EMELEX Business Solutions LLP</b> (“Company”, “we”, “our”, or “us”).
      </p>
      <p className="text-white/70 mt-4">
        By accessing or using PI DOT, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the services.
      </p>
    </header>

    <section id="about-pi-dot" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">1. About PI DOT</h2>
      <p className="text-white/70">
        PI DOT is an interactive learning intelligence and simulation platform designed to provide educational institutions, enterprises, and individual learners with access to:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>skill development programs</li>
        <li>interactive simulations</li>
        <li>industry-led training modules</li>
        <li>AI-assisted learning environments</li>
        <li>educational analytics and performance insights.</li>
      </ul>

      <p className="text-white/70 mt-4">
        PI DOT may be offered through web applications, integrated institutional platforms, or enterprise deployments.
      </p>
    </section>

    <section id="eligibility" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>

      <p className="text-white/70">
        To use PI DOT services, users must:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-4 space-y-2">
        <li>be at least 13 years of age, or</li>
        <li>access the platform under the supervision of an educational institution or authorized organization.</li>
      </ul>

      <p className="text-white/70 mt-4">
        If you use PI DOT on behalf of an organization or institution, you represent that you have the authority to bind that organization to these Terms.
      </p>
    </section>

    <section id="account-registration" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>

      <p className="text-white/70">
        Users may be required to create an account to access PI DOT services.
      </p>

      <p className="text-white/70 mt-2">
        Users agree to:
      </p>

      <ul className="list-disc pl-6 text-white/70 mt-3 space-y-2">
        <li>provide accurate and complete information</li>
        <li>maintain the confidentiality of their login credentials</li>
        <li>notify PI DOT of any unauthorized account activity.</li>
      </ul>

      <p className="text-white/70 mt-4">
        The user is responsible for all activities conducted through their account.
      </p>

      <p className="text-white/70 mt-4">
        PI DOT reserves the right to suspend or terminate accounts that violate these Terms.
      </p>
    </section>

    <section id="platform-use" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">4. Use of the Platform</h2>
      <p className="text-white/70 mb-2">
        Users may use PI DOT only for lawful purposes and in accordance with these Terms.
      </p>

      <p className="text-white/70 mb-2">
        Users agree <b>not to:</b>
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-3">
        <li>misuse the platform or its services</li>
        <li>attempt unauthorized access to platform infrastructure</li>
        <li>interfere with platform functionality</li>
        <li>distribute malicious software or harmful code</li>
        <li>copy, reverse engineer, or exploit platform technology without authorization.</li>
      </ul>

      <p className="text-white/70 mb-2">
        PI DOT reserves the right to restrict or terminate access where misuse is detected.
      </p>
    </section>

    <section id="institutional-enterprise-use" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">5. Institutional and Enterprise Use</h2>
      <p className="text-white/70 mb-2">
        Educational institutions, organizations, and enterprises may deploy PI DOT for:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>training programs</li>
        <li>academic learning modules</li>
        <li>employee skill development</li>
        <li>simulations and workshops</li>
        <li>knowledge frameworks and internal training systems.</li>
      </ul>

      <p className="text-white/70 mb-2">
        In such deployments:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>the institution acts as the <b>data controller</b> for institutional data</li>
        <li>PI DOT acts as a <b>data processor</b>, handling data only for service delivery.</li>
      </ul>
      <p className="text-white/70 mb-2">
        Additional contractual terms may apply under enterprise agreements or Data Processing Agreements.
      </p>
    </section>

    <section id="artificial-intelligence" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">6. Artificial Intelligence and Simulation Services</h2>

      <p className="text-white/70 mb-2">
        PI DOT may use artificial intelligence technologies to support:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>adaptive learning feedback</li>
        <li>simulation environments</li>
        <li>automated insights and recommendations</li>
        <li>skill assessment systems.</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        AI outputs are generated through probabilistic models and may not always be accurate or complete.
      </p>

      <p className="text-white/70 mt-4 mb-2">
        Users acknowledge that:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>AI insights are <b>informational and educational in nature</b></li>
        <li>PI DOT does not guarantee the accuracy or reliability of AI-generated outputs</li>
        <li>users remain responsible for decisions based on platform insights.</li>
      </ul>
    </section>

    <section id="intellectual-property" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>

      <p className="text-white/70 mb-2">
        All PI DOT platform technology, including but not limited to:
      </p>

       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>software systems</li>
        <li>platform design</li>
        <li>simulation architecture</li>
        <li>learning models</li>
        <li>proprietary algorithms</li>
        <li>training frameworks</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        are the intellectual property of <b>EMELEX Business Solutions LLP.</b>
      </p>
      <p className="text-white/70 mt-4 mb-2">
        Users may not:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>copy or reproduce platform technology</li>
        <li>distribute proprietary content</li>
        <li>create derivative products based on PI DOT systems.</li>
      </ul>

    </section>

    <section id="customer-content" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">8. Customer and Institutional Content</h2>

      <p className="text-white/70 mb-2">
        Users and institutions may upload content to the platform, including:
      </p>
       
       <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>learning materials</li>
        <li>documents</li>
        <li>simulation inputs</li>
        <li>institutional knowledge frameworks</li>
      </ul>

      <p className="text-white/70 mt-4 mb-2">
        Ownership of this content remains with the respective user or institution
      </p>

      <p className="text-white/70 mt-4 mb-2">
        By uploading such content, users grant PI DOT a <b>limited license </b> to process and store the content solely for delivering the platform services.
      </p>

      <p className="text-white/70 mt-4 mb-2">
        PI DOT does not claim ownership over customer content.
      </p>

    </section>

    <section id="data-protection" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">9.  Data Protection and Privacy</h2>

      <p className="text-white/70 mb-2">
        The collection and processing of personal data are governed by the <b> PI DOT Privacy Policy.</b>
      </p>

      <p className="text-white/70 mb-2">
        By using the platform, users acknowledge that their data may be processed as described in the Privacy Policy.
      </p>

      <p className="text-white/70 mb-2">
        Enterprise clients may also enter into a <b> Data Processing Agreement (DPA) </b> with PI DOT.
      </p>
    </section>

    <section id="third-party-services" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>

      <p className="text-white/70 mb-2">
        PI DOT may integrate with third-party technologies, including:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>cloud infrastructure providers</li>
        <li>analytics services</li>
        <li>payment processors</li>
        <li>artificial intelligence tools.</li>
      </ul>

      <p className="text-white/70 mt-4">
        These third-party providers operate under their own terms and privacy policies.
      </p>

      <p className="text-white/70 mt-4">
        PI DOT is not responsible for the practices of third-party services.
      </p>
    </section>

    <section id="platform-availability" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">11. Platform Availability</h2>

      <p className="text-white/70 mb-2">
        PI DOT strives to maintain reliable platform availability.
      </p>

      <p className="text-white/70 mb-2">
        However, the company does not guarantee uninterrupted service.
      </p>

      <p className="text-white/70 mb-2">
        The platform may occasionally experience downtime due to:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>maintenance updates</li>
        <li>infrastructure issues</li>
        <li>third-party service disruptions</li>
        <li>unforeseen technical failures.</li>
      </ul>

      <p className="text-white/70 mt-4">
        PI DOT will make reasonable efforts to minimize service interruptions.
      </p>
    </section>

    <section id="subscription-and-payments" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">12. Subscription and Payments</h2>

      <p className="text-white/70 mb-2">
        Certain PI DOT services may require paid subscriptions or program fees.
      </p>

      <p className="text-white/70 mt-4">
        Payment terms include:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>payment prior to program or service access</li>
        <li>subscription cycles determined by the service plan</li>
        <li>non-refundable payments unless otherwise specified.</li>
      </ul>

      <p className="text-white/70 mt-4">
        For institutional programs, payment terms may be defined in separate agreements.
      </p>
    </section>

    <section id="termination" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>

      <p className="text-white/70 mb-2">
        PI DOT reserves the right to suspend or terminate access to the platform if:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>these Terms are violated</li>
        <li>misuse or abuse of the platform occurs</li>
        <li>fraudulent or illegal activity is detected.</li>
      </ul>
      <p className="text-white/70 mb-2">
        Users may discontinue use of the platform at any time.
      </p>
      <p className="text-white/70 mb-2">
        Institutional agreements may define separate termination provisions.
      </p>
    </section>

    <section id="disclaimer" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">14. Disclaimer of Warranties</h2>

      <p className="text-white/70 mb-2">
        PI DOT services are provided <b>“as is”</b> and <b>“as available.”</b>

      </p>

      <p className="text-white/70 mt-4">
        To the maximum extent permitted by law, PI DOT disclaims all warranties, including:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>accuracy of platform outputs</li>
        <li>reliability of AI-generated insights</li>
        <li>uninterrupted availability of services</li>
        <li>suitability for specific purposes</li>
      </ul>
    </section>

    <section id="limitation-of-liability" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">15. Limitation of Liability</h2>

      <p className="text-white/70">
        To the maximum extent permitted by law, PI DOT and EMELEX Business Solutions LLP shall not be liable for:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>indirect or consequential damages</li>
        <li>loss of business or revenue</li>
        <li>loss of data</li>
        <li>decisions made based on AI outputs or platform insights.</li>
      </ul>

      <p className="text-white/70 mt-4">
        <b>Total liability shall not exceed the amount paid for services during the preceding twelve months.</b>
      </p>

    </section>

    <section id="indemnification" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">16. Indemnification</h2>

      <p className="text-white/70">
        Users agree to indemnify and hold harmless PI DOT and EMELEX Business Solutions LLP against any claims arising from:
      </p>

      <ul className="list-disc pl-6 text-white/70 space-y-2">
        <li>misuse of the platform</li>
        <li>violation of these Terms</li>
        <li>infringement of third-party rights.</li>
      </ul>

    </section>

    <section id="governing-law" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">17. Governing Law</h2>

      <p className="text-white/70 mb-2">
        These Terms shall be governed by the laws of <b>India</b>.
      </p>

      <p className="text-white/70 mt-4">
        Any disputes arising from these Terms shall be subject to the jurisdiction of the courts located in <b> [Insert City – likely Hyderabad].</b>
      </p>
    </section>

    <section id="changes" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">18. Changes to Terms</h2>

      <p className="text-white/70 mb-2">
        PI DOT may update these Terms periodically.
      </p>

      <p className="text-white/70 mt-4">
        Users will be notified of significant changes through platform notifications or official communications.
      </p>

      <p className="text-white/70 mt-4">
        Continued use of the platform after updates constitutes acceptance of the revised Terms.
      </p>
    </section>

    <section id="contact" className="scroll-mt-32">
      <h2 className="text-2xl font-semibold mb-4">19. Contact Information</h2>

      <p className="text-white/70">
        For inquiries regarding these Terms, users may contact:
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
        <li><a href="#about-pi-dot" className={`hover:text-[#f69507] ${
      activeSection === "about-pi-dot" ? "text-[#f69507]" : "text-white/70"
    }`}>About PI DOT</a></li>

        <li><a href="#eligibility" className={`hover:text-[#f69507] ${
      activeSection === "eligibility" ? "text-[#f69507]" : "text-white/70"
    }`}>Eligibility</a></li>

        <li><a href="#account-registration" className={`hover:text-[#f69507] ${
      activeSection === "account-registration" ? "text-[#f69507]" : "text-white/70"
    }`}>Account Registration</a></li>

        <li><a href="#platform-use" className={`hover:text-[#f69507] ${
      activeSection === "platform-use" ? "text-[#f69507]" : "text-white/70"
    }`}>Use of the Platform</a></li>

        <li><a href="#institutional-enterprise-use" className={`hover:text-[#f69507] ${
      activeSection === "institutional-enterprise-use" ? "text-[#f69507]" : "text-white/70"
    }`}>Institutional and Enterprise Use</a></li>

        <li><a href="#artificial-intelligence" className={`hover:text-[#f69507] ${
      activeSection === "artificial-intelligence" ? "text-[#f69507]" : "text-white/70"
    }`}>Artificial Intelligence and Simulation Services</a></li>

        <li><a href="#intellectual-property" className={`hover:text-[#f69507] ${
      activeSection === "intellectual-property" ? "text-[#f69507]" : "text-white/70"
    }`}>Intellectual Property</a></li>

        <li><a href="#customer-content" className={`hover:text-[#f69507] ${
      activeSection === "customer-content" ? "text-[#f69507]" : "text-white/70"
    }`}>Customer and Institutional Content</a></li>

        <li><a href="#data-protection" className={`hover:text-[#f69507] ${
      activeSection === "data-protection" ? "text-[#f69507]" : "text-white/70"
    }`}>Data Protection and Privacy</a></li>

        <li><a href="#third-party-services" className={`hover:text-[#f69507] ${
      activeSection === "third-party-services" ? "text-[#f69507]" : "text-white/70"
    }`}>Third-Party Services</a></li>

        <li><a href="#platform-availability" className={`hover:text-[#f69507] ${
      activeSection === "platform-availability" ? "text-[#f69507]" : "text-white/70"
    }`}>Platform Availability</a></li>

        <li><a href="#subscription-and-payments" className={`hover:text-[#f69507] ${
      activeSection === "subscription-and-payments" ? "text-[#f69507]" : "text-white/70"
    }`}>Subscription and Payments</a></li>

        <li><a href="#termination" className={`hover:text-[#f69507] ${
      activeSection === "termination" ? "text-[#f69507]" : "text-white/70"
    }`}>Termination</a></li>

        <li><a href="#disclaimer" className={`hover:text-[#f69507] ${
      activeSection === "disclaimer" ? "text-[#f69507]" : "text-white/70"
    }`}>Disclaimer of Warranties</a></li>

        <li><a href="#limitation-of-liability" className={`hover:text-[#f69507] ${
      activeSection === "limitation-of-liability" ? "text-[#f69507]" : "text-white/70"
    }`}>Limitation of Liability</a></li>

    <li><a href="#indemnification" className={`hover:text-[#f69507] ${
      activeSection === "indemnification" ? "text-[#f69507]" : "text-white/70"
    }`}>Indemnification</a></li>

    <li><a href="#governing-law" className={`hover:text-[#f69507] ${
      activeSection === "governing-law" ? "text-[#f69507]" : "text-white/70"
    }`}>Governing Law</a></li>

    <li><a href="#changes" className={`hover:text-[#f69507] ${
      activeSection === "changes" ? "text-[#f69507]" : "text-white/70"
    }`}>Changes to Terms</a></li>

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