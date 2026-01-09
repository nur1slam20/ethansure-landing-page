import Work from '@/components/landing/Work'
import { getProjects, getMediaUrl } from '@/lib/cms'
import type { WorkItem } from '@/components/landing/Work'

export default async function WorkSection() {
  const projects = await getProjects()

  const workItems: WorkItem[] =
    projects
      ?.filter((p) => p.published !== false)
      .map((project) => ({
        id: String(project.id),
        title: project.title,
        desc: project.shortDescription || '',
        image: getMediaUrl(project.image),
        invert: project.invert || false,
      })) || []

  return <Work items={workItems} />
}

