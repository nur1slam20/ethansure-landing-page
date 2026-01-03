const steps = [
  { n: '01', t: 'ANALYSIS', d: 'Live workshop where we define the main problems and challenges before building a strategic plan moving forward.' },
  { n: '02', t: 'RESEARCH', d: 'Competitive & market research with the aim of finding that sweet spot that will set your brand apart.' },
  { n: '03', t: 'DESIGN', d: 'Here’s where your digital product starts to become a tangible thing with visual elements and a great UX design.' },
  { n: '04', t: 'DEVELOPMENT', d: 'Using modern tooling, we build fast, reliable pages and interactions aligned with the design system.' },
  { n: '05', t: 'ONBOARDING', d: 'How to update and maintain your new digital product quickly with clear documentation.' },
  { n: '06', t: 'SUPPORT', d: 'I got you. Even after launch you can still count on me for every question or issue.' },
]

export default function Process() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[56px] font-semibold leading-[0.95] md:text-[88px]">
            THOUGHTFUL<br />PROCESS
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:pt-10">
          <p className="text-xs tracking-[0.25em] text-neutral-700">I THINK A LOT</p>
        </div>

        <div className="col-span-12 mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.t} className="min-h-60 border p-6">
              <div className="text-xs text-neutral-500">{s.n}</div>
              <div className="mt-2 text-sm font-semibold tracking-[0.18em]">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
