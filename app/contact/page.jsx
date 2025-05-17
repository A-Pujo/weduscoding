import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <main className="min-h-screen bg-base-100 text-text">
      <Header />
      <section className="p-10 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
          <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" rows={4}></textarea>
          <button className="btn btn-primary text-white">Send Message</button>
        </form>
      </section>
      <Footer />
    </main>
  )
}
