import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../assets/logosvg.svg';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const [socialOpen, setSocialOpen] = useState(false);

    const panelVariants = {
        hidden: { opacity: 0, y: -8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.22, ease: 'easeOut' }
        },
        exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: 'easeIn' } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 6 },
        visible: (i = 0) => ({
            opacity: 1, y: 0,
            transition: { delay: 0.05 * i, duration: 0.2, ease: 'easeOut' }
        }),
        exit: { opacity: 0, y: 6, transition: { duration: 0.15 } }
    };


    // close menus when route changes or when opening the other
    useEffect(() => {
        if (navOpen) setSocialOpen(false);
        if (socialOpen) setNavOpen(false);
    }, [navOpen, socialOpen]);

    return (
        <header className="fixed top-0 left-0 w-full glass-bar px-4 sm:px-6 py-3 flex items-center justify-between z-50">
            {/* LEFT: Home logo */}
            <div className="flex-none">
                <NavLink
                    to="/"
                    className="glass-pill px-2 py-2 inline-flex items-center justify-center"
                    aria-label="Home"
                    onClick={() => { setNavOpen(false); setSocialOpen(false); }}
                >
                    <LogoIcon className="w-6 h-6 fill-current" />
                </NavLink>
            </div>

            {/* CENTER: Desktop nav (hidden on mobile) */}
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-4">
                {[
                    { to: '/projects', label: 'Projects' },
                    { to: '/art', label: 'Art' },
                    { to: '/about', label: 'About' },
                    { to: '/contact', label: 'Contact' },
                ].map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            isActive
                                ? 'glass-pill ring-2 ring-white/70 bg-white/30'
                                : 'glass-pill'
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>


            {/* RIGHT group */}
            <div className="hidden md:flex flex-none w-40 items-center gap-4 justify-end">

                {/* Resume icon */}
                <a href="/resume" aria-label="Resume" className="glass-pill p-2 group">
                    <svg className="w-5 h-5 fill-current group-hover:text-un-blue" viewBox="0 0 24 24">
                        <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.17 2H6zm7 1.5L18.5 9H13a1 1 0 0 1-1-1V3.5zM8 13h8v1H8zm0 3h6v1H8z" />
                    </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/songjl726" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub" className="glass-pill p-2 group">
                    <svg className="w-5 h-5 fill-current group-hover:text-eminence" viewBox="0 0 24 24">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.2 1.19a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.62 1.58.23 2.76.11 3.05.73.82 1.18 1.86 1.18 3.12 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.02.77 2.07v3.07c0 .31.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                </a>

                {/* Itch.io */}
                <a
                    href="https://songjl.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Itch.io"
                    className="glass-pill p-2 group"
                >
                    <svg
                        className="w-5 h-5 fill-current group-hover:text-tangerine"
                        viewBox="0 0 24 24"
                    >
                        <path d="M2 3.5A1.5 1.5 0 013.5 2h17A1.5 1.5 0 0122 3.5v17a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 20.5v-17zM7 6H4v5h1v4.5L6 18h12l1-2.5V11h1V6h-3v2H7V6zm2 7v2h6v-2H9z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/lian-song" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn" className="glass-pill p-2 group">
                    <svg className="w-5 h-5 fill-current group-hover:text-sapphire" viewBox="0 0 24 24">
                        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V9h3v10zM6.5 7.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.25C16 12 15.59 11 14.28 11c-1.25 0-1.78.83-1.78 2.05V19h-3V9h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3 0 3.72 2 3.72 4.59V19z" />
                    </svg>
                </a>

            </div>

            {/* MOBILE: two hamburger buttons */}
            <div className="md:hidden flex items-center gap-2">
                {/* Pages menu button */}
                <button
                    onClick={() => setNavOpen((v) => !v)}
                    aria-expanded={navOpen}
                    aria-controls="mobile-pages"
                    className="glass-pill px-3 py-2 inline-flex items-center gap-2"
                >
                    <span className="text-sm">Pages</span>
                    {navOpen ? (
                        // Close "X" icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
                            />
                        </svg>
                    )}
                </button>

                {/* Socials menu button */}
                <button
                    onClick={() => setSocialOpen((v) => !v)}
                    aria-expanded={socialOpen}
                    aria-controls="mobile-pages"
                    className="glass-pill px-3 py-2 inline-flex items-center gap-2"
                >
                    <span className="text-sm">Socials</span>
                    {navOpen ? (
                        // Close "X" icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* MOBILE PANELS (slide-down, vertical) */}
            <AnimatePresence>
                {navOpen && (
                    <motion.div
                        id="mobile-pages"
                        className="absolute top-full left-0 w-full px-4 pb-3 pt-2 md:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={panelVariants}
                    >
                        <div className="rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-xl p-3 flex flex-col gap-2">
                            {[
                                { to: '/projects', label: 'Projects' },
                                { to: '/art', label: 'Art' },
                                { to: '/about', label: 'About' },
                                { to: '/contact', label: 'Contact' },
                            ].map((link, i) => (
                                <motion.div key={link.to} variants={itemVariants} custom={i}>
                                    <NavLink
                                        to={link.to}
                                        onClick={() => setNavOpen(false)}
                                        className={({ isActive }) =>
                                            `glass-pill text-left ${isActive ? 'ring-2 ring-white/70 bg-white/30' : ''}`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {socialOpen && (
                    <motion.div
                        id="mobile-socials"
                        className="absolute top-full left-0 w-full px-4 pb-3 pt-2 md:hidden"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={panelVariants}
                    >
                        <div className="rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-xl p-3 flex flex-col gap-2">
                            {[
                                { href: '/resume', label: 'Resume', kind: 'internal' },
                                { href: 'https://github.com/songjl726', label: 'GitHub' },
                                { href: 'https://songjl.itch.io/', label: 'Itch.io' },
                                { href: 'https://linkedin.com/in/lian-song', label: 'LinkedIn' },
                            ].map((l, i) => (
                                <motion.div key={l.label} variants={itemVariants} custom={i}>
                                    <a
                                        href={l.href}
                                        {...(l.kind === 'internal' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                                        className="glass-pill p-2 flex items-center gap-2"
                                        onClick={() => setSocialOpen(false)}
                                    >
                                        <span>{l.label}</span>
                                        {/* keep your SVGs here if you want icons next to labels */}
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
