import React, { useEffect } from 'react';

export default function Modal({ art, onClose, onNext, onPrev }) {
    if (!art) return null;

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') onNext();
            else if (e.key === 'ArrowLeft') onPrev();
            else if (e.key === 'Escape') onClose();
        };

        let touchStartX = 0;

        const handleTouchStart = (e) => {
            touchStartX = e.touches[0].clientX;
        };

        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const delta = touchStartX - touchEndX;
            if (Math.abs(delta) > 50) {
                if (delta > 0) onNext();
                else onPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4"
            onClick={onClose}
        >
            <div
                className="relative bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onPrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-800 text-3xl"
                >
                    ‹
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-500 hover:text-gray-800 text-3xl"
                >
                    ›
                </button>
                <img
                    src={art.src}
                    alt={art.title}
                    className="rounded w-full max-h-[60vh] object-contain mx-auto"
                />
                <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{art.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{art.description}</p>
                </div>
            </div>
        </div>
    );
}