type ProcessStep = {
  id: string
  number: string
  title: string
  description: string
}

type ProcessProps = {
  heading: string
  subheading: string
  steps: ProcessStep[]
}

export default function Process({ heading, subheading, steps }: ProcessProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[56px] font-semibold leading-[0.95] md:text-[88px] whitespace-pre-line">
            {heading}
          </h2>
        </div>

        <div className="col-span-12 md:col-span-4 md:pt-10">
          <p className="text-xs tracking-[0.25em] text-neutral-700">
            {subheading}
          </p>
        </div>

        <div className="col-span-12 mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.id} className="min-h-60 border p-6">
              <div className="text-xs text-neutral-500">{s.number}</div>
              <div className="mt-2 text-sm font-semibold tracking-[0.18em]">
                {s.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
