import Link from "next/link";

import { ArrowRight } from "@/core/icons";
import { Logo } from "components/Logo";

export function Footer() {
  return (
    <div className="relative bg-background">
      {/* <div className="bg-linear-to-b from-background to-background relative from-50% to-50% pt-12 md:pt-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="ring-foreground/6.5 bg-card text-foreground rounded-xl ring-1 relative overflow-hidden p-12 shadow-lg md:px-32 md:py-20">
            <div className="relative text-center">
              <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                Stop sitting on footage.{" "}
                <span className="font-serif font-medium italic tracking-wide">
                  Start posting.
                </span>
              </h2>
              <p className="text-balance text-lg text-zinc-200 mt-6">
                Order one video. See if we're any good.
              </p>
              <div className="flex flex-wrap items-center gap-4 justify-center mt-6">
                <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 active:scale-98 ring-1 ring-foreground/10 group">
                  <span>Go Monthly</span>
                  <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
                </button>

                <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-linear-to-b from-brand to-brand-light text-white hover:bg-zinc-50 px-4 py-2 active:scale-98 ring-1 ring-foreground/10 group">
                  <span>Try ₹2,200 Edit</span>
                  <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
                </button>

                <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 active:scale-98 ring-1 ring-foreground/10 group">
                  <span>Custom Plan</span>
                  <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <footer className="relative pt-12 sm:pt-20 pb-[clamp(3rem,8vw,12rem)] overflow-hidden bg-gradient-to-t from-[#561c24] to-[#0b0b0b]">
        <div className="flex flex-col gap-5 mb-30 lg:mb-[clamp(3rem,8vw,12rem)]">
          <div className="grid grid-cols-[1fr_min(var(--max-page-width),100%)_1fr] *:col-2 h-(--header-height) px-6 lg:px-12">
            <div className="relative">
              <div className="flex flex-col">
                <Link
                  href="/"
                  aria-label="go home"
                  className="mx-auto block size-fit"
                >
                  <Logo className="size-18" />
                </Link>

                <div className="text-sm text-center mx-auto">
                  <a
                    href="mailto:highlyeditive@gmail.com"
                    className="text-foreground/70 hover:text-foreground block duration-150 px-4 py-2 mx-auto"
                  >
                    highlyeditive@gmail.com
                  </a>
                </div>
              </div>

              <div className="my-8">
                <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 max-w-3xl mx-auto">
                  {links.map((link, index) => (
                    <span key={index} className="flex items-center">
                      <Link
                        href={link.href}
                        className="text-foreground/70 hover:text-foreground text-sm duration-150"
                      >
                        {link.title}
                      </Link>
                      {index < links.length - 1 && (
                        <span className="text-foreground/40 mx-3">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="h-px bg-size-[6px_1px] bg-repeat-x opacity-25 bg-[linear-gradient(90deg,var(--foreground)_1px,transparent_1px)]"
            ></div>

            <div className="flex flex-wrap justify-center gap-4 py-8">
              <p className="text-sm text-foreground/70 text-center">
                &copy; {new Date().getFullYear()} Highly Editive. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Large cutoff text at bottom */}
        {/* <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[0.65em] overflow-hidden text-[clamp(2rem,10vw,16rem)] leading-none px-4"
        >
          <span className="block whitespace-nowrap text-center font-bold tracking-tighter bg-linear-to-b from-brand to-transparent bg-clip-text text-transparent">
            HIGHLY EDITIVE
          </span>
        </div> */}
      </footer>
    </div>
  );
}

const links = [
  {
    title: "Terms",
    href: "/terms",
  },
  {
    title: "Privacy",
    href: "/privacy-policy",
  },
  {
    title: "Refunds",
    href: "/refund-policy",
  },
  {
    title: "Guidelines",
    href: "/guidelines",
  },
  // {
  //   title: "Script & Brief",
  //   href: "/brief-policy",
  // },
  // {
  //   title: "Edit Policy",
  //   href: "/edit-policy",
  // },
];
