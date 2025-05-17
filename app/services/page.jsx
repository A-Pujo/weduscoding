import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <main className="min-h-screen bg-base-100 text-text">
      <Header />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Services</h2>
        <ul className="space-y-4 text-secondary text-lg">
          <li>✅ Custom Web Development</li>
          <li>✅ Supabase Backend Integration</li>
          <li>✅ UI Design with Tailwind and DaisyUI</li>
          <li>✅ Vercel Deployment & Optimization</li>
        </ul>
      </section>
      <Footer />
    </main>
  )
}