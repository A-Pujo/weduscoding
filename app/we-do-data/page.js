'use client'
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function WedodataPage() {
  return (
    <main className="min-h-screen bg-base-300">
        <Header />
        <div className="min-h-screen py-24 px-12 md:px-24 md:py-24">                
            <div className="my-6">
                <div
                className="hero relative"
                style={{
                    backgroundImage:
                    "url(https://images.pexels.com/photos/1240527/pexels-photo-1240527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Under Development</h1>
                            <p className="mb-5">
                                Halaman sedang dalam pengembangan lebih lanjut. Nantikan update selanjutnya!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer />
    </main>
  )
}