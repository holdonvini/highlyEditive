import { ArrowRight, CheckmarkDoneIcon, ColoredRocketIcon } from "@/core/icons";
import { BOOK_A_CALL_URL } from "@/lib/constants";
import Link from "next/link";

export function HighVolumenPlan() {
  return (
    <div className="w-full h-full relative flex shrink-0 snap-center flex-col rounded-[24px] p-[28px] pb-[25px] text-white transition-all duration-200 bg-[rgb(13_15_17/40%)] border border-[rgba(255,255,255,0.05)] shadow-[4px_6px_25px_rgba(0,0,0,0.56)] overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1 gap-4">
        <div className="flex items-center gap-2">
          <ColoredRocketIcon className="size-6" />
          <h3 className="sm:text-[20px] font-semibold leading-snug text-[16px]">
            Managing High Volume?
          </h3>
        </div>
        <p className="leading-snug">
          <span className="font-semibold tracking-normal text-[36px]">
            Enterprise
          </span>
          {/* <span className="ml-1 text-[20px] font-medium tracking-tight text-zinc-400 sm:text-[16px]">
            / one video
          </span> */}
        </p>
        <p className="lg:text-base text-sm leading-snug font-medium">
          Proposal in 24 hours
        </p>

        <div className="flex flex-col gap-4">
          <Link
            target="_blank"
            href={BOOK_A_CALL_URL}
            className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group"
          >
            <span>Schedule Call</span>
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
    point: "Dedicated editing team",
  },
  {
    id: "item-2",
    point: "Multiple videos simultaneously",
  },
  {
    id: "item-3",
    point: "Project manager assigned",
  },
  {
    id: "item-4",
    point: "Custom workflow setup",
  },
  {
    id: "item-5",
    point: "White-label options",
  },
  {
    id: "item-6",
    point: "Custom SLA terms",
  },
  {
    id: "item-7",
    point: "Flexible payment terms",
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
    point: "Marketing agencies",
  },
  {
    id: "item-2",
    point: "Production companies",
  },
  {
    id: "item-3",
    point: "Brands with 30+ videos monthly",
  },
  {
    id: "item-4",
    point: "Teams needing scale",
  },
];
