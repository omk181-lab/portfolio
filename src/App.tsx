import './App.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { value: '6+', label: 'years of research' },
  { value: '12+', label: 'systems built' },
  { value: '4', label: 'core focus areas' },
  { value: '100%', label: 'research-first mindset' },
]

const researchAreas = [
  'Computer vision for perception and scene understanding',
  'Robotics and autonomous systems with real-world deployment focus',
  '3D reconstruction, SLAM, and spatiotemporal modeling',
  'Machine learning methods for robust, explainable sensing systems',
]

const projects = [
  {
    title: 'Autonomous Visual Navigation Stack',
    summary:
      'Designed a perception-driven navigation pipeline that fuses visual odometry, semantic landmarks, and motion planning to improve robustness in dynamic indoor and outdoor environments.',
    tags: ['Computer Vision', 'Robotics', 'SLAM'],
  },
  {
    title: '3D Scene Reconstruction for Robotics',
    summary:
      'Built systems for dense 3D mapping and point-cloud alignment, enabling more accurate environmental awareness in constrained and changing scenes.',
    tags: ['3D Vision', 'Mapping', 'Reconstruction'],
  },
  {
    title: 'Real-Time Detection and Tracking',
    summary:
      'Developed efficient detection and tracking pipelines for high-speed perception tasks, balancing latency and accuracy for embedded and field robots.',
    tags: ['Deep Learning', 'Tracking', 'Efficiency'],
  },
]

const publications = [
  {
    title: 'Robust Visual Perception for Autonomous Navigation',
    venue: 'International Conference on Robotics and Automation',
    detail: 'Explored resilient perception strategies for uncertain and cluttered environments.',
  },
  {
    title: 'Semantic Scene Understanding in Dynamic Environments',
    venue: 'Computer Vision and Pattern Recognition Workshop',
    detail: 'Introduced a hybrid pipeline combining geometry, semantics, and temporal consistency.',
  },
]

const experience = [
  {
    title: 'Computer Vision and Robotics Researcher',
    meta: 'Independent / Academic Research',
    details:
      'Focused on perception systems, autonomous decision-making, and experimental validation across real robotic platforms.',
  },
  {
    title: 'Robotics and AI Enthusiast',
    meta: 'Problem solving and prototyping',
    details:
      'Translates research into deployable systems, integrating sensing, learning, and control with a practical engineering lens.',
  },
]

const links = [
  { label: 'Email', href: 'mailto:omkar.mayekar.1@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omkar-mayekar/' },
  { label: 'GitHub', href: 'https://github.com/OmkarMayekar' },
  { label: 'CV', href: '/Omkar_Mayekar_CV.pdf' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="brand-wrap">
          <span className="brand-mark">OM</span>
          <div>
            <p className="eyebrow">Computer Vision & Robotics</p>
            <a href="#top" className="brand-name">
              Omkar Sharad Mayekar
            </a>
          </div>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow accent">Researching intelligent robotic perception</p>
            <h1>Building systems that help machines see, understand, and act.</h1>
            <p className="lede">
              I’m Omkar Sharad Mayekar, a Computer Vision and Robotics researcher focused
              on perception, 3D understanding, and autonomous systems that are grounded in
              real-world deployment.
            </p>

            <div className="cta-row">
              <a className="button primary" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="/Omkar_Mayekar_CV.pdf" target="_blank" rel="noreferrer">
                Download CV
              </a>
            </div>

            <ul className="social-row" aria-label="External profile links">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <aside className="hero-panel" aria-label="Research summary">
            <div className="panel-card">
              <p className="panel-label">Focus areas</p>
              <ul>
                {researchAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="stats-grid" aria-label="Key metrics and highlights">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <section id="about" className="section two-column">
          <div>
            <p className="section-kicker">About</p>
            <h2>Researcher with a systems mindset.</h2>
          </div>
          <div>
            <p>
              My work sits at the intersection of perception, autonomy, and intelligent
              motion. I enjoy designing algorithms and architectures that push beyond
              benchmarks toward deployable performance in real environments, where sensor
              noise, uncertainty, and dynamic conditions matter as much as accuracy.
            </p>
            <p>
              I’m motivated by the challenge of building machine understanding that supports
              safe decision-making, from visual scene reasoning to navigation and control.
            </p>
          </div>
        </section>

        <section id="research" className="section">
          <p className="section-kicker">Research</p>
          <h2>Core interests</h2>
          <div className="feature-grid">
            {researchAreas.map((area) => (
              <article key={area} className="feature-card">
                <span className="bullet" aria-hidden="true" />
                <p>{area}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="section-kicker">Selected work</p>
          <h2>Applied research and engineering projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-topline">
                  <span className="tag">Research</span>
                  <span className="tag muted">Prototype</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="chip-list" aria-label={`${project.title} topics`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="section">
          <p className="section-kicker">Publications</p>
          <h2>Research contributions</h2>
          <div className="publication-list">
            {publications.map((item) => (
              <article key={item.title} className="publication-item">
                <h3>{item.title}</h3>
                <p className="venue">{item.venue}</p>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section two-column experience-block">
          <div>
            <p className="section-kicker">Experience</p>
            <h2>Research and applied problem solving</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article key={item.title} className="experience-item">
                <h3>{item.title}</h3>
                <p className="meta">{item.meta}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let’s build intelligent systems together.</h2>
        </div>
        <div className="footer-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
