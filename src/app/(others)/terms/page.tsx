import { ArrowRight } from "@/core/icons";

export default function TermsPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              Terms & Conditions
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 text-center font-medium">
              By purchasing from Highly Editive, you agree to the following.
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* 1. Services */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                1. Services
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    <strong>Standard editing:</strong> Priced at ₹3,899.
                    Includes cuts, captions, music, and color correction.
                    Delivery time is 48 hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    <strong>Rush editing:</strong> Priced at ₹6,499. Includes
                    everything from standard editing plus animations. Delivery
                    time is 24 hours.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    <strong>Monthly:</strong> Custom pricing per agreement.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    <strong>Enterprise:</strong> Custom terms per contract.
                  </span>
                </li>
              </ul>
            </div>

            {/* 2. Timing */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                2. Timing
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Work starts when payment and footage are received.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Delays caused by late responses from the client will adjust
                    the delivery timeline.
                  </span>
                </li>
              </ul>
            </div>

            {/* 3. Revisions */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                3. Revisions
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    One revision is included for adjustments within the original
                    concept.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Providing different footage or requesting a new direction is
                    considered a new video.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Clients should contact for additional revisions beyond the
                    included one.
                  </span>
                </li>
              </ul>
            </div>

            {/* 4. Payment */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                4. Payment
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Payment is required before work starts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>For single videos, payment is due at submission.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    For monthly services, payment is upfront, then on the 1st of
                    each month.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>GST will be added as required.</span>
                </li>
              </ul>
            </div>

            {/* 5. Refunds */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                5. Refunds
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    A full refund is provided if work has not started, minus
                    processing fees.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    A 50% automatic refund is issued if the service provider
                    misses the deadline.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    No refunds are given after delivery, but revision is
                    available.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Monthly packages allow for a refund of unused videos at the
                    per-video rate.
                  </span>
                </li>
              </ul>
            </div>

            {/* 6. Ownership */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                6. Ownership
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>The client's provided footage remains theirs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>The finished video belongs to the client.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Music sourced by the service provider is licensed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    The client confirms they have rights to the provided
                    footage.
                  </span>
                </li>
              </ul>
            </div>

            {/* 7. Responsibilities */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                7. Responsibilities
              </h2>
              <p className="text-base lg:text-lg text-foreground/80 font-semibold">
                Client's responsibilities:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Provide usable footage and a clear brief.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Respond within 24 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Review within 72 hours.</span>
                </li>
              </ul>
              <p className="text-base lg:text-lg text-foreground/80 font-semibold mt-4">
                Service provider's responsibilities:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Deliver on time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Keep footage confidential.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Process revisions quickly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Use licensed assets.</span>
                </li>
              </ul>
            </div>

            {/* 8. Not Responsible For */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                8. Not Responsible For
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Video performance after posting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Creative strategy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Platform changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Your technical issues.</span>
                </li>
              </ul>
            </div>

            {/* 9. Cancellation */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                9. Cancellation
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Single videos: Before start for refund.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Monthly: 15 days notice. Unused videos available 90 days.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Enterprise: Per contract.</span>
                </li>
              </ul>
            </div>

            {/* 10. Privacy */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                10. Privacy
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Footage confidential. Not shared.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>May request portfolio use with your permission.</span>
                </li>
              </ul>
            </div>

            {/* 11. Disputes */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                11. Disputes
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Email first. Then mediation if needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Jurisdiction: [Your City], India.</span>
                </li>
              </ul>
            </div>

            {/* 12. Updates */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                12. Updates
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Terms may change. Posted here with date. Continued use means
                acceptance.
              </p>
            </div>

            {/* 13. Questions */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                13. Questions
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                highlyeditive@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
