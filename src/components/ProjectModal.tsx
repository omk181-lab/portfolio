import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import type { Project } from '../data/types'

type ProjectModalProps = { project: Project; onClose: () => void }

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title">
        <button className="icon-button modal-close" type="button" ref={closeButton} onClick={onClose} aria-label="Close case study"><X size={19} /></button>
        <p className="section-kicker">Case study / {project.category}</p>
        <h2 id="case-study-title">{project.title}</h2>
        <div className="case-grid">
          <div><h3>Problem</h3><p>Standard 3DGS pipelines depend on COLMAP to estimate camera poses. At very low resolutions, feature extraction and matching can fail before training begins.</p></div>
          <div><h3>Proposed pipeline</h3><p>Low-resolution images → super-resolution with RealBasicVSR, SwinIR, or Stable Diffusion X4 → COLMAP pose estimation → intrinsic downscaling → 3DGS with original images → novel-view rendering.</p></div>
          <div><h3>Dataset setup</h3><p>LLFF images at 100x100 resolution and Mip-NeRF 360 images at 150x100 resolution.</p></div>
          <div><h3>Compared methods</h3><p>RealBasicVSR, SwinIR, Stable Diffusion X4, and an HRDS baseline.</p></div>
          <div><h3>Quantitative results</h3><ul className="result-list"><li>SDx4 + 3DGS: PSNR 32.96 on LLFF.</li><li>RealBasicVSR + 3DGS: PSNR 32.49 on Mip-NeRF 360.</li></ul></div>
          <div><h3>Qualitative observations</h3><p>Pose estimation can be recovered from enhanced inputs while the reconstruction remains trained on the original low-resolution imagery. These are project-specific benchmark observations, not general guarantees.</p></div>
        </div>
        <div className="modal-footer"><h3>Limitations and future directions</h3><p>Future work is limited to testing noisy real-world drone footage, applying image denoising before COLMAP, and exploring low-bandwidth robotics applications.</p></div>
      </section>
    </div>
  )
}