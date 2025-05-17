'use client'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { IoIosSend, IoMdMail } from "react-icons/io"
import { FaInstagram } from "react-icons/fa6"
import Link from "next/link"
import { useState } from 'react'
import { Bounce, toast, ToastContainer } from "react-toastify"

export default function ContactPage () {
    const handleSubmit = async (e) => {
        e.preventDefault()
        toast.success('Terima kasih!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });            
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
                                <input type="text" className="input w-full" placeholder="Anderon Coding" />
                                <p className="label mb-4">Nama</p>


                                <select className="select w-full">
                                    <option value={`Data Analisis`}>Data Analisis</option>
                                    <option value={`Pengembangan Website`}>Pengembangan Website</option>
                                </select>
                                <p className="label mb-4">Layanan</p>

                                <textarea className="textarea w-full" placeholder="Pesan"></textarea>
                                <p className="label mb-4">Pesan</p>
                                
                                <button className="btn btn-sm btn-primary w-full">Kirim <IoIosSend/></button>
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