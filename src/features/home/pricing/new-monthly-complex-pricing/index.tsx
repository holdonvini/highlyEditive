"use client";

import { useState } from "react";
import { Tabs } from "@base-ui/react/tabs";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "motion/react";

import { MONTHLY_COMPLEX_PRICING } from "@/core/config/new-pricing.config";
import { cn } from "@/lib/classes";
import { ArrowRight, CheckmarkDoneIcon } from "@/core/icons";
import { TextMorph } from "@/core/components/text-morph";

export function NewMonthlyComplexPricing() {
  const [activeTab, setActiveTab] = useState<string>("essentials");

  const activeTabData = MONTHLY_COMPLEX_PRICING[activeTab];

  return (
    <Tabs.Root
      className="flex flex-col h-full"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-3xl tracking-wider font-serif text-center">
          Complex Monthly Edits
        </h3>

        <Tabs.List
          className={cn(
            "relative mt-4 z-0 flex w-fit items-center justify-center gap-x-1 text-sm font-medium rounded-full bg-zinc-900 self-center p-1 border border-foreground/10",
          )}
        >
          {monthlyComplexTabs.map((tab) => (
            <Tabs.Tab
              key={tab.id}
              className={cn(
                "flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-sm outline-none hover:text-zinc-200 data-active:text-zinc-200 text-zinc-300",
              )}
              value={tab.id}
            >
              {tab.label}
            </Tabs.Tab>
          ))}

          <Tabs.Indicator
            className={cn(
              "-translate-y-(--active-tab-bottom) absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[width,translate] duration-200 ease-in-out",
              "-z-1 rounded-full bg-foreground/10 shadow-sm/5",
            )}
            data-slot="tab-indicator"
          />
        </Tabs.List>
      </div>

      <Tabs.Panel
        value={activeTab}
        className="lg:border-t border-background/8.5 p-7 px-6 flex-1 relative overflow-hidden"
      >
        <div className="flex flex-col h-full relative gap-6 z-6">
          <div className="flex items-center gap-2 justify-between">
            <TextMorph as="h3" className="text-3xl">
              {activeTabData.title}
            </TextMorph>
            <AnimatePresence>
              {activeTabData.popular && (
                <motion.p
                  initial={{ opacity: 0, scale: 0, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: 100 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="text-sm bg-brand-light/30 text-white px-2 py-1 rounded-full"
                >
                  Popular
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="text-4xl font-medium">
            <NumberFlow
              willChange
              value={activeTabData.price ?? 0}
              format={{
                style: "currency",
                currency: "INR",
                trailingZeroDisplay: "stripIfInteger",
              }}
              suffix=" /month"
              className="[&::part(suffix)]:text-base!"
            />
            {activeTabData.save && (
              <p className="text-sm text-zinc-400">{activeTabData.save}</p>
            )}
          </div>

          <div className="relative">
            <h6 className="text-zinc-100 text-[18px] font-medium">
              Choose one:
            </h6>
            <ul className="pl-2 mt-1.5 flex flex-col gap-2">
              {activeTabData.chooseOne.map((chooseOne) => (
                <li
                  key={chooseOne}
                  className="flex items-center gap-1.5 text-zinc-200"
                >
                  <ArrowRight className="size-5 text-zinc-400" />
                  {chooseOne}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h6 className="text-zinc-100 text-[18px] font-medium">
              Each video includes:
            </h6>
            <ul className="pl-2 mt-1.5 flex flex-col gap-2">
              {activeTabData.includes.map((include) => (
                <li
                  key={include}
                  className="flex items-center gap-1.5 text-zinc-200"
                >
                  <CheckmarkDoneIcon className="size-5 text-zinc-400" />
                  {include}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <h6 className="text-zinc-100 text-[18px] font-medium">Good for:</h6>
            <p className="text-zinc-200 text-base pl-2">
              {activeTabData.goodFor}
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group">
              <span>Start {activeTabData.title} Plan</span>
              <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeTabData.popular && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-x-0 bottom-0 h-2/3 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-linear-to-t from-brand-light/40 via-brand-light/20 to-transparent" />
              <div className="absolute inset-0 bg-linear-to-t from-brand-light/60 via-transparent to-transparent blur-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </Tabs.Panel>
    </Tabs.Root>
  );
}

const monthlyComplexTabs = [
  { id: "essentials", label: "Essentials" },
  { id: "creator", label: "Creator" },
];
