import { useEffect, useState } from 'react'
import { ArrowUpRight, Bot, BriefcaseBusiness, GitBranch, Mail, MapPin } from 'lucide-react'
import './App.css'
import { HeroVisual } from './components/HeroVisual'
import { Navbar } from './components/Navbar'
import { ProjectCard } from './components/ProjectCard'
import { ProjectModal } from './components/ProjectModal'
import { ResearchAreas } from './components/ResearchAreas'
import { ScrollProgress } from './components/ScrollProgress'
import { Timeline } from './components/Timeline'
import { projects } from './data/projects'
import { researchAreas } from './data/research'
import type { Project } from './data/types'
import { skillGroups } from './data/experience'

const profile = {
  email: 'omayeka@clemson.edu',
  linkedin: 'https://www.linkedin.com/in/omkar-mayekar-b28628202/',
  github: 'https://github.com/omkar55-bot',
  huggingFace: 'https://huggingface.co/omkarmayekar555',
  cv: './Omkar_Mayekar_CV.pdf',
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const stored = localStorage.getItem('omkar-theme')
    return stored === 'light' ? 'light' : 'dark'
  })
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('omkar-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark')
  const caseStudyProject = projects.find((project) => project.id === '3dgs-low-resolution')

  return (
    <div className="app-shell" id="top">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="status-pill"><span className="status-dot" /> Computer Vision · 3D Reconstruction · Robotics</p>
            <p className="eyebrow">Researching visual intelligence for embodied systems</p>
            <h1 id="hero-title">Building Visual Intelligence for <em>3D Worlds</em> and Robots</h1>
            <p className="hero-lede">I am Omkar Mayekar, a computer vision and robotics researcher working on 3D reconstruction, neural rendering, view synthesis, and spatial reasoning for intelligent robots.</p>
            <div className="hero-actions">
              <a className="button primary" href="#research">View research <ArrowUpRight size={16} /></a>
              <a className="button secondary" href={profile.cv} download>Download CV</a>
            </div>
            <div className="hero-links" aria-label="Profile links">
              <a href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a>
              <a href={profile.huggingFace} target="_blank" rel="noreferrer"><Bot size={16} /> Hugging Face</a>
              <a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a>
            </div>
          </div>
          <HeroVisual />
        </section>

        <section id="about" className="section-wrap about-section" aria-labelledby="about-title">
          <div className="section-heading"><p className="eyebrow">01 / About</p><h2 id="about-title">Research-driven engineering for uncertain worlds.</h2></div>
          <div className="about-copy"><p>I am a computer vision and robotics researcher with a Master's Degree in Computer Science from Clemson University, South Carolina, USA. I have experience in neural rendering, 3D scene understanding, view synthesis, robot manipulation, and vision-language-action systems. My work focuses on making visual intelligence more reliable in real-world environments, especially when images are low-resolution, geometry is uncertain, or robots must reason about spatial relationships.</p><p>I focus on the entire research loop: building complete experimental pipelines, benchmarking methods on real-world and synthetic datasets, studying failure cases, and connecting computer vision research to robot action and manipulation.</p><div className="location-line"><MapPin size={16} /> Thane, Maharashtra, India</div></div>
        </section>

        <section id="research" className="section-wrap" aria-labelledby="research-title">
          <div className="section-heading split-heading"><div><p className="eyebrow">02 / Research areas</p><h2 id="research-title">A lab notebook for visual intelligence.</h2></div><p>From pixels to geometry to action, my interests follow the information a robot needs to understand its world.</p></div>
          <ResearchAreas areas={researchAreas} />
        </section>

        <section id="projects" className="section-wrap" aria-labelledby="projects-title">
          <div className="section-heading split-heading"><div><p className="eyebrow">03 / Selected work</p><h2 id="projects-title">Research projects with receipts.</h2></div><p>Experiments, systems, and investigations grounded in the supplied project records and benchmark details.</p></div>
          <div className="project-grid">
            {projects.map((project) => <ProjectCard key={project.id} project={project} onCaseStudy={project.id === '3dgs-low-resolution' ? () => setActiveProject(project) : undefined} />)}
            <article className="project-card placeholder-card"><p className="section-kicker">Open slot</p><h3>More research projects will be added soon.</h3><p>A flexible project surface is ready for future work from GitHub.</p></article>
          </div>
        </section>

        <section id="experience" className="section-wrap" aria-labelledby="experience-title">
          <div className="section-heading"><p className="eyebrow">04 / Experience & education</p><h2 id="experience-title">A research practice that stays close to the machine.</h2></div>
          <Timeline />
        </section>

        <section id="skills" className="section-wrap" aria-labelledby="skills-title">
          <div className="section-heading split-heading"><div><p className="eyebrow">05 / Skills</p><h2 id="skills-title">Tools for the whole loop.</h2></div><p>No unsupported proficiency scores; just the methods and infrastructure used across the work.</p></div>
          <div className="skills-grid">{skillGroups.map((group) => <article className="skill-group" key={group.title}><h3>{group.title}</h3><ul className="chip-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></article>)}</div>
        </section>

        <section className="section-wrap publications-section" aria-labelledby="publications-title">
          <div className="section-heading"><p className="eyebrow">06 / Publications</p><h2 id="publications-title">Research in the record.</h2><p className="workflow-intro">Selected publications on geometry-guided image synthesis and generalizable neural rendering.</p></div>
          <div className="publication-list">
            <article className="publication-item"><span>01</span><div><p className="publication-type">Published paper</p><h3><a href="https://saemobilus.sae.org/papers/view-translation-geometry-guided-latent-diffusion-cross-view-image-synthesis-ground-vehicles-2026-01-7501" target="_blank" rel="noreferrer">View Translation: Geometry-Guided Latent Diffusion for Cross-View Image Synthesis of Ground Vehicles <ArrowUpRight size={16} /></a></h3></div></article>
            <article className="publication-item"><span>02</span><div><p className="publication-type">arXiv paper</p><h3><a href="https://arxiv.org/abs/2603.20128" target="_blank" rel="noreferrer">Generalizable Neural Radiance Field Super-Resolution <ArrowUpRight size={16} /></a></h3></div></article>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap" aria-labelledby="contact-title">
          <div><p className="eyebrow">07 / Contact</p><h2 id="contact-title">Let’s build better visual intelligence.</h2><p>I am interested in research and engineering opportunities in computer vision, 3D reconstruction, neural rendering, robotics, and vision-language-action systems.</p></div>
          <div className="contact-actions"><a className="button primary" href={`mailto:${profile.email}`}><Mail size={16} /> Email me</a><a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a><a className="button secondary" href={profile.github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a><a className="button secondary" href={profile.cv} download>Download CV</a></div>
        </section>
      </main>

      <footer className="site-footer"><div><strong>Omkar Mayekar</strong><p>Computer Vision · 3D Reconstruction · Robotics</p></div><div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a><span>Built with React and GitHub Pages · {new Date().getFullYear()}</span></div></footer>
      {activeProject && caseStudyProject && <ProjectModal project={caseStudyProject} onClose={() => setActiveProject(null)} />}
    </div>
  )
}

export default App
