import React, { useState } from 'react';

export default function Contact() {
  const [name, setName]       = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    // append "From, <name>" to the message body
    const fullBody = `${message}\n\nFrom: ${name || 'Anonymous'}`;

    // encode for a safe URL
    const mailto = `
      mailto:liansong726@gmail.com
      ?subject=${encodeURIComponent(subject)}
      &body=${encodeURIComponent(fullBody)}
    `.replace(/\s+/g, '');           // strip whitespace

    window.location.href = mailto;
  };

  return (
    <section className="py-10 px-4 min-h-screen transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Say Hello!
      </h2>

      <form
        onSubmit={sendEmail}
        className="max-w-xl mx-auto flex flex-col gap-6 bg-white/60 dark:bg-gray-800 p-8 rounded shadow"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            placeholder="Your name"
          />
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
            placeholder="Subject line"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's up?"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
          />
        </div>

        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700 text-white font-semibold py-2 px-6 rounded transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
