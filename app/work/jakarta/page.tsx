"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const imgFoundationalResearch =
  "https://www.figma.com/api/mcp/asset/577d7c9f-7e9f-41bd-8839-4b967a515291";
const imgBrandingWorkshop =
  "https://www.figma.com/api/mcp/asset/b69386bd-4ae4-422b-84c6-41a6dcf8ed22";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "research", label: "FOUNDATIONAL RESEARCH" },
  { id: "branding", label: "BRANDING WORKSHOP" },
  { id: "visual", label: "VISUAL EXPLORATIONS" },
  { id: "testing", label: "TESTING & CONCLUSION" },
];

export default function JakartaPage() {
  const [activeSection, setActiveSection] = useState("context");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="cs-page">
      {/* Top bar */}
      <div className="cs-topbar">
        <Link href="/" className="cs-return-link">
          RETURN HOME →
        </Link>
      </div>

      <div className="h-divider" />

      {/* Main two-column layout: sticky nav + scrollable content */}
      <div className="cs-layout">
        <nav className="cs-nav">
          {navSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`cs-nav-item${activeSection === id ? " active" : ""}`}
            >
              {label}
            </a>
          ))}
        </nav>

        <article className="cs-content">
          {/* ── CONTEXT ── */}
          <section id="context" className="cs-section">
            <p className="cs-client">BANK JAKARTA</p>
            <h1 className="cs-title">FROM JAKARTA TO THE WORLD</h1>
            <div className="cs-intro">
              <span className="cs-dropcap">B</span>
              <span className="cs-intro-text">
                ank Jakarta (previously Bank DKI) have had strong ties to the
                governmental sector. As 90% of their user base were Jakarta&apos;s
                public officials and are mandated to have a payroll account with
                the bank. The bank was facing pressure to stay relevant amid
                rapid digital change and rising expectation.
              </span>
            </div>
            <div className="cs-image-block" />
          </section>

          {/* ── FOUNDATIONAL RESEARCH ── */}
          <section id="research" className="cs-section">
            <p className="cs-section-label">FOUNDATIONAL RESEARCH</p>
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
              <img src={imgFoundationalResearch} alt="Foundational research" />
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

          {/* ── BRANDING WORKSHOP ── */}
          <section id="branding" className="cs-section">
            <p className="cs-section-label">BRANDING WORKSHOP</p>
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
            <div className="cs-image-block">
              <img src={imgBrandingWorkshop} alt="Branding workshop" />
            </div>
          </section>

          {/* ── VISUAL EXPLORATIONS ── */}
          <section id="visual" className="cs-section">
            <p className="cs-section-label">VISUAL EXPLORATIONS</p>
            <div className="cs-image-block" />
          </section>

          {/* ── TESTING & CONCLUSION ── */}
          <section id="testing" className="cs-section">
            <p className="cs-section-label">TESTING &amp; CONCLUSION</p>
            <h2 className="cs-heading">Jakartans Responses</h2>
            <p className="cs-body cs-wip">WIP</p>
          </section>
        </article>
      </div>

      {/* Pagination bar */}
      <div className="cs-pagination-grid">
        <div className="cs-pagination-inner">
          <Link href="/" className="cs-pagination-link">
            ← RETURN HOME
          </Link>
          <a href="#" className="cs-pagination-link">
            READ NEXT →
          </a>
        </div>
      </div>

      <div className="h-divider" />

      {/* Footer */}
      <div className="footer-grid">
        <footer className="footer">
          <nav>
            <a href="#">RESUME</a>
            <a href="#">EMAIL ME</a>
            <a href="#">LINKEDIN</a>
          </nav>
          <p>© 2026 INTERACTION DESIGNER FROM JAKARTA INDONESIA</p>
        </footer>
      </div>
    </main>
  );
}
