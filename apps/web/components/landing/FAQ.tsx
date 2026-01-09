'use client'

import { useState } from 'react'

type FAQItem = {
  id: string
  question: string
  answer: string
}

type FAQProps = {
  title: string           
  subtitle: string       
  items: FAQItem[]
}

export default function FAQ({ title, subtitle, items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[56px] font-semibold leading-[0.95] md:text-[88px] whitespace-pre-line">
            {title}
          </h2>
        </div>

        <div className="col-span-12 md:col-span-4 md:pt-10">
          <p className="text-xs tracking-[0.25em] text-neutral-700 whitespace-pre-line">
            {subtitle}
          </p>
        </div>

        <div className="col-span-12 mt-12 border-t">
          {items.map((x, idx) => {
            const isOpen = open === idx

            return (
              <div key={x.id} className="border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between py-5 text-left text-xs tracking-[0.18em]"
                >
                  <span>{x.question}</span>
                  <span className="text-lg leading-none">
                    {isOpen ? '–' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 text-sm leading-relaxed text-neutral-700">
                    {x.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
