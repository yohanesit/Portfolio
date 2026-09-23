import Link from "next/link";
import { ClockWidget } from "./components/ClockWidget";

const workItems = [
  {
    title: "FROM JAKARTA TO THE WORLD",
    desc: "A local bank navigating rapid digital challenges and rising customer expectations",
    period: "2025-2026 • 5 Minute Read",
    href: "/work/jakarta",
  },
  {
    title: "A BANK FOR THE NEXT GENERATION",
    desc: "A bank-wide digital transformation project for Indonesia's 4th largest bank",
    period: "2023-2024 • 5 Minute Read",
    href: "/work/bni",
  },
  {
    title: "READY FOR THE OPEN SEA",
    desc: "One intelligent workspace for a shipping company scaling globally",
    period: "2023 • 8 Months",
    href: "/work/open-sea",
  },
];

const experiences = [
  { role: "Associate Manager", company: "Accenture Song", period: "OCTOBER 2019 - PRESENT" },
  { role: "UX Designer", company: "Bukalapak", period: "MARCH 2019 - OCTOBER 2019" },
  { role: "Product Designer", company: "GetCraft", period: "MAY 2018 - MARCH 2019" },
  {
    role: "Student Researcher",
    company: "The University of Texas at Austin",
    period: "JANUARY 2018 - MAY 2018",
  },
];

export default function Home() {
  return (
    <main className="page">
      {/* ── Header: clock + @YOHANESIT (above first divider) ── */}
      <div className="page-header-grid">
        <div className="page-header-content">
          <ClockWidget />
          <button className="home-handle">@YOHANESIT</button>
        </div>
      </div>

      <div className="h-divider" />

      {/* ── Bio ── */}
      <section className="intro-grid">
        <div className="intro-content">
          <p className="bio-text">
            I&apos;m a UX Designer currently working for{" "}
            <a
              href="https://www.accenture.com/us-en/services/song-index"
              className="bio-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accenture Song.
            </a>
            <br />
            <br />
            For 8+ years, I&apos;ve been designing digital experiences ranging from small startups
            to enterprise software.
            <br />
            <br />
            I focus my design process on turning complex business requirements into delightful,
            crafted experiences for users.
          </p>
        </div>
      </section>

      {/* ── Select Work ── */}
      <section className="work-grid">
        <p className="section-label work">SELECT WORK</p>
        <div className="work-list">
          {workItems.map((item) => (
            <Link href={item.href} key={item.title} className="work-card work-card--link">
              <p className="work-title">{item.title}</p>
              <p className="work-desc">{item.desc}</p>
              <p className="work-meta">{item.period}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="experience-grid">
        <p className="section-label exp">EXPERIENCE</p>
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="exp-role">
                {item.role.toUpperCase()} //{" "}
                <span className="company">{item.company.toUpperCase()}</span>
              </p>
              <p className="exp-period">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="h-divider" />

      {/* ── Footer ── */}
      <div className="footer-grid">
        <footer className="footer">
          <nav>
            <a href="#">EMAIL</a>
            <a href="#">RESUME</a>
            <a href="#">LINKEDIN</a>
          </nav>
          <p className="footer-credit">
            © 2026 MADE WITH FIGMA &amp; CURSOR
          </p>
        </footer>
      </div>
    </main>
  );
}
