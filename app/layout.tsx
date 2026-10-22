import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Thoughts From Above | Ms. Vazquez',
  description: 'A collection of thoughts, faith, culture, stories, and life from Ms. Vazquez.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><header className="site-header"><div className="header-inner"><Link href="/" className="brand"><span className="brand-mark">✦</span><span><strong>Thoughts From Above</strong><small>by Ms. Vazquez</small></span></Link><nav><Link href="/">Home</Link><Link href="/topic/faith">Faith</Link><Link href="/topic/life">Life</Link><Link href="/topic/movies">Movies</Link><Link href="/topic/music">Music</Link><Link href="/topic/politics">Politics</Link><Link href="/admin">Write</Link></nav></div></header>{children}<footer className="footer"><div>Thoughts From Above</div><div>Words, wonder, faith & everything in between.</div></footer></body></html>
}
