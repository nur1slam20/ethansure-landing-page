'use client'

import Image from 'next/image'
import { useState } from 'react'

type T = {
  name: string
  role: string
  company: string
  project: string
  text: string
  photo: string
}

const data: T[] = [
  {
    name: 'FRAZER HURRELL',
    role: 'CREATIVE TECHNOLOGIST',
    company: 'YAHOO!',
    project: 'BRITISH AIRWAYS',
    text: 'From the initial meeting to the final delivery...',
    photo: '/award-4.png',
  },
]

export default function Testimonial() {
  if (!data.length) return null

  const [i, setI] = useState(0)
  const cur = data[i]

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="border">
        <div className="grid grid-cols-12 border-b px-6 py-4 text-[11px] tracking-[0.18em]">
          <div className="col-span-12 md:col-span-3">NAME: {cur.name}</div>
          <div className="col-span-12 md:col-span-3">ROLE: {cur.role}</div>
          <div className="col-span-12 md:col-span-3">COMPANY: {cur.company}</div>
          <div className="col-span-12 md:col-span-3">PROJECT: {cur.project}</div>
        </div>

        <div className="grid grid-cols-12 gap-6 p-6">
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-4/3 w-full bg-neutral-200">
              <Image
                src={cur.photo}
                alt={cur.name}
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="text-[90px] leading-none text-neutral-200">“</div>
            <p className="-mt-6 max-w-xl text-base leading-relaxed text-neutral-800 md:text-lg">
              {cur.text}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t px-6 py-4 text-xs tracking-[0.18em]">
          <button
            aria-label="Previous testimonial"
            onClick={() => setI((v) => (v - 1 + data.length) % data.length)}
            className="hover:opacity-70"
          >
            ←
          </button>
          <div>
            {String(i + 1).padStart(2, '0')}/{String(data.length).padStart(2, '0')}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => setI((v) => (v + 1) % data.length)}
            className="hover:opacity-70"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
