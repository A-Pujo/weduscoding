import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import { FaArrowCircleDown, FaCalendarAlt, FaLongArrowAltRight } from "react-icons/fa"
import { FaBoxesStacked } from "react-icons/fa6"
import { MdContactMail } from "react-icons/md"

export default function Home() {
  return (
    <main className="min-h-screen bg-base-300">
      <Header />

      {/* Hero */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg">
            <h1 className="mb-5 text-4xl md:text-5xl font-bold">/ We . Dus . Coding /</h1>
            <p className="mb-5 text-lg md:text-xl text-right">
              Memanfaatkan kolaborasi data dan teknologi untuk
              <br /> 
              <span className="bg-secondary">
                <FaLongArrowAltRight className='inline text-2xl'/> solusi yang lebih baik.
              </span>
            </p>
            <button className="btn btn-ghost rounded-full hover:btn-secondary animate-bounce text-2xl"><FaArrowCircleDown/> </button>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className='w-full flex justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-4xl py-0 md:py-16'>
          <div className='col-span-2 justify-center content-center p-10 md:p-0'>
            <p>
              Belajar, berkembang, dan menyediakan solusi terbaik berdasarkan 
              <br/ >
              <span className='font-black text-4xl bg-secondary'>data dan teknologi<span className='bg-primary'>.</span></span>
            </p>
          </div>
          
          <div className="flex flex-row md:flex-col shadow-lg px-6 md:px-0">
            <div className="card bg-base-100 image-full w-full rounded-none">
              <figure>
                <img
                  src="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Data Analysis"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Data Analisis</h2>
                <p>Menemukan insight berdasarkan data untuk pengambilan keputusan terbaik.</p>
              </div>
            </div>

            <div className="card bg-base-100 image-full w-full rounded-none">
              <figure>
                <img
                  src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Web Development"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Pengembangan Web</h2>
                <p>Membangun sistem digital dalam menunjang transformasi proses bisnis yang berkelanjutan.</p>
              </div>
            </div>
          </div>                
        </div>
      </div>

      {/* stats */}
      <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-linear-to-tl from-primary to-secondary rounded-none">
        <div className="stats shadow h-36">
          <div className="stat">
            <div className="stat-figure text-base-content">
              <FaCalendarAlt className='text-4xl' />
            </div>
            <div className="stat-title text-base-300">Est.</div>
            <div className="stat-value text-base-content">Tahun 2022</div>
            <div className="stat-desc text-base-300">Berfokus pada website dan data analisis</div>
          </div>
        </div>

        <div className="stats shadow h-36">
          <div className="stat">
            <div className="stat-figure text-base-content">
              <FaBoxesStacked className='text-4xl' />
            </div>
            <div className="stat-title text-base-300">Proyek Terselesaikan</div>
            <div className="stat-value text-base-content">15 Proyek<sup>+</sup></div>
            <div className="stat-actions">
              <Link href={`/portofolio`} className="btn btn-xs btn-base-200">Portofolio</Link>
            </div>
          </div>
        </div>

        <div className="stats shadow h-36">
          <div className="stat">
            <div className="stat-figure text-base-content">
              <MdContactMail className='text-4xl' />
            </div>
            <div className="stat-title text-base-300">Gabung bersama!</div>
            <div className="stat-value text-base-content">Hubungi Kami</div>
            <div className="stat-actions">
              <Link href={`/contact`} className="btn btn-xs btn-base-200">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}