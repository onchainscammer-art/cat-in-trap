'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Book Cover */}
        <div className="relative w-[96vw] max-h-[96vh] aspect-square sm:w-[90vw] lg:w-[45vw] lg:h-[88vh] lg:aspect-auto sm:max-w-2xl rounded-lg shadow-2xl border-8 border-[#2a2520]/30 overflow-hidden">
          {/* Book Cover Image */}
          <Image
            src="/bookcover.jpg"
            alt="The Cat in the Trap"
            fill
            className="object-cover"
            priority
          />

          {/* Click to open button at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-white text-[#2a2520] rounded-lg font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl hover:bg-[#f5f1e8] transition-all"
              style={{ fontFamily: 'var(--font-hand)' }}
            >
              Open Book →
            </motion.button>
          </div>
        </div>

        {/* Book spine shadow */}
        <div className="absolute -right-2 top-4 bottom-4 w-2 bg-gradient-to-r from-black/40 to-transparent rounded-r-lg"></div>
      </motion.div>
    </div>
  );
}
