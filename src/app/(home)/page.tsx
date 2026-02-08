import { Hero } from "features/home/hero";
import { WhoThisIsFor } from "features/home/who-this-is-for";
import { HowItWorks } from "features/home/how-it-works";
// import { Pricing } from "features/home/pricing";
// import { WhatYouGet } from "features/home/what-you-get";
// import { CustomPlan } from "features/home/custom-plan";
import { Faqs } from "features/home/faqs";
import { Proof } from "features/home/proof";
import { WhatWeDo } from "features/home/what-we-do";
import { Problem } from "features/home/problem";
import { WhatEveryVideoGets } from "features/home/what-every-vide-gets";
import { NewPricing } from "features/home/new-pricing";
import { Solutions } from "features/home/solutions";
import { LadderEditing } from "features/home/ladder-editing";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <LadderEditing />
      <Solutions />
      
      <Proof />
      <WhoThisIsFor />
      {/* <NewPricing /> */}
      <HowItWorks />
      <WhatEveryVideoGets />
      <WhatWeDo />
      {/* <CustomPlan /> */}
      <Faqs />
    </>
  );
}
