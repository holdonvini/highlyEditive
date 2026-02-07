// "use client";

// import { motion, useScroll, useMotionValueEvent } from "motion/react";
// import { useState } from "react";

export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  // const { scrollY } = useScroll();
  // const [scrolled, setScrolled] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   setScrolled(latest > 100);
  // });

  return (
    <header
      className="fixed inset-x-0 top-0 z-100"
      // style={{
      //   backgroundColor: scrolled ? "rgba(14, 14, 14, 0.8)" : "transparent",
      //   borderColor: scrolled ? "rgba(25, 25, 25, 0.8)" : "transparent",
      //   backdropFilter: scrolled ? "blur(8px)" : "none",
      // }}
    >
      {children}
    </header>
  );
}
