"use client";

import { ChevronDown } from "@/core/icons";
import { useState } from "react";

export function Faqs() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleTriggerClick = (value: string) => {
    setOpenItem(openItem === value ? null : value);
  };

  return (
    <section id="faqs" className="relative">
      <div className="relative py-16 md:py-24">
        <div className="flex flex-col gap-7 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-2 max-w-[90ch] mx-auto text-center">
            <p className="text-xl lg:text-2xl tracking-wide italic font-serif text-foreground">
              FAQs
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Clear Answers.
              <span className="font-serif font-medium italic tracking-wide ml-[5px] text-brand-light">
                Zero Confusion.
              </span>
            </h2>
          </div>

          <div className="mx-auto mt-12 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {faqItems.map((faq) => {
                const isOpen = openItem === faq.id;
                return (
                  <div 
                    key={faq.id}
                    className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  >
                    <div className="flex">
                      <button 
                        className="flex flex-1 items-center justify-between gap-2 p-4 text-left text-base font-medium cursor-pointer text-foreground transition-all duration-300 w-full text-left"
                        onClick={() => handleTriggerClick(faq.id)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <span className="text-white text-sm font-bold">Q</span>
                          </div>
                          <span className="text-sm">{faq.question}</span>
                        </div>
                        <div className="shrink-0">
                          <span className={`text-foreground/70 text-xl transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] ${isOpen ? 'rotate-45' : ''}`}>{isOpen ? '×' : '+'}</span>
                        </div>
                      </button>
                    </div>
                    <div 
                      className={`text-sm text-foreground/80 overflow-hidden transition-[height,opacity] duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] ${
                        isOpen ? 'opacity-100' : 'opacity-0 h-0'
                      }`}
                    >
                      <div className="p-4 pt-0">{faq.answer()}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    id: "item-1",
    question: "How does first video work?",
    answer: () => (
      <div className="text-[15px]">
        <p>
          {/* Fill form, pay ₹3,899, upload footage, brief us. Get video in 48
          hours. */}
          Fill form, upload footage, brief us. Get video in 48 hours.
        </p>
      </div>
    ),
  },
  // {
  //   id: "item-2",
  //   question: "Need subscription?",
  //   answer: () => (
  //     <div className="text-[15px]">
  //       <p>No. Pay per video or get monthly plan.</p>
  //     </div>
  //   ),
  // },
  // {
  //   id: "item-3",
  //   question: "Need it faster?",
  //   answer: () => (
  //     <div className="text-[15px]">
  //       <p>WhatsApp for ₹6,499 with 24-hour delivery.</p>
  //     </div>
  //   ),
  // },
  {
    id: "item-4",
    question: "What's included?",
    answer: () => (
      <div className="text-[15px]">
        <p>Cuts, captions, music, color. One revision.</p>
      </div>
    ),
  },
  // {
  //   id: "item-5",
  //   question: "What about animations?",
  //   answer: () => (
  //     <div className="flex items-center gap-2">
  //       <p className="text-[15px]">
  //         Included in ₹6,499 rush. Contact for other packages.
  //       </p>
  //     </div>
  //   ),
  // },
  {
    id: "item-6",
    question: "How do revisions work?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">One included. Specify adjustments needed.</p>
      </div>
    ),
  },
  {
    id: "item-7",
    question: "Need more changes?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Contact for options.</p>
      </div>
    ),
  },
  {
    id: "item-8",
    question: "Can I submit multiple?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">
          One at a time for standard and monthly. Enterprise handles multiple.
        </p>
      </div>
    ),
  },
  {
    id: "item-9",
    question: "Video length limit?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">90 seconds standard. Contact for longer.</p>
      </div>
    ),
  },
  {
    id: "item-10",
    question: "What platforms?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">All platforms supported.</p>
      </div>
    ),
  },
  {
    id: "item-11",
    question: "Monthly payment?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">
          First month upfront. Then automatic on 1st.
        </p>
      </div>
    ),
  },
  {
    id: "item-12",
    question: "Can I cancel monthly?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Yes. 15 days notice.</p>
      </div>
    ),
  },
  {
    id: "item-13",
    question: "Unused videos?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Stay in account indefinitely.</p>
      </div>
    ),
  },
  {
    id: "item-14",
    question: "Need calls?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Optional. Not required.</p>
      </div>
    ),
  },
  {
    id: "item-15",
    question: "Music copyright?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Properly licensed.</p>
      </div>
    ),
  },
  {
    id: "item-16",
    question: "Add-on costs?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">
          Contact for specifics. Response within hours.
        </p>
      </div>
    ),
  },
  {
    id: "item-17",
    question: "Response time?",
    answer: () => (
      <div className="flex items-center gap-2">
        <p className="text-[15px]">Few hours during business hours.</p>
      </div>
    ),
  },
];
