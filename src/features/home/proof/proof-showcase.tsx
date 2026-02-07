"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

type VideoCard = {
  id: string;
  videoUrl: string;
  title?: string;
  description?: string;
};

export function ProofShowcase() {
  const containerRef1 = useRef<HTMLUListElement>(null);
  // const containerRef2 = useRef<HTMLUListElement>(null);
  const x = useMotionValue(0);
  // const xRev = useMotionValue(0);

  useEffect(() => {
    const cardWidth = 241; // Base card width in pixels
    const gap = 16; // Gap between cards
    const cardTotalWidth = cardWidth + gap;
    const totalWidth = cardTotalWidth * VIDEO_CARDS.length;

    // Row 1: Animate right to left (negative direction)
    // Start at 0, animate to -totalWidth, then repeat
    const animation1 = animate(x, -totalWidth, {
      duration: 30, // Adjust speed here (higher = slower)
      repeat: Infinity,
      ease: "linear",
    });

    // Row 2: Animate left to right (positive direction)
    // Start at -totalWidth, animate to 0, then repeat
    // This ensures seamless loop when it resets
    // xRev.set(-totalWidth);
    // const animation2 = animate(xRev, 0, {
    //   duration: 30, // Adjust speed here (higher = slower)
    //   repeat: Infinity,
    //   ease: "linear",
    // });

    return () => {
      animation1.stop();
      // animation2.stop();
    };
    // add xRev to the dependency array when using it
  }, [x]);

  // Duplicate cards for seamless loop
  const row1Cards = [...VIDEO_CARDS, ...VIDEO_CARDS];
  // const row2Cards = [...VIDEO_CARDS, ...VIDEO_CARDS];

  return (
    <div className="relative pb-16 md:pb-24">
      <div className="flex flex-col gap-7 max-w-(--max-page-width) mx-auto px-6 lg:px-12 xl:px-0">
        <div className="h-[390px] sm:h-[365px] md:h-[390px] perspective-distant mask-r-from-96% mask-l-from-96% mask-r-to-background/5 mask-l-to-background/5">
          <div className="max-h-full w-full h-full overflow-x-hidden">
            <motion.ul
              ref={containerRef1}
              className="flex h-full w-fit items-center gap-4 list-none m-0 p-0"
              style={{
                x,
                willChange: "transform",
              }}
            >
              {row1Cards.map((card, index) => (
                <li
                  key={`${card.id}-${index}`}
                  className="shrink-0 w-[180px] sm:w-[200px] md:w-[241px] h-[320px] sm:h-[350px] md:h-[375px]"
                >
                  <div className="w-full h-full rounded-lg bg-linear-to-br from-gray-100 to-gray-200/80 border border-gray-300/50 overflow-hidden">
                    {/* Placeholder video card */}
                    <video
                      src={card.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* <div className="h-[390px] sm:h-[365px] md:h-[390px] perspective-distant skew-x-[4deg] skew-y-[4deg] mask-r-from-96% mask-l-from-96% mask-r-to-background/5 mask-l-to-background/5">
          <div className="max-h-full w-full h-full overflow-x-hidden">
            <motion.ul
              ref={containerRef2}
              className="flex h-full w-fit items-center gap-4 list-none m-0 p-0"
              style={{
                x: xRev,
                willChange: "transform",
              }}
            >
              {row2Cards.map((card, index) => (
                <li
                  key={`${card.id}-${index}`}
                  className="shrink-0 w-[180px] sm:w-[200px] md:w-[211px] h-[320px] sm:h-[350px] md:h-[375px]"
                >
                  <div className="w-full h-full rounded-lg bg-linear-to-br from-gray-100 to-gray-200/80 border border-gray-300/50 overflow-hidden">
                    <video
                      src={card.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover"
                      aria-label={card.title}
                    />
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div> */}
      </div>
    </div>
  );
}

const VIDEO_CARDS: VideoCard[] = [
  {
    id: "video-1",
    videoUrl:
      "https://stream.mux.com/QgzZuKKAGwm6ydkq2W00xDpS8npIliG02Oro018HkMmIAQ.m3u8",
    title: "Video 1",
  },
  {
    id: "video-2",
    videoUrl:
      "https://stream.mux.com/l00y2kxeOKAU8fWcX6tnN8xh010000P43EgJOvh8rZb2rCA.m3u8",
    title: "Video 2",
  },
  {
    id: "video-3",
    videoUrl:
      "https://stream.mux.com/vHTguR26UnDU00m7K2IIQRCpWNCaGBsuWmULEH01rfi6g.m3u8",
    title: "Video 3",
  },
  {
    id: "video-4",
    videoUrl:
      "https://stream.mux.com/FbElYZnsBWOj8wVyR4vBNNHqu6NtWGJ702tDKKcF02Xo8.m3u8",
    title: "Video 4",
  },
  {
    id: "video-5",
    videoUrl:
      "https://stream.mux.com/2TIsNr00c1A012Bbb4TQ4IkuDbmnDGXqLm7IRtL75vVoU.m3u8",
    title: "Video 5",
  },
  {
    id: "video-6",
    videoUrl:
      "https://stream.mux.com/zn024lfQQfRT00MzczluYyfOuqyM25ebC1rVGWRjxHrt8.m3u8",
    title: "Video 6",
  },
  {
    id: "video-7",
    videoUrl:
      "https://stream.mux.com/eK24NgMARb00i59uOjMbPwAIdnUoAwgkjREwFIiYAP02o.m3u8",
    title: "Video 7",
  },
];
