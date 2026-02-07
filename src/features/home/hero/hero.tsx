import Image from "next/image";

import CloudsImage from "@/assets/images/clouds.png";
import { ArrowRight } from "@/core/icons";
import Link from "next/link";
import { Aurora } from "@/core/components/bg-aurora";
import { CURRENCY } from "@/lib/constants";
import { formatCurrency } from "@/lib/currency";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[70vh] lg:min-h-[860px] grid place-items-center full-bleed"
    >
      {/* <div className="mask-b-from-55% absolute inset-0 h-fit md:max-h-96 lg:max-h-128">
        <div className="aspect-video md:aspect-square">
          <Image
            alt="clouds"
            className="md:-translate-y-1/12 absolute inset-0 w-full"
            src={CloudsImage.src}
            width={5000}
            height={5000}
          />
        </div>
      </div> */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#561c24", "#6d4a3d", "#561c24"]}
          blend={0.7}
          amplitude={0.5}
          speed={0.5}
        />
      </div>
      <div className="pt-32 lg:pt-44 relative z-10 w-full">
        <div className="relaive z-10 px-6 lg:px-12 xl:px-0">
          <div className="text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-foreground max-w-5xl mx-auto text-balance text-[42px] md:text-5xl font-semibold lg:text-6xl xl:text-[90px] leading-[1.2]">
                <span>
                  You Create. We Edit. Done.{" "}
                  {/* <span className="font-serif italic font-medium text-brand-light">
                    ready to post
                  </span>{" "}
                  edits. */}
                </span>
              </h1>
              <div className="flex items-center gap-2 max-w-5xl mx-auto mt-2">
                <span className="text-foreground/80 text-balance text-xl font-medium">
                  Record your content, send it over, get back a polished video
                  ready to post.
                </span>
              </div>
            </div>
            <div className="mx-auto mb-20 mt-8 max-w-lg">
              <p className="text-foreground/80 mb-6 text-balance text-base lg:text-lg xl:text-xl font-medium italic">
                {/* First video:{" "}
                {formatCurrency(60, { currency: CURRENCY, locale: "en-US" })} · */}
                <span className="inline-block px-3 py-1 bg-foreground/10 rounded-full text-sm font-semibold tracking-wider">
                  48-HOUR DELIVERY
                </span>
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {/* <Link
                  href="#pricing"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 shadow-md border-[0.5px] border-white/25 text-shadow-sm bg-white text-zinc-900 hover:bg-zinc-50 px-4 py-2 active:scale-98 ring-1 ring-foreground/10"
                >
                  <span>See Pricing</span>
                </Link> */}
                <div className="bg-gradient-to-r from-brand/20 via-brand/50 to-brand/20 w-fit rounded-full p-0.5">
                  <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 shadow-lg shadow-brand/20 border-[0.5px] border-foreground/25 text-shadow-sm bg-gradient-to-b from-brand to-brand-light text-white hover:from-brand-light hover:to-brand px-8 py-3 active:scale-98 group">
                    <span>GET STARTED</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
