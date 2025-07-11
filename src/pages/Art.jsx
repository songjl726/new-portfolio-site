import React, { useState } from 'react';
import Modal from '../components/Modal';
import { artworks } from '../data/artworks';

export default function Art() {
  const [idx, setIdx] = useState(null);

  return (
    <section className="py-12 px-6">
      <h2 className="text-4xl font-title text-center mb-4 mt-6">Art Portfolio</h2>
      <p className="text-2x1 text-center mb-10">An assorted collection of doodles and things I've made over the years, mostly just for fun!</p>

      <div className="masonry">
        {artworks.map((a, i) => (
          <img
            key={a.id}
            src={a.thumb}
            alt={a.title}
            className="w-32 mx-auto mb-4 rounded shadow cursor-pointer hover:scale-105 transition"
            onClick={() => setIdx(i)}
          />
        ))}
      </div>

      {idx !== null && (
        <Modal
          art={artworks[idx]}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx((idx - 1 + artworks.length) % artworks.length)}
          onNext={() => setIdx((idx + 1) % artworks.length)}
        />
      )}
    </section>
  );
}
