import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (

        <header className="glass-bar px-8 py-4">
            {/* LEFT group */}
            <div className="flex-none w-40">
                <NavLink to="/" className="glass-pill">Home</NavLink>
            </div>

            {/* CENTER group */}
            <nav className="flex-1 flex justify-center gap-4">
                <NavLink
                    to="/art"
                    className={({ isActive }) =>
                        isActive ? 'glass-pill ring-2 ring-white/70 bg-white/30' : 'glass-pill'
                    }
                >
                    Art
                </NavLink>

                <NavLink
                    to="/coding"
                    className={({ isActive }) =>
                        isActive ? 'glass-pill ring-2 ring-white/70 bg-white/30' : 'glass-pill'
                    }
                >
                    Coding
                </NavLink>

                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'glass-pill ring-2 ring-white/70 bg-white/30' : 'glass-pill'
                    }
                >
                    Contact
                </NavLink>
            </nav>


            {/* RIGHT group */}
            <div className="flex-none w-40 flex items-center gap-4 justify-end">

                {/* Resume icon */}
                <a href="/resume" aria-label="Resume" className="glass-pill p-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.83a2 2 0 0 0-.59-1.42L14.17 2H6zm7 1.5L18.5 9H13a1 1 0 0 1-1-1V3.5zM8 13h8v1H8zm0 3h6v1H8z" />
                    </svg>
                </a>

                {/* GitHub */}
                <a href="https://github.com/songjl726" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub" className="glass-pill p-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.2 1.19a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.62 1.58.23 2.76.11 3.05.73.82 1.18 1.86 1.18 3.12 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.02.77 2.07v3.07c0 .31.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                </a>

                {/* Itch.io */}
                <a
                    href="https://songjl.itch.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Itch.io"
                    className="glass-pill p-2"
                >
                    <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M2 3.5A1.5 1.5 0 013.5 2h17A1.5 1.5 0 0122 3.5v17a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 20.5v-17zM7 6H4v5h1v4.5L6 18h12l1-2.5V11h1V6h-3v2H7V6zm2 7v2h6v-2H9z" />
                    </svg>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/lian-song" target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn" className="glass-pill p-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V9h3v10zM6.5 7.5a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5zM19 19h-3v-5.25C16 12 15.59 11 14.28 11c-1.25 0-1.78.83-1.78 2.05V19h-3V9h2.88v1.37h.04c.4-.75 1.38-1.54 2.84-1.54 3 0 3.72 2 3.72 4.59V19z" />
                    </svg>
                </a>

            </div>
        </header>
    );
}
