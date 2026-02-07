import { ArrowRight, CheckmarkDoneIcon } from "@/core/icons";

export default function RevisionPolicyPage() {
  return (
    <section className="relative">
      <div className="relative py-24 md:py-32 lg:py-40">
        <div className="flex flex-col gap-12 max-w-(--max-page-width) px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-4 max-w-[90ch] mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center text-foreground">
              Revision Policy
            </h1>
            <p className="text-xl lg:text-2xl text-foreground/70 text-center font-medium">
              We keep revisions structured so edits stay fast and delivery stays
              predictable.
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full space-y-10">
            {/* What's included */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What's included
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Every edit (Simple or Complex) includes:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <CheckmarkDoneIcon className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>2 revision rounds</span>
                </li>
              </ul>
              <p className="text-base lg:text-lg text-foreground/80 mt-2 ml-8">
                A revision round means: one consolidated list of changes after
                reviewing the draft.
              </p>
            </div>

            {/* How to request revisions */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                How to request revisions
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                To keep turnaround fast, revision feedback must be:
              </p>
            </div>

            {/* What counts as a revision */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What counts as a revision
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                Revisions include:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>trimming/adding small portions</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>swapping clips within the same flow</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>changing music within similar style</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>adjusting text/subtitles</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>pacing tweaks</span>
                </li>
              </ul>
            </div>

            {/* What is NOT included as a revision (new scope) */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                What is NOT included as a revision (new scope)
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                These are treated as new scope and may require extra charges:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>changing direction/story after draft delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>adding major new footage that changes structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>switching style/reference after first draft</span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    requesting motion graphics/animation in Simple edits
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    requesting additional versions/formats not discussed earlier
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>rewriting narrative without script</span>
                </li>
              </ul>
            </div>

            {/* Extra revisions */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
                Extra revisions
              </h2>
              <p className="text-base lg:text-lg text-foreground/80">
                If you need more than 2 rounds:
              </p>
              <ul className="space-y-3 text-base lg:text-lg text-foreground/80">
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>
                    it will be charged as an additional revision fee, OR
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ArrowRight className="size-5 text-foreground/80 mt-0.5 shrink-0" />
                  <span>treated as a new edit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
