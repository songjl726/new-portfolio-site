import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export default function Coding() {
    return (
        <motion.section
            className="py-12 px-6 flex flex-col gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-4xl font-title text-center mt-6 mb-6">Coding Projects</h2>

            {projects.map((p) => (
                <div key={p.id} className="glass-card p-6 mx-auto max-w-4xl">
                    {/* Carousel */}
                    <div className="carousel mb-4">
                        {p.images.map((src, i) => (
                            <img src={src} alt={`${p.title} screenshot ${i + 1}`} key={i} />
                        ))}
                    </div>

                    {/* Title + description */}
                    <h3 className="text-2xl font-title mb-2">{p.title}</h3>
                    <p className="text-gray-700 mb-4">{p.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {p.tags.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 text-sm font-heading rounded-full bg-sapphire text-white"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                        {p.links.github && (
                            <a
                                href={p.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill p-2 hover:shadow-lg transition"
                                aria-label="GitHub Repo"
                            >
                                {/* GitHub icon svg */}
                                <svg
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 .5C5.65..." />
                                </svg>
                            </a>
                        )}

                        {p.links.live && (
                            <a
                                href={p.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill p-2 hover:shadow-lg transition"
                                aria-label="Live Demo"
                            >
                                {/* External link icon */}
                                <svg
                                    className="w-5 h-5 stroke-current"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14 3h7v7M10 14l11-11M5 5v14h14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </motion.section>
    );
}
