import TextHighlighter from "@/core/components/text-highlighter";

export function ProblemSolver() {
  return (
    <div className="relative lg:py-[30px] py-10 grid place-items-center">
      <div className="w-full">
        <div className="flex flex-col gap-4 text-center text-2xl sm:text-4xl font-semibold leading-tight max-w-[35ch] mx-auto">
          <h4>
            The editing is what takes forever. The cutting, syncing, color
            correction, captions, exports. The part that stops you from posting
            consistently.
          </h4>
          <h4 className="text-2xl sm:text-4xl font-semibold leading-tight ">
            <TextHighlighter
              highlightColor="oklch(0.585 0.226 267.7)"
              className="px-1 rounded-sm will-change-transform text-white mt-3 inline-block font-medium"
              transition={{
                type: "spring",
                duration: 0.8,
                delay: 0.4,
                bounce: 0,
              }}
            >
              We fix that part.
            </TextHighlighter>
          </h4>
        </div>
      </div>
    </div>
  );
}
