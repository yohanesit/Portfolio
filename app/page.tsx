const workItems = new Array(3).fill(null);

const experiences = [
  { role: "Associate Manager", company: "Accenture Song", period: "OCTOBER 2019 - PRESENT" },
  { role: "UX Designer", company: "Bukalapak", period: "MARCH 2019 - OCTOBER 2019" },
  { role: "Product Design", company: "GetCraft", period: "MAY 2018 - MARCH 2019" },
  { role: "Student Researcher", company: "The University of Texas at Austin", period: "JANUARY 2018 - MAY 2018" }
];

export default function Home() {
  return (
    <main className="page">
      <aside className="name-rail">YOHANES SITANGGANG</aside>

      <section className="intro-grid">
        <h1 className="h1">
          HELLO
          <br />I&apos;M YOHANES
        </h1>
        <p className="regular">
          I&apos;m a product designer. For 8+ years, I&apos;ve been designing experiences ranging from small startups to enterprise
          software. I focus my design process on turning complex business requirements into delightful, highly crafted experiences
          for the users.
        </p>
      </section>

      <section className="work-grid">
        <p className="section-label work h2">WORK SAMPLES</p>
        <div className="work-list">
          {workItems.map((_, index) => (
            <article className="work-card" key={`work-${index}`}>
              <div className="thumb" />
              <h2 className="h3">FROM JAKARTA TO THE WORLD</h2>
              <p className="desc regular">Learn how we helped a local city bank turn their banking app to a key to Jakarta</p>
              <p className="meta caption">5 MINUTE READ</p>
              <p className="link button">READ MORE +</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-grid">
        <p className="section-label exp h2">MY EXPERIENCES</p>
        <div className="experience-list">
          {experiences.map((item) => (
            <article className="experience-item" key={item.role}>
              <p className="button">
                {item.role} <span>// {item.company}</span>
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
