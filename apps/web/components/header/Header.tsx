import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-black" />
          <span className="text-sm font-semibold tracking-wide">
            ETHAN<br />SUERO
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-xs tracking-[0.2em] md:flex">
          <a href="#home" className="hover:opacity-70">HOME</a>
          <a href="#work" className="hover:opacity-70">WORK</a>
          <a href="#contact" className="hover:opacity-70">CONTACT</a>
          <a
            href="#call"
            className="rounded-md bg-black px-4 py-2 text-[11px] font-medium text-white hover:opacity-90"
          >
            SCHEDULE A CALL
          </a>
        </nav>
      </div>
    </header>
  )
}
