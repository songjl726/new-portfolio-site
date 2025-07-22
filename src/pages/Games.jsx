import React from 'react';
import { motion } from 'framer-motion';
import { games } from '../data/games';

export default function Games() {
    return (
        <motion.section
            className="py-12 px-6 flex flex-col gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-4xl font-title text-center mt-6 mb-6">Games</h2>

            {games.map((g) => (
                <div key={g.id} className="glass-card p-6 mx-auto max-w-4xl">
                    {/* Carousel */}
                    <div className="carousel mb-4">
                        {g.images.map((src, i) => (
                            <img key={i} src={src} alt={`${g.title} screenshot ${i + 1}`} />
                        ))}
                    </div>

                    {/* Title & description */}
                    <h3 className="text-2xl font-title mb-2">{g.title}</h3>
                    <p className="text-gray-700 mb-4">{g.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {g.tags.map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1 font-heading text-sm rounded-full bg-eminence text-white"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div className="mt-auto flex justify-end gap-4">
                        {g.links.github && (
                            <a
                                href={g.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill px-4 py-2 flex items-center gap-2 hover:shadow-lg transition"
                                aria-label="GitHub Repo"
                            >
                                <span className="font-title text-sm">GitHub Repo</span>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.65..." />
                                </svg>
                            </a>
                        )}
                        {g.links.live && (
                            <a
                                href={g.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass-pill px-4 py-2 flex items-center gap-2 bg-tangerine hover:shadow-lg transition"
                                aria-label="Play Game"
                            >
                                <span className="font-title text-sm">Play here</span>
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
