import { CURRENCY_SYMBOL } from "@/lib/constants";

type SingleEditPricing = {
  [key: string]: {
    title: string;
    options: {
      [key: string]: {
        id: string;
        price: number;
        payLabel: string;
        info: string;
      };
    };
    includes: string[];
    bestFor: string;
  };
};

export const SINGLE_EDIT_PRICING: SingleEditPricing = {
  simple: {
    title: "Single Simple Edit",
    options: {
      "60s": {
        id: "single-simple-60s",
        info: `${CURRENCY_SYMBOL}2,400 / 60 sec`,
        price: 2400,
        payLabel: "Buy 60s Edit",
      },
      "90s": {
        id: "single-simple-90s",
        info: `${CURRENCY_SYMBOL}3,600 / 60 sec`,
        price: 3600,
        payLabel: "Buy 90s Edit",
      },
    },
    includes: [
      "Cuts & transition",
      "Music Sync",
      "Basic Text",
      "36-48 hour delivery",
    ],
    bestFor: "Social clips, testimonials, vlogs, simple posts",
  },
  complex: {
    title: "Single Complex Edit",
    options: {
      "60s": {
        id: "single-complex-60s",
        info: `${CURRENCY_SYMBOL}4,200 / 60 sec`,
        price: 4200,
        payLabel: "Buy 60s Edit",
      },
      "90s": {
        id: "single-complex-90s",
        info: `${CURRENCY_SYMBOL}6,300 / 60 sec`,
        price: 6300,
        payLabel: "Buy 90s Edit",
      },
    },
    includes: [
      "Color Grading",
      "Motion Graphics",
      "Advanced Animations",
      "Sound Design",
      "36-48 hour delivery",
    ],
    bestFor: "Youtube, ads, brand videos, product demos",
  },
};

type MonthlyPricing = {
  [key: string]: {
    title: string;
    price: number;
    includes: string[];
    goodFor: string;
    chooseOne: string[];
    save: string;
    popular?: boolean;
  };
};

export const MONTHLY_SIMPLE_PRICING: MonthlyPricing = {
  essentials: {
    title: "Essentials",
    price: 20000,
    includes: [
      "Cuts & transitions",
      "Music Sync",
      "Basic text overlays",
      "36-48 hour delivery",
    ],
    goodFor: "2-3 posts per week",
    chooseOne: ["9 videos (60s each)", "6 videos (90s each)"],
    save: "Save ₹1,600/month (₹2,222 per video)",
  },
  creator: {
    title: "Creator",
    price: 39000,
    includes: [
      "Cuts & transitions",
      "Music Sync",
      "Basic text overlays",
      "36-48 hour delivery",
    ],
    goodFor: "Daily or multi-platform",
    chooseOne: ["18 videos (60s each)", "12 videos (90s each)"],
    save: "Save ₹4,200/month (₹2,167 per video)",
    popular: true,
  },
};

export const MONTHLY_COMPLEX_PRICING: MonthlyPricing = {
  essentials: {
    title: "Essentials",
    price: 35000,
    includes: [
      "Color grading",
      "Motion graphics",
      "Advanced animations",
      "Sound design & mixing",
      "36-48 hour delivery",
    ],
    goodFor: "Weekly premium content",
    chooseOne: ["9 videos (60s each)", "6 videos (90s each)"],
    save: "Save ₹2,800/month (₹3,889 per video)",
  },
  creator: {
    title: "Creator",
    price: 68000,
    includes: [
      "Color grading",
      "Motion graphics",
      "Advanced animations",
      "Sound design & mixing",
      "36-48 hour delivery",
    ],
    goodFor: "Agencies, brands, high-volume",
    chooseOne: ["18 videos (60s each)", "12 videos (90s each)"],
    save: "Save ₹7,600/month (₹3,778 per video)",
    popular: true,
  },
};
