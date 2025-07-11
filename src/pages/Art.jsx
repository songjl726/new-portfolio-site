import React, { useState } from 'react';
import Modal from '../components/Modal';
import placeholder from '../assets/placeholder.png';

const artPieces = [
    { id: 1, src: placeholder, title: 'Piece One', description: 'A moody digital sketch.' },
    { id: 2, src: placeholder, title: 'Piece Two', description: 'A vibrant character design.' },
    { id: 3, src: placeholder, title: 'Piece Three', description: 'A minimalist landscape.' },
];

export default function Art() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => {
        setSelectedIndex(index);
    };

    const closeModal = () => {
        setSelectedIndex(null);
    };

    const goToNext = () => {
        setSelectedIndex((prev) => (prev + 1) % artPieces.length);
    };

    const goToPrev = () => {
        setSelectedIndex((prev) => (prev - 1 + artPieces.length) % artPieces.length);
    };

    return (
        <section className="py-10 px-4 min-h-screen transition-colors">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
                Art Portfolio
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {artPieces.map((art, index) => (
                    <img
                        key={art.id}
                        src={art.src}
                        alt={art.title}
                        className="cursor-pointer rounded shadow hover:scale-105 transition-transform duration-200"
                        onClick={() => openModal(index)}
                    />
                ))}
            </div>

            {selectedIndex !== null && (
                <Modal
                    art={artPieces[selectedIndex]}
                    onClose={closeModal}
                    onNext={goToNext}
                    onPrev={goToPrev}
                />
            )}
        </section>
    );
}
