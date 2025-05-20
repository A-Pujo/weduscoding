'use client' // This is a Client Component

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import { supabase } from "../../utils/supabaseClient" // Adjust path if needed
import { useState, useEffect } from "react"
import Link from "next/link"
import moment from "moment" // Make sure moment is installed (npm install moment)

// For App Router, `params` is passed directly as a prop
export default function BlogPostPage({ params }) {
    const { slug } = params // Get the slug from the URL parameters

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) {
                setLoading(false)
                setError(new Error("No blog post slug provided."))
                return
            }

            try {
                // Fetch the single blog post based on the slug
                const { data, error } = await supabase
                    .from('blog_posts')
                    .select('*')
                    .eq('slug', slug) // Filter by the slug
                    .single() // Expect only one record

                if (error) {
                    setError(error)
                } else if (!data) {
                    // If no data is returned but no explicit error, it means post not found
                    setError(new Error("Blog post not found."))
                }
                else {
                    setPost(data)
                }
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [slug]) // Re-run effect if slug changes (though typically not needed for a single slug page)

    if (loading) {
        return (
            <main className="min-h-screen bg-base-300 flex flex-col items-center justify-center">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                </div>
                <Footer />
            </main>
        )
    }

    if (error) {
        return (
            <main className="min-h-screen bg-base-300">
                <Header />
                <div className="min-h-screen py-24 px-12 md:px-24 md:py-24 text-center">
                    <h1 className="text-4xl font-bold text-error mb-4">Error</h1>
                    <p className="text-error">{error.message}</p>
                    <Link href="/blog" className="btn btn-primary mt-8">
                        Kembali ke Blog
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-base-300">
                <Header />
                <div className="min-h-screen py-24 px-12 md:px-24 md:py-24 text-center">
                    <h1 className="text-4xl font-bold text-gray-500 mb-4">Postingan Tidak Ditemukan</h1>
                    <p>Maaf, postingan yang Anda cari tidak ada.</p>
                    <Link href="/blog" className="btn btn-primary mt-8">
                        Kembali ke Blog
                    </Link>
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-base-300">
            <Header />
            <div className="min-h-screen py-24 px-12 md:px-24 md:py-24">
                <article className="bg-base-100 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
                    <nav className="text-sm breadcrumbs mb-6 text-gray-600">
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><span>{post.title}</span></li>
                        </ul>
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                    <p className="text-sm text-gray-500 mb-6">
                        Dipublikasikan pada: {moment(post.published_at).format('DD MMMM YYYY, HH:mm')}
                    </p>

                    {post.image && (
                        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-8">
                            <img
                                src={post.image}
                                alt={post.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                        </div>
                    )}

                    <div
                        className="prose max-w-none text-lg leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <div className="mt-12 pt-8 border-t border-base-200 text-center">
                        <Link href="/blog" className="btn btn-primary btn-outline">
                            &larr; Kembali ke Daftar Blog
                        </Link>
                    </div>
                </article>
            </div>
            <Footer />
        </main>
    )
}