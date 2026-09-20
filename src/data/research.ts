import { BrainCircuit, Box, Camera, Network, ScanLine, Waypoints } from 'lucide-react'
import type { ResearchArea } from './types'

export const researchAreas: ResearchArea[] = [
  {
    title: '3D Reconstruction',
    description: 'Recovering geometry, camera poses, and spatial structure from visual observations.',
    technologies: ['3DGS', 'NeRFs', 'COLMAP', 'Depth models'],
    icon: Box,
  },
  {
    title: 'Neural Rendering',
    description: 'Studying learned scene representations for high-quality, efficient rendering.',
    technologies: ['Gaussian Splatting', 'NeRFs', 'Super-resolution'],
    icon: Network,
  },
  {
    title: 'Computer Vision',
    description: 'Building visual systems that remain useful when images, geometry, or motion are uncertain.',
    technologies: ['PyTorch', 'OpenCV', 'Video understanding'],
    icon: Camera,
  },
  {
    title: 'Robot Perception',
    description: 'Making spatially aware perception useful for robot policies, manipulation, and action.',
    technologies: ['Depth estimation', 'LeRobot', 'SO101'],
    icon: ScanLine,
  },
  {
    title: 'View Synthesis',
    description: 'Generating consistent images from new viewpoints with geometry and learned representations.',
    technologies: ['Latent diffusion', 'Geometry', 'Novel views'],
    icon: Waypoints,
  },
  {
    title: 'Vision-Language-Action',
    description: 'Connecting visual understanding and language-conditioned policies to grounded robot action.',
    technologies: ['ACT', 'SmolVLA', 'GrootN1.5'],
    icon: BrainCircuit,
  },
]