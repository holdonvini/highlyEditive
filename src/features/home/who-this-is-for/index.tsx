import { cn } from "@/lib/classes";
import {
  ArrowDownRightIcon,
  ArrowRightBottomIcon,
  AuditionIcon,
  DaVinciResolveIcon,
  FinalCutProIcon,
  PremiereProIcon,
} from "@/core/icons";
import { Logo } from "@/core/components/Logo";

const WhoThisIsForItems = [
  {
    title: "Business Owners",
    description:
      "Product demos, customer stories, company updates. You need videos without becoming an editor.",
    shading: "via-brand-light/10",
  },
  {
    title: "Consultants & Coaches",
    description:
      "Client results, insights, educational content. Your expertise is valuable. Your time editing isn't.",
    shading: "via-brand-light/10",
  },
  {
    title: "Founders & Entrepreneurs",
    description:
      "Progress updates, behind-the-scenes, launches. Building matters. Editing timelines don't.",
    shading: "via-orange-50/10",
  },
  {
    title: "Marketing Teams",
    description:
      "Social content, campaigns, ad variations. Strategy is your job. Editing capacity shouldn't limit output.",
    shading: "via-blue-50/10",
  },
  {
    title: "Course Creators",
    description:
      "Lessons, modules, explanations. Teaching is the skill. Production is different work.",
    shading: "via-blue-50/10",
  },
  {
    title: "Content Creators",
    description:
      "Consistent posting requires consistent output. Editing is what slows you down. We remove it.",
    shading: "via-blue-50/10",
  },
];

export function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      className="relative min-h-[70vh] lg:min-h-215"
    >
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-4">
            <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center">
              <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
                This Is For
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
                If You Make Content, This Is For
                <span className="font-serif font-medium italic ml-1.25">
                  You.
                </span>
              </h2>
            </div>

            {/* <p className="max-w-[20ch] text-xl font-medium mt-4 lg:mt-0 text-zinc-700">
              You've got footage. You need it edited. You don't want to do it
              yourself.
            </p> */}
          </div>

          {/* <div className="absolute inset-0 bg-[radial-gradient(var(--foreground)_0.3px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_30%_30%_at_50%_30%,#000_2%,transparent_100%)] -z-1"></div> */}
        </div>

        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0 mt-8">
          <div className="w-full grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WhoThisIsForItems.map((item, index) => (
              <div
                className="z-1 relative rounded-[20px] border border-foreground/10 p-1 min-h-42.5"
                key={index}
              >
                <div className="relative z-10 flex w-full flex-col overflow-hidden rounded-2xl border border-transparent bg-card/20 px-6 py-5 shadow-2xl shadow-brand/15 ring-1 ring-foreground/10 h-full backdrop-blur-sm">
                  <div
                    // className={cn(
                    //   "bg-linear-to-b border-foreground/10 relative -m-8 flex flex-col justify-center border-x from-transparent to-transparent p-8 h-1/4 min-h-12.5",
                    //   item.shading,
                    // )}
                  >
                    {/* <div className="absolute -inset-x-6 inset-y-0 bg-[repeating-linear-gradient(-45deg,var(--foreground),var(--foreground)_1px,transparent_1px,transparent_6px)] mix-blend-overlay mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" /> */}
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="relative rounded-lg border border-foreground/15 p-0.5 w-fit">
                      <div className="size-7 lg:size-8 bg-linear-to-b from-brand to-brand-light rounded-md flex items-center justify-center text-white text-sm lg:text-base font-medium">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium leading-tight tracking-wide text-zinc-100">
                      {item.title}
                    </h3>
                    <p className="text-zinc-300 text-sm lg:text-[15px] font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="relative flex flex-col gap-2 mx-auto max-w-[95ch] items-center mt-8 lg:mt-14">
            <div className="relative text-center text-[22px] sm:text-2xl flex items-center text-zinc-300">
              <span>If you value</span>
              <ArrowDownRightIcon className="size-6 absolute -right-6 -bottom-1.5" />
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px -translate-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div className="border border-foreground/5 py-5 px-6 text-center">
                <p className="text-[22px] sm:text-2xl md:text-3xl lg:text-4xl font-serif italic tracking-wider font-medium">
                  Speed + Clarity + Clean Output
                </p>
              </div>
            </div>
            <div className="text-center text-[22px] sm:text-2xl flex items-center text-zinc-300 relative">
              <span>You’re in the right place.</span>
              <ArrowRightBottomIcon className="size-6 absolute -left-7 -top-1" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
