type HeroProps = {
  title: string 
  roles: string[] 
  logos: string[] 
  description: string
}

export default function Hero({ title, roles, logos, description }: HeroProps) {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)',
          backgroundSize: '3px 3px',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
        <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 text-[54px] font-semibold leading-[0.92] tracking-tight md:col-span-8 md:text-[92px] whitespace-pre-line">
            {title}
          </h1>

          <div className="col-span-12 mt-6 md:col-span-4 md:mt-16">
            <p className="text-xs tracking-[0.25em] text-neutral-700 whitespace-pre-line">
              {roles.join('\n')}
            </p>
          </div>

          <div className="col-span-12 mt-10 flex items-center justify-center gap-12 opacity-70 md:col-span-12">
            {logos.map((name) => (
              <span key={name} className="text-xs tracking-[0.25em]">
                {name}
              </span>
            ))}
          </div>

          <div className="col-span-12 mt-16 md:col-span-7 md:col-start-6">
            <p className="text-[22px] leading-relaxed text-neutral-900 md:text-[28px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
