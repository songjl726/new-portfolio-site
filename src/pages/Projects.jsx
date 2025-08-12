import React, { useState } from 'react';
import { games } from '../data/games';
import { coding } from '../data/coding';
import { AnimatePresence, motion } from 'framer-motion';

export default function Projects() {
    const [tab, setTab] = useState('coding');

    const renderProjects = (list) =>
        list.map((proj) => (
            <div key={proj.id} className="glass-card w-full max-w-4xl mx-auto my-6">
                {/* Carousel */}
                <div className="carousel mb-4">
                    {proj.images.map((src, i) => (
                        <img key={i} src={src} alt={`${proj.title} screenshot ${i + 1}`} />
                    ))}
                </div>

                {/* Title & description */}
                <h3 className="text-2xl font-title mb-2">{proj.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 text-sm font-heading rounded-full text-white ${tab === 'games' ? 'bg-eminence' : 'bg-sapphire'
                                }`}
                        >
                            {tag}
                        </span>
                    ))}

                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 justify-end">
                    {proj.links?.github && (
                        <a
                            href={proj.links.github}
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

                    {/* Changes between live link and play here based on what tab */}
                    {proj.links.live && (
                        <a
                            href={proj.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`glass-pill px-4 py-2 flex items-center gap-2 ${tab === 'games' ? 'bg-tangerine hover:ring-tangerine' : 'bg-celeste hover:ring-celeste'
                                }`}
                        >
                            <span className="font-title text-sm">{tab === 'games' ? 'Play Here' : 'Live Link'}</span>
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

                    {proj.links?.devpost && (
                        <a
                            href={proj.links.devpost}
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
        ));

    return (
        <motion.section
            className="px-6 py-12 min-h-screen transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-4xl font-title text-center mt-6 mb-6">Projects</h2>

            {/* Tab Selector */}
            <div className="flex justify-center mb-8 border-b border-white/30 dark:border-white/10 overflow-x-auto">
                <button
                    className={`px-5 py-2 text-lg font-heading border-b-4 transition ${tab === 'coding' ? 'border-un-blue text-un-blue' : 'border-transparent hover:border-white/40'
                        }`}
                    onClick={() => setTab('coding')}
                >
                    Coding
                </button>
                <button
                    className={`px-5 py-2 text-lg font-heading border-b-4 transition ${tab === 'games' ? 'border-un-blue text-un-blue' : 'border-transparent hover:border-white/40'
                        }`}
                    onClick={() => setTab('games')}
                >
                    Games
                </button>
            </div>

            {/* Project Content */}
            {/* {tab === 'coding' ? renderProjects(coding) : renderProjects(games)} */}


            <AnimatePresence mode="wait">
                <motion.div
                    key={tab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                    className="flex flex-col gap-10"
                >
                    {tab === 'coding' ? renderProjects(coding) : renderProjects(games)}
                </motion.div>
            </AnimatePresence>

        </motion.section>
    );
}
