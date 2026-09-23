"use client";

import { TransitionImage } from "../../components/TransitionImage";
import { CaseStudy } from "../../components/CaseStudy";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "challenges", label: "CURRENT CHALLENGES" },
  { id: "agent", label: "AN AGENT OF CHANGE" },
  { id: "visual", label: "VISUAL EXPLORATION" },
  { id: "results", label: "RESULTS" },
];

export default function JakartaPage() {
  return (
    <CaseStudy
      theme="dark"
      navSections={navSections}
      meta={{
        season: "WINTER 2023",
        role: "ROLE: SENIOR UX DESIGNER",
        timeline: "TIMELINE: 8 MONTHS",
      }}
      nextHref="/work/bni"
      footerCredit={"© 2026 YOHANESIT\nMADE WITH FIGMA & CURSOR"}
    >
      <section id="context" className="cs-section">
        <p className="cs-client">REGIONAL BANK</p>
        <h1 className="cs-title">FROM JAKARTA TO THE WORLD</h1>
        <div className="cs-hero">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/jakarta/hero.png"
              alt="VELLO mobile banking app hero"
              width={1000}
              height={768}
              priority
            />
          </div>
        </div>
        <p className="cs-intro">
          <span className="cs-dropcap">O</span>ur client, a regional bank in
          Jakarta, have had strong ties to the governmental sector. As 90% of
          their user base were Jakarta&apos;s public officials and are mandated
          to have a payroll account with the bank. The bank was facing
          pressure to stay relevant amid rapid digital change and rising
          expectation.
        </p>
      </section>

      <section id="challenges" className="cs-section">
        <h2 className="cs-heading">Current Challenges</h2>
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
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/jakarta/research.png"
              alt="Future state journey diagram"
              width={3456}
              height={1428}
            />
          </div>
          <figcaption className="cs-caption">FUTURE STATE JOURNEY</figcaption>
        </figure>
      </section>

      <section id="agent" className="cs-section">
        <h2 className="cs-heading">An Agent of Change</h2>
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
        <p className="cs-body">
          Together with the branding team, our design team conducted a
          branding workshop to define what this agent of change could look
          like. With focused discussions on what promises could Bank Jakarta
          provide to everyday Jakartans, and how could they relate with the
          bank on a daily basis. To meet the fast-paced, ever-evolving needs
          of Jakarta&apos;s residents, we introduced VELLO—a mobile banking
          experience that feels less like a tool and more like a financial
          companion. Friendly and approachable like a familiar greeting, the
          name &ldquo;VELLO&rdquo; also hints at velocity, representing speed,
          smoothness, and forward momentum in every transaction.
        </p>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-workshop-grid">
            <TransitionImage
              src="/images/jakarta/workshop-1.jpg"
              alt="Branding workshop session photo"
              width={4032}
              height={3024}
            />
            <TransitionImage
              src="/images/jakarta/workshop-2.jpg"
              alt="Branding workshop discussion photo"
              width={4032}
              height={3024}
            />
          </div>
          <figcaption className="cs-caption">BRANDING WORKSHOP</figcaption>
        </figure>
      </section>

      <section id="visual" className="cs-section">
        <h2 className="cs-heading">Visual Explorations</h2>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/jakarta/app-splash.png"
              alt="VELLO QR payment and loading splash screens"
              width={1000}
              height={768}
            />
          </div>
          <figcaption className="cs-caption">VISUAL EXPLORATIONS #1</figcaption>
        </figure>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/jakarta/app-ui.png"
              alt="VELLO investment tracker and account dashboard"
              width={1000}
              height={768}
            />
          </div>
          <figcaption className="cs-caption">VISUAL EXPLORATIONS #2</figcaption>
        </figure>
      </section>

      <section id="results" className="cs-section">
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
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/jakarta/visual.png"
              alt="VELLO brand visual exploration and merchandise"
              width={2654}
              height={1812}
            />
          </div>
          <figcaption className="cs-caption">BRANDING SAMPLES</figcaption>
        </figure>
      </section>
    </CaseStudy>
  );
}
