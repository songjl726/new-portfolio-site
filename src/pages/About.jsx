import React from 'react';
import { motion } from 'framer-motion';
import aboutImg from '../assets/me-2.png';

export default function About() {
    return (
        <motion.section
            className="min-h-screen py-16 px-6 flex flex-col gap-16 items-center justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                // to make the text all fancy and gradiented
                // className="text-5xl font-title text-center bg-gradient-to-r from-eminence to-tangerine bg-clip-text text-transparent" 
                // initial={{ opacity: 0, scale: 0.9 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ delay: 0.3 }}

                className="text-5xl font-title text-center"
            >
                About Me
            </motion.h2>

            <div className="glass-card p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-8 md:gap-x-8 items-center max-w-5xl w-full">
                <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                        Hi! I’m <span className="font-title text-3xl bg-eminence bg-clip-text text-transparent">LiAn Song</span>, a college student pursuing a BS in Computer Science Games at University of Southern California.
                        I enjoy building interactive, playful experiences through code and art.
                    </p>
                    <p className="text-lg leading-relaxed">
                        When I'm not creating something new, you can find me listening to music, hanging out with my cat and dog, or hunting for the best fro-yo place!
                    </p>
                    <p className="text-lg italic text-gray-500">
                        "Create more than you consume."
                    </p>
                </div>

                {/* Image area */}
                <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
                    <img
                        src={aboutImg}
                        alt="Portrait"
                        className="block w-full h-auto object-cover transform hover:scale-105 transition duration-500"
                    />
                    <div className="absolute inset-0 border-4 border-tangerine rounded-xl pointer-events-none"></div>
                </div>
            </div>


            {/* Floating text blocks */}
            <div className="flex flex-wrap gap-6 justify-center">
                <motion.div
                    className="glass-card p-6 w-72 text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <h4 className="font-heading text-xl text-eminence mb-2">Technical Skills</h4>
                    <p>React, C++, Java, Python, (T)SQL, Unity, Autodesk Maya</p>
                </motion.div>
                <motion.div
                    className="glass-card p-6 w-72 text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <h4 className="font-heading text-xl text-un-blue mb-2">Creative Skills</h4>
                    <p>Pixel art, digital & oil painting, 3D animation, UI design</p>
                </motion.div>
                <motion.div
                    className="glass-card p-6 w-72 text-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <h4 className="font-heading text-xl text-tangerine mb-2">Interests</h4>
                    <p>cozy games, 2.5D animation, making playlists</p>
                </motion.div>
            </div>
        </motion.section>
    );
}
