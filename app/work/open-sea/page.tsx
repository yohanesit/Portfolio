"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { TransitionImage } from "../../components/TransitionImage";
import { CaseStudy } from "../../components/CaseStudy";

const navSections = [
  { id: "context", label: "CONTEXT" },
  { id: "challenge", label: "THE CHALLENGE" },
  { id: "idea", label: "THE IDEA" },
  { id: "modes", label: "SEE, SOLVE, SIMPLIFY" },
  { id: "results", label: "RESULTS" },
];

const journeys = [
  {
    id: "strategic",
    active: "Strategic",
    copy: "As a CEO: “I want to get notified on company performance and global market trends.” From a smart notification, to market trends read and contextualized, to suggested actions—then delegating the analysis, prioritizing the day’s tasks, and walking into a board meeting with speaking notes already drafted. Understanding → Communication → Action.",
    src: "/images/open-sea/journey-strategic.png",
    alt: "Strategic journey map from understanding to action",
    width: 4096,
    height: 711,
  },
  {
    id: "non-ops",
    active: "Non-ops",
    copy: "HR recruiter: “I need to develop a comprehensive job description.” Scoping a role and its compensation, coordinating interviews and evaluating candidates, then routing approvals, updating the candidate, and preparing onboarding—one continuous flow instead of a dozen disconnected handoffs. Planning → Execution → Communicating.",
    src: "/images/open-sea/journey-nonops.png",
    alt: "Non-operational journey map from planning to communicating",
    width: 4096,
    height: 711,
  },
  {
    id: "operational",
    active: "Operational",
    copy: "As a commercial and voyage planner: “I need to optimize fleet deployment for multiple cargo commitments.” From pricing strategy and an incoming cargo request, through understanding requirements and optimizing fleet allocation, to a submitted voyage plan and safe berthing execution on the other end. Commercial → Cargo → Berthing.",
    src: "/images/open-sea/journey-operational.png",
    alt: "Operational journey map from commercial planning to berthing",
    width: 4096,
    height: 711,
  },
] as const;

type JourneyId = (typeof journeys)[number]["id"];

function JourneyTabs() {
  const [activeId, setActiveId] = useState<JourneyId>(journeys[0].id);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndex = Math.max(
    0,
    journeys.findIndex((journey) => journey.id === activeId)
  );
  const active = journeys[activeIndex];

  const selectTab = (index: number) => {
    setActiveId(journeys[index].id);
    tabRefs.current[index]?.focus();
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = journeys.length - 1;
    if (event.key === "ArrowRight") selectTab(index === last ? 0 : index + 1);
    else if (event.key === "ArrowLeft") selectTab(index === 0 ? last : index - 1);
    else if (event.key === "Home") selectTab(0);
    else if (event.key === "End") selectTab(last);
    else return;
    event.preventDefault();
  };

  return (
    <div className="os-journey os-bleed">
      <div className="os-roles" role="tablist" aria-label="Role">
        {journeys.map((journey, index) => {
          const selected = journey.id === active.id;
          return (
            <button
              key={journey.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`journey-tab-${journey.id}`}
              aria-selected={selected}
              aria-controls="journey-panel"
              tabIndex={selected ? 0 : -1}
              className={`os-role${selected ? " os-role--active" : ""}`}
              onClick={() => selectTab(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {journey.active.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div
        key={active.id}
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${active.id}`}
        className="os-journey-panel"
      >
        <p className="os-journey-copy">{active.copy}</p>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src={active.src}
              alt={active.alt}
              width={active.width}
              height={active.height}
            />
          </div>
          <figcaption className="cs-caption">JOURNEY MAP</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default function OpenSeaPage() {
  return (
    <CaseStudy
      navSections={navSections}
      meta={{
        season: "WINTER 2023",
        role: "ROLE: SENIOR DESIGNER",
        timeline: "TIMELINE: 8 MONTHS",
      }}
      nextHref="/work/bni"
      footerCredit={"© 2026 YOHANESIT\nMADE WITH FIGMA & CURSOR"}
    >
      <section id="context" className="cs-section os-section">
        <p className="cs-client">SHIPPING COMPANY</p>
        <h1 className="cs-title">READY FOR THE OPEN SEA</h1>
        <div className="cs-hero">
          <div className="cs-media-frame">
            <div className="os-hero">
          <Image
            src="/images/open-sea/wallpaper.png"
            alt=""
            fill
            priority
            sizes="(max-width: 699px) 100vw, 640px"
            className="os-hero-bg"
          />
          <div className="os-phones">
            <div className="os-phone os-phone--left">
              <Image
                src="/images/open-sea/phone-left.png"
                alt="Super app home screen"
                fill
                sizes="140px"
                className="os-phone-screen"
              />
            </div>
            <div className="os-phone os-phone--center">
              <Image
                src="/images/open-sea/phone-center.png"
                alt="Super app dashboard"
                fill
                sizes="160px"
                className="os-phone-screen"
              />
            </div>
            <div className="os-phone os-phone--right">
              <Image
                src="/images/open-sea/phone-right.png"
                alt="Super app detail screen"
                fill
                sizes="140px"
                className="os-phone-screen"
              />
            </div>
          </div>
            </div>
          </div>
        </div>
        <p className="cs-intro">
          <span className="cs-dropcap">P</span>
          ertamina International Shipping (PIS), operates in one of the most
          demanding sectors there is—hydrocarbon logistics, where decisions
          carry real operational and financial weight. As the company set its
          sights on scaling globally and preparing for an IPO, its people were
          doing sharper work than their tools allowed. Information sat in a
          dozen places, action took too many steps, and the day was spent
          collecting data instead of acting on it. The Super App was our
          answer: one intelligent workspace, built to change that.
        </p>
      </section>

      <section id="challenge" className="cs-section os-section">
        <h2 className="cs-heading">The Challenge</h2>
        <p className="cs-body">
          When we went into the research, two problems surfaced again and
          again—and they compounded each other.
        </p>
        <p className="cs-body">
          The first was too many apps. People juggled a sprawl of disconnected
          tools, which made retrieving the right information at the right time
          far harder than it should have been. The second was a significant
          administrative burden—the scheduling, filing, and status-chasing that
          quietly consumes a working day and drags on productivity.
        </p>
        <p className="cs-body">
          The people we spoke to didn&apos;t want another app added to the pile.
          From a director scanning the morning&apos;s numbers to an operations
          planner mid-voyage, they shared one need: to spend less time hunting
          and filing, and more time deciding and doing.
        </p>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/open-sea/apps.png"
              alt="Collection of apps across business functions"
              width={1566}
              height={905}
            />
          </div>
          <figcaption className="cs-caption">
            COLLECTION OF APPS ACROSS BUSINESS FUNCTIONS
          </figcaption>
        </figure>
      </section>

      <section id="idea" className="cs-section os-section">
        <h2 className="cs-heading">The Idea</h2>
        <p className="cs-body">
          So we designed the Super App not as another tool, but as the layer
          that sits above them—an intelligent workspace that evolves with
          enterprise needs and adapts to whoever opens it. Its whole job is to
          cut through the noise and point each person at their next move.
        </p>
        <p className="cs-body">
          It feels less like software you operate and more like a capable
          colleague who has already done the reading: one that notices what
          matters, brings the right insight forward, and clears the path to the
          next step.
        </p>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/open-sea/exploration.png"
              alt="Early exploration of the interaction model"
              width={4096}
              height={2292}
            />
          </div>
          <figcaption className="cs-caption">
            EARLY EXPLORATION OF INTERACTION MODEL
          </figcaption>
        </figure>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/open-sea/wireframe.png"
              alt="Wireframes of the super app"
              width={4096}
              height={1667}
            />
          </div>
          <figcaption className="cs-caption">WIREFRAME</figcaption>
        </figure>
      </section>

      <section id="modes" className="cs-section os-section">
        <h2 className="cs-heading">See, Solve, Simplify</h2>
        <p className="cs-body">
          The experience is organized around three modes—a simple mental model
          that holds a lot of complexity without passing it on to the person
          using it. Beneath them sit five intelligent capabilities that do the
          actual work.
        </p>
        <p className="cs-body">
          See — understand the big picture. The app opens on what matters.
          Smart Notification delivers automated, contextualized alerts—quick
          summaries, surfaced by your most frequent activity—so nothing
          important gets buried. Insight Generation turns raw data into a read
          on the situation: spotting trends and anomalies, summarizing,
          interpreting a document or image, and drawing out correlations across
          sources.
        </p>
        <p className="cs-body">
          Solve — take action with confidence. Advisor provides a personalized,
          reasoned response to support the decision in front of you—what-if
          scenarios, guidance on next steps, and help prioritizing. Digital
          Assistant then does the doing, executing the everyday tasks that eat
          a day: scheduling a meeting, filing expenses, booking travel.
        </p>
        <p className="cs-body">
          Simplify — streamline the journey. App Launchpad replaces the
          scavenger hunt across a dozen tools with one place to access, manage,
          and launch every application—the direct answer to a workforce
          drowning in apps.
        </p>
        <figure className="cs-figure cs-figure--plain">
          <div className="cs-media-frame">
            <TransitionImage
              src="/images/open-sea/interaction.png"
              alt="See, Solve, and Simplify interaction model"
              width={2794}
              height={2230}
            />
          </div>
          <figcaption className="cs-caption">
            INTERACTION MODEL
          </figcaption>
        </figure>

        <h2 className="cs-heading os-subhead">One System, Many Roles</h2>
        <p className="cs-body">
          The real test of a workspace this broad is whether it holds up across
          wildly different jobs. So we designed and mapped it against three
          end-to-end journeys, each following the same See–Solve–Simplify
          spine—and the same five capabilities—instantiated for a very
          different person.
        </p>
        <JourneyTabs />
      </section>

      <section id="results" className="cs-section os-section">
        <h2 className="cs-heading">Results</h2>
        <p className="cs-body">
          Because the Super App landed as a live enterprise transformation
          ahead of PIS&apos;s IPO, the clearest measure of impact isn&apos;t a
          single headline number—it&apos;s in what the design closed.
        </p>
        <p className="cs-body">
          We took the two problems the research surfaced—too many apps and too
          much admin—and answered both with one coherent workspace: three
          modes, five reusable intelligent capabilities, and three end-to-end
          journeys spanning strategic, non-operational, and operational work,
          each grounded in in-depth interviews rather than assumption. The
          design proves a single, adaptable system can serve a CEO, an HR
          officer, and an operations planner without fragmenting into three
          separate products.
        </p>
        <p className="cs-body">
          The shift it makes possible is the real outcome: from passive to
          proactive, from collecting data to acting on it, and from a company
          slowed by its own tools to one with an intelligent foundation ready
          for global scale—and for the scrutiny that comes with going public.
        </p>
      </section>
    </CaseStudy>
  );
}
