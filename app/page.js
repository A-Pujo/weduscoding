import Link from 'next/link'
import { BsSearch } from 'react-icons/bs'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen bg-base-100 px-6 py-12">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-snug">
            Kami <span className="text-primary">WedusNgoding</span> <br />
            Melayani Penjualan Kambing & Pembuatan Website
          </h1>
          <p className="text-gray-600">
            We believe the future of <strong>food</strong> & <strong>code</strong> is here.
          </p>

          {/* Search Input */}
          <div className="join justify-center lg:justify-start">
            <input
              className="input input-bordered join-item w-64"
              placeholder="What are you looking for?"
            />
            <button className="btn join-item bg-green-500 text-white">
              <BsSearch className="mr-2" />
              Search
            </button>
          </div>

          {/* Avatars & Community Text */}
          <div className="flex items-center gap-4 pt-4 justify-center lg:justify-start">
            <div className="avatar-group -space-x-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar1.jpg" alt="User 1" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar2.jpg" alt="User 2" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="/image/avatar3.jpg" alt="User 3" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm">
                Mari bergabung <br />
                Kami siap melayani anda
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 relative w-full max-w-md lg:max-w-full">
          <div className="overflow-hidden shadow-lg rounded-lg">
            <img
              src="/image/leaves.jpg"
              alt="Hero"
              className="object-cover w-full h-72 lg:h-full"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-warning px-4 py-2 rounded-full text-sm font-semibold shadow-md">
            #1 Best Modern Farm
          </div>
        </div>
      </div>
    </div>
  )
}
