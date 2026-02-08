"use client";

import React from "react";
import { motion } from "motion/react";
import { 
  Camera, 
  Building, 
  Palette, 
  Briefcase, 
  ShoppingBag, 
  Mic, 
  BarChart3
} from "lucide-react";

export function ForWhom() {
  const audiences:any = [
    {
      id: 1,
      title: "Content Creators & Influencers",
      icon: Camera,
    },
    {
      id: 2,
      title: "Brands & Marketing Teams",
      icon: Building,
    },
    {
      id: 3,
      title: "Agencies & Production Houses",
      icon: Palette,
    },
    {
      id: 4,
      title: "Coaches & Course Creators",
      icon: Briefcase,
    },
    {
      id: 5,
      title: "E-commerce & D2C",
      icon: ShoppingBag,
    },
    {
      id: 6,
      title: "Podcasters",
      icon: Mic,
    },
    {
      id: 7,
      title: "SaaS & Tech Companies",
      icon: BarChart3,
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Who This Is For
          </h2>
          <p className="text-foreground/70 mb-6 text-balance text-base lg:text-lg font-medium">
            If you create content, we make it perform.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Main node */}
          
          
          {/* Hierarchy Chart Structure */}
          <div className="w-full max-w-6xl">
            {/* Level 1 - Root */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground">Content Audience</div>
              </div>
            </div>
            
            {/* Connector from root to level 2 */}
            <div className="flex justify-center mb-4">
              <div className="h-8 w-0.5 bg-foreground/30"></div>
            </div>
            
            {/* Level 2 - Main Categories */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-8">
              {/* Left Branch */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="
                    rounded-2xl p-6 bg-background/30 backdrop-blur-xl border border-foreground/20
                    shadow-lg shadow-foreground/10
                    hover:shadow-xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300
                    flex flex-col items-center text-center min-w-[200px]
                  "
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    {React.createElement(audiences[0].icon, { size: 32, className: "text-foreground mx-auto" })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{audiences[0].title}</h3>
                </motion.div>
                
                {/* Connector to level 3 */}
                <div className="h-8 w-0.5 bg-foreground/30"></div>
                
                <motion.div
                  className="
                    rounded-2xl p-6 bg-background/30 backdrop-blur-xl border border-foreground/20
                    shadow-lg shadow-foreground/10
                    hover:shadow-xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300
                    flex flex-col items-center text-center min-w-[200px]
                  "
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    {React.createElement(audiences[1].icon, { size: 32, className: "text-foreground mx-auto" })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{audiences[1].title}</h3>
                </motion.div>
              </div>
              
              {/* Central connector */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-0.5 w-16 bg-foreground/30"></div>
              
              {/* Right Branch */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="
                    rounded-2xl p-6 bg-background/30 backdrop-blur-xl border border-foreground/20
                    shadow-lg shadow-foreground/10
                    hover:shadow-xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300
                    flex flex-col items-center text-center min-w-[200px]
                  "
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    {React.createElement(audiences[2].icon, { size: 32, className: "text-foreground mx-auto" })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{audiences[2].title}</h3>
                </motion.div>
                
                {/* Connector to level 3 */}
                <div className="h-8 w-0.5 bg-foreground/30"></div>
                
                <motion.div
                  className="
                    rounded-2xl p-6 bg-background/30 backdrop-blur-xl border border-foreground/20
                    shadow-lg shadow-foreground/10
                    hover:shadow-xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300
                    flex flex-col items-center text-center min-w-[200px]
                  "
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    {React.createElement(audiences[3].icon, { size: 32, className: "text-foreground mx-auto" })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{audiences[3].title}</h3>
                </motion.div>
              </div>
            </div>
            
            {/* Level 3 - Bottom Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-8">
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-foreground/30"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-foreground/30"></div>
              </div>
              <div className="flex justify-center">
                <div className="h-8 w-0.5 bg-foreground/30"></div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4">
              {[4, 5, 6].map((index) => (
                <motion.div
                  key={audiences[index]?.id}
                  className="
                    rounded-2xl p-6 bg-background/30 backdrop-blur-xl border border-foreground/20
                    shadow-lg shadow-foreground/10
                    hover:shadow-xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300
                    flex flex-col items-center text-center min-w-[200px]
                  "
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="mb-4">
                    {React.createElement(audiences[index].icon, { size: 32, className: "text-foreground mx-auto" })}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{audiences[index].title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm tracking-wide font-medium [transition-property:background-color,scale] duration-100 ease-[cubic-bezier(.25,.46,.45,.94)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/50 shadow-lg border-[0.5px] border-foreground/25 text-shadow-sm bg-gradient-to-b from-brand to-brand-light text-white hover:from-brand-light hover:to-brand px-8 py-3 active:scale-98 group">
            <span>Get Started</span>
          </button>
        </div>
      </div>
    </section>
  );
}