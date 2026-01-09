import Image from 'next/image'

export type WorkItem = {
  id: string
  title: string
  desc: string
  image: string
  invert?: boolean
}

type WorkProps = {
  items: WorkItem[]
}

export default function Work({ items }: WorkProps) {
  if (!items?.length) return null

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="space-y-24">
        {items.map((x) => (
          <div key={x.id} className="grid grid-cols-12 items-center gap-6">
            <div
              className={`col-span-12 md:col-span-4 ${
                x.invert ? 'md:col-start-8' : ''
              }`}
            >
              <h3 className="text-sm font-semibold tracking-[0.18em]">
                {x.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-700">
                {x.desc}
              </p>
            </div>

            <div
              className={`col-span-12 md:col-span-7 ${
                x.invert ? 'md:col-start-1' : 'md:col-start-6'
              }`}
            >
              <div className="relative aspect-16/6 w-full overflow-hidden bg-neutral-200">
                <Image
                  src={x.image}
                  alt={x.title}
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 768px) 60vw, 100vw"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
