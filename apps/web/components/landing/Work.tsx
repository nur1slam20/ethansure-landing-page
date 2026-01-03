import Image from 'next/image'

const items = [
  {
    title: 'HOUSTON EXPONENTIAL',
    desc: "A new digital HUB for houston’s biggest startup ecosystem.",
    image: '/award-1.png',
    invert: false,
  },
  {
    title: 'NAMI ML',
    desc: 'A brand new digital identity and website for the subscription App service that focuses on happy subscribers.',
    image: '/award-2.png',
    invert: true,
  },
  {
    title: 'THIN REEL',
    desc: 'How we turned a local studio into one of the biggest video agencies in the south of the UK.',
    image: '/award-3.png',
    invert: false,
  },
]




export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <div className="space-y-24">
        {items.map((x) => (
          <div key={x.title} className="grid grid-cols-12 items-center gap-6">

            <div className={`col-span-12 md:col-span-4 ${x.invert ? 'md:col-start-8' : ''}`}>
              <h3 className="text-sm font-semibold tracking-[0.18em]">{x.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-neutral-700">
                {x.desc}
              </p>
            </div>


            <div className={`col-span-12 md:col-span-7 ${x.invert ? 'md:col-start-1' : 'md:col-start-6'}`}>
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
