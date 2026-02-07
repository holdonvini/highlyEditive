import { ArrowRight, CheckmarkDoneIcon } from "@/core/icons";

export default function EditPolicyPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              Edit Policy
            </h1>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* Simple Edit Policy */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Simple Edit Policy
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Simple edits are intentionally minimal and built for speed.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                <div>
                  <p className="text-base lg:text-lg text-foreground/80 mb-3">
                    Simple edits include:
                  </p>
                  <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>cuts + pacing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>clean, minimal transitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>music</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>basic text overlays</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>posting-ready exports</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-base lg:text-lg text-foreground/80 mb-3">
                    Simple edits do NOT include:
                  </p>
                  <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                    <li className="flex items-start gap-3">
                      <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>complex animation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>heavy motion graphics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>design-heavy branding builds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Complex Edit Policy */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Complex Edit Policy
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Complex edits are premium polish and tighter handling.
              </p>
              <div className="flex flex-col gap-4 mt-2">
                <div>
                  <p className="text-base lg:text-lg text-foreground/80 mb-3">
                    Complex edits include:
                  </p>
                  <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>
                        stronger structure and storytelling polish (script
                        required for full narrative)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>color correction/grading (as required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>sound cleanup + sound design (as required)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>premium finishing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                      <span>Project Manager assigned</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
