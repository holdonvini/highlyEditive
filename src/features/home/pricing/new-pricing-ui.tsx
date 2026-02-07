import { NewMonthlyComplexPricing } from "./new-monthly-complex-pricing";
import { NewMonthlySimplePricing } from "./new-monthly-simple-pricing";
import { NewSingleEditPricing } from "./new-single-edit-pricing";

export function NewPricingUI() {
  return (
    <div className="relative text-white border-t border-foreground/10">
      <div className="relative">
        <div className="text-white @container grid grid-cols-[auto_minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_min(var(--max-page-width),100%)_minmax(0,1fr)]">
          <div aria-hidden className="p-1">
            <div className="h-full w-2 lg:w-12 xl:w-full"></div>
          </div>
          <div className="col-[2/3] grid grid-cols-1 lg:grid-cols-3">
            <div className="border-l max-lg:border-r border-b border-foreground/10 relative">
              <NewSingleEditPricing />
            </div>
            <div className="border-x border-b border-foreground/10">
              <NewMonthlySimplePricing />
            </div>
            <div className="border-r max-lg:border-l border-b border-foreground/10 ">
              <NewMonthlyComplexPricing />
            </div>
          </div>
          <div aria-hidden className="p-1">
            <div className="h-full w-2 lg:w-12 xl:w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
