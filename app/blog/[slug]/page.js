'use client'

import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"

export default function WebPortofolioPage () {
    return(
        <main className="min-h-screen bg-base-300">
            <Header />
            <div className="min-h-screen p-24">
                <h1>Blog Slug Page</h1>
                <p>Showcasing our web development projects and skills.</p>
                {/* Add your web development portfolio items here */}
            </div>
            <Footer />
        </main>
    )
}