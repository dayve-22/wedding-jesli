"use client";

import React from "react";
import { Heart } from "lucide-react";

export default function CalendarCard() {
  // December 2026
  // Dec 1 is Tuesday. Dec 5 is Saturday. Dec has 31 days.
  const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  
  // Empty spaces before Dec 1 (Tuesday -> 1 empty day for Monday)
  const emptyDays = [null];
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const calendarCells = [...emptyDays, ...daysInMonth];

  return (
    <div className="relative mx-auto max-w-sm w-full p-6 rounded-2xl bg-gradient-to-b from-[#22130a] via-[#1a0e07] to-[#120904] border border-[#d4af37]/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] text-[#faeed9]">
      {/* Ornate corner filigree */}
      <div className="absolute top-2 left-2 text-[#d4af37]/60 text-xs">✤</div>
      <div className="absolute top-2 right-2 text-[#d4af37]/60 text-xs">✤</div>
      <div className="absolute bottom-2 left-2 text-[#d4af37]/60 text-xs">✤</div>
      <div className="absolute bottom-2 right-2 text-[#d4af37]/60 text-xs">✤</div>
      
      {/* Decorative inner frame */}
      <div className="border border-[#c5a059]/30 rounded-xl p-4">
        {/* Header: Month & Year */}
        <div className="flex justify-between items-center border-b border-[#d4af37]/30 pb-3 mb-4">
          <span className="font-cinzel text-lg md:text-xl font-bold tracking-widest text-[#e8cf8d]">
            DECEMBER
          </span>
          <span className="font-cinzel text-lg md:text-xl tracking-wider text-[#d4af37]">
            2026
          </span>
        </div>

        {/* Days of Week */}
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekDays.map((d) => (
            <span
              key={d}
              className="text-[10px] md:text-xs font-semibold text-[#a88a53] tracking-wider"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs md:text-sm">
          {calendarCells.map((day, idx) => {
            if (day === null) {
              return <div key={`empty-${idx}`} className="h-8" />;
            }

            const isWeddingDay = day === 5;

            return (
              <div
                key={`day-${day}`}
                className="h-8 flex items-center justify-center relative font-medium"
              >
                {isWeddingDay ? (
                  <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-[#997a15] to-[#f3e5ab] text-[#1a0e07] font-bold shadow-lg shadow-[#d4af37]/40 ring-2 ring-[#d4af37] animate-pulse">
                    <span>{day}</span>
                    <Heart className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 fill-[#d4af37] text-white stroke-[1.5]" />
                  </div>
                ) : (
                  <span
                    className={
                      day < 5
                        ? "text-[#87745e]"
                        : "text-[#ecd9be] hover:text-[#d4af37] transition-colors"
                    }
                  >
                    {day}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Start / Event Time Pill */}
        <div className="mt-4 pt-3 border-t border-[#d4af37]/30 flex justify-between items-center bg-[#150a05]/80 px-4 py-2.5 rounded-lg border border-[#c5a059]/40">
          <span className="font-cinzel text-xs tracking-wider text-[#bba06b] uppercase">
            RECEPTION TIME
          </span>
          <span className="font-cinzel text-sm font-bold text-[#f5e6b3] tracking-widest">
            11:00 AM – 2:30 PM
          </span>
        </div>

        <div className="mt-2 text-center">
          <span className="text-[11px] font-cormorant italic text-[#c5a059]">
            Hijri: 25 Jamadil Akhir 1448
          </span>
        </div>
      </div>
    </div>
  );
}

