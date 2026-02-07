import { CustomPackagePlan } from "./custom-package-plan";
import { HighVolumenPlan } from "./high-volumen-plan";
import { NeedItNowPlan } from "./need-it-now-plan";
import { TryUsOutPlan } from "./try-us-out-plan";

export function NewPricing() {
  return (
    <section id="pricing" className="full-bleed relative overflow-x-hidden">
      <div className="relative py-16 md:py-24">
        <div className="relative mx-auto h-auto max-w-(--max-page-width) rounded-2xl px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center">
            <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
              Pricing
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pick What Works
              <span className="font-serif font-medium italic ml-[5px]">
                For You
              </span>
            </h2>
          </div>
        </div>

        <div className="text-white @container grid grid-cols-[auto_minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_min(calc(var(--max-page-width)+400px),100%)_minmax(0,1fr)] mt-10 px-6 lg:px-12 2xl:px-0">
          <div className="col-[2/3] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 place-items-start">
            <TryUsOutPlan />
            <NeedItNowPlan />
            <CustomPackagePlan />
            <HighVolumenPlan />
          </div>
        </div>
      </div>
    </section>
  );
}
