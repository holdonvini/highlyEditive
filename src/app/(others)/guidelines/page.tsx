import { ArrowRight } from "@/core/icons";

export default function GuidelinesPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              Guidelines
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 text-center font-medium">
              The Rules Are Simple
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* One video at a time for standard packages */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                One video at a time for standard packages
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Each video gets full attention. Submit next after approval.
                Quality over speed.
              </p>
            </div>

            {/* Revisions refine the concept */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Revisions refine the concept
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Music changes, pacing adjustments, text tweaks included.
                Different footage or new direction is a fresh video.
              </p>
            </div>

            {/* Rush means priority placement */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Rush means priority placement
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Your video jumps the queue.
              </p>
            </div>

            {/* Standard pricing covers 90 seconds */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Standard pricing covers 90 seconds
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Longer videos? Contact for custom quote within hours.
              </p>
            </div>

            {/* Monthly packages stay flexible */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Monthly packages stay flexible
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                No lock-in. Cancel with 15 days notice.
              </p>
            </div>

            {/* Unused videos never disappear */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Unused videos never disappear
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                No expiration. Use them whenever ready.
              </p>
            </div>

            {/* What counts as a revision */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What counts as a revision
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Changes within the original brief. Examples: different music,
                faster pacing, color adjustments, text edits.
              </p>
            </div>

            {/* What counts as a new video */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What counts as a new video
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Different footage, new concept, major direction change. These
                require a fresh submission.
              </p>
            </div>

            {/* File requirements */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                File requirements
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Raw footage via Drive or Dropbox. Sharing enabled. Clear file
                names help.
              </p>
            </div>

            {/* Brief requirements */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Brief requirements
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Platform, purpose, style preference, specific requirements.
                Reference video optional but helpful.
              </p>
            </div>

            {/* Response times */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Response times
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Respond to questions within 24 hours to maintain turnaround.
                Delays from your end adjust delivery dates.
              </p>
            </div>

            {/* Review period */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Review period
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Review delivered videos within 72 hours. Request revision or
                approve.
              </p>
            </div>

            {/* Payment timing */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Payment timing
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Payment required before work starts. No exceptions. Single
                videos at submission. Monthly upfront then 1st of each month.
              </p>
            </div>

            {/* Footage storage */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Footage storage
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Kept for 30 days after delivery then deleted. Longer storage can
                be arranged.
              </p>
            </div>

            {/* Finished video access */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Finished video access
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Available for 90 days after delivery for re-download.
              </p>
            </div>

            {/* Cancellation notice */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Cancellation notice
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Monthly packages require 15 days written notice. Unused videos
                available 90 days after cancellation.
              </p>
            </div>

            {/* Add-on requests */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Add-on requests
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Contact team for thumbnails, translations, source files, rush
                processing. Response within hours with details and pricing.
              </p>
            </div>

            {/* Enterprise workflow */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Enterprise workflow
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Custom terms agreed in contract. Multiple videos processed
                simultaneously. Dedicated team assigned.
              </p>
            </div>

            {/* Questions */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Questions
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
