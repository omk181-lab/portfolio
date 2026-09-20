import type { ResearchArea } from '../data/types'

export function ResearchAreas({ areas }: { areas: ResearchArea[] }) {
  return (
    <div className="research-grid">
      {areas.map((area) => {
        const Icon = area.icon
        return (
          <article className="research-card" key={area.title} tabIndex={0}>
            <div className="card-icon"><Icon size={20} /></div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <ul className="chip-list">
              {area.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        )
      })}
    </div>
  )
}