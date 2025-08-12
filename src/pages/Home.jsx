import { motion } from 'framer-motion';
import headshot from '../assets/chrysanthemums.png';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-8 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            {/* gradient ring around headshot */}
            <div className="relative w-36 h-36 mb-6">
                <div className="absolute inset-0 rounded-full animate-gradient-spin bg-gradient-to-tr from-tangerine via-eminence to-indigo p-[3px]">
                    <div className="bg-white dark:bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                        <img
                            src={headshot}
                            alt="Professional Headshot"
                            className="w-32 h-32 object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>

            <h1 className="text-4xl font-title">LiAn Song</h1>
            <p className="text-lg mt-2">liansong726@gmail.com</p>

            <div className="glass-card mt-8 max-w-2xl text-left">

                
                <p className="text-base leading-relaxed text-center">
                    Welcome to my corner of the internet!
                    Feel free to poke around and explore all the{" "}
                     <Link to="/projects" className="text-un-blue underline hover:text-eminence">projects I've worked on</Link>
                    ... Or{" "}
                    <Link to="/about" className="text-un-blue underline hover:text-eminence">learn more about me!</Link>
                </p>
            </div>
        </motion.section>
    );
}
