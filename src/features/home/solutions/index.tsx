import {
  VideoIcon,
  AnimationOutlineIcon,
  CursorMagicSelectionIcon,
  CalendarViewDayRoundedIcon,
  TablerBrand4chan,
  LightHeadMountedDeviceOutlineRounded,
  GgMediaPodcast,
  RealStateIcon,
  ParkOutlineMovieIcon,
} from "@/core/icons";
import { SolutionsTicker } from "./solutions-ticker";

const solutions = [
  {
    name: "Cinematic Edits",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1",
    Icon: CursorMagicSelectionIcon,
  },
  {
    name: "Event Recaps",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1",
    Icon: CalendarViewDayRoundedIcon,
  },
  {
    name: "Commercials",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-2 row-span-1 md:col-span-1",
    Icon: VideoIcon,
  },
  {
    name: "Brand Video",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-2 row-span-1 md:col-span-1",
    Icon: TablerBrand4chan,
  },
  {
    name: "Talking Head",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    Icon: LightHeadMountedDeviceOutlineRounded,
  },
  {
    name: "Podcast Snippets",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    Icon: GgMediaPodcast,
  },
  {
    name: "Real Estate Videos",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
    Icon: RealStateIcon,
  },
  {
    name: "Trailers",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    Icon: ParkOutlineMovieIcon,
  },
  {
    name: "Explainer Videos",
    gradient: "from-[#1A1A1A] to-[#2A2A2A]",
    accentColor: "#FFFFFF",
    gridClasses: "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
    Icon: AnimationOutlineIcon,
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0 ">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-4">
            <div className="flex flex-col gap-4 max-w-[80ch] mx-auto text-center">
              <p className="text-xl lg:text-2xl tracking-wider italic font-serif text-foreground">
                Solutions
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
                Whatever You're
                <span className="font-serif font-medium italic ml-1.25 mr-4 text-brand-light">
                  Creating,
                </span>
                We've Got It
                <span className="font-serif font-medium italic ml-1.25 mr-4 text-brand-light">
                  Covered
                </span>
              </h2>
              <p className="text-foreground/70 mb-6 text-balance text-base lg:text-lg font-medium">
                Social content. Business videos. Educational material. Marketing
                assets. If you're recording it, we're editing it. One service
                for everything you need.
              </p>
            </div>
          </div>

          <div className="relative mt-12">
            <SolutionsTicker />
          </div>
        </div>
      </div>
    </section>
  );
}
