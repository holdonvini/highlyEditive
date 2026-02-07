import {
  ArrowRight,
  CheckmarkDoneIcon,
  ColoredSpiralCalendarIcon,
} from "@/core/icons";
import { WHATSAPP_URL } from "@/lib/constants";
import Link from "next/link";

export function CustomPackagePlan() {
  return (
    <div className="w-full h-full relative flex shrink-0 snap-center flex-col rounded-[24px] p-[28px] pb-[25px] text-white transition-all duration-200 bg-[rgb(13_15_17/40%)] border border-[rgba(255,255,255,0.05)] shadow-[4px_6px_25px_rgba(0,0,0,0.56)] overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1 gap-4">
        <div className="flex items-center gap-2">
          <ColoredSpiralCalendarIcon className="size-6" />
          <h3 className="sm:text-[20px] font-semibold leading-snug text-[16px]">
            Post Regularly?
          </h3>
        </div>
        <p className="leading-snug">
          <span className="font-semibold tracking-normal text-[36px]">
            Go Monthly
          </span>
          {/* <span className="ml-1 text-[20px] font-medium tracking-tight text-zinc-400 sm:text-[16px]">
            / one video
          </span> */}
        </p>
        <p className="lg:text-base text-sm leading-snug font-medium">
          Quote in 2 hours
        </p>

        <div className="flex flex-col gap-4">
          <Link
            target="_blank"
            href={WHATSAPP_URL}
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group"
          >
            <span>Get Your Quote</span>
            <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
          </Link>
        </div>

        <span className="relative mt-2 block h-px bg-[rgba(255,255,255,0.10)]">
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0b0c0d]/1 backdrop-blur-sm px-2 py-1 inline-block text-sm tracking-wider text-zinc-200">
            What you get
          </span>
        </span>

        <ul className="flex flex-col gap-3">
          {whatsIncluded.map((include) => (
            <li
              key={include.id}
              className="flex items-center gap-1.5 text-zinc-200"
            >
              <CheckmarkDoneIcon className="size-5 text-zinc-200" />
              {include.point}
            </li>
          ))}
        </ul>

        <span className="relative mt-2 block h-px bg-[rgba(255,255,255,0.10)]">
          <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-[#0b0c0d]/1 backdrop-blur-sm px-2 py-1 inline-block text-sm tracking-wider text-zinc-200">
            Good for
          </span>
        </span>

        <ul className="flex flex-col gap-3">
          {perfectFor.map((point) => (
            <li
              key={point.id}
              className="flex items-center gap-1.5 text-zinc-200"
            >
              <ArrowRight className="size-5 text-zinc-200" />
              {point.point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const whatsIncluded = [
  {
    id: "item-1",
    point: "Fixed monthly rate",
  },
  {
    id: "item-2",
    point: "Based on your volume",
  },
  {
    id: "item-3",
    point: "Based on turnaround speed",
  },
  {
    id: "item-4",
    point: "All editing features",
  },
  {
    id: "item-5",
    point: "Dedicated support",
  },
  {
    id: "item-6",
    point: "Videos never expire",
  },
  {
    id: "item-7",
    point: "Cancel anytime",
  },
];

const perfectFor = [
  {
    id: "item-1",
    point: "Consistent schedules",
  },
  {
    id: "item-2",
    point: "Ongoing content",
  },
  {
    id: "item-3",
    point: "Regular posting",
  },
  {
    id: "item-4",
    point: "Predictable output",
  },
];

const howItWorksItems = [
  {
    id: "item-1",
    point: "Fill 2-min form",
  },
  {
    id: "item-2",
    point: "Get quote in 2 hours",
  },
  {
    id: "item-3",
    point: "Start immediately",
  },
];
