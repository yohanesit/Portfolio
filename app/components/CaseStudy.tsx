"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";

export type CaseStudyNavItem = {
  id: string;
  label: string;
};

export type CaseStudyMeta = {
  season: string;
  role: string;
  timeline: string;
};

type CaseStudyProps = {
  navSections: CaseStudyNavItem[];
  meta: CaseStudyMeta;
  children: ReactNode;
  nextHref?: string | null;
  nextLabel?: string;
  theme?: "light" | "dark";
  footerCredit?: string;
};

function BackArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M4.5 3L1.5 7L4.5 11M1.5 7H12.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CaseStudy({
  navSections,
  meta,
  children,
  nextHref = null,
  nextLabel = "READ NEXT →",
  theme = "light",
  footerCredit = "© 2026 MADE WITH FIGMA & CURSOR",
}: CaseStudyProps) {
  const [activeSection, setActiveSection] = useState(navSections[0]?.id ?? "");
  const isClickScrolling = useRef(false);

  useEffect(() => {
    if (theme !== "dark") return;
    const previous = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#0a0a0a";
    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, [theme]);

  useEffect(() => {
    const sectionEls = navSections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navSections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveSection(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <main className={`cs-page${theme === "dark" ? " cs-page--dark" : ""}`}>
      <div className="cs-topbar">
        <Link href="/" className="cs-return-link">
          <BackArrow />
          RETURN HOME
        </Link>
      </div>

      <div className="h-divider" />

      <div className="cs-layout">
        <aside className="cs-sidebar-left">
          <div className="cs-sticky-inner">
            <nav className="cs-nav" aria-label="Case study sections">
              {navSections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`cs-nav-item${activeSection === id ? " active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="cs-content">{children}</article>

        <aside className="cs-sidebar-right">
          <div className="cs-sticky-inner">
            <p className="cs-meta">{meta.season}</p>
            <p className="cs-meta">{meta.role}</p>
            <p className="cs-meta">{meta.timeline}</p>
          </div>
        </aside>
      </div>

      <div className="h-divider" />

      <div className="cs-bottom-grid">
        <div className="cs-bottom-inner">
          <div className="cs-pagination-inner">
            <Link href="/" className="cs-pagination-link">
              <BackArrow />
              BACK HOME
            </Link>
            {nextHref ? (
              <Link href={nextHref} className="cs-pagination-link cs-pagination-link--next">
                {nextLabel}
              </Link>
            ) : (
              <span className="cs-pagination-link cs-pagination-link--next">{nextLabel}</span>
            )}
          </div>

          <footer className="cs-footer">
            <nav>
              <a href="#">EMAIL</a>
              <a href="#">RESUME</a>
              <a href="#">LINKEDIN</a>
            </nav>
            <p className="footer-credit cs-footer-credit">{footerCredit}</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
