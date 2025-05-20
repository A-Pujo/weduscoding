'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { IoIosSend, IoMdMail } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa6'
import Link from 'next/link'
import { useState } from 'react'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { supabase } from '../utils/supabaseClient'
import { useReCaptcha } from "next-recaptcha-v3"

export default function ContactPage () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [service, setService] = useState('Data Analisis')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { executeRecaptcha } = useReCaptcha()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        if (!executeRecaptcha) {
            console.error('reCAPTCHA not loaded');
            toast.error('Gagal memverifikasi. Silakan coba lagi.', {
              position: 'bottom-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
              transition: Bounce,
            });
            setIsSubmitting(false)
            return
        }

        const token = await executeRecaptcha('contactFormSubmit')

        const { data, error } = await supabase.from('contact_submissions').insert([
            { name, email, service, message }
        ])

        setIsSubmitting(false)

        if (error) {
            console.error('Error submitting contact form:', error)
            toast.error('Gagal mengirim pesan. Silakan coba lagi.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            })
        } else {
            console.log('Contact form data saved:', data)
            toast.success('Terima kasih! Pesan Anda telah terkirim.', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
                transition: Bounce,
            })
            setName('')
            setService('Data Analisis')
            setMessage('')
        }
    }

    return(
        <main className="min-h-screen bg-base-300">
            <Header />
            <div className="min-h-screen py-24 px-12 md:px-24 md:py-24">
                <div className="my-6">
                    <h1 className="text-4xl font-bold">/ Contact .  Us /</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-base-200 rounded h-fit shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
                                <legend className="fieldset-legend">Hubungi Kami</legend>
                                <input type="text" className="input w-full" placeholder="Anderon Coding" required value={name} onChange={(e) => setName(e.target.value)} />
                                <p className="label mb-4">Nama</p>

                                <input type="email" className="input w-full" placeholder="anderon@mail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                                <p className="label mb-4">email</p>

                                <select className="select w-full" value={service} onChange={(e) => setService(e.target.value)}>
                                    <option value={`Data Analisis`}>Data Analisis</option>
                                    <option value={`Pengembangan Website`}>Pengembangan Website</option>
                                </select>
                                <p className="label mb-4">Layanan</p>

                                <textarea className="textarea w-full" placeholder="Pesan" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                <p className="label mb-4">Pesan</p>
                                
                                <button className={`btn btn-sm btn-primary w-full`} disabled={isSubmitting}>Kirim {isSubmitting ? (<span className="loading loading-spinner loading-xs"></span>) : <IoIosSend/>}</button>
                            </fieldset>
                        </form>
                    </div>

                    <div className="card h-fit">
                        <div className="card-body">
                            <p className="text-sm font-light mb-4"><span className="font-bold text-lg">Optimalkan potensi proyek</span> Anda dengan analisis data yang aplikatif dan inovasi untuk transformasi digital. Kami siap menyediakan konsultasikan sesuai kebutuhan Anda.</p>

                            <div className="stats stats-vertical">
                                <div className="stat">
                                    <div className="stat-figure text-primary">
                                        <Link href={`mailto:wedusngoding@gmail.com`} target="_blank">
                                            <IoMdMail className="text-4xl" />
                                        </Link>
                                    </div>
                                    <div className="stat-title">1 —</div>
                                    <div className="stat-value text-primary"><Link href={`mailto:wedusngoding@gmail.com`} target="_blank">Email</Link></div>
                                    <div className="stat-desc">wedusngoding@gmail.com</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure text-secondary">
                                        <Link href={`https://www.instagram.com/weduscoding/`} target="_blank">
                                            <FaInstagram className="text-4xl" />
                                        </Link>
                                    </div>
                                    <div className="stat-title">2 —</div>
                                    <div className="stat-value text-secondary"><Link href={`https://www.instagram.com/weduscoding/`} target="_blank">Instagram</Link></div>
                                    <div className="stat-desc">@weduscoding</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </main>
    )
}