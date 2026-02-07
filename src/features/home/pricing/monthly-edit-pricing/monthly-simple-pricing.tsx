import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { PRICING } from "@/core/config/pricing.config";
import { ArrowRight, CheckmarkBadge } from "@/core/icons";
import { cn } from "@/lib/classes";
import { formatCurrency } from "@/lib/currency";

interface MonthlySimplePricingProps {
  selectedPricingOption: string | null;
  onSelectPricingOption: (optionId: string) => void;
}

export function MonthlySimplePricing({
  selectedPricingOption,
  onSelectPricingOption,
}: MonthlySimplePricingProps) {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
        <div className="col-span-1 p-4 lg:p-6 lg:border-r lg:border-foreground/20 shrink-0 grid place-items-center">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-serif text-foreground">
              {PRICING.monthly.simple.title}
            </h3>

            {PRICING.monthly.simple.description.length > 0 && (
              <div className="flex flex-col gap-3">
                {PRICING.monthly.simple.description.map((description) => (
                  <div key={description} className="flex items-center gap-2">
                    <ArrowRight className="size-5 text-brand-light" />
                    <p className="text-base text-foreground/80">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1 shrink-0">
          <RadioGroupPrimitive
            className="flex flex-col w-full h-full"
            value={selectedPricingOption}
            onValueChange={(value) => onSelectPricingOption(value as string)}
          >
            {PRICING.monthly.simple.options.map((option) => {
              return (
                <label
                  className={cn(
                    "relative flex items-center justify-center gap-2 border-t lg:border-t-0 border-b last:border-b-0 flex-1 border-foreground/20 p-3 py-16 lg:py-8 cursor-pointer overflow-hidden",
                    "has-data-unchecked:hover:bg-foreground/10",
                    // option.featured && "bg-brand-light/20"
                  )}
                  key={option.id}
                >
                  {option.featured && (
                    <div className="absolute left-2 top-2">
                      <p className="text-xs bg-brand-light/10 text-white px-2 py-1 w-fit self-center">
                        ⭐ {option.featuredText}
                      </p>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-auto lg:right-4 lg:translate-x-0 lg:top-4">
                    <RadioPrimitive.Root value={option.id} className="">
                      <RadioPrimitive.Indicator
                        className="block text-brand-light group"
                        keepMounted
                      >
                        <CheckmarkBadge className="group-data-unchecked:hidden group-data-checked:block" />
                        <button className="cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none text-shadow-sm bg-gradient-to-b from-brand to-brand-light text-white hover:from-brand-light hover:to-brand px-4 py-1 active:scale-98 group-data-unchecked:inline-flex group-data-checked:hidden">
                          <span>Select</span>
                        </button>
                      </RadioPrimitive.Indicator>
                    </RadioPrimitive.Root>
                  </div>
                  <div className="flex flex-col gap-2 text-center">
                    {option.label && (
                      <p className="text-base font-medium text-foreground">{option.label}</p>
                    )}
                    <p className="text-xs bg-brand-light/10 text-brand-light px-2 py-1 rounded-md w-fit self-center">
                      {option.meta}
                    </p>
                    <p className="text-2xl font-medium text-foreground">
                      {formatCurrency(option.price ?? 0, { currency: "INR" })}
                    </p>
                  </div>
                </label>
              );
            })}
          </RadioGroupPrimitive>
        </div>
      </div>
    </div>
  );
}
