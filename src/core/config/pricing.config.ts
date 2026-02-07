export type PricingOption = {
  id: string;
  price?: number;
  label: string;
  meta?: string;
  featured?: boolean;
  featuredText?: string;
};

type Pricing = {
  [key: string]: {
    [key: string]: {
      title: string;
      description: string[];
      options: PricingOption[];
    };
  };
};

export const PRICING: Pricing = {
  single: {
    simple: {
      title: "Simple Edit",
      description: [
        "Cuts, transitions, music, text.",
        "48–72 hour turnaround.",
        "Best for: Social content, testimonials, quick posts.",
      ],
      options: [
        {
          id: "single-simple-60s",
          label: "Duration: 60 sec",
          price: 2200,
        },
        {
          id: "single-simple-90s",
          label: "Duration: 90 sec",
          price: 3500,
        },
      ],
    },

    complex: {
      title: "Complex Edit",
      description: [
        "Color grading, motion graphics, sound design.",
        "48–72 hour turnaround.",
        "Best for: YouTube, ads, brand content.",
      ],
      options: [
        {
          id: "single-complex-60s",
          label: "Duration: 60 sec",
          price: 4300,
        },
        {
          id: "single-complex-90s",
          label: "Duration: 90 sec",
          price: 5000,
        },
      ] satisfies PricingOption[],
    },
  },

  monthly: {
    simple: {
      title: "Simple Edit",
      description: [],
      options: [
        {
          id: "monthly-simple-basic",
          label: "4 videos (60s) or 3 videos (90s)",
          meta: "Save ₹800-₹2,500/month",
          price: 8000,
        },
        {
          id: "monthly-simple-popular",
          label: "10 videos (60s) or 6 videos (90s)",
          meta: "Save ₹4,000-₹9,000/month",
          price: 18000,
          featured: true,
          featuredText: "Most brands pick this.",
        },
        {
          id: "monthly-simple-pro",
          label: "20 videos (60s) or 12 videos (90s)",
          meta: "Save ₹12,000-₹18,000/month",
          price: 32000,
        },
      ],
    },

    complex: {
      title: "Complex Edit",
      description: [
        "Faster turnaround. Unused videos roll over. Cancel anytime.",
      ],
      options: [
        {
          id: "monthly-complex-basic",
          label: "4 videos (60s) or 3 videos (90s)",
          meta: "Save ₹2,200-₹3,000/month",
          price: 15000,
        },
        {
          id: "monthly-complex-popular",
          label: "10 videos (60s) or 7 videos (90s)",
          meta: "Save ₹8,000-₹10,000/month",
          price: 35000,
          featured: true,
          featuredText: "Most brands pick this.",
        },
        {
          id: "monthly-complex-pro",
          label: "20 videos (60s) or 14 videos (90s)",
          meta: "Save ₹21,000-₹25,000/month",
          price: 65000,
        },
      ],
    },
  },

  bundles: {
    bundles: {
      title: "Bundles",
      description: [],
      options: [
        {
          id: "bundle-5pack",
          label: "5-Pack",
          meta: "Save 15%",
        },
        {
          id: "bundle-10pack",
          label: "10-Pack",
          meta: "Save 25%",
        },
      ],
    },
  },
} as const;

export const ALL_PRICING_OPTIONS: PricingOption[] = Object.values(
  PRICING,
).flatMap((category) =>
  Object.values(category).flatMap((sub) =>
    "options" in sub ? sub.options : [],
  ),
);

export function getPricingOptionById(
  id: string | null,
): PricingOption | undefined {
  return ALL_PRICING_OPTIONS.find((option) => option.id === id);
}
