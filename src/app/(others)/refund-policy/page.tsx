import { ArrowRight } from "@/core/icons";

export default function RefundPolicyPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              If Things Go Wrong
            </h1>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* Before Start */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Before Start
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                A full refund is available if cancellation occurs before editing
                begins, minus processing fees.
              </p>
            </div>

            {/* During Work */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                During Work
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                No refunds once work has started, with an exception for a 50%
                automatic refund if the service provider misses a deadline for
                their reasons. This does not apply to delays caused by the
                client.
              </p>
            </div>

            {/* After Delivery */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                After Delivery
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                No refunds are available after delivery, but revisions are
                offered instead, with options to be contacted for.
              </p>
            </div>

            {/* Monthly Packages */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Monthly Packages
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Cancellation requires 15 days' notice. Refunds for unused videos
                are at a per-video rate, or videos can be kept available for 90
                days.
              </p>
            </div>

            {/* Rush Guarantee */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Rush Guarantee
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                24-hour delivery for the ₹6,499 tier. If this deadline is
                missed, a 50% automatic refund is issued. This guarantee starts
                when payment and the brief are received.
              </p>
            </div>

            {/* Processing */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Processing
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Processing takes 5-7 business days, returns to the original
                payment method, and a confirmation is emailed.
              </p>
            </div>

            {/* How to Request */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                How to Request
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Email highlyeditive@gmail.com with an order reference, reason,
                and preferred resolution, with a response expected within 24
                hours.
              </p>
            </div>

            {/* Disputes */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Disputes
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Escalate disputes to highlyeditive@gmail.com for management
                review, with a response within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
