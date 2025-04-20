import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Link from 'next/link'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "WedusNgoding",
  description: "WedusNgoding, masa depan peternakan dan pengembangan website kamu",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="drawer drawer-end">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />

          {/* Main Content */}
          <div className="drawer-content flex flex-col min-h-screen max-w-screen bg-base-100">
            {/* Navbar */}
            <div className="navbar bg-base-100 px-4">
              <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                  WEDUSNGODING
                </Link>
              </div>
              {/* Desktop Menu */}
              <div className="hidden lg:flex flex-none space-x-4">
                <Link href="/" className="btn btn-ghost">Beranda</Link>
                <Link href="/kambing" className="btn btn-ghost">Kambing</Link>
                <Link href="/webdev" className="btn btn-ghost">Website</Link>
                <Link href="/contact" className="btn btn-ghost">Contact</Link>
                <button className="btn btn-neutral">Get Started</button>
              </div>
              {/* Hamburger for mobile */}
              <div className="lg:hidden">
                <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </label>
              </div>
            </div>

            {/* Page content goes here */}
            <main className="px-6 py-10 flex-1">
              {children}
            </main>
          </div>

          {/* Drawer Content (Mobile Menu) */}
          <div className="drawer-side">
            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-64 h-screen bg-base-100 space-y-2">
              <li><Link href="/" className="btn btn-ghost">Beranda</Link></li>
              <li><Link href="/kambing" className="btn btn-ghost">Kambing</Link></li>
              <li><Link href="/webdev" className="btn btn-ghost">Website</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><button className="btn btn-neutral mt-2">Get Started</button></li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  )
}
