type FooterLogosProps = {
  title: string
  logos: Array<{
    id: string
    label: string
  }>
}

export default function FooterLogos({ title, logos }: FooterLogosProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="text-center text-xs tracking-[0.25em] text-neutral-700 whitespace-pre-line">
        {title}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-12 opacity-80">
        {logos.map((x) => (
          <span key={x.id} className="text-2xl font-semibold">
            {x.label}
          </span>
        ))}
      </div>
    </section>
  )
}
