import { BgCard1 } from "@/core/components/cards/bg-card-1";
import {
  ArrowRight,
  CheckmarkDoneIcon,
  ColoredStarIcon,
  RoentgenElectricityIcon,
} from "@/core/icons";
import { CURRENCY } from "@/lib/constants";
import { formatCurrency } from "@/lib/currency";

export function NeedItNowPlan() {
  return (
    <div className="w-full h-full relative flex shrink-0 snap-center flex-col rounded-[28px] p-[28px] pb-[25px] text-white transition-all duration-200 bg-[rgb(13_15_17/40%)] border border-[rgba(255,255,255,0.05)] shadow-[4px_6px_25px_rgba(0,0,0,0.56)] overflow-hidden">
      <div className="relative z-10 flex flex-col flex-1 gap-4">
        <div className="flex items-center gap-2">
          <RoentgenElectricityIcon className="size-7 text-yellow-400" />
          <h3 className="sm:text-[20px] font-semibold leading-snug text-[16px]">
            Need It Tomorrow?
          </h3>
        </div>
        <p className="leading-snug">
          <span className="font-semibold tracking-normal text-[36px]">
            {formatCurrency(80, { currency: CURRENCY, locale: "en-US" })}
          </span>
          {/* <span className="ml-1 text-[20px] font-medium tracking-tight text-zinc-400 sm:text-[16px]">
            / one video
          </span> */}
        </p>
        <p className="lg:text-base text-sm leading-snug font-medium">
          <span>Rush Delivery</span> • <span>Delivery in 24 hours</span>
        </p>

        <div className="flex flex-col gap-4">
          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group">
            <span>Get Started</span>
            <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
          </button>
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
    point: "Everything in standard package",
  },
  {
    id: "item-2",
    point: "Animations and motion graphics",
  },
  {
    id: "item-3",
    point: "Text animations",
  },
  {
    id: "item-4",
    point: "Logo motion",
  },
  {
    id: "item-5",
    point: "Priority queue placement",
  },
  {
    id: "item-6",
    point: "One revision included",
  },
];

const perfectFor = [
  {
    id: "item-1",
    point: "Product launches",
  },
  {
    id: "item-2",
    point: "Announcements",
  },
  {
    id: "item-3",
    point: "Promotions",
  },
  {
    id: "item-4",
    point: "Time-sensitive content",
  },
];
