import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'
import { FaArrowCircleDown, FaLongArrowAltRight } from "react-icons/fa"

export default function Home() {
  return (
    <main className="min-h-screen bg-base-300">
      <Header />
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
              Leveraging the data and technology collaboration
              <br /> 
              <span className="bg-secondary">
                <FaLongArrowAltRight className='inline text-2xl'/> for better solutions.
              </span>
            </p>
            <button className="btn btn-ghost rounded-full hover:btn-secondary animate-bounce text-2xl"><FaArrowCircleDown/> </button>
          </div>
        </div>
      </div>

      <section>
        <div className="stats w-full shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}