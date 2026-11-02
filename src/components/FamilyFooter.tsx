"use client";

import React from "react";
import { Phone, MapPin } from "lucide-react";

export default function FamilyFooter() {
  return (
    <footer className="relative mt-16 pb-12 pt-16 px-4 bg-gradient-to-b from-[#140b07] via-[#100804] to-[#0a0502] border-t border-[#d4af37]/30 text-center">
      {/* Ornate Divider */}
      <div className="flex items-center justify-center max-w-md mx-auto mb-10">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#d4af37]" />
        <div className="mx-4 text-[#d4af37] text-sm flex items-center space-x-2">
          <span>❦</span>
          <span className="font-cinzel text-xs tracking-widest uppercase">
            Family &amp; Blessings
          </span>
          <span>❦</span>
        </div>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#d4af37]" />
      </div>

      <div className="max-w-2xl mx-auto space-y-10 text-[#d8c5b0]">
        {/* Bride's Family Info */}
        <div className="p-6 rounded-2xl bg-[#1b0e07]/80 border border-[#d4af37]/35 shadow-lg">
          <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#d4af37] uppercase font-bold">
            Bride&apos;s Family &amp; Hosts
          </span>
          <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#f7edd4] mt-1">
            Mr. Abdul Jaleel (Babu) &amp; Mrs. Jameela
          </h3>
          <p className="font-cormorant italic text-xs md:text-sm text-[#bca58d] mt-1">
            S/o. A.K Hassainar Bava (Late) &amp; Sainaba K (Late) • D/o Moothedath Marakkar (Late) &amp; Thithikutti (Late)
          </p>

          <div className="mt-2 text-xs text-[#d8c5b0] space-y-0.5">
            <p className="font-cinzel text-[11px] text-[#e8cf8d]">
              Grandparents: Kalliyath Mohammed Haji (Late) &amp; Beepathu (Late)
            </p>
            <p className="flex items-center justify-center space-x-1.5 text-xs text-[#a88a53] mt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Anekulangara / Kalliyath (H), Near HSM School, Tanur</span>
            </p>
            <p className="flex items-center justify-center space-x-1.5 text-xs text-[#e8cf8d] font-medium pt-1">
              <Phone className="w-3 h-3 text-[#d4af37]" />
              <a href="tel:+919846501477" className="hover:underline">
                Ph: +91 9846 501 477
              </a>
            </p>
          </div>
        </div>

        {/* Groom's Family Info */}
        <div className="p-6 rounded-2xl bg-[#1b0e07]/80 border border-[#d4af37]/35 shadow-lg">
          <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#d4af37] uppercase font-bold">
            Groom&apos;s Family
          </span>
          <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#f7edd4] mt-1">
            Mr. Abdul Hameed &amp; Mrs. Balkees
          </h3>
          <p className="font-cormorant italic text-xs md:text-sm text-[#bca58d] mt-1">
            Parents of Muhammed Rishad P
          </p>
          <p className="flex items-center justify-center space-x-1.5 text-xs text-[#a88a53] mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Parambil House, Venniyur</span>
          </p>
        </div>

        {/* Sponsor / Best Wishes From: Kalliyath Entities */}
        <div className="pt-4 border-t border-[#d4af37]/25">
          <p className="font-cormorant italic text-sm text-[#bca58d] mb-3">
            Best wishes from:
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-4 rounded-xl bg-[#160a04] border border-[#c5a059]/40 shadow-inner">
            {/* Kalliyath "K" Monogram */}
            <div className="w-8 h-8 rounded bg-[#1f1007] border border-[#d4af37] text-[#d4af37] font-cinzel font-black flex items-center justify-center text-sm shadow">
              K
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 font-cinzel text-[11px] md:text-xs tracking-wider text-[#faeed9] font-semibold">
              <span className="hover:text-[#d4af37] transition-colors">KALLIYATH AGENCIES</span>
              <span className="text-[#d4af37]">|</span>
              <span className="hover:text-[#d4af37] transition-colors">KALLIYATH STEEL HOUSE</span>
              <span className="text-[#d4af37]">|</span>
              <span className="hover:text-[#d4af37] transition-colors">KALLIYATH STORE</span>
            </div>
          </div>
        </div>

        {/* Developer Credit Footer Badge */}
        <div className="pt-8 border-t border-[#d4af37]/20 flex flex-col items-center justify-center space-y-2">
          <p className="text-[11px] font-cinzel tracking-[0.2em] text-[#a88a53] uppercase">
            Crafted with Love by{" "}
            <a
              href="https://www.instagram.com/daybuildemup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f5e6b3] hover:text-[#d4af37] font-bold underline transition-colors"
            >
              DayBuildEmUp
            </a>
          </p>
          <div className="flex items-center space-x-4 text-xs">
            <a
              href="https://wa.me/918590190369?text=Hi!%20I%20saw%20the%20wedding%20invitation%20website%20and%20would%20love%20to%20get%20a%20custom%20invitation%20site%20built%20for%20myself."
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:text-[#f3e5ab] font-cinzel text-[10px] tracking-wider uppercase transition-colors"
            >
              Get Your Custom Invitation &rarr;
            </a>
            <span className="text-[#684c33]">&bull;</span>
            <a
              href="https://www.instagram.com/daybuildemup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a88a53] hover:text-[#d4af37] font-cinzel text-[10px] tracking-wider transition-colors"
            >
              @daybuildemup
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

