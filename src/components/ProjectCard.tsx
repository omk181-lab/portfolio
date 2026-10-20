import { ArrowUpRight, BookOpen, GitBranch } from 'lucide-react'
import type { Project } from '../data/types'

type ProjectCardProps = {
  project: Project
  onCaseStudy?: () => void
}

export function ProjectCard({ project, onCaseStudy }: ProjectCardProps) {
  return (
    <article className={`project-card project-${project.accent} ${project.featured ? 'featured' : ''}`}>
      <div className="project-visual" aria-hidden="true">
        {project.videos ? <div className="project-thumbnail-grid">{project.videos.map((video) => <video className="project-thumbnail-video" key={video} src={video} autoPlay loop muted playsInline />)}</div> : project.thumbnail ? <img className="project-thumbnail" src={project.thumbnail} alt="" /> : <>
          <span className="visual-code">{project.id === '3dgs-low-resolution' ? 'LR → SR → POSE → SPLAT' : project.category.split(' / ')[0].toUpperCase()}</span>
          <span className="visual-line" />
          <span className="visual-dot dot-a" />
          <span className="visual-dot dot-b" />
          <span className="visual-dot dot-c" />
        </>}
      </div>
      <div className="project-content">
        <p className="section-kicker">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        {project.contribution && <p className="contribution"><strong>Contribution:</strong> {project.contribution}</p>}
        <ul className="chip-list">
          {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
        {project.details && <ul className="result-list">{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}
        <div className="project-actions">
          {onCaseStudy && <button className="text-button" type="button" onClick={onCaseStudy}><BookOpen size={15} /> Read case study</button>}
          {project.externalUrl && <a className="text-button" href={project.externalUrl} target="_blank" rel="noreferrer">Project link <ArrowUpRight size={15} /></a>}
          {project.codeUrl && <a className="text-button" href={project.codeUrl} target="_blank" rel="noreferrer"><GitBranch size={15} /> View code</a>}
        </div>
      </div>
    </article>
  )
}