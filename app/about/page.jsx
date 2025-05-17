import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-base-100 text-text">
      <Header />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-primary mb-4">About Wedus Coding</h2>
        <p className="text-lg text-secondary">
          Wedus Coding is a MSME that focuses on delivering web solutions for businesses using modern technologies like Next.js, Supabase, and Tailwind CSS.
        </p>
      </section>
      <Footer />
    </main>
  )
}