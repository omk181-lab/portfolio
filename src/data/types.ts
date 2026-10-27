import type { LucideIcon } from 'lucide-react'

export type ResearchArea = {
  title: string
  description: string
  technologies: string[]
  icon: LucideIcon
}

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  thumbnail?: string
  videos?: string[]
  videoLayout?: 'two-plus-one'
  video?: string
  videoAspectRatio?: string
  technologies: string[]
  contribution?: string
  details?: string[]
  observations?: string[]
  paperUrl?: string
  huggingFaceUrl?: string
  presentationUrl?: string
  externalUrl?: string
  codeUrl?: string
  accent: 'cyan' | 'violet' | 'green'
  featured?: boolean
}