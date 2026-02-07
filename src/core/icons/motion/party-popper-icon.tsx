"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

interface PartyPopperIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const POPPER_VARIANTS: Variants = {
  animate: {
    translateX: [-2, 0, 0],
    translateY: [2, 0, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.5,
    },
  },
};

const LINES_VARIANTS: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.3, 0.8, 1, 1],
    pathLength: [0, 1, 1, 0],
    translateX: [-5, 0, 0, 0],
    translateY: [5, 0, 0, 0],
    transition: {
      duration: 1.4,
      times: [0, 0.4, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.4,
    },
  },
};

const DOTS_VARIANTS: Variants = {
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.4, 0.9, 1, 1],
    translateX: [-4, 0, 0, 0],
    translateY: [4, 0, 0, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.4, 0.75, 1],
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.4,
    },
  },
};

const MotionPartyPopperIcon = ({
  className,
  size = 28,
  ...props
}: PartyPopperIconProps) => {
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
        {/* Popper */}
        <motion.path
          d="M5.8 11.3 2 22l10.7-3.79"
          animate="animate"
          variants={POPPER_VARIANTS}
        />
        <motion.path
          d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
          animate="animate"
          variants={POPPER_VARIANTS}
        />

        {/* Dots */}
        {["M4 3h.01", "M22 8h.01", "M15 2h.01", "M22 20h.01"].map((d) => (
          <motion.path
            key={d}
            d={d}
            animate="animate"
            variants={DOTS_VARIANTS}
          />
        ))}

        {/* Celebration lines */}
        <motion.path
          d="m14 10 1.21-1.06c0.16-0.84 0.9-1.44 1.76-1.44h0.38c0.88 0 1.55-0.77 1.45-1.63a2.9 2.9 0 0 1 1.96-3.12L22 2"
          animate="animate"
          variants={LINES_VARIANTS}
        />
        <motion.path
          d="M17 15h0.77c0.71 0 1.32-0.52 1.43-1.22c0.16-0.91 1.12-1.45 1.98-1.11L22 13"
          animate="animate"
          variants={LINES_VARIANTS}
        />
        <motion.path
          d="M9 7V6.23c0-0.71 0.52-1.33 1.22-1.43c0.91-0.16 1.45-1.12 1.11-1.98L11 2"
          animate="animate"
          variants={LINES_VARIANTS}
        />
      </svg>
    </div>
  );
};

export { MotionPartyPopperIcon };
