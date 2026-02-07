import { ArrowRight } from "@/core/icons";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              How We Handle Your Data
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 text-center font-medium">
              Last updated: 16 January, 2026
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* What We Collect */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What We Collect
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Contact info from submissions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Video footage for editing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Payment details via Razorpay.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Website analytics via Google Analytics.</span>
                </li>
              </ul>
            </div>

            {/* Why */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Why
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>To edit videos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Communicate about projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Process payments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Improve service.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Send notifications.</span>
                </li>
              </ul>
            </div>

            {/* Who Sees It */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Who Sees It
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Only us.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>No selling or sharing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Footage accessed only by assigned editors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Payment through Razorpay.</span>
                </li>
              </ul>
            </div>

            {/* Storage */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Storage
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    Footage: 30 days after delivery then deleted unless
                    arranged.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Finished videos: 90 days.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Contact info: While using service.</span>
                </li>
              </ul>
            </div>

            {/* Your Control */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Your Control
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Request data copy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Request deletion.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Opt out of marketing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Download videos during storage period.</span>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Security
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Encrypted transfers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Secure storage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Limited access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Regular checks.</span>
                </li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Cookies
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Basic functionality cookies. Google Analytics for usage. Disable
                in browser settings.
              </p>
            </div>

            {/* Third Parties */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Third Parties
              </h2>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Razorpay for payments.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Google Drive/Dropbox for transfers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>Google Analytics for stats.</span>
                </li>
              </ul>
            </div>

            {/* Updates */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Updates
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Changes posted with date. Continued use means acceptance.
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
