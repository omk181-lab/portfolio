import { useEffect, useRef } from 'react'
import { ArrowUpRight, BookOpen, GitBranch } from 'lucide-react'
import type { Project } from '../data/types'

type ProjectCardProps = {
  project: Project
  onCaseStudy?: () => void
}

export function ProjectCard({ project, onCaseStudy }: ProjectCardProps) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([])

  useEffect(() => {
    if (!project.videos) return

    const videos = videoRefs.current.filter((video): video is HTMLVideoElement => video !== null)
    const startVideosTogether = () => {
      if (videos.length !== project.videos?.length || videos.some((video) => video.readyState < 2)) return
      videos.forEach((video) => {
        video.currentTime = 0
        void video.play()
      })
    }

    videos.forEach((video) => video.addEventListener('loadeddata', startVideosTogether))
    startVideosTogether()

    return () => videos.forEach((video) => video.removeEventListener('loadeddata', startVideosTogether))
  }, [project.videos])

  return (
    <article className={`project-card project-${project.accent} ${project.featured ? 'featured' : ''}`}>
      <div className="project-visual" style={project.videoAspectRatio ? { aspectRatio: project.videoAspectRatio } : undefined} aria-hidden="true">
        {project.videos ? <div className={`project-thumbnail-grid ${project.videoLayout ? `video-layout-${project.videoLayout}` : ''}`}>{project.videos.map((video, index) => <video className="project-thumbnail-video" key={video} src={video} ref={(element) => { videoRefs.current[index] = element }} loop muted playsInline />)}</div> : project.video ? <video className="project-thumbnail project-single-video" src={project.video} autoPlay loop muted playsInline /> : project.thumbnail ? <img className="project-thumbnail" src={project.thumbnail} alt="" /> : <>
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
          {project.paperUrl && <a className="text-button" href={project.paperUrl} target="_blank" rel="noreferrer">Read paper <ArrowUpRight size={15} /></a>}
          {project.huggingFaceUrl && <a className="text-button" href={project.huggingFaceUrl} target="_blank" rel="noreferrer">Hugging Face <ArrowUpRight size={15} /></a>}
          {project.presentationUrl && <a className="text-button" href={project.presentationUrl} target="_blank" rel="noreferrer">View presentation <ArrowUpRight size={15} /></a>}
          {project.externalUrl && <a className="text-button" href={project.externalUrl} target="_blank" rel="noreferrer">Project link <ArrowUpRight size={15} /></a>}
          {project.codeUrl && <a className="text-button" href={project.codeUrl} target="_blank" rel="noreferrer"><GitBranch size={15} /> View code</a>}
        </div>
      </div>
    </article>
  )
}