import { Tabs } from "@base-ui/react/tabs";
import { useState } from "react";
import NumberFlow from "@number-flow/react";

import { getPricingOptionById, PRICING } from "@/core/config/pricing.config";
import { cn } from "@/lib/classes";
import { ArrowRight } from "@/core/icons";
import { MonthlySimplePricing } from "./monthly-simple-pricing";
import { MonthlyComplexPricing } from "./monthly-complex-pricing";

type MonthlyEditPricingType = keyof typeof PRICING.monthly;

const tabs = [
  { id: "simple", label: "Simple" },
  { id: "complex", label: "Complex" },
] satisfies { id: MonthlyEditPricingType; label: string }[];

interface MonthlyEditPricingProps {
  selectedPricingOption: string | null;
  onSelectPricingOption: (optionId: string) => void;
}

export function MonthlyEditPricing({
  selectedPricingOption,
  onSelectPricingOption,
}: MonthlyEditPricingProps) {
  const [activeTab, setActiveTab] = useState<MonthlyEditPricingType>("simple");

  const selectedPricingOptionData = getPricingOptionById(selectedPricingOption);

  return (
    <div className="text-white mt-8">
      <Tabs.Root
        className="flex flex-col"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="border-b border-zinc-800 flex justify-center">
          <Tabs.List
            className={cn(
              "relative z-0 flex w-fit items-center justify-center gap-x-1 text-sm font-medium p-1 self-center data-[orientation=horizontal]:py-1 data-[orientation=horizontal]:pb-2.5",
            )}
            data-slot="tabs-list"
          >
            {tabs.map((tab) => (
              <Tabs.Tab
                key={tab.id}
                value={tab.id}
                data-slot="tabs-tab"
                className={cn(
                  "flex h-9 shrink-0 grow cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-[calc(--spacing(2.5)-1px)] font-medium text-base outline-none transition-[color,background-color,box-shadow] hover:text-zinc-200 data-active:bg-brand-light/10 data-active:text-brand-light",
                )}
              >
                {tab.label}
              </Tabs.Tab>
            ))}
            <Tabs.Indicator
              className={cn(
                "-translate-y-(--active-tab-bottom) absolute bottom-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) transition-[width,translate] duration-200 ease-in-out",
                "z-10 bg-brand-light data-[orientation=horizontal]:h-0.5 data-[orientation=horizontal]:translate-y-px",
              )}
              data-slot="tab-indicator"
            />
          </Tabs.List>
        </div>
        <Tabs.Panel value="simple">
          <MonthlySimplePricing
            selectedPricingOption={selectedPricingOption}
            onSelectPricingOption={onSelectPricingOption}
          />
        </Tabs.Panel>
        <Tabs.Panel value="complex">
          <MonthlyComplexPricing
            selectedPricingOption={selectedPricingOption}
            onSelectPricingOption={onSelectPricingOption}
          />
        </Tabs.Panel>
        <Tabs.Panel value="bundles"></Tabs.Panel>
      </Tabs.Root>

      <div className="border-t border-zinc-800 p-4 lg:p-6 grid place-items-center">
        {selectedPricingOptionData ? (
          <div className="flex flex-col gap-5 max-w-xs w-full p-4">
            <div className="flex items-center justify-between ">
              <p className="text-base font-medium">Total amount</p>
              <p className="text-2xl lg:text-4xl font-medium text-brand-light">
                <NumberFlow
                  value={selectedPricingOptionData.price ?? 0}
                  format={{
                    style: "currency",
                    currency: "INR",
                    trailingZeroDisplay: "stripIfInteger",
                  }}
                />
              </p>
            </div>

            <div className="w-full flex justify-center *:w-full">
              <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-linear-to-b from-brand to-brand-light text-white hover:bg-brand-light px-4 py-2 active:scale-98 group">
                <span>Continue to Payment</span>
                <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 max-w-xs w-full p-4">
            <p className="text-xl text-center font-serif italic font-light tracking-wide">
              Please select a pricing option
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
