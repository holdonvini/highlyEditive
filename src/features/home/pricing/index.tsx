import { NewPricingUI } from "./new-pricing-ui";

export function Pricing() {
  return (
    <section id="pricing" className="full-bleed relative overflow-x-hidden">
      <div className="relative pt-16 md:pt-24">
        <div className="text-white @container grid grid-cols-[auto_minmax(0,1fr)_auto] lg:grid-cols-[minmax(0,1fr)_min(var(--max-page-width),100%)_minmax(0,1fr)] border-t border-foreground/10">
          <div aria-hidden className="p-1">
            <div className="h-full w-2 lg:w-12 xl:w-full"></div>
          </div>
          <div className="col-[2/3] grid grid-cols-1 lg:grid-cols-3">
            <div className="border-l border-foreground/10 relative">
              <div className="absolute size-2 bg-foreground rounded-[2px] -left-[4px] -bottom-[4px] max-xl:hidden"></div>
              <div className="absolute size-2 bg-foreground rounded-[2px] -right-[4px] -bottom-[4px] max-xl:hidden"></div>
            </div>
            <div className="lg:col-[2/3] border-x border-foreground/10 py-7 lg:py-14 px-6 grid place-items-center">
              <div className="flex flex-col gap-2 text-center max-w-[50ch] mx-auto">
                <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
                  Pricing
                </p>
                <h2 className="text-4xl font-bold leading-tight">
                  Transparent pricing.{" "}
                  <span className="font-serif font-medium italic tracking-wide">
                    Pick what fits.
                  </span>
                </h2>
              </div>
            </div>
            <div className="border-r border-foreground/10 relative">
              <div className="absolute size-2 bg-foreground rounded-[2px] -left-[4px] -bottom-[4px] max-xl:hidden"></div>
              <div className="absolute size-2 bg-foreground rounded-[2px] -right-[4px] -bottom-[4px] max-xl:hidden"></div>
            </div>
          </div>
          <div aria-hidden className="p-1">
            <div className="h-full w-2 lg:w-12 xl:w-full"></div>
          </div>
        </div>
        <NewPricingUI />
      </div>
    </section>
  );
}
