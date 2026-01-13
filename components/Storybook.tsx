'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BookCover from './BookCover';
import PageSpread from './PageSpread';
import { CoffeeStain, InkSplatter, TornCorner, HandDrawnFrame, StarDoodle, ArrowDoodle, Fingerprint, CircleDoodle } from './BookDecorations';
import { WobblyLine, Emphasis, Highlight, MotionLines } from './StoryText';

export default function Storybook() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const [mobileSubPage, setMobileSubPage] = useState(0); // 0 = left page, 1 = right page (for mobile only)

  const pages = [
    // Page 0: Cover
    { type: 'cover' as const },

    // Page 1-2: Title Page
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <StarDoodle className="top-10 right-10" />
          <StarDoodle className="bottom-20 left-20" />
          <InkSplatter className="top-1/4 left-10" />

          <div className="text-center transform -rotate-1">
            <h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#2a2520] mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-marker)' }}
            >
              THE CAT
              <br />
              IN THE
              <br />
              TRAP
            </h1>
          </div>
        </div>
      ),
      right: (
        <div className="h-full flex items-center justify-center relative">
          <CoffeeStain className="top-10 right-10" />
          <ArrowDoodle className="top-1/3 left-10" direction="down" />

          <div className="text-center">
            <p
              className="text-2xl sm:text-3xl text-[#2a2520] mb-4 transform rotate-1"
              style={{ fontFamily: 'var(--font-hand)' }}
            >
              A Dark Tale
            </p>
            <div className="w-32 h-1 bg-[#ff3b30] mx-auto mb-8 transform -rotate-2"></div>
            <p
              className="text-lg text-[#6b5d4f] transform -rotate-1"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              For those who know
            </p>
            <CircleDoodle className="bottom-10 right-20" />
          </div>
        </div>
      )
    },

    // Page 3-4: Stanza 1
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <InkSplatter className="top-10 right-10" color="#2a2520" />
          <Fingerprint className="bottom-20 left-10" />

          <HandDrawnFrame className="w-[85%] max-h-[75vh] transform rotate-1">
            <div className="w-full h-full rounded-lg relative overflow-hidden flex items-center justify-center">
              <img
                src="/bookimage1.jpg"
                alt="Empty streets at night"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </HandDrawnFrame>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center relative space-y-2 sm:space-y-2.5">
          <CoffeeStain className="top-5 right-5" />
          <StarDoodle className="top-1/4 right-10" />

          <WobblyLine tilt={-0.3}>The phone didn't ring,</WobblyLine>
          <WobblyLine tilt={0.5} offset={2}>
            <span className="ml-4 sm:ml-8">the block was <Highlight>too hot</Highlight>,</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.2}>We sat by the window,</WobblyLine>
          <WobblyLine tilt={-0.4} offset={-1}>
            <span className="ml-4 sm:ml-8">watching the spot.</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.1}>I sat there with Sally,</WobblyLine>
          <WobblyLine tilt={-0.2} offset={1}>
            <span className="ml-4 sm:ml-8">keeping it low,</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.3}>With nothing to weigh</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">and nothing to show.</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={-0.2}>Too risky to serve,</WobblyLine>
          <WobblyLine tilt={0.4} offset={2}>
            <span className="ml-4 sm:ml-8">too <Emphasis type="big">paranoid</Emphasis> to sleep,</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.2}>So we sat in the dark,</WobblyLine>
          <WobblyLine tilt={-0.3}>
            <span className="ml-4 sm:ml-8">in way too <Highlight color="red">deep</Highlight>.</span>
          </WobblyLine>

          <ArrowDoodle className="bottom-10 left-5" direction="up" />
        </div>
      )
    },

    // Page 5-6: Stanza 2
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <TornCorner corner="top-right" />
          <InkSplatter className="bottom-10 left-10" color="#ff3b30" />
          <StarDoodle className="top-1/3 left-10" />

          <HandDrawnFrame className="w-[85%] max-h-[75vh] transform -rotate-2">
            <div className="w-full h-full rounded-lg relative overflow-hidden flex items-center justify-center">
              <img
                src="/bookimage2.jpg"
                alt="The Cat entering with the sack"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </HandDrawnFrame>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center relative space-y-2 sm:space-y-2.5">
          <Fingerprint className="top-10 right-10" />
          <CircleDoodle className="top-1/2 left-5" />

          <WobblyLine tilt={0.2}>And then on the door...</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">a loud heavy <Emphasis type="impact">THUMP!</Emphasis></span>
            <MotionLines className="ml-2" />
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={-0.3}>How that knock made</WobblyLine>
          <WobblyLine tilt={0.4}>
            <span className="ml-4 sm:ml-8">our hearts start to <Emphasis type="shout">JUMP!</Emphasis></span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.1}>We looked! Then we saw him</WobblyLine>
          <WobblyLine tilt={-0.2} offset={1}>
            <span className="ml-4 sm:ml-8">step in with the pack!</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.3}>We looked! And we saw him!</WobblyLine>
          <WobblyLine tilt={-0.4}>
            <span className="ml-4 sm:ml-8">The <Emphasis type="scary">Cat</Emphasis> with the Sack!</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={-0.1}>He stepped inside quickly,</WobblyLine>
          <WobblyLine tilt={0.2}>
            <span className="ml-4 sm:ml-8">he locked up the latch,</span>
          </WobblyLine>

          <div className="h-2"></div>

          <WobblyLine tilt={0.3}>'Don't worry,' he said.</WobblyLine>
          <WobblyLine tilt={-0.2}>
            <span className="ml-4 sm:ml-8">'I brought a new <Highlight>batch</Highlight>.'</span>
          </WobblyLine>

          <InkSplatter className="bottom-5 right-10" />
        </div>
      )
    },

    // Page 7-8: Stanza 3
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <CoffeeStain className="bottom-10 right-10" />
          <InkSplatter className="top-20 left-20" color="#ff3b30" />
          <StarDoodle className="bottom-1/4 left-10" />

          <HandDrawnFrame className="w-[85%] max-h-[75vh] transform rotate-2">
            <div className="w-full h-full rounded-lg relative overflow-hidden flex items-center justify-center">
              <img
                src="/bookimage3.jpg"
                alt="The Cat with Pyrex and cooking equipment"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </HandDrawnFrame>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center relative space-y-1.5 sm:space-y-2">
          <ArrowDoodle className="top-5 left-5" direction="right" />
          <Fingerprint className="bottom-20 right-5" />

          <WobblyLine tilt={-0.2}>'Why do you sit there</WobblyLine>
          <WobblyLine tilt={0.3}>
            <span className="ml-4 sm:ml-8">and <Emphasis type="big">look</Emphasis> at the wall?'</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.1}>Said the Cat. 'I have <Emphasis type="shout">bricks!</Emphasis></WobblyLine>
          <WobblyLine tilt={-0.3}>
            <span className="ml-4 sm:ml-8">I have enough for us <Highlight color="yellow">all</Highlight>!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.2}>I know some good tricks</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">with the <Emphasis type="big">Pyrex</Emphasis> and heat,</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.4}>I can show you exactly</WobblyLine>
          <WobblyLine tilt={-0.2}>
            <span className="ml-4 sm:ml-8">how to take over the <Highlight color="red">street</Highlight>!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={-0.1}>
            <Emphasis type="impact">Look at me! Look at me!</Emphasis>
          </WobblyLine>
          <WobblyLine tilt={0.3}>
            <Emphasis type="impact">Look at me NOW!</Emphasis>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={-0.2}>It is easy to cook</WobblyLine>
          <WobblyLine tilt={0.1}>
            <span className="ml-4 sm:ml-8">if you only know <Highlight>how</Highlight>.'</span>
          </WobblyLine>

          <StarDoodle className="bottom-10 right-10" />
          <CircleDoodle className="bottom-5 left-20" />
        </div>
      )
    },

    // Page 9-10: Stanza 4
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <TornCorner corner="top-left" />
          <InkSplatter className="top-10 left-10" color="#2a2520" />
          <Fingerprint className="bottom-10 right-10" />

          <HandDrawnFrame className="w-full aspect-square max-h-full transform -rotate-1">
            <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] via-[#2a2520] to-[#3e342e] rounded-lg flex items-center justify-center p-6 relative overflow-hidden">
              {/* Fish in bowl looking scared */}
              <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-blue-500/20 border-4 border-blue-400/40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-8 bg-orange-500/60 rounded-full"></div>
              </div>
              <p
                className="text-[#f5f1e8] text-center text-sm sm:text-base relative z-10"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                [The Fish in the bowl, shaking with fear]
              </p>
            </div>
          </HandDrawnFrame>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center relative space-y-1.5 sm:space-y-2">
          <CoffeeStain className="top-10 right-10" />
          <ArrowDoodle className="top-1/3 left-5" direction="right" />

          <WobblyLine tilt={0.2}>But the Fish in the bowl,</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">he was <Emphasis type="big">shaking</Emphasis> with fear,</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={-0.3}>He said, '<Emphasis type="shout">Twelve</Emphasis> is outside!</WobblyLine>
          <WobblyLine tilt={0.4}>
            <span className="ml-4 sm:ml-8">Get that <Highlight color="red">shit</Highlight> out of here!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.1}>You should not be whippin'</WobblyLine>
          <WobblyLine tilt={-0.2}>
            <span className="ml-4 sm:ml-8">when neighbors are <Emphasis type="big">home</Emphasis>!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.3}>You should not be answering</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">every damn <Highlight>phone</Highlight>!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={-0.2}>He leads to a raid!</WobblyLine>
          <WobblyLine tilt={0.2}>
            <span className="ml-4 sm:ml-8">He leads to a <Emphasis type="scary">case</Emphasis>!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.4}>Get that Cat in the Trap</WobblyLine>
          <WobblyLine tilt={-0.3}>
            <span className="ml-4 sm:ml-8">out of this <Emphasis type="impact">place!'</Emphasis></span>
          </WobblyLine>

          <StarDoodle className="bottom-10 left-10" />
          <CircleDoodle className="bottom-5 right-20" />
        </div>
      )
    },

    // Page 11-12: Stanza 5
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex items-center justify-center relative">
          <CoffeeStain className="top-20 right-20" />
          <InkSplatter className="bottom-10 left-10" color="#ff3b30" />
          <StarDoodle className="top-1/4 left-10" />

          <HandDrawnFrame className="w-full aspect-square max-h-full transform rotate-2">
            <div className="w-full h-full bg-gradient-to-br from-[#2a2520] via-[#4e342e] to-[#1a1a1a] rounded-lg flex items-center justify-center p-6 relative overflow-hidden border-4 border-[#ff3b30]/30">
              {/* Thing One and Thing Two silhouettes */}
              <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-16 h-32 bg-red-500/40 rounded-full"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-32 bg-red-500/40 rounded-full"></div>
                <div className="absolute bottom-1/3 left-0 right-0 h-1 bg-white/20"></div>
              </div>
              <p
                className="text-[#f5f1e8] text-center text-sm sm:text-base relative z-10 font-bold"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                [Thing One and Thing Two standing ready,<br />loyal and fast]
              </p>
            </div>
          </HandDrawnFrame>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center relative space-y-1.5 sm:space-y-2">
          <Fingerprint className="top-10 right-10" />
          <ArrowDoodle className="top-1/2 left-5" direction="down" />

          <WobblyLine tilt={-0.2}>'Have no fear!' said the Cat.</WobblyLine>
          <WobblyLine tilt={0.3}>
            <span className="ml-4 sm:ml-8">'I won't catch a <Emphasis type="big">charge</Emphasis>.</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.1}>My lawyers are <Highlight>paid</Highlight></WobblyLine>
          <WobblyLine tilt={-0.4}>
            <span className="ml-4 sm:ml-8">and my shooters are <Emphasis type="shout">large</Emphasis>.</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.2}>I will bring in two runners</WobblyLine>
          <WobblyLine tilt={-0.1}>
            <span className="ml-4 sm:ml-8">to help with the <Emphasis type="big">weight</Emphasis>.</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.4}>They are fast on their feet</WobblyLine>
          <WobblyLine tilt={-0.3}>
            <span className="ml-4 sm:ml-8">and they never come <Highlight color="yellow">late</Highlight>.</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={-0.1}>
            <Emphasis type="impact">Thing One and Thing Two!</Emphasis>
          </WobblyLine>
          <WobblyLine tilt={0.2}>
            <span className="ml-2">They are <Emphasis type="scary">loyal</Emphasis> and true!</span>
          </WobblyLine>

          <div className="h-1.5"></div>

          <WobblyLine tilt={0.3}>They will serve all the fiends</WobblyLine>
          <WobblyLine tilt={-0.2}>
            <span className="ml-4 sm:ml-8">while I count up with <Highlight color="red">you!'</Highlight></span>
          </WobblyLine>

          <InkSplatter className="bottom-5 right-10" />
          <CircleDoodle className="bottom-10 left-20" />
        </div>
      )
    },

    // Page 13-14: Back Matter
    {
      type: 'spread' as const,
      left: (
        <div className="h-full flex flex-col items-center justify-center relative space-y-6">
          <InkSplatter className="top-10 left-10" />
          <InkSplatter className="bottom-10 right-10" color="#ff3b30" />
          <StarDoodle className="top-1/4 right-20" />
          <StarDoodle className="bottom-1/4 left-20" />

          <div className="text-center transform rotate-1">
            <h2
              className="text-6xl sm:text-7xl font-bold text-[#ff3b30] mb-8 transform -rotate-2"
              style={{ fontFamily: 'var(--font-marker)' }}
            >
              THE END
            </h2>
          </div>

          <div className="w-full max-w-md px-4">
            <video
              className="w-full rounded-lg shadow-2xl border-4 border-[#2a2520]"
              autoPlay
              loop
              playsInline
            >
              <source src="/finalbookmovie.mov" type="video/mp4" />
            </video>
          </div>
        </div>
      ),
      right: (
        <div className="h-full flex flex-col justify-center items-center space-y-6 relative">
          <TornCorner corner="bottom-right" />
          <CoffeeStain className="top-10 left-10" />

          <div className="text-center">
            <h3
              className="text-3xl sm:text-4xl font-bold text-[#2a2520] mb-6 transform rotate-1"
              style={{ fontFamily: 'var(--font-marker)' }}
            >
              Join the Trap
            </h3>
            <div className="space-y-4">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-[#2a2520] text-[#f5f1e8] rounded-lg hover:bg-[#ff3b30] transition-all transform hover:scale-105 hover:-rotate-1"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                X.com
              </a>
              <a
                href="https://pump.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-[#2a2520] text-[#f5f1e8] rounded-lg hover:bg-[#ff3b30] transition-all transform hover:scale-105 hover:-rotate-1"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                Pump.fun
              </a>
            </div>
            <div className="mt-8">
              <p
                className="text-sm text-[#6b5d4f] mb-2 transform -rotate-1"
                style={{ fontFamily: 'var(--font-hand)' }}
              >
                Contract Address:
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('0xTRAP...').then(() => {
                    // Visual feedback - could add a toast notification here
                    e.currentTarget.textContent = 'Copied!';
                    setTimeout(() => {
                      e.currentTarget.textContent = '0xTRAP...';
                    }, 1500);
                  });
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText('0xTRAP...').then(() => {
                    e.currentTarget.textContent = 'Copied!';
                    setTimeout(() => {
                      e.currentTarget.textContent = '0xTRAP...';
                    }, 1500);
                  });
                }}
                className="text-xs sm:text-sm bg-[#d4cfc4] px-4 py-3 rounded inline-block transform rotate-1 hover:bg-[#ff3b30] hover:text-white active:bg-[#ff3b30] active:text-white transition-all cursor-pointer touch-manipulation"
              >
                0xTRAP...
              </button>
            </div>
          </div>

          <ArrowDoodle className="bottom-10 left-10" direction="up" />
          <StarDoodle className="bottom-20 right-10" />
        </div>
      )
    }
  ];

  const totalPages = pages.length;

  const nextPage = () => {
    // On mobile, check if we need to show the other page of the spread first
    if (window.innerWidth < 1024) { // lg breakpoint
      if (mobileSubPage === 0) {
        // Currently on left page, show right page
        setMobileSubPage(1);
        setDirection(1);
        return;
      }
    }

    // Either desktop or mobile moving to next spread
    if (currentPage < totalPages - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
      setMobileSubPage(0); // Reset to left page
    }
  };

  const prevPage = () => {
    // On mobile, check if we need to show the other page of the spread first
    if (window.innerWidth < 1024) { // lg breakpoint
      if (mobileSubPage === 1) {
        // Currently on right page, show left page
        setMobileSubPage(0);
        setDirection(-1);
        return;
      }
    }

    // Either desktop or mobile moving to previous spread
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
      setMobileSubPage(1); // Set to right page when going back
    }
  };

  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        {currentPage === 0 ? (
          <BookCover key="cover" onOpen={nextPage} />
        ) : (
          <PageSpread
            key={currentPage}
            leftContent={pages[currentPage].type === 'spread' ? pages[currentPage].left : null}
            rightContent={pages[currentPage].type === 'spread' ? pages[currentPage].right : null}
            pageNumber={(currentPage - 1) * 2 + 1 + mobileSubPage}
            direction={direction}
          />
        )}
      </AnimatePresence>

      {/* Navigation */}
      {currentPage > 0 && (
        <>
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || (currentPage === 1 && mobileSubPage === 0 && window.innerWidth < 1024)}
            className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 p-2 sm:p-3 bg-transparent text-[#2a2520]/40 hover:text-[#ff3b30] hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed transition-all z-[100]"
            aria-label="Previous page"
          >
            <ChevronLeft size={32} className="sm:w-10 sm:h-10" />
          </button>

          <div
            className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-2 bg-transparent text-[#2a2520]/50 text-xs sm:text-sm z-[100]"
            style={{ fontFamily: 'var(--font-hand)' }}
          >
            <span className="hidden lg:inline">
              Page {currentPage === 0 ? 'Cover' : `${(currentPage - 1) * 2 + 1}-${(currentPage - 1) * 2 + 2}`} of {(totalPages - 1) * 2}
            </span>
            <span className="lg:hidden">
              Page {currentPage === 0 ? 'Cover' : (currentPage - 1) * 2 + 1 + mobileSubPage} of {(totalPages - 1) * 2}
            </span>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 && (window.innerWidth >= 1024 || mobileSubPage === 1)}
            className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-2 sm:p-3 bg-transparent text-[#2a2520]/40 hover:text-[#ff3b30] hover:scale-110 disabled:opacity-20 disabled:cursor-not-allowed transition-all z-[100]"
            aria-label="Next page"
          >
            <ChevronRight size={32} className="sm:w-10 sm:h-10" />
          </button>
        </>
      )}
    </div>
  );
}
