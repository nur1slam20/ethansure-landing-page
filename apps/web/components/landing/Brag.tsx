import Image from 'next/image'



const posters = [
  '/award-5.png','/award-5.png','/award-5.png','/award-5.png','/award-5.png','/award-5.png',
]

const rows = [
  ['HOUSTON EXPONENTIAL', 'AWWWARDS', 'HONORS', '2022'],
  ['HOUSTON EXPONENTIAL', 'CSS DESIGN AWARDS', 'UI / UX / INNOVATION', '2022'],
  ['ATOMLE', 'AWWWARDS', 'NOMINEE', '2021'],
  ['ATOMLE', 'CSS DESIGN AWARDS', 'UI / UX / INNOVATION', '2021'],
  ['THIN REEL MEDIA', 'AWWWARDS', 'NOMINEE', '2021'],
  ['THIN REEL MEDIA', 'CSS DESIGN AWARDS', 'UI / UX / INNOVATION', '2022'],
]

export default function Brag() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <h2 className="text-[56px] font-semibold leading-[0.95] md:text-[88px]">
            HUMBLE<br />BRAG
          </h2>
        </div>
        <div className="col-span-12 md:col-span-4 md:pt-10">
          <p className="text-xs tracking-[0.25em] text-neutral-700">
            I WON SOME AWARDS<br />ALONG THE WAY
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-x-auto">
        <div className="flex min-w-max gap-10 py-4">
          {posters.map((src, idx) => (
            <div key={`${src}-${idx}`} className="relative h-45 w-35 shrink-0 bg-neutral-200">
              <Image src={src} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t">
        {rows.map((r, i) => (
          <div key={i} className="grid grid-cols-12 gap-4 border-b py-5 text-xs tracking-[0.18em]">
            <div className="col-span-4">{r[0]}</div>
            <div className="col-span-3">{r[1]}</div>
            <div className="col-span-3">{r[2]}</div>
            <div className="col-span-2 text-right">{r[3]}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
