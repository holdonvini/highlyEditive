import { ArrowRight, ChevronDown } from "@/core/icons";
import { Accordion } from "@base-ui/react/accordion";

export function Faqs() {
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

          <div className="mx-auto mt-12 max-w-2xl w-full">
            <Accordion.Root className="flex flex-col bg-card/20 w-full rounded-2xl border border-foreground/10 px-6 py-2 shadow-lg shadow-black/20 backdrop-blur-sm">
              {faqItems.map((faq) => {
                return (
                  <Accordion.Item
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-foreground/10 last:border-b-0 bg-foreground/5 rounded-lg m-2 transition-all duration-300 hover:bg-foreground/10"
                  >
                    <Accordion.Header className="flex">
                      <Accordion.Trigger className="flex flex-1 items-start justify-between gap-4 py-4 pb-2 text-left text-base font-medium cursor-pointer group text-foreground">
                        {faq.question}
                        <ChevronDown className="size-4 text-foreground/50 group-data-panel-open:rotate-180 transition-transform duration-300" />
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Panel className="text-base lg:text-lg text-foreground/80 h-(--accordion-panel-height) overflow-hidden transition-[height,opacity] ease-out data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0">
                      <div className="py-1.5 px-3 pb-4">{faq.answer()}</div>
                    </Accordion.Panel>
                  </Accordion.Item>
                );
              })}
            </Accordion.Root>
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
