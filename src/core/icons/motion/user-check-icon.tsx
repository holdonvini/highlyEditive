"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

interface UserCheckIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const CHECK_VARIANTS: Variants = {
  animate: {
    pathLength: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.4,
    },
  },
};

const MotionUserCheckIcon = ({
  className,
  size = 28,
  ...props
}: UserCheckIconProps) => {
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
        {/* User body */}
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />

        {/* Animated check */}
        <motion.path
          d="M16 11L18 13L22 9"
          animate="animate"
          variants={CHECK_VARIANTS}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </div>
  );
};

export { MotionUserCheckIcon };
