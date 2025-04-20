import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-base-100 px-6 py-10">
      {/* Navbar */}
      <div className="drawer z-50">
        <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
        
        {/* Page content */}
        <div className="drawer-content flex flex-col">
          <div className="navbar bg-base-100 mb-10">
            <div className="flex-1">
              <a className="btn btn-ghost text-xl hover:text-primary">WEDUSNGODING</a>
            </div>

            {/* Mobile hamburger */}
            <div className="flex-none lg:hidden">
              <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </label>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-none space-x-4">
              <Link href="/" className="btn btn-ghost">Home</Link>
              <Link href="/product" className="btn btn-ghost">Product</Link>
              <Link href="/shop" className="btn btn-ghost">Shop</Link>
              <Link href="/contact" className="btn btn-ghost">Contact</Link>
              <button className="btn btn-neutral">Get Started</button>
            </div>
          </div>
        </div>

        {/* Drawer content for mobile */}
        <div className="drawer-side">
          <label htmlFor="nav-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64 h-screen bg-base-100 text-base-content space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><button className="btn btn-neutral w-full mt-2">Get Started</button></li>
          </ul>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:pl-6">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold">
            Kami <span className="text-primary">WedusNgoding</span> <br />
            Melayani Penjualan Kambing & Pembuatan Website
          </h1>
          <p className="text-gray-600">We believe the Future of Food & Code is here.</p>

          {/* Search Input */}
          <div className="join">
            <input
              className="input input-bordered join-item w-64"
              placeholder="What are you looking for?"
            />
            <button className="btn join-item bg-green-500 text-white">Search</button>
          </div>

          {/* Avatars & Community Text */}
          <div className="flex items-center gap-4 pt-4">
            <div className="avatar-group -space-x-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar1.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar2.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar3.jpg" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm">Join our community <br /> We’re waiting for you</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative">
          <div className="overflow-hidden shadow-lg mx-auto">
            <img src="/image/leaves.jpg" className="object-cover w-full h-full" />
          </div>
          <div className="absolute bottom-4 right-12 bg-warning px-4 py-2 rounded-full text-sm font-semibold shadow-md">
            #1 Best Modern Farm
          </div>
        </div>
      </div>
    </div>
  )
}
