export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
           style={{
             backgroundImage:
               'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.35) 1px, transparent 0)',
             backgroundSize: '3px 3px',
           }}
      />

      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28">
        <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 text-[54px] font-semibold leading-[0.92] tracking-tight md:col-span-8 md:text-[92px]">
            STUNNING<br />
            BRANDS<br />
            &amp; DIGITAL<br />
            EXPERIENCES
          </h1>

          <div className="col-span-12 mt-6 md:col-span-4 md:mt-16">
            <p className="text-xs tracking-[0.25em] text-neutral-700">
              FREELANCER<br />
              DIGITAL DESIGNER<br />
              WEBFLOW EXPERT
            </p>
          </div>

          <div className="col-span-12 mt-10 flex items-center justify-center gap-12 opacity-70 md:col-span-12">
            <span className="text-xs tracking-[0.25em]">FLUX</span>
            <span className="text-xs tracking-[0.25em]">yahoo!</span>
            <span className="text-xs tracking-[0.25em]">F3</span>
            <span className="text-xs tracking-[0.25em]">awwwards.</span>
          </div>

          <div className="col-span-12 mt-16 md:col-span-7 md:col-start-6">
            <p className="text-[22px] leading-relaxed text-neutral-900 md:text-[28px]">
              Ethan Suero is an independent designer focused on crafting immersive digital experiences.
              He believes every project is an opportunity to deliver a unique and memorable digital experience
              that delights users and builds brand equity.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
