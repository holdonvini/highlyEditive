import { ProblemSolver } from "./problem-solver";
import { Problems } from "./problems";

export function Problem() {
  return (
    <section id="problem" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0 ">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-4">
            <div className="flex flex-col gap-4 max-w-[75ch] mx-auto text-center">
              <p className="text-xl lg:text-2xl tracking-wider italic font-serif text-foreground">
                The Problem
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-foreground">
                The Real Problem Isn't
                <span className="font-serif font-medium italic ml-1.25 text-brand-light">
                  Ideas.
                </span>
              </h2>
              <p className="text-foreground/70 mb-6 text-balance text-base lg:text-lg font-medium">
                You know what to say. You understand your audience. Recording is
                simple.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* <Problems /> */}
            <ProblemSolver />
          </div>
        </div>
      </div>
    </section>
  );
}
