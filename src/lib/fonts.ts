import { Instrument_Serif, Playfair_Display } from "next/font/google";
import { EB_Garamond } from "next/font/google";
import localFont from "next/font/local";

import { cn } from "@/lib/classes";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
});

const ebGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const fontVariables = cn(
  satoshi.variable,
  ebGaramond.variable,
  instrumentSerif.variable,
  playfairDisplay.variable,
);
