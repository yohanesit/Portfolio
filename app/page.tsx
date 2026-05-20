const workItems = [
  {
    title: "FROM JAKARTA TO THE WORLD",
    desc: "A local bank navigating rapid digital challenges and rising customer expectations",
    period: "2025-2026 • 5 Minute Read",
  },
  {
    title: "MALAYSIAN ENERGY COMPANY",
    desc: "Shaping Malaysians future relationship with their energy usage",
    period: "2021 • 5 Minute Read",
  },
  {
    title: "NATIONAL BANKING APP",
    desc: "A bank-wide digital transformation project for Indonesia's 4th largest bank",
    period: "2023-2024 • 5 Minute Read",
  },
  {
    title: "INCREASING THAILAND'S ROAD SAFETY",
    desc: "Helping Thailand's motorists, ride safely, and efficiently",
    period: "2021 • 5 Minute Read",
  },
];

const experiences = [
  { role: "Associate Manager", company: "Accenture Song", period: "OCTOBER 2019 - PRESENT" },
  { role: "UX Designer", company: "Bukalapak", period: "MARCH 2019 - OCTOBER 2019" },
  { role: "Product Design", company: "GetCraft", period: "MAY 2018 - MARCH 2019" },
  {
    role: "Student Researcher",
    company: "The University of Texas at Austin",
    period: "JANUARY 2018 - MAY 2018",
  },
];

export default function Home() {
  return (
    <main className="page">
      <aside className="name-rail">YOHANES SITANGGANG</aside>

      <section className="intro-grid">
        <p className="section-label h3">HELLO THERE!</p>
        <p className="regular">
          I&apos;m a product designer based in Jakarta, Indonesia. For 8+ years, I&apos;ve been
          designing digital experiences ranging from small startups to enterprise software. I focus
          my design process on turning complex business requirements into delightful, crafted
          experiences for users.
        </p>
      </section>

      <section className="work-grid">
        <p className="section-label work h3">SELECT WORK</p>
        <div className="work-list">
          {workItems.map((item) => (
            <article className="work-card" key={item.title}>
              <h2 className="h3">{item.title}</h2>
              <p className="desc regular-sm">{item.desc}</p>
              <p className="meta caption">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-grid">
        <p className="section-label exp h3">EXPERIENCE</p>
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="button">
                {item.role.toUpperCase()} <span>// {item.company.toUpperCase()}</span>
              </p>
              <p className="period caption">{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <nav>
          <a className="button" href="#">
            RESUME
          </a>
          <a className="button" href="#">
            EMAIL ME
          </a>
          <a className="button" href="#">
            LINKEDIN
          </a>
        </nav>
        <p className="caption">
          © 2026 INTERACTION DESIGNER FROM JAKARTA INDONESIA
          <br />
          BUILT WITH CURSOR &amp; FIGMA
        </p>
      </footer>
    </main>
  );
}
