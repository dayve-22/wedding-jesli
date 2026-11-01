"use client";

import React from "react";
import OrnateFrame, { OrnateDivider } from "./OrnateFrame";

export default function StoryCard() {
  return (
    <div className="relative py-8 px-4 max-w-lg mx-auto">
      <OrnateFrame
        variant="parchment"
        title="A Blessed Union"
        subtitle="IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL"
      >
        <div className="text-center space-y-4 pt-1">
          {/* Sacred Quranic Calligraphy */}
          <div className="p-4 rounded-xl bg-[#f5ede0]/80 border border-[#d4af37]/40 shadow-inner">
            <p className="font-amiri text-lg md:text-xl text-[#3d2310] leading-loose">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
            <p className="font-cormorant italic text-xs md:text-sm text-[#705035] mt-2 leading-relaxed">
              &ldquo;And among His Signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.&rdquo;
              <span className="block font-cinzel text-[10px] text-[#997a15] not-italic mt-1">
                — Surah Ar-Rum (30:21)
              </span>
            </p>
          </div>

          <OrnateDivider />

          {/* Emotional Story & Reflection (matching the template's poetic flow) */}
          <div className="space-y-4 px-2 text-[#3b2313]">
            <p className="font-cinzel text-xs md:text-sm font-semibold tracking-widest uppercase text-[#5a371c]">
              Two Souls, One Destiny, An Eternal Journey
            </p>

            <p className="font-cormorant italic text-sm md:text-base leading-relaxed text-[#4a2e18]">
              Written in the stars and ordained by the Divine, the journey of{" "}
              <strong className="font-semibold text-[#805e1b]">Muhammed Rishad</strong> and{" "}
              <strong className="font-semibold text-[#805e1b]">Sainaba Jesli</strong> brings together two loving families in profound gratitude, shared values, and joyous unity.
            </p>

            <p className="font-cormorant italic text-sm md:text-base leading-relaxed text-[#4a2e18]">
              &ldquo;What started with the prayers of our beloved elders and families has blossomed into an unbreakable bond — a sacred promise of lifelong companionship, peace, and mutual devotion.&rdquo;
            </p>

            <div className="pt-2">
              <span className="font-cinzel text-xs tracking-wider text-[#997a15] uppercase font-bold">
                MAY ALLAH BLESS THIS UNION WITH ENDLESS NOOR &amp; HAPPINESS
              </span>
            </div>
          </div>
        </div>
      </OrnateFrame>
    </div>
  );
}

