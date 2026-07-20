"use client";

import Image from "next/image";
import { CaseStudy } from "../../components/CaseStudy";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "vision", label: "THE VISION" },
  { id: "mental-model", label: "A NEW MENTAL MODEL" },
  { id: "results", label: "RESULTS" },
];

export default function BniPage() {
  return (
    <CaseStudy
      navSections={navSections}
      meta={{
        season: "WINTER 2023",
        role: "ROLE: SENIOR UX DESIGNER",
        timeline: "TIMELINE: 8 MONTHS",
      }}
      nextHref={null}
    >
      <section id="context" className="cs-section">
        <p className="cs-client">NATIONAL BANK</p>
        <h1 className="cs-title">A BANK FOR THE NEXT GENERATION</h1>
        <div className="cs-hero">
          <Image
            src="/images/bni/hero.png"
            alt="Next-generation national banking app hero"
            width={499}
            height={392}
            priority
          />
          <div className="cs-hero-awards" aria-hidden="true">
            <Image
              src="/images/bni/award-if.png"
              alt=""
              width={42}
              height={22}
            />
            <Image
              src="/images/bni/award-webby.png"
              alt=""
              width={37}
              height={22}
            />
          </div>
        </div>
        <p className="cs-intro">
          Our client is the bank of choice for university and educational
          ecosystems across Indonesia—woven into the daily lives of students,
          faculty, and institutions nationwide. Yet despite launching its first
          mobile banking app in 2016, adoption stayed low and feedback remained
          underwhelming. The bank needed a new kind of experience, and it needed
          it fast—one that spoke to the evolving expectations of a younger,
          mobile-first generation.
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
      </section>

      <section id="vision" className="cs-section">
        <h2 className="cs-heading">The Vision</h2>
        <p className="cs-body">
          With such a large and loyal user base already in place, we saw this
          not merely as a redesign but as an opportunity—a chance to give users
          as many banking experiences as possible while building healthy
          financial habits that, in turn, would reward them for coming back. The
          platform needed to rest on three experience principles:
        </p>
        <ol className="cs-list">
          <li>
            Empower users to learn financial responsibility by visualizing their
            actions, encouraging better behaviors and smarter decision-making.
          </li>
          <li>
            Connect people by making it effortless to send and receive funds,
            and to support one another&apos;s goals and dreams.
          </li>
          <li>
            Grow savings by simplifying the process and making daily saving more
            rewarding, helping users reach financial stability over time.
          </li>
        </ol>
        <div className="cs-image-block">
          <Image
            src="/images/bni/vision.png"
            alt="Spending overview mobile screen"
            width={501}
            height={477}
          />
        </div>
      </section>

      <section id="mental-model" className="cs-section">
        <h2 className="cs-heading">A New Mental Model</h2>
        <p className="cs-body">
          True to our theme of empowering users to take control of their
          finances, we introduced a time-based navigation structure—one that
          reframes banking not as a series of tasks, but as a continuous
          relationship with one&apos;s own money:
        </p>
        <p className="cs-body">
          Past lets users reflect on their spending habits through clear, honest
          insights. Present focuses on everyday actions like transfers and
          payments. Future empowers users to plan ahead with savings and
          investment tools—all in a single view.
        </p>
        <div className="cs-image-block">
          <Image
            src="/images/bni/mental-model.png"
            alt="Past, Present, and Future banking screens"
            width={501}
            height={308}
          />
        </div>
      </section>

      <section id="results" className="cs-section">
        <h2 className="cs-heading">Results</h2>
        <p className="cs-body">
          Our client launched the app on July 5, 2024, and quickly gained
          traction, earning a 4.9-star rating on the App Store. Our design team
          ended up working on 30+ features with flows for the initial launch,
          and some more for the future releases. The work was awarded with iF
          Design Award 2024 and Webby Award 2025
        </p>
        <div className="cs-image-block">
          <Image
            src="/images/bni/results-1.png"
            alt="Spending insights and transaction detail screens"
            width={501}
            height={501}
          />
        </div>
        <div className="cs-image-block">
          <Image
            src="/images/bni/results-2.png"
            alt="Account balance and financial goals screens"
            width={501}
            height={501}
          />
        </div>
      </section>
    </CaseStudy>
  );
}
