'use client'

import { useState } from 'react'

const faqs = [
  { q: 'DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?', a: 'Both. Usually design + build depending on scope.' },
  { q: "I'M AN AGENCY, DO YOU DEVELOP FIGMA DESIGNS?", a: 'Yes. I can implement provided design systems and components.' },
  { q: 'WHY DO I DEVELOP SOLELY USING WEBFLOW?', a: 'Example answer… blablabl' },
  { q: 'HOW MUCH DOES IT COST?', a: 'Example answer…yeeysye' },
  { q: 'IS THERE ANY EXTRA COST INVOLVED?', a: 'Example answer…yseesydadad' },
  { q: 'HOW LONG DOES IT TAKE?', a: 'Example answer…' },
  { q: 'DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES ON MY WEBSITE?', a: 'Example answer…' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[56px] font-semibold leading-[0.95] md:text-[88px]">
            COMMON<br />QUESTIONS
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:pt-10">
          <p className="text-xs tracking-[0.25em] text-neutral-700">
            SOME QUESTIONS<br />PEOPLE USUALLY ASK
          </p>
        </div>

        <div className="col-span-12 mt-12 border-t">
          {faqs.map((x, idx) => {
            const isOpen = open === idx
            return (
              <div key={x.q} className="border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between py-5 text-left text-xs tracking-[0.18em]"
                >
                  <span>{x.q}</span>
                  <span className="text-lg leading-none">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen ? (
                  <div className="pb-5 text-sm leading-relaxed text-neutral-700">
                    {x.a}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
