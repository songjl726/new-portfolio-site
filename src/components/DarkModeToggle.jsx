import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  /* ───────── sync <html class="dark"> ───────── */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const SunIcon = (
    <svg
      key="sun"
      className="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M12 4.5V2m0 20v-2.5m7.07-12.57l1.77-1.77m-15.84 15.84l1.77-1.77M19.5 12h2.5M2 12h2.5m12.57 7.07l1.77 1.77m-15.84-15.84l1.77 1.77M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
    </svg>
  );

  const MoonIcon = (
    <svg
      key="moon"
      className="w-5 h-5 fill-current"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
    </svg>
  );

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="glass-pill p-2 hover:shadow-lg dark:hover:shadow-md"
      aria-label="Toggle dark mode"
    >
      {darkMode ? SunIcon : MoonIcon}
    </button>
  );
}