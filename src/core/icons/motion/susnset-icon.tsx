"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

interface SunsetIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const ARROW_VARIANTS: Variants = {
  animate: {
    y: [0, 2, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.4,
    },
  },
};

const RAYS_VARIANTS: Variants = {
  animate: (i: number) => ({
    opacity: [0, 1, 0],
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.6,
    },
  }),
};

const MotionSunsetIcon = ({
  className,
  size = 28,
  ...props
}: SunsetIconProps) => {
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
        {/* Arrow */}
        <motion.g animate="animate" variants={ARROW_VARIANTS}>
          <path d="M12 10V2" />
          <path d="m16 6-4 4-4-4" />
        </motion.g>

        {/* Rays */}
        {[
          "m4.93 10.93 1.41 1.41",
          "M2 18h2",
          "M20 18h2",
          "m19.07 10.93-1.41 1.41",
          "M22 22H2",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            animate="animate"
            variants={RAYS_VARIANTS}
            custom={index + 1}
          />
        ))}

        {/* Horizon */}
        <path d="M16 18a4 4 0 0 0-8 0" />
      </svg>
    </div>
  );
};

export { MotionSunsetIcon };
