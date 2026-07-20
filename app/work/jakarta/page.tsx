"use client";

import Image from "next/image";
import { CaseStudy } from "../../components/CaseStudy";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "research", label: "FOUNDATIONAL RESEARCH" },
  { id: "branding", label: "BRANDING WORKSHOP" },
  { id: "visual", label: "VISUAL EXPLORATION" },
  { id: "testing", label: "TESTING & CONCLUSION" },
];

export default function JakartaPage() {
  return (
    <CaseStudy
      navSections={navSections}
      meta={{
        season: "WINTER 2023",
        role: "ROLE: SENIOR UX DESIGNER",
        timeline: "TIMELINE: 8 MONTHS",
      }}
      nextHref="/work/bni"
    >
      <section id="context" className="cs-section">
        <p className="cs-client">REGIONAL BANK</p>
        <h1 className="cs-title">FROM JAKARTA TO THE WORLD</h1>
        <div className="cs-hero">
          <Image
            src="/images/jakarta/hero.png"
            alt="VELLO mobile banking app hero"
            width={501}
            height={385}
            priority
          />
        </div>
        <p className="cs-intro">
          Our client, a regional bank in Jakarta, have had strong ties to the
          governmental sector. As 90% of their user base were Jakarta&apos;s
          public officials and are mandated to have a payroll account with the
          bank.
        </p>
        <p className="cs-intro">
          The bank was facing pressure to stay relevant amid rapid digital
          change and rising expectation.
        </p>
      </section>

      <section id="research" className="cs-section">
        <h2 className="cs-heading">Challenges With The Current App</h2>
        <p className="cs-body">
          Through foundational research, we found that the current app was
          perceived as falling behind in a rapidly evolving digital banking
          landscape. It struggled with limited banking solutions and weak
          merchant adoption, making it less competitive than leading
          e-wallets. Users frequently reported transaction issues—such as
          failed transfers and unexpected balance changes—as well as
          inconsistent information between call centers and branch staff.
          Most users are working in the public sector, and are forced to
          receive their salary from the bank. Once their salaries are in,
          they often go out immediately to users&apos; primary / preferred banks.
        </p>
        <div className="cs-image-block">
          <Image
            src="/images/jakarta/research.png"
            alt="User journey research diagram"
            width={501}
            height={207}
          />
        </div>
        <h2 className="cs-heading">An Agent Of Change</h2>
        <p className="cs-body">
          Stakeholders and users envisioned a future where{" "}
          <em>JakOne</em> could be a true driver of Jakarta&apos;s digital
          evolution. The new brand identity was shaped by consumer insights
          and optimism, aiming to reflect modern innovation while remaining
          rooted in Jakarta&apos;s and Betawi&apos;s cultural heritage. This
          transformation called for a fresh, visionary approach—redefining{" "}
          <em>JakOne</em> as a symbol of inclusivity, flexibility, and civic
          pride, and positioning it to support Jakarta&apos;s ambition of
          becoming a global city.
        </p>
      </section>

      <section id="branding" className="cs-section">
        <h2 className="cs-heading">What The Change Could Look Like</h2>
        <p className="cs-body">
          Together with the branding team, our design team conducted a
          branding workshop to define what this agent of change could look
          like. With focused discussions on what promises could Bank Jakarta
          provide to everyday Jakartans, and how could they relate with the
          bank on a daily basis.
        </p>
        <p className="cs-body">
          To meet the fast-paced, ever-evolving needs of Jakarta&apos;s
          residents, we introduced VELLO—a mobile banking experience that
          feels less like a tool and more like a financial companion.
          Friendly and approachable like a familiar greeting, the name
          &ldquo;VELLO&rdquo; also hints at velocity, representing speed,
          smoothness, and forward momentum in every transaction.
        </p>
        <div className="cs-image-block">
          <Image
            src="/images/jakarta/branding.png"
            alt="VELLO app screen explorations"
            width={501}
            height={475}
          />
        </div>
        <h2 className="cs-heading">Results</h2>
        <p className="cs-body">
          Bringing this vision to life, we created a cast of relatable
          characters representing real Jakartans—depicted in slice-of-life
          scenarios that reflect their aspirations, routines, and
          challenges. These stories ground the brand in authenticity and
          show how VELLO supports every step of their journey toward a
          better future.
        </p>
        <p className="cs-body">
          The app experience is straightforward — core banking features are
          prioritized and previously complex funding products demystified
          for all levels of savviness.
        </p>
      </section>

      <section id="visual" className="cs-section">
        <div className="cs-image-block">
          <Image
            src="/images/jakarta/visual.png"
            alt="Brand visual exploration mockups"
            width={501}
            height={342}
          />
        </div>
      </section>

      <section id="testing" className="cs-section">
        <h2 className="cs-heading">Jakartans Responses</h2>
        <p className="cs-body cs-wip">WIP</p>
      </section>
    </CaseStudy>
  );
}
