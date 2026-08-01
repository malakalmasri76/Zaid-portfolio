// src/hooks/usePageTitle.ts
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const titles: Record<string, string> = {
  '/': 'Home | Zaid Almasri Architecture',
  '/about': 'About | Zaid Almasri Architecture',
  '/services': 'Services | Zaid Almasri Architecture',
  '/process': 'Process | Zaid Almasri Architecture',
  '/projects': 'Projects | Zaid Almasri Architecture',
  '/sketches': 'Sketches | Zaid Almasri Architecture',
  '/contact': 'Contact | Zaid Almasri Architecture',
}

export function usePageTitle() {
  const location = useLocation()

  useEffect(() => {
    document.title = titles[location.pathname] || 'Zaid Almasri Architecture'
  }, [location.pathname])
}