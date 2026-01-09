import Link from 'next/link'

type HeaderLink = {
  label: string
  href: string
}

type HeaderProps = {
  brandTitle?: string
  nav?: HeaderLink[]
  ctaLabel?: string
  ctaHref?: string
}

export default function Header({
  brandTitle = 'ETHAN\nSUERO',
  nav = [],
  ctaLabel = 'SCHEDULE A CALL',
  ctaHref = '#call',
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-black" />
          <span className="text-sm font-semibold tracking-wide whitespace-pre-line">
            {brandTitle}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:opacity-70"
            >
              {item.label}
            </a>
          ))}

          <a
            href={ctaHref}
            className="rounded-md bg-black px-4 py-2 text-[11px] font-medium text-white hover:opacity-90"
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  )
}
