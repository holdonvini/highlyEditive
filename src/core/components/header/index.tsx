import Link from "next/link";

import { Logo } from "components/Logo";

import { HeaderWrapper } from "./header-wrapper";
import { BOOK_A_CALL_URL } from "@/lib/constants";

export function Header() {
  return (
    <HeaderWrapper>
      <div className="grid grid-cols-[1fr_min(var(--max-page-width),100%)_1fr] *:col-2 px-6 lg:px-12 pt-4">
        <div className="relative h-(--header-height) flex items-center justify-between max-w-[760px] mx-auto w-full rounded-full bg-card/30 border border-foreground/10 px-8 backdrop-blur-xl shadow-lg shadow-black/20">
          <Link href="/">
            <Logo className="size-18" />
          </Link>

          <nav className="relative hidden lg:block">
            <ul className="flex items-center gap-2 [&>li]:relative [&>li]:[&>a]:text-foreground [&>li]:[&>a]:rounded-lg [&>li]:[&>a]:px-2 [&>li]:[&>a]:py-1 [&>li]:[&>a]:hover:bg-foreground/10 [&>li]:text-sm [&>li]:[&>a]:block [&>li]:[&>a]:hover:text-brand-light">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#how-it-works">How It Works</Link>
              </li>
              <li>
                <Link href="#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="#faqs">FAQs</Link>
              </li>
            </ul>
          </nav>
          <div className="relative">
            <Link
              href={BOOK_A_CALL_URL}
              target="_blank"
              className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 shadow-md border-[0.5px] border-foreground/25 text-shadow-sm bg-gradient-to-b from-brand to-brand-light text-white hover:from-brand-light hover:to-brand px-4 py-2 h-9 active:scale-98 group"
            >
              <span>Book a Call</span>
              {/* <ArrowRight className="size-5 -translate-x-[2px] group-hover:translate-x-[2px] transition-transform duration-150 ease-[cubic-bezier(.25,.46,.45,.94)]" /> */}
            </Link>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
