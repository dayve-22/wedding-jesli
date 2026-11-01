"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

export default function CountdownTimer() {
  // Target date: December 5, 2026 11:00:00 AM IST
  const targetDate = new Date("2026-12-05T11:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative mx-auto max-w-md w-full p-6 text-center">
      {/* Ornate Baroque Mirror Frame Container */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#e3cca6] via-[#9e762c] to-[#462b16] shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        <div className="relative rounded-[22px] bg-gradient-to-b from-[#25140a] via-[#1a0e07] to-[#120803] p-6 md:p-8 border border-[#d4af37]/40">
          {/* Ornate top scroll */}
          <div className="flex justify-center items-center space-x-2 text-[#d4af37] mb-2">
            <span className="text-xs">✦</span>
            <span className="font-cinzel text-xs tracking-[0.25em] text-[#e8cf8d] uppercase">
              Time Until Celebration
            </span>
            <span className="text-xs">✦</span>
          </div>

          <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#f7eccd] tracking-wider mb-6">
            COUNTING DOWN THE MOMENTS
          </h3>

          {/* Numbers Ticker Grid */}
          <div className="grid grid-cols-4 gap-2 md:gap-3">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-gradient-to-b from-[#180d07] to-[#0d0603] border border-[#d4af37]/35 shadow-inner"
              >
                <span className="font-cinzel text-2xl md:text-3xl font-extrabold text-[#f3e5ab] tracking-wider">
                  {isClient ? String(item.value).padStart(2, "0") : "--"}
                </span>
                <span className="font-cinzel text-[9px] md:text-[10px] tracking-widest text-[#a88a53] uppercase mt-1 font-semibold">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 pt-3 border-t border-[#d4af37]/20 flex items-center justify-center space-x-2 text-[#c5a059] text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-cormorant italic text-sm text-[#cebea9]">
              Saturday, 05 December 2026 • 11:00 AM IST
            </span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

