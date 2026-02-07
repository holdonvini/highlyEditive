function StepCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="z-1 relative w-full max-w-[35ch] rounded-[20px] border border-foreground/10 p-1 backdrop-blur">
      <div className="relative z-10 flex w-full flex-col justify-between overflow-hidden rounded-2xl border border-transparent bg-card px-6 py-5 shadow-2xl shadow-brand/15 ring-1 ring-foreground/10">
        <div className="flex flex-col items-start justify-center px-2 text-sm lg:text-base text-foreground/70 font-medium">
          {children}
        </div>
      </div>
    </div>
  );
}

function DesktopConnectors() {
  // Layout: 2 rows, 2 columns
  // Row 1: Step 1 (left), Step 4 (right)
  // Row 2: Step 2 (left), Step 3 (right)
  // Connections: Step 1 -> Step 2 (down), Step 2 -> Step 3 (right), Step 3 -> Step 4 (up-right)
  // In viewBox 0 0 400 100: Step 1 at ~100,12; Step 2 at ~100,88; Step 3 at ~300,88; Step 4 at ~300,12

  // Step 1 (top-left) -> Step 2 (bottom-left): straight down
  const path1 = "M 100 12 L 100 88";
  // Step 2 (bottom-left) -> Step 3 (bottom-right): straight right
  const path2 = "M 100 88 L 300 88";
  // Step 3 (bottom-right) -> Step 4 (top-right): straight up
  const path3 = "M 300 88 L 300 12";

  // Approximate path lengths for dash calculations
  const pathLength1 = 76;
  const pathLength2 = 200;
  const pathLength3 = 76;
  const shootingStarLength = 15;

  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for shooting star trail effect - fades from bright to transparent */}
        <linearGradient id="shootingStar1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-light)" stopOpacity="0.2" />
          <stop offset="70%" stopColor="var(--brand-light)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--brand-light)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="shootingStar2" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-light)" stopOpacity="0" />
          <stop offset="70%" stopColor="var(--brand-light)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--brand-light)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="shootingStar3" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--brand-light)" stopOpacity="0" />
          <stop offset="70%" stopColor="var(--brand-light)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--brand-light)" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Static base lines */}
      <path
        d={path1}
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/20"
      />
      <path
        d={path2}
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/20"
      />
      <path
        d={path3}
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-foreground/20"
      />

      {/* Shooting star on path 1 */}
      <path
        d={path1}
        stroke="url(#shootingStar1)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${shootingStarLength} ${
          pathLength1 + shootingStarLength
        }`}
        strokeDashoffset={pathLength1 + shootingStarLength}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${pathLength1 + shootingStarLength};${-shootingStarLength}`}
          dur="2.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1"
        />
      </path>

      {/* Shooting star on path 2 (delayed) */}
      <path
        d={path2}
        stroke="url(#shootingStar2)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${shootingStarLength} ${
          pathLength2 + shootingStarLength
        }`}
        strokeDashoffset={pathLength2 + shootingStarLength}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${pathLength2 + shootingStarLength};${-shootingStarLength}`}
          dur="2.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1"
          begin="1.875s"
        />
      </path>

      {/* Shooting star on path 3 (delayed further) */}
      <path
        d={path3}
        stroke="url(#shootingStar3)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={`${shootingStarLength} ${
          pathLength3 + shootingStarLength
        }`}
        strokeDashoffset={pathLength3 + shootingStarLength}
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${pathLength3 + shootingStarLength};${-shootingStarLength}`}
          dur="2.5s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.6 1"
          begin="3.75s"
        />
      </path>
    </svg>
  );
}

function MobileConnector({ index }: { index: number }) {
  // Vertical paths for mobile - connecting cards from top to bottom
  const pathLength = 100;
  const shootingStarLength = 20;
  // Sequential delays for smooth continuous flow across 4 steps
  const delays = ["0s", "1.875s", "3.75s"];
  const delay = delays[index - 1] || "0s";

  // Gradient opacity increases for later connectors for better visibility
  const gradientStops =
    index === 3
      ? { start: "0.6", middle: "0.8", end: "1" }
      : index === 2
        ? { start: "0.3", middle: "0.7", end: "0.8" }
        : { start: "0", middle: "0.6", end: "0.7" };

  return (
    <div className="relative h-20 w-full">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={`mobileShootingStar${index}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="0"
            y2="100"
          >
            <stop
              offset="0%"
              stopColor="var(--brand)"
              stopOpacity={gradientStops.start}
            />
            <stop
              offset="70%"
              stopColor="var(--brand)"
              stopOpacity={gradientStops.middle}
            />
            <stop
              offset="100%"
              stopColor="var(--brand)"
              stopOpacity={gradientStops.end}
            />
          </linearGradient>
        </defs>

        {/* Static base line - thinner for mobile */}
        <path
          d="M 50 0 L 50 100"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          className="text-foreground/20"
        />

        {/* Animated shooting star - thinner for mobile */}
        <path
          d="M 50 0 L 50 100"
          stroke={`url(#mobileShootingStar${index})`}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={`${shootingStarLength} ${
            pathLength + shootingStarLength
          }`}
          strokeDashoffset={pathLength + shootingStarLength}
        >
          <animate
            attributeName="stroke-dashoffset"
            values={`${pathLength + shootingStarLength};${-shootingStarLength}`}
            dur="2.5s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1"
            begin={delay}
          />
        </path>
      </svg>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="full-bleed relative">
      <div className="relative min-h-[70vh] py-7 lg:py-14">
        {/* <div className="mask-t-from-65% mask-t-to-85% absolute inset-0">
          <img
            alt="Hero section background"
            loading="lazy"
            className="opacity-7.5 size-full -scale-100 object-bottom"
            src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1757918054/16-bg_kkevzx.webp"
          />
        </div> */}

        {/* Steps Container */}

        <div className="relative mx-auto h-auto max-w-(--max-page-width) rounded-2xl px-6 lg:px-12 xl:px-0">
          <div className="flex flex-col gap-2 max-w-[60ch] mx-auto text-center">
            <p className="text-xl lg:text-2xl tracking-wider italic font-serif">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Dead Simple
              <span className="font-serif font-medium italic ml-[5px]">
                Process
              </span>
            </h2>
          </div>
        </div>

        <div className="relative mx-auto h-auto max-w-(--max-page-width) rounded-2xl lg:h-[450px] lg:px-12 my-7 lg:my-14">
          {/* Desktop Connectors */}
          <DesktopConnectors />

          {/* Mobile Layout */}
          <div className="relative flex flex-col items-center px-4 py-12 lg:hidden">
            <StepCard>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-base lg:text-lg">
                  Submit
                </span>
                <span className="text-xs lg:text-base text-foreground/60">
                  Upload to Drive or Dropbox. Fill brief form. Takes 3 minutes.
                </span>
              </div>
            </StepCard>
            <MobileConnector index={1} />
            <StepCard>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">We Edit</span>
                <span className="text-xs lg:text-sm text-foreground/60">
                  Professional cuts, synced captions, music that fits, colors
                  balanced. The complete package.
                </span>
              </div>
            </StepCard>
            <MobileConnector index={2} />
            <StepCard>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">You Review</span>
                <span className="text-xs lg:text-sm text-foreground/60">
                  Download your video. Love it? Post it. Need tweaks? Request
                  changes. One revision included.
                </span>
              </div>
            </StepCard>
            <MobileConnector index={3} />
            <StepCard>
              <div className="flex flex-col gap-1">
                <span className="font-semibold">Post</span>
                <span className="text-xs lg:text-sm text-foreground/60">
                  Upload to your platform. Move to the next one.
                </span>
              </div>
            </StepCard>
          </div>

          {/* Desktop Layout - 2x2 Grid */}
          <div className="relative hidden h-full grid-cols-2 grid-rows-2 lg:grid gap-6">
            {/* Step 1 - Top-left (Row 1, Col 1) */}
            <div className="flex items-start justify-start">
              <StepCard>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base lg:text-xl">
                    Submit
                  </span>
                  <span className="text-xs lg:text-sm text-foreground/60">
                    Upload to Drive or Dropbox. Fill brief form. Takes 3
                    minutes.
                  </span>
                </div>
              </StepCard>
            </div>
            {/* Step 4 - Top-right (Row 1, Col 2) */}
            <div className="flex items-start justify-end">
              <StepCard>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base lg:text-xl">
                    Post
                  </span>
                  <span className="text-xs lg:text-sm text-foreground/60">
                    Upload to your platform. Move to the next one.
                  </span>
                </div>
              </StepCard>
            </div>
            {/* Step 2 - Bottom-left (Row 2, Col 1) */}
            <div className="flex items-end justify-start">
              <StepCard>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base lg:text-xl">
                    We Edit
                  </span>
                  <span className="text-xs lg:text-sm text-foreground/60">
                    Professional cuts, synced captions, music that fits, colors
                    balanced. The complete package.
                  </span>
                </div>
              </StepCard>
            </div>
            {/* Step 3 - Bottom-right (Row 2, Col 2) */}
            <div className="flex items-end justify-end">
              <StepCard>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-base lg:text-xl">
                    You Review
                  </span>
                  <span className="text-xs lg:text-sm text-foreground/60">
                    Download your video. Love it? Post it. Need tweaks? Request
                    changes. One revision included.
                  </span>
                </div>
              </StepCard>
            </div>
          </div>
        </div>

        {/* <div className="relative mx-auto h-auto max-w-(--max-page-width) rounded-2xl px-6 lg:px-12 xl:px-0">
          <div className="relative flex flex-col gap-2 mx-auto max-w-[95ch] items-center">
            <div className="relative">
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px -translate-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px right-0 -translate-y-[calc(50%-0.5px)] translate-x-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 right-0 translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div
                aria-hidden="true"
                className="mask-radial-from-15% z-1 before:bg-foreground/25 after:bg-foreground/25 absolute size-3 before:absolute before:inset-0 before:m-auto before:h-px after:absolute after:inset-0 after:m-auto after:w-px bottom-0 -translate-x-[calc(50%-0.5px)] translate-y-[calc(50%-0.5px)]"
              />
              <div className="border border-foreground/5 py-5 px-6">
                <p className="text-2xl md:text-3xl lg:text-4xl font-serif">
                  No calls. No meetings. Just the work.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
