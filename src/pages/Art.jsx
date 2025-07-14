import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/Modal';
import { artworks } from '../data/artworks';

export default function Art() {
    const [idx, setIdx] = useState(null);

    return (
        <motion.section
            className="py-12 px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-4xl font-title text-center mb-4 mt-6">Art Portfolio</h2>
            <p className="text-center mb-8">
                An assorted collection of doodles and things I've made over the years, mostly just for fun!
            </p>

            {/* 2D section */}
            <h3 className="text-center mb-4 text-[2rem]">✎﹏﹏2D Art﹏﹏﹏</h3>
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

            {/* 3D section */}
            <h3 className="text-center mb-8 mt-8 text-[2rem]">✎﹏﹏3D Art﹏﹏﹏</h3>

            {['Np3J70_zsDI?si=h0iUYVZPbId0MIke', 'ETktkNK6uVM?si=C8wjp2F1QsQF9JOb'].map((id) => (
                <div key={id} className="mb-6 w-full aspect-video max-w-2xl mx-auto">
                    <iframe
                        src={`https://www.youtube.com/embed/${id}`}
                        title="YouTube Video"
                        className="w-full h-full rounded shadow-lg"
                        allowFullScreen
                    />
                </div>
            ))}
        </motion.section>
    );
}
