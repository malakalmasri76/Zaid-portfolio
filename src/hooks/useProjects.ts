// src/hooks/useProjects.ts
import { useEffect, useState } from 'react'
import { client } from '@/lib/sanity'
import { PROJECTS_QUERY } from '@/lib/queries'
import type { Project } from '@/data/projects'

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    client
      .fetch<Project[]>(PROJECTS_QUERY)
      .then((data) => setProjects(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}