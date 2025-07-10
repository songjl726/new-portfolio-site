import React from 'react';

export default function Contact() {
  return (
    <section className="py-10 px-4 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Contact Me
      </h2>

      <form
        action="mailto:your.email@example.com"
        method="post"
        encType="text/plain"
        className="max-w-xl mx-auto flex flex-col gap-6 bg-gray-100 dark:bg-gray-800 p-8 rounded shadow"
      >
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-sky-400 text-white hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-800 font-semibold py-2 px-4 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
