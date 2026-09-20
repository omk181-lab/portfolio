import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from './ThemeToggle'

type NavbarProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

const links = [
  ['About', '#about'],
  ['Research', '#research'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="brand" href="#top" onClick={() => setOpen(false)}>
        <span className="brand-mark">OM</span>
        <span>
          <strong>Omkar Mayekar</strong>
          <small>Computer Vision & Robotics</small>
        </span>
      </a>
      <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </nav>
    </header>
  )
}