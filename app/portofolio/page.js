'use client'
import Footer from "../components/Footer"
import Header from "../components/Header"
import { FaChevronDown } from "react-icons/fa6"
import ProjectCard from "../components/ProjectCard";
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";

export default function PortofolioPage () {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                .from('portofolios')
                .select('*')
                .order('id', { ascending: false }); // Order by ID, newest first

                if (error) {
                    setError(error);
                } else {
                    setProjects(data);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return(
        <main className="min-h-screen bg-base-300">
            <Header />
            <div className="min-h-screen py-24 px-12 md:px-24 md:py-24">                
                <div className="my-6">
                    <div
                    className="hero relative"
                    style={{
                        backgroundImage:
                        "url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
                    }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">/ Portofolio /</h1>
                                <p className="mb-5">
                                    <i className="tracking-widest">portare foglion</i>
                                    <br/>
                                    Implementasi nyata ide dan imajinasi dalam menjawab tantangan di bidang teknologi.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col absolute bottom-3 right-3 md:top-3 md:left-3">
                            <FaChevronDown className="text-md md:text-2xl text-gray-800" />
                            <FaChevronDown className="text-md md:text-2xl text-gray-600" />
                            <FaChevronDown className="text-md md:text-2xl text-gray-400" />
                            <FaChevronDown className="text-md md:text-2xl text-gray-600" />
                        </div>
                    </div>
                </div>

                {/* portofolio */}
                <section className="py-12">
                {loading ? (
                    <div className="flex justify-center items-center w-full h-32 bg-linear-to-r from-base-100 to-base-200">
                        <span className="loading loading-spinner loading-xl text-primary"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                        <div className="card bg-base-100 shadow-xl image-full">
                            <figure>
                                <img
                                    src={`https://images.pexels.com/photos/2182863/pexels-photo-2182863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                    className="rounded-t-lg"
                                />
                            </figure>
                            <div className="card-body flex justify-center items-center">
                                <h2 className="card-title">Dan lebih banyak lagi...</h2>
                            </div>
                        </div>
                    </div>
                )}
                </section>

            </div>
            <Footer />
        </main>
    )
}