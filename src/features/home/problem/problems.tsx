"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

export function Problems() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="relative z-10 grid place-items-center py-[20px] pb-7 overflow-x-hidden"
    >
      <ProblemHeading containerProgress={containerProgress} />
      <div className="w-full grid lg:gap-26 gap-18 max-w-2xl overflow-hidden">
        {problems.map((problem, index) => (
          <ProblemItem
            key={problem.id}
            index={index}
            containerProgress={containerProgress}
            {...problem}
          />
        ))}
      </div>
      <ProblemClosing containerProgress={containerProgress} />
    </div>
  );
}

type ProblemHeadingProps = {
  containerProgress: MotionValue<number>;
};

function ProblemHeading({ containerProgress }: ProblemHeadingProps) {
  // Water drop effect: appears early, drips down and disappears before problems show
  // Animation happens in the first 30% of scroll progress
  const headingProgress = useTransform(containerProgress, [0, 0.68], [0, 1]);

  // Drip down effect - moves downward like a water drop
  const y = useTransform(headingProgress, [0, 0.68, 1], ["0%", "20%", "60%"]);

  // Scale down like a water drop shrinking
  const scale = useTransform(
    headingProgress,
    [0, 0.28, 0.7, 1],
    [1, 0.95, 0.7, 0.3],
  );

  // Vertical stretch to create drop shape
  const scaleY = useTransform(headingProgress, [0, 0.5, 1], [1, 1.1, 0.8]);

  // Opacity fades out completely
  const opacity = useTransform(
    headingProgress,
    [0, 0.7, 0.8, 1],
    [1, 1, 0.3, 0],
  );

  // Slight rotation for natural drop movement
  const rotate = useTransform(headingProgress, [0, 1], [0, 5]);

  return (
    <motion.h4
      className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-8 text-zinc-300"
      style={{
        y,
        scale,
        scaleY,
        // rotate,
        // filter: useTransform(
        //   [blur, brightness],
        //   ([b, br]) => `blur(${b}px) brightness(${br}%)`
        // ),
        opacity,
      }}
    >
      Most editing services make it worse
    </motion.h4>
  );
}

type ProblemItemProps = {
  title: string;
  index: number;
  containerProgress: MotionValue<number>;
};

function ProblemItem({ title, index, containerProgress }: ProblemItemProps) {
  // Stagger the animation based on index
  // Each item starts slightly later, creating a wave effect
  // Reduced delay and adjusted mapping to ensure all items are visible
  const totalItems = problems.length;
  const staggerAmount = 0.12; // Reduced from 0.15 to ensure all items animate

  // Calculate when this item should start and end
  // Items start progressively later but all should finish before section ends
  const startOffset = index * staggerAmount;
  const endOffset = (totalItems - 1 - index) * staggerAmount;

  // Map container progress to item progress with stagger
  // Start earlier for later items, end later for earlier items
  const staggeredProgress = useTransform(
    containerProgress,
    [startOffset, 1 - endOffset],
    [0, 1],
  );

  // Clamp the progress between 0 and 1 for smooth animation
  const clampedProgress = useTransform(staggeredProgress, (value) =>
    Math.max(0, Math.min(1, value)),
  );

  // Alternate x direction based on index (zigzag pattern)
  // Reduced x offset to prevent horizontal overflow
  const xDirection = index % 2 === 0 ? 1 : -1;
  const xOffset = index % 2 === 0 ? "-8%" : "8%";
  const xEndOffset = index % 2 === 0 ? "8%" : "-8%";

  const y = useTransform(clampedProgress, [0, 0.5, 1], ["50%", "0%", "-15%"]);
  const x = useTransform(
    clampedProgress,
    [0, 0.5, 1],
    [xOffset, "0%", xEndOffset],
  );

  // More refined scale animation
  const scaleY = useTransform(clampedProgress, [0, 0.5, 1], [1.5, 1, 0.85]);
  const scaleX = useTransform(clampedProgress, [0, 0.5, 1], [0.95, 1, 1.05]);

  // Enhanced filter effects
  const blur = useTransform(clampedProgress, [0, 0.4, 0.6, 1], [8, 0, 0, 0]);
  const brightness = useTransform(clampedProgress, [0, 0.4, 1], [0, 100, 0]);
  const contrast = useTransform(clampedProgress, [0, 0.4, 1], [200, 100, 200]);

  // More dynamic rotation with index variation
  const rotateXBase = index % 2 === 0 ? 60 : -60;
  const rotateX = useTransform(
    clampedProgress,
    [0, 0.5, 1],
    [rotateXBase, 0, -rotateXBase * 0.8],
  );

  const rotateZ = useTransform(
    clampedProgress,
    [0, 0.5, 1],
    [xDirection * 20, 0, xDirection * -20],
  );

  // Extended opacity range so items stay visible longer
  // Fade in quickly, stay visible for most of the animation, fade out at the end
  const opacity = useTransform(clampedProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      className="relative z-10 py-8"
      style={{
        perspective: "800px",
        willChange: "transform",
        z: 300,
      }}
    >
      <motion.div
        style={{
          y,
          x,
          rotateX,
          rotateZ,
          scaleY,
          scaleX,
          filter: useTransform(
            [blur, brightness, contrast],
            ([b, br, c]) => `blur(${b}px) brightness(${br}%) contrast(${c}%)`,
          ),
          opacity,
        }}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-center font-serif tracking-wider font-medium">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
}

type ProblemClosingProps = {
  containerProgress: MotionValue<number>;
};

function ProblemClosing({ containerProgress }: ProblemClosingProps) {
  // Appears after problems have been displayed
  // Animation starts at 60% of scroll progress and completes at 90%
  const closingProgress = useTransform(containerProgress, [0.6, 0.9], [0, 1]);

  // Fade in from below with a subtle scale effect
  const y = useTransform(closingProgress, [0, 0.5, 1], ["30%", "0%", "-10%"]);
  const scale = useTransform(closingProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  // Opacity: starts invisible, fades in, then slightly fades out
  const opacity = useTransform(
    closingProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0.8],
  );

  // Subtle blur that clears as it appears
  const blur = useTransform(closingProgress, [0, 0.4, 1], [4, 0, 0]);

  return (
    <motion.div
      className="mt-12 text-center"
      style={{
        y,
        scale,
        opacity,
        filter: useTransform([blur], ([b]) => `blur(${b}px)`),
      }}
    >
      <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-center max-w-xl mx-auto">
        So your content stays in a folder.
        <br />
        <span className="italic">And consistency dies.</span>
      </p>
    </motion.div>
  );
}

const problems = [
  {
    id: "too-many-calls",
    title: "Too many calls",
  },
  {
    id: "slow-timelines",
    title: "Slow Timelines",
  },
  {
    id: "vague-pricing",
    title: "Vague Pricing",
  },
  {
    id: "template-edits",
    title: "Template edits disguised as quality",
  },
  {
    id: "endless-back-forth",
    title: "Endless back-and-forth",
  },
];
