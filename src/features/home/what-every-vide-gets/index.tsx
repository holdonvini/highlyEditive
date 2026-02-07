"use client";
import {
  AudioIcon,
  ClosedCaptionsTagIcon,
  ColorIcon,
  ReceiptViewPricingIcon,
  RevisionIcon,
  VideoIcon,
} from "@/core/icons";
import { motion } from "motion/react";

export function WhatEveryVideoGets() {
  return (
    <section id="what-every-video-gets" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center">
            <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
              Features
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight [word-spacing:-0.05em]">
              What Every Video
              <span className="font-serif font-normal italic ml-[5px]">
                Gets
              </span>
            </h2>
          </div>

          <div className="w-full grid auto-rows-fr grid-cols-1 min-[580px]:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {items.map((item) => (
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                key={item.id}
                className="relative border border-foreground/10 p-0.5 rounded-2xl"
              >
                <div className="relative z-10 flex flex-col gap-4 justify-between overflow-hidden rounded-2xl border border-transparent bg-card/20 px-6 py-8 shadow-lg shadow-black/20 ring-1 ring-foreground/10 h-full backdrop-blur-xl hover:shadow-xl hover:shadow-brand/10 transition-all duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-foreground/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-fit h-fit">
                    <div className="rounded-xl size-14 p-3 bg-gradient-to-b from-brand to-brand-light flex items-center justify-center shadow-md shadow-brand/20">
                      <item.icon className="text-white size-7" />
                    </div>
                  </div>
                  <div className="relative space-y-3">
                    <div className="text-xl font-semibold text-foreground">
                      {item.title()}
                    </div>
                    <div className="text-foreground/80">
                      {item.description()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* <div className="relative flex flex-col gap-2 mx-auto max-w-[95ch] items-center mt-8 lg:mt-14">
            <div className="relative">
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px -translate-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div className="border border-foreground/5 py-5 px-6 text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif italic tracking-wider font-medium">
                  No drama. No delays. Just delivery.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    id: "item-1",
    title: () => (
      <h3 className="text-xl tracking-wider font-medium">Editing</h3>
    ),
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        Clean cuts, smooth transitions, proper pacing. B-roll integrated if
        provided.
      </p>
    ),
    icon: VideoIcon,
  },
  {
    id: "item-2",
    title: () => (
      <h3 className="text-xl tracking-wider font-medium">Captions & Text</h3>
    ),
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        Auto-captions reviewed manually. Or custom text overlays. Your choice.
      </p>
    ),
    icon: ClosedCaptionsTagIcon,
  },
  {
    id: "item-3",
    title: () => <h3 className="text-xl tracking-wider font-medium">Audio</h3>,
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        Licensed background music. Balanced sound levels. Basic noise cleanup.
      </p>
    ),
    icon: AudioIcon,
  },
  {
    id: "item-4",
    title: () => <h3 className="text-xl tracking-wider font-medium">Color</h3>,
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        Corrected for consistency. Graded for mood when appropriate.
      </p>
    ),
    icon: ColorIcon,
  },
  {
    id: "item-5",
    title: () => (
      <h3 className="text-xl tracking-wider font-medium">Formats</h3>
    ),
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        Platform-ready. Vertical for Reels and Shorts. Horizontal for YouTube.
        Whatever you need.
      </p>
    ),
    icon: ReceiptViewPricingIcon,
  },
  {
    id: "item-6",
    title: () => (
      <h3 className="text-xl tracking-wider font-medium">Revisions</h3>
    ),
    description: () => (
      <p className="text-foreground/70 text-[14px] lg:text-[15.5px] font-sans">
        One round included for music, pacing, text, or color adjustments.
      </p>
    ),
    icon: RevisionIcon,
  },
];
