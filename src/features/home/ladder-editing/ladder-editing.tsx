"use client";

import { ArrowPathIcon, BoltIcon } from "@heroicons/react/24/outline";

export function LadderEditing() {
  const steps = [
    {
      id: 1,
      icon: <ArrowPathIcon className="w-8 h-8" />,
      headline: "Pick",
      bodyCopy: "Choose your package and lock it in",
    },
    {
      id: 2,
      icon: <BoltIcon className="w-8 h-8" />,
      headline: "Upload",
      bodyCopy: "Drop footage & share your vision",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ),
      headline: "Approve",
      bodyCopy: "Review in 24-48 hours. Request changes. Done.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three steps between you and a killer edit.
          </h2>
          <p className="text-foreground/70 mb-6 text-balance text-base lg:text-lg font-medium">
            Three steps. Zero headaches.
          </p>
        </div>

        <div className="relative">
          {/* Glassmorphic connecting line with flowing beam */}
          <div className="absolute top-[calc(50%-50px)] left-0 right-0 h-6 -translate-y-1/2 hidden md:block">
            <div className="max-w-4xl mx-auto px-6 relative">
              {/* Glassmorphic line - from left edge of first circle to right edge of third circle */}
              <div className="absolute left-[calc(16.666%-10%)] right-[calc(16.666%-10%)] h-1 top-1/2 -translate-y-1/2 backdrop-blur-sm bg-white/10 border border-white/20 rounded-full overflow-hidden"></div>
              
              {/* Flowing beam */}
              <div className="absolute left-[calc(16.666%-10%)] top-1/2 -translate-y-1/2 h-1 w-[calc(66.666%+20%)] rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-[#c1ae9b] opacity-40 animate-moveBeam"></div>
              </div>
            </div>
          </div>
          
          <style jsx>{`
            @keyframes moveBeam {
              0% {
                transform: translateX(-100%);
              }
              100% {
                transform: translateX(100%);
              }
            }
            .animate-moveBeam {
              animation: moveBeam 3s linear infinite;
            }
          `}</style>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Glassmorphic icon container */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg z-20"
                >
                  <div className="text-[#c1ae9b]">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {step.headline}
                </h3>
                <p className="text-lg text-foreground/80">
                  {step.bodyCopy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}