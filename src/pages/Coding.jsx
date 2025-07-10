import React from 'react';

export default function Coding() {
  return (
    <section className="py-10 px-4 min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
        Coding Projects
      </h2>

      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {/* Web Game Embed */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Web Game Embed
          </h3>
          <div className="w-full aspect-[552/167] max-w-xl mx-auto">
            <iframe
              src="https://itch.io/embed/placeholder"
              title="Game Embed"
              frameBorder="0"
              className="w-full h-full rounded shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* YouTube Video */}
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            YouTube Demo
          </h3>
          <div className="w-full aspect-video max-w-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube Video"
              frameBorder="0"
              className="w-full h-full rounded shadow-lg"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
