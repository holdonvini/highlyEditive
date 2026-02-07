"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/classes";
import {
  MageMediaReelV,
  HighQualityOutlineIcon,
  RoentgenElectricityIcon,
  ManagerIcon,
  HandPackageIcon,
  CheckmarkDoneIcon,
  GgMediaPodcast,
  FolderWithFilesIcon,
  CursorMagicSelectionIcon,
  ColorIcon,
  ParkOutlineMovieIcon,
  ShutterSpeedIcon,
  PanelSeparateWindowIcon,
  CalendarViewDayRoundedIcon,
  LightHeadMountedDeviceOutlineRounded,
} from "@/core/icons";

type Solution = {
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient?: string;
  accentColor?: string;
};

// Row 1 solutions
const ROW1_SOLUTIONS: Solution[] = [
  {
    name: "Instagram Reels",
    Icon: MageMediaReelV,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "YouTube Shorts",
    Icon: HighQualityOutlineIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "TikTok Videos",
    Icon: RoentgenElectricityIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "LinkedIn Posts",
    Icon: ManagerIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Product Demos",
    Icon: HandPackageIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Testimonials",
    Icon: CheckmarkDoneIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Podcast Clips",
    Icon: GgMediaPodcast,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Tutorials",
    Icon: FolderWithFilesIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
];

// Row 2 solutions
const ROW2_SOLUTIONS: Solution[] = [
  {
    name: "Explainer Videos",
    Icon: CursorMagicSelectionIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Ad Creatives",
    Icon: ColorIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Behind-The-Scenes",
    Icon: ParkOutlineMovieIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Course Content",
    Icon: ShutterSpeedIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Webinar Clips",
    Icon: PanelSeparateWindowIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Event Recaps",
    Icon: CalendarViewDayRoundedIcon,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
  {
    name: "Talking Heads",
    Icon: LightHeadMountedDeviceOutlineRounded,
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
  },
];

export function SolutionsTicker() {
  const containerRef1 = useRef<HTMLUListElement>(null);
  const containerRef2 = useRef<HTMLUListElement>(null);

  useEffect(() => {
    // Calculate total width based on actual container width for each row
    const calculateWidth = (
      container: HTMLUListElement | null,
      solutionsLength: number,
    ) => {
      if (container) {
        // Measure the width of the first set of items (original array)
        let totalWidth = 0;
        const gap = 16; // gap-4 = 16px

        for (let i = 0; i < solutionsLength; i++) {
          const item = container.children[i] as HTMLElement;
          if (item) {
            totalWidth += item.offsetWidth + gap;
          }
        }

        if (totalWidth > 0) {
          return totalWidth;
        }
      }
      // Fallback: estimate based on average item width
      const estimatedItemWidth = 180; // Average width for pill items
      const gap = 16;
      return (estimatedItemWidth + gap) * solutionsLength;
    };

    // Set CSS custom property for animation distance
    const timeoutId = setTimeout(() => {
      const totalWidth1 = calculateWidth(
        containerRef1.current,
        ROW1_SOLUTIONS.length,
      );
      const totalWidth2 = calculateWidth(
        containerRef2.current,
        ROW2_SOLUTIONS.length,
      );

      if (containerRef1.current) {
        containerRef1.current.style.setProperty(
          "--ticker-width",
          `${-totalWidth1}px`,
        );
      }
      if (containerRef2.current) {
        containerRef2.current.style.setProperty(
          "--ticker-width",
          `${-totalWidth2}px`,
        );
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Duplicate solutions for seamless loop
  const row1Solutions = [...ROW1_SOLUTIONS, ...ROW1_SOLUTIONS];
  const row2Solutions = [...ROW2_SOLUTIONS, ...ROW2_SOLUTIONS];

  return (
    <div className="relative w-full">
      {/* Row 1: Sliding left */}
      <div
        className="mb-10 overflow-x-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <ul
          ref={containerRef1}
          className="ticker-row-left flex w-fit items-center gap-4 list-none m-0 p-0"
        >
          {row1Solutions.map((solution, index) => (
            <li
              key={`row1-${solution.name}-${index}`}
              className={cn(
                "shrink-0 relative rounded-2xl overflow-hidden",
                "bg-gradient-to-b",
                solution.gradient || "from-card to-background",
                "border border-foreground/10",
                "p-4 md:p-5",
                "flex flex-col",
                "min-w-[200px]",
              )}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              <div className="flex items-center gap-3">
                {solution.Icon && (
                  <solution.Icon
                    className="size-5 md:size-6 shrink-0"
                    style={{ color: solution.accentColor || "#FFFFFF" }}
                  />
                )}
                <h3
                  className="text-base md:text-lg font-bold leading-tight tracking-tight whitespace-nowrap"
                  style={{ color: solution.accentColor || "#e8d8c4" }}
                >
                  {solution.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Row 2: Sliding right */}
      <div
        className="overflow-x-hidden relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <ul
          ref={containerRef2}
          className="ticker-row-right flex w-fit items-center gap-4 list-none m-0 p-0"
        >
          {row2Solutions.map((solution, index) => (
            <li
              key={`row2-${solution.name}-${index}`}
              className={cn(
                "shrink-0 relative rounded-2xl overflow-hidden",
                "bg-gradient-to-b",
                solution.gradient || "from-card to-background",
                "border border-foreground/10",
                "p-4 md:p-5",
                "flex flex-col",
                "min-w-[200px]",
              )}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
              <div className="flex items-center gap-3">
                {solution.Icon && (
                  <solution.Icon
                    className="size-5 md:size-6 shrink-0"
                    style={{ color: solution.accentColor || "#FFFFFF" }}
                  />
                )}
                <h3
                  className="text-base md:text-lg font-bold leading-tight tracking-tight whitespace-nowrap"
                  style={{ color: solution.accentColor || "#e8d8c4" }}
                >
                  {solution.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
