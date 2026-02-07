"use client";

import { useState } from "react";

import { cn } from "@/lib/classes";
import { Tabs } from "@base-ui/react/tabs";

import { SINGLE_EDIT_PRICING } from "@/core/config/new-pricing.config";
import { ArrowRight, CheckmarkDoneIcon } from "@/core/icons";
import { formatCurrency } from "@/lib/currency";
import { TextMorph } from "@/core/components/text-morph";

export function NewSingleEditPricing() {
  const [activeTab, setActiveTab] = useState<string>("simple");

  const activeTabData = SINGLE_EDIT_PRICING[activeTab];

  return (
    <Tabs.Root
      className="flex flex-col h-full"
      value={activeTab}
      onValueChange={setActiveTab}
    >
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-3xl tracking-wider font-serif text-center">
          Single Edits
        </h3>

        <Tabs.List
          className={cn(
            "relative mt-4 z-0 flex w-fit items-center justify-center gap-x-1 text-sm font-medium rounded-full bg-zinc-900 self-center p-1 border border-foreground/10",
          )}
        >
          {singleEditTabs.map((tab) => (
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
        className="lg:border-t border-background/8.5 p-7 px-6 flex-1 flex flex-col gap-6 relative overflow-hidden"
      >
        <TextMorph as="h3" className="text-3xl">
          {activeTabData.title}
        </TextMorph>

        <div className="relative">
          <h6 className="text-zinc-100 text-[18px] font-medium">
            What's included:
          </h6>
          <ul className="pl-2 mt-1.5 flex flex-col gap-2">
            {activeTabData.includes.map((include) => (
              <li
                key={include}
                className="flex items-center gap-1.5 text-zinc-300"
              >
                <CheckmarkDoneIcon className="size-5 text-zinc-400" />
                {include}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <h6 className="text-zinc-100 text-[18px] font-medium">Best for:</h6>
          <p className="text-zinc-300 text-base pl-2">
            {activeTabData.bestFor}
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group">
            <span>
              Buy 60s Edit for{" "}
              {formatCurrency(activeTabData.options["60s"].price ?? 0, {
                currency: "INR",
              })}
            </span>
            <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
          </button>

          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 lg:py-3 active:scale-98 group">
            <span>
              Buy 90s Edit for{" "}
              {formatCurrency(activeTabData.options["90s"].price ?? 0, {
                currency: "INR",
              })}
            </span>
            <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
          </button>
        </div>
      </Tabs.Panel>
    </Tabs.Root>
  );
}

const singleEditTabs = [
  { id: "simple", label: "Simple Edit" },
  { id: "complex", label: "Complex Edit" },
];
