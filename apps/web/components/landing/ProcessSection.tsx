import Process from '@/components/landing/Process'
import { getHomePage } from '@/lib/cms'

export default async function ProcessSection() {
  const homePage = await getHomePage()

  const processSteps =
    homePage?.processSteps?.map((step) => ({
      id: step.id || String(Math.random()),
      number: step.number,
      title: step.title,
      description: step.description,
    })) || []

  return (
    <Process
      heading={homePage?.processHeading || ''}
      subheading={homePage?.processSubheading || ''}
      steps={processSteps}
    />
  )
}

