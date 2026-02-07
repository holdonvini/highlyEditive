"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

interface YoutubeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const DRAW_VARIANTS: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    pathLength: [0, 1, 1, 0],
    pathOffset: [1, 0, 0, 0],
    transition: {
      duration: 1.4,
      times: [0, 0.45, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.3,
    },
  },
};

const TRIANGLE_VARIANTS: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    pathLength: [0, 1, 1, 0],
    pathOffset: [1, 0, 0, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.7, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.3,
    },
  },
};

const MotionYoutubeIcon = ({
  className,
  size = 28,
  ...props
}: YoutubeIconProps) => {
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
        {/* Outer rounded rectangle */}
        <motion.path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
          animate="animate"
          variants={DRAW_VARIANTS}
        />

        {/* Play triangle */}
        <motion.path
          d="M10 15l5-3-5-3z"
          animate="animate"
          variants={TRIANGLE_VARIANTS}
        />
      </svg>
    </div>
  );
};

export { MotionYoutubeIcon };
