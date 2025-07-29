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
                    <div className="mt-auto flex justify-end gap-4">
                        {p.links.github && (
                            <a
                                href={p.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill px-4 py-2 flex items-center gap-2 hover:shadow-lg bg-white transition"
                                aria-label="GitHub Repo"
                            >
                                <span className="font-title text-sm">GitHub</span>
                                <svg className="w-5 h-5 fill-current group-hover:text-eminence" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.2 1.19a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.62 1.58.23 2.76.11 3.05.73.82 1.18 1.86 1.18 3.12 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.02.77 2.07v3.07c0 .31.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            </a>
                        )}
                        {p.links.live && (
                            <a
                                href={p.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill px-4 py-2 flex items-center gap-2 bg-celeste hover:shadow-lg transition"
                                aria-label="Live Link"
                            >
                                <span className="font-title text-sm">Live Link</span>
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
                        {p.links.devpost && (
                            <a
                                href={p.links.devpost}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill px-4 py-2 flex items-center gap-2 bg-white hover:shadow-lg transition"
                                aria-label="Live Link"
                            >
                                <span className="font-title text-sm">Devpost</span>
                                <svg
                                    className="w-5 h-5 fill-current"
                                    viewBox="0 0 512 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M108.2 103.4 0 256l108.2 152.6h295.6L512 256 403.8 103.4H108.2zm238.4 240.3H165.4L97.8 256l67.6-87.7h181.2l67.6 87.7-67.6 87.7z" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </motion.section>
    );
}
