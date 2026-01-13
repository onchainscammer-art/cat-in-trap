'use client';

import { motion } from 'framer-motion';

interface PageSpreadProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  pageNumber: number;
  direction?: number;
}

export default function PageSpread({ leftContent, rightContent, pageNumber, direction = 1 }: PageSpreadProps) {
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  // On mobile, show only one page based on page number (odd = left, even = right)
  const isMobilePage = pageNumber % 2 === 1;

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }}
      className="relative w-full h-full z-10"
    >
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-1 h-screen">
        {/* Left Page */}
        <div className={`relative bg-gradient-to-br from-[#f5f1e8] via-[#f0ebe0] to-[#ebe6d8] h-full p-6 sm:p-8 lg:p-12 shadow-2xl border-r-2 lg:border-r-0 border-[#d4cfc4]/50 overflow-hidden ${!isMobilePage ? 'max-lg:invisible max-lg:absolute max-lg:pointer-events-none' : ''}`}>
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>

          {/* Edge darkening (vignette) */}
          <div className="absolute inset-0 pointer-events-none rounded-l-lg"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(139, 69, 19, 0.15) 100%)'
            }}
          ></div>

          {/* Age spots */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[15%] left-[20%] w-3 h-3 rounded-full bg-[#8B4513] opacity-20 blur-[1px]"></div>
            <div className="absolute top-[45%] right-[30%] w-2 h-2 rounded-full bg-[#A0522D] opacity-15 blur-[1px]"></div>
            <div className="absolute bottom-[25%] left-[60%] w-4 h-4 rounded-full bg-[#8B4513] opacity-10 blur-[2px]"></div>
            <div className="absolute top-[70%] left-[15%] w-2 h-2 rounded-full bg-[#CD853F] opacity-25 blur-[1px]"></div>
            <div className="absolute top-[30%] right-[15%] w-3 h-3 rounded-full bg-[#8B4513] opacity-12 blur-[1px]"></div>
          </div>

          {/* Crease mark */}
          <div
            className="absolute top-0 bottom-0 left-[30%] w-px bg-[#8B4513] opacity-5"
            style={{ transform: 'rotate(0.5deg)' }}
          ></div>

          {/* Edge wear */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#d4c4a8]/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#d4c4a8]/30 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#d4c4a8]/30 to-transparent pointer-events-none rounded-l-lg"></div>

          {/* Page shadow/depth */}
          <div className="absolute inset-0 shadow-inner pointer-events-none opacity-20 rounded-l-lg"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center z-10">
            {leftContent}
          </div>

          {/* Page number */}
          <div className="hidden lg:block absolute bottom-4 left-0 right-0 text-center z-20">
            <span className="text-sm text-[#6b5d4f] font-serif">{pageNumber}</span>
          </div>
        </div>

        {/* Spine/Gutter (only visible on desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-r from-[#2a2520]/10 via-[#2a2520]/5 to-[#2a2520]/10 transform -translate-x-1/2 z-20"></div>

        {/* Right Page */}
        <div className={`relative bg-gradient-to-br from-[#f5f1e8] via-[#f0ebe0] to-[#ebe6d8] h-full p-6 sm:p-8 lg:p-12 shadow-2xl overflow-hidden ${isMobilePage ? 'max-lg:invisible max-lg:absolute max-lg:pointer-events-none' : ''}`}>
          {/* Paper grain texture */}
          <div
            className="absolute inset-0 opacity-60 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          ></div>

          {/* Edge darkening (vignette) */}
          <div className="absolute inset-0 pointer-events-none rounded-r-lg"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(139, 69, 19, 0.15) 100%)'
            }}
          ></div>

          {/* Age spots */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[25%] left-[25%] w-2 h-2 rounded-full bg-[#8B4513] opacity-18 blur-[1px]"></div>
            <div className="absolute top-[55%] right-[20%] w-3 h-3 rounded-full bg-[#A0522D] opacity-20 blur-[1px]"></div>
            <div className="absolute bottom-[35%] left-[70%] w-2 h-2 rounded-full bg-[#8B4513] opacity-15 blur-[2px]"></div>
            <div className="absolute top-[80%] left-[40%] w-4 h-4 rounded-full bg-[#CD853F] opacity-12 blur-[1px]"></div>
            <div className="absolute top-[20%] right-[45%] w-2 h-2 rounded-full bg-[#8B4513] opacity-22 blur-[1px]"></div>
          </div>

          {/* Crease mark */}
          <div
            className="absolute top-0 bottom-0 right-[35%] w-px bg-[#8B4513] opacity-5"
            style={{ transform: 'rotate(-0.5deg)' }}
          ></div>

          {/* Edge wear */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#d4c4a8]/30 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#d4c4a8]/30 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#d4c4a8]/30 to-transparent pointer-events-none rounded-r-lg"></div>

          {/* Page shadow/depth */}
          <div className="absolute inset-0 shadow-inner pointer-events-none opacity-20"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center z-10">
            {rightContent}
          </div>

          {/* Page number */}
          <div className="hidden lg:block absolute bottom-4 left-0 right-0 text-center z-20">
            <span className="text-sm text-[#6b5d4f] font-serif">{pageNumber + 1}</span>
          </div>
        </div>
      </div>

      {/* Book shadow underneath */}
      <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full z-0"></div>
    </motion.div>
  );
}
