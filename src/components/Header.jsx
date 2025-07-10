import React from 'react';
import { NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Header.css';

export default function Header() {
    return (
        <header className="site-header">
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/art">Art</NavLink>
                <NavLink to="/coding">Coding</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
            <div className="social-links">
                <a href="/resume" aria-label="Resume">
                    <svg
                        className="w-6 h-6 fill-current text-gray-400 dark:text-gray-200 hover:text-sky-300 dark:hover:text-blue-400 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8.83a2 2 0 00-.59-1.42l-4.83-4.83A2 2 0 0013.17 2H6zm7 1.5L18.5 9H13a1 1 0 01-1-1V3.5zM8 13h8v1H8v-1zm0 3h6v1H8v-1z" />
                    </svg>
                </a>


                <a
                    href="https://github.com/songjl726"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <svg
                        className="w-6 h-6 fill-current text-gray-400 dark:text-gray-200 hover:text-purple-700 dark:hover:text-purple-500 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.41 7.86 10.94.57.1.78-.25.78-.55v-2.03c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.28-1.65-1.28-1.65-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.71 1.25 3.37.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.2 1.19a11.1 11.1 0 012.92-.39c.99 0 1.99.13 2.92.39 2.22-1.5 3.2-1.19 3.2-1.19.62 1.58.23 2.76.11 3.05.73.82 1.18 1.86 1.18 3.12 0 4.42-2.69 5.4-5.25 5.68.41.35.77 1.02.77 2.07v3.07c0 .31.21.66.79.55C20.21 21.41 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z" />
                    </svg>
                </a>

                <a
                    href="https://linkedin.com/in/lian-song"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <svg
                        className="w-6 h-6 fill-current text-gray-400 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 transition"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.79-1.75-1.75S5.53 4.25 6.5 4.25 8.25 5.03 8.25 6 7.47 7.75 6.5 7.75zM20 19h-3v-5.25c0-1.24-.03-2.83-1.72-2.83-1.72 0-1.98 1.34-1.98 2.73V19h-3v-10h2.89v1.37h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.59 2 3.59 4.59V19z" />
                    </svg>
                </a>

                <DarkModeToggle />
            </div>
        </header>
    );
}
