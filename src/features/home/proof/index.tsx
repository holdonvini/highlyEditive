import { ProofShowcase } from "./proof-showcase";

export function Proof() {
  return (
    <section id="proof" className="relative full-bleed isolate">
      <div className="h-fit py-16 md:max-h-96 lg:max-h-128 relative mx-auto max-w-(--max-page-width) z-20 bg-background">
        <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center text-foreground px-6 lg:px-12 xl:px-0">
          {/* <p className="text-xl lg:text-2xl tracking-wide italic font-serif">
            Collections
          </p> */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Our Work
          </h2>
        </div>
      </div>

      <ProofShowcase />
    </section>
  );
}
