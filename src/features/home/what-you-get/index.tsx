export function WhatYouGet() {
  return (
    <section id="what-you-get" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-4">
            <div className="flex flex-col gap-2 max-w-[60ch]">
              <p className="text-xl lg:text-2xl tracking-wide italic font-display">
                What You Get
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Every edit includes the things that{" "}
                <span className="font-display font-medium italic tracking-wide">
                  actually matter.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 gap-6">
            <div className="border-2 border-dashed border-foreground/10 rounded-[18px] overflow-hidden p-0.5 lg:col-[1/2] lg:row-[1/3]">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-[16px] h-full">
                <span className="font-display text-2xl font-light text-brand italic">
                  01
                </span>
                <h6 className="text-lg font-bold mt-auto">
                  Professional editing (not templates)
                </h6>
              </div>
            </div>
            <div className="border-2 border-dashed border-foreground/10 rounded-[18px] overflow-hidden p-0.5 lg:col-[1/2] lg:row-[3/5]">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-[16px]">
                <span className="font-display text-2xl font-light text-brand italic">
                  02
                </span>
                <h6 className="text-lg font-bold">
                  Revisions until it's right
                </h6>
              </div>
            </div>
            <div className="border-2 border-dashed border-foreground/10 rounded-[18px] overflow-hidden p-0.5 lg:col-[2/3] lg:row-[2/4]">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-[16px] h-full">
                <span className="font-display text-2xl font-light text-brand italic">
                  03
                </span>
                <h6 className="text-lg font-bold mt-auto">
                  Files in whatever format you need
                </h6>
              </div>
            </div>
            <div className="border-2 border-dashed border-foreground/10 rounded-[18px] overflow-hidden p-0.5 lg:col-[3/4] lg:row-[1/3]">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-[16px] h-full">
                <span className="font-display text-2xl font-light text-brand italic">
                  04
                </span>
                <h6 className="text-lg font-bold mt-auto">
                  Full rights to use it however you want
                </h6>
              </div>
            </div>
            <div className="border-2 border-dashed border-foreground/10 rounded-[18px] overflow-hidden p-0.5 lg:col-[3/4] lg:row-[3/5]">
              <div className="flex flex-col gap-2 p-4 bg-white rounded-[16px]">
                <span className="font-display text-2xl font-light text-brand italic">
                  05
                </span>
                <h6 className="text-lg font-bold">48-72 hour turnaround</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const whatYouGetItems = [
  {
    title: "Professional editing (not templates)",
  },
  {
    title: "Revisions until it's right",
  },
  {
    title: "Files in whatever format you need",
  },
  {
    title: "Full rights to use it however you want",
  },
  {
    title: "48-72 hour turnaround",
  },
];
