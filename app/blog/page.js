'use client'
import { FaNewspaper } from "react-icons/fa6"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { supabase } from "../utils/supabaseClient"
import { useState, useEffect } from "react"
import Link from "next/link"
import moment from "moment"

export default function BlogPage () {
    const [blogPosts, setBlogPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .order('published_at', { ascending: false })

                if (error) {
                    setError(error)
                } else {
                    setBlogPosts(data)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogPosts()
    }, [])

    return(
        <main className="min-h-screen bg-base-300">
            <Header />
            <div className="min-h-screen py-24 px-12 md:px-24 md:py-24">                
                <div className="flex flex-row my-6">
                    <h1 className="text-8xl font-bold">B</h1>
                    <div className="flex-col content-center tracking-widest bg-secondary">
                        <h2 className="text-3xl font-bold">log</h2>
                        <h2 className="text-3xl font-bold">locks</h2>
                    </div>
                    <div className="w-full bg-linear-to-r from-secondary to-base-200 flex justify-end items-center px-4">
                        <FaNewspaper className="text-4xl" />
                    </div>
                </div>

                {/* Blog Contents goes here */}
                {loading ? (
                    <div className="flex-grow flex items-center justify-center">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : (
                    <section className="py-12">
                        {blogPosts.length === 0 ? (
                            <p className="text-center text-xl text-gray-500">Belum ada postingan blog.</p>
                        ) : (
                            <div className="space-y-4">
                                {blogPosts.map((post, index) => (
                                    <div
                                        key={post.id}
                                        className={`flex flex-col md:flex-row gap-8 items-center ${
                                            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                        } bg-base-100 p-6 rounded-lg shadow-xl`}
                                    >
                                        <div className="w-full md:w-1/2 flex-shrink-0">
                                            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
                                                <img
                                                    src={post.image || 'https://via.placeholder.com/600x400?text=No+Image'}
                                                    alt={post.title}
                                                    layout="fill"
                                                    objectFit="cover"
                                                    className="rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 flex-grow">
                                            <h3 className="text-3xl font-bold mb-2">{post.title}</h3>
                                            <p className="text-sm text-gray-500 mb-4">
                                                Dipublikasikan pada: {moment(post.published_at).format('DD MMMM YYYY')}
                                            </p>
                                            <p className="text-lg mb-6">{post.short_description}</p>
                                            <Link href={`/blog/${post.slug}`} className="btn btn-primary">
                                                Baca Selengkapnya
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
                
                {/* <Editor
                    tinymceScriptSrc={'/assets/js/tinymce/tinymce.min.js'}
                    init={{
                        height: 300,
                        menubar: false,
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                    }}
                /> */}
            </div>
            <Footer />
        </main>
    )
}