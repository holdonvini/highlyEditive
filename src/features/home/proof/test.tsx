"use client";

import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";

const images = [
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
  "https://framerusercontent.com/images/6mmjFHOHpG2hp6goATRJeAR6M.jpeg?scale-down-to=1024",
];

export function Proof() {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="proof" className="relative full-bleed">
      <div className="mask-b-from-55% h-fit py-16 md:max-h-96 lg:max-h-128 relative mx-auto max-w-(--max-page-width) z-20 bg-background">
        <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center text-foreground px-6 lg:px-12 xl:px-0">
          <p className="text-xl lg:text-3xl font-light font-serif">PROOF</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to Reclaim Your
            <span className="font-serif italic font-light">Time?</span>{" "}
          </h2>
        </div>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[2vw] overflow-hidden bg-white p-[2vw]"
      >
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[6], images[7], images[8]]} y={y4} />
      </div>
    </section>
  );
}

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  return (
    <motion.div
      className="relative -top-[45%] flex h-full w-1/4 min-w-[250px] flex-col gap-[2vw] first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-45%] nth-4:top-[-75%]"
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative h-full w-full overflow-hidden">
          <img
            src={`${src}`}
            alt="image"
            className="pointer-events-none object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};
