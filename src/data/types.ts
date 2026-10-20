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
  technologies: string[]
  contribution?: string
  details?: string[]
  observations?: string[]
  externalUrl?: string
  codeUrl?: string
  accent: 'cyan' | 'violet' | 'green'
  featured?: boolean
}