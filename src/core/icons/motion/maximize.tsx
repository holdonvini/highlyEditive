"use client";

import type { Transition } from "motion/react";
import { motion } from "motion/react";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/classes";

const INFINITE_TRANSITION: Transition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
  repeat: Infinity,
  repeatType: "reverse",
};

interface MaximizeIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
}

const MotionMaximizeIcon = ({
  className,
  size = 28,
  ...props
}: MaximizeIconProps) => {
  return (
    <div className={cn(className)} {...props}>
      <svg
        fill="none"
        height={size}
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top-left */}
        <motion.path
          d="M8 3H5a2 2 0 0 0-2 2v3"
          animate="animate"
          transition={INFINITE_TRANSITION}
          variants={{
            animate: { translateX: "-2px", translateY: "-2px" },
          }}
        />

        {/* Top-right */}
        <motion.path
          d="M21 8V5a2 2 0 0 0-2-2h-3"
          animate="animate"
          transition={INFINITE_TRANSITION}
          variants={{
            animate: { translateX: "2px", translateY: "-2px" },
          }}
        />

        {/* Bottom-left */}
        <motion.path
          d="M3 16v3a2 2 0 0 0 2 2h3"
          animate="animate"
          transition={INFINITE_TRANSITION}
          variants={{
            animate: { translateX: "-2px", translateY: "2px" },
          }}
        />

        {/* Bottom-right */}
        <motion.path
          d="M16 21h3a2 2 0 0 0 2-2v-3"
          animate="animate"
          transition={INFINITE_TRANSITION}
          variants={{
            animate: { translateX: "2px", translateY: "2px" },
          }}
        />
      </svg>
    </div>
  );
};

export { MotionMaximizeIcon };
