"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

interface RadioIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const WAVE_VARIANTS: Variants = {
  animate: (i: number) => ({
    opacity: [1, 0, 1],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: i * 0.15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.4,
    },
  }),
};

const MotionPodcastIcon = ({
  className,
  size = 28,
  ...props
}: RadioIconProps) => {
  return (
    <div className={cn(className)} {...props}>
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left outer */}
        <motion.path
          d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
          animate="animate"
          custom={1}
          variants={WAVE_VARIANTS}
        />

        {/* Left inner */}
        <motion.path
          d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
          animate="animate"
          custom={0}
          variants={WAVE_VARIANTS}
        />

        {/* Center */}
        <circle cx="12" cy="12" r="2" />

        {/* Right inner */}
        <motion.path
          d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
          animate="animate"
          custom={0}
          variants={WAVE_VARIANTS}
        />

        {/* Right outer */}
        <motion.path
          d="M19.1 4.9C23 8.8 23 15.1 19.1 19"
          animate="animate"
          custom={1}
          variants={WAVE_VARIANTS}
        />
      </svg>
    </div>
  );
};

export { MotionPodcastIcon };
