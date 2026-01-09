import Image from 'next/image'

type BragRow = {
  company: string
  award: string
  category: string
  year: string
}

type BragPoster = {
  id: string
  url: string
}

type BragProps = {
  title: string 
  subtitle: string 
  posters: BragPoster[]
  rows: BragRow[]
}

export default function Brag({
  title,
  subtitle,
  posters,
  rows,
}: BragProps) {
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
      </div>

      <div className="mt-12 overflow-x-auto">
        <div className="flex min-w-max gap-10 py-4">
          {posters.map((p) => (
            <div
              key={p.id}
              className="relative h-45 w-35 shrink-0 bg-neutral-200"
            >
              <Image
                src={p.url}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t">
        {rows.map((r, i) => (
          <div
            key={i}
            className="grid grid-cols-12 gap-4 border-b py-5 text-xs tracking-[0.18em]"
          >
            <div className="col-span-4">{r.company}</div>
            <div className="col-span-3">{r.award}</div>
            <div className="col-span-3">{r.category}</div>
            <div className="col-span-2 text-right">{r.year}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
