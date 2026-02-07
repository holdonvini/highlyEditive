"use client";

import { Tabs } from "@base-ui/react/tabs";
import { useState } from "react";

import { PRICING } from "@/core/config/pricing.config";
import { cn } from "@/lib/classes";
import { SingleEditPricing } from "./single-edit-pricing";
import { MonthlyEditPricing } from "./monthly-edit-pricing";
import { BundlesPricing } from "./bundles-pricing";

type PricingType = keyof typeof PRICING;

const tabs = [
  { id: "single", label: "Single" },
  { id: "monthly", label: "Monthly" },
  { id: "bundles", label: "Bundles" },
] satisfies { id: PricingType; label: string }[];

export function PricingUI() {
  const [activeTab, setActiveTab] = useState<PricingType>("single");
  const [selectedPricingOption, setSelectedPricingOption] = useState<
    string | null
  >(null);

  const handleSelectPricingOption = (optionId: string) => {
    setSelectedPricingOption(optionId);
  };

  return (
    <div className="mt-8">
      <Tabs.Root
        className="flex flex-col gap-4"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <Tabs.List
          className={cn(
            "relative z-0 flex w-fit items-center justify-center gap-x-1 text-sm font-medium rounded-lg bg-zinc-800 p-1 self-center border border-zinc-700/30",
          )}
        >
          {tabs.map((tab) => (
            <Tabs.Tab
              key={tab.id}
              className={cn(
                "flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-sm outline-none hover:text-zinc-200 data-active:text-zinc-800 text-zinc-200",
              )}
              value={tab.id}
            >
              {tab.label}
            </Tabs.Tab>
          ))}

          <Tabs.Indicator
            className={cn(
              "-translate-y-(--active-tab-bottom) absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[width,translate] duration-200 ease-in-out",
              "-z-1 rounded-md bg-background shadow-sm/5",
            )}
            data-slot="tab-indicator"
          />
        </Tabs.List>

        <Tabs.Panel value="single">
          <SingleEditPricing
            selectedPricingOption={selectedPricingOption}
            onSelectPricingOption={handleSelectPricingOption}
          />
        </Tabs.Panel>
        <Tabs.Panel value="monthly">
          <MonthlyEditPricing
            selectedPricingOption={selectedPricingOption}
            onSelectPricingOption={handleSelectPricingOption}
          />
        </Tabs.Panel>
        <Tabs.Panel value="bundles">
          <BundlesPricing />
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  );
}
