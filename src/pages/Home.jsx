import { motion } from 'framer-motion';
import headshot from '../assets/headshot.jpg';

export default function Home() {
    return (
        <motion.section
            className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-8 transition-colors duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
        >
            <img
                src={headshot}
                alt="Professional Headshot"
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-un-blue dark:border-un-blue mb-6"
            />
            <h1 className="text-4xl">LiAn Song</h1>
            <p className="text-lg mt-2">liansong726@gmail.com</p>

        </motion.section>
    );
}
