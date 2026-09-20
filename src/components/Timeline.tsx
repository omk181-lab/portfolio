import { education, experience } from '../data/experience'

export function Timeline() {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline-item" key={item.role}>
          <div className="timeline-marker" />
          <div className="timeline-body">
            <p className="section-kicker">{item.dates}</p>
            <h3>{item.role}</h3>
            <p className="meta">{item.organization}</p>
            <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
            <ul className="chip-list">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </div>
        </article>
      ))}
      <div className="education-grid">
        {education.map((item) => <article className="education-card" key={item.degree}><span>{item.year}</span><h3>{item.degree}</h3><p>{item.school} · {item.location}</p></article>)}
      </div>
    </div>
  )
}