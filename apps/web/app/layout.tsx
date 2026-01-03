import './globals.css'

export const metadata = {
  title: 'Landing Payload',
  description: 'Modern landing page with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
