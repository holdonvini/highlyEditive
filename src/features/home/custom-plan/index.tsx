import { ArrowRight } from "@/core/icons";
import { BOOK_A_CALL_URL } from "@/lib/constants";
import Link from "next/link";

export function CustomPlan() {
  return (
    <section id="custom-plan" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="mx-auto mt-12 max-w-full w-full">
            <div className="mx-auto w-fit bg-card border border-foreground/8.5 px-5 py-2 rounded-t-xl relative z-5 translate-y-px border-b-0">
              <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
                Custom Plan
              </p>
              <div className="absolute -left-4 bottom-0 size-4 bg-card">
                <div className="absolute bg-background inset-0 rounded-br-xl border-b border-r border-foreground/8.5"></div>
              </div>
              <div className="absolute -right-4 bottom-0 size-4 bg-card">
                <div className="absolute bg-background inset-0 rounded-bl-xl border-b border-l border-foreground/8.5"></div>
              </div>
            </div>
            <div className="bg-card text-foreground rounded-xl border border-foreground/10 relative overflow-hidden p-8 md:px-16 shadow-lg z-1">
              <div className="flex flex-col gap-2 max-w-[90ch]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Got unique needs?{" "}
                  <span className="font-serif font-medium italic tracking-wide">
                    We're flexible.
                  </span>
                </h2>
              </div>
              <div className="flex flex-col gap-4 mt-6 lg:mt-10">
                <p className="text-lg text-zinc-200">
                  Our packages cover most needs.
                </p>
                <div className="flex items-center gap-2">
                  <h4 className="text-brand-light font-semibold">
                    But if you have
                  </h4>
                  <div className="flex-1 bg-foreground/10 h-px" />
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {customPlanItems.map((item) => (
                  <li key={item.id} className="flex items-center gap-2">
                    <span className="size-2.5 bg-brand-light rounded-[2px] rotate-45" />
                    <h5 className="text-sm tracking-wide">{item.title}</h5>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col mt-10">
                <p className="text-lg font-medium italic text-center">
                  Tell us what you need — we’ll give you the most efficient plan
                  for it.
                </p>
                <div className="flex items-center gap-2 mt-6 justify-center">
                  <Link
                    target="_blank"
                    href={BOOK_A_CALL_URL}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-linear-to-b from-brand to-brand-light text-white hover:bg-brand-light px-4 py-2 active:scale-98 group"
                  >
                    <span>Book a Call</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const customPlanItems = [
  {
    id: "item-1",
    title: "High-volume editing needs (50+ videos/month)",
  },
  {
    id: "item-2",
    title: "Specific turnaround requirements",
  },
  {
    id: "item-3",
    title: "Unique deliverable formats or specifications",
  },
  {
    id: "item-4",
    title: "Ongoing agency or enterprise requirements",
  },
  {
    id: "item-5",
    title: "White-label editing services",
  },
];
