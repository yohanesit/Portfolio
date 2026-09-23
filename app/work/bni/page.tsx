"use client";

import { TransitionImage } from "../../components/TransitionImage";
import { CaseStudy } from "../../components/CaseStudy";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "research", label: "FOUNDATIONAL RESEARCH" },
  { id: "branding", label: "BRANDING WORKSHOP" },
  { id: "visual", label: "VISUAL EXPLORATION" },
  { id: "testing", label: "TESTING & CONCLUSION" },
];

export default function BniPage() {
  return (
    <CaseStudy
      navSections={navSections}
      meta={{
        season: "WINTER 2023",
        role: "ROLE: SENIOR DESIGNER",
        timeline: "TIMELINE: 8 MONTHS",
      }}
      nextHref={null}
      footerCredit={"© 2026 YOHANESIT\nMADE WITH FIGMA & CURSOR"}
    >
      <section id="context" className="cs-section">
        <p className="cs-client">NATIONAL BANK</p>
        <h1 className="cs-title">A BANK FOR THE NEXT GENERATION</h1>
        <div className="cs-hero">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/bni/hero.png"
              alt="Next-generation national banking app hero"
              width={2266}
              height={2160}
              priority
            />
          </div>
          <div className="cs-hero-awards" aria-hidden="true">
            <TransitionImage
              src="/images/bni/award-if.png"
              alt=""
              width={76}
              height={39}
              style={{ width: "auto", height: 39 }}
            />
            <TransitionImage
              src="/images/bni/award-webby.png"
              alt=""
              width={66}
              height={39}
              style={{ width: "auto", height: 39 }}
            />
          </div>
        </div>
        <p className="cs-intro">
          <span className="cs-dropcap">O</span>ur client is the bank of choice
          for Indonesia&apos;s universities — woven into the daily lives of
          students, faculty, and institutions nationwide. But its first mobile
          app, launched in 2016, never caught on: adoption stayed low and
          feedback was underwhelming. A younger, mobile-first generation
          expected more, and the bank needed to answer fast. We opened with
          candid interviews across staff and customers, and one tension surfaced
          above the rest:
        </p>
        <p className="cs-intro">
          To understand where the experience was falling short, we conducted
          open-ended interviews with internal stakeholders and a selection of
          customers, gathering both their honest read on the current app and a
          sense of where the bank wanted to head next. One tension surfaced
          clearly above the rest: leadership envisioned an app that played a
          central role in everyday banking life, while customers remained
          largely unaware of the many features and services the app already
          offered.
        </p>
        <aside className="cs-callout">
          How Might We: give a loyal user base reasons to return — not just
          reasons to sign up?
        </aside>
      </section>

      <section id="research" className="cs-section">
        <h2 className="cs-heading">Three Principles</h2>
        <p className="cs-body">
          We anchored the redesign on three experience principles:
        </p>
        <ol className="cs-list">
          <li>
            Empower — visualize your money so better decisions feel obvious.
          </li>
          <li>
            Connect — make sending, receiving, and supporting others&apos; goals
            effortless.
          </li>
          <li>
            Grow — make daily saving simple and rewarding enough to stick.
          </li>
        </ol>
      </section>

      <section id="branding" className="cs-section">
        <aside className="cs-callout">
          How Might We: Help customers discover everything their app can already
          do?
        </aside>
        <h2 className="cs-heading">A New Mental Model</h2>
        <p className="cs-body">
          We introduced a time-based navigation structure — banking as a
          continuous relationship with your money, in a single view:
        </p>
        <p className="cs-body">
          Past — reflect on spending through clear, honest insights.
          <br />
          Present — everyday actions: transfers and payments.
          <br />
          Future — plan ahead with savings and investing.
        </p>
        <div className="cs-media-frame cs-media-frame--spaced">
          <TransitionImage
            src="/images/bni/mental-model.png"
            alt="Past, Present, and Future banking screens"
            width={2568}
            height={1972}
          />
        </div>
      </section>

      <section id="visual" className="cs-section">
        <div className="cs-media-frame cs-media-frame--spaced">
          <TransitionImage
            src="/images/bni/spending.png"
            alt="Spending insights and budgeting screens"
            width={1890}
            height={1890}
          />
        </div>
        <div className="cs-media-frame cs-media-frame--spaced">
          <TransitionImage
            src="/images/bni/goals.png"
            alt="Investment portfolio and financial goals screens"
            width={1890}
            height={1890}
          />
        </div>
      </section>

      <section id="testing" className="cs-section">
        <h2 className="cs-heading">Results</h2>
        <p className="cs-body">
          The app launched July 5, 2024, with 30+ features shipped for the
          initial release and more staged for later. It holds a 4.9-star App
          Store rating and was awarded the iF Design Award 2024 and a Webby
          Award 2025
        </p>
        <div className="cs-media-frame cs-media-frame--spaced">
          <TransitionImage
            src="/images/bni/collage.png"
            alt="National banking app screen collage"
            width={1924}
            height={1082}
          />
        </div>
      </section>
    </CaseStudy>
  );
}
