import { ArrowDownRight, Box, Camera, Crosshair, Radio } from 'lucide-react'

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Abstract visualization of cameras, depth, and 3D points" role="img">
      <div className="visual-grid" />
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-node node-one"><Camera size={17} /></div>
      <div className="visual-node node-two"><Box size={17} /></div>
      <div className="visual-node node-three"><Crosshair size={17} /></div>
      <div className="visual-label label-one"><Radio size={13} /> scene / 03d</div>
      <div className="visual-label label-two"><ArrowDownRight size={13} /> depth field</div>
      <div className="visual-core"><span>VIS</span><small>spatial reasoning</small></div>
    </div>
  )
}