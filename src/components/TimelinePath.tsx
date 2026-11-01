"use client";

import React from "react";
import { Utensils, Heart, Sparkles, Clock, PartyPopper, Camera } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  align: "left" | "right";
}

export default function TimelinePath() {
  const events: TimelineEvent[] = [
    {
      time: "11:00 AM",
      title: "GUEST ARRIVAL & WELCOME",
      description: "Warm welcome to our esteemed guests with refreshing traditional drinks and scents of ittar.",
      icon: <Sparkles className="w-5 h-5 text-[#d4af37]" />,
      align: "left",
    },
    {
      time: "11:30 AM",
      title: "RECEPTION OF NEWLYWEDS",
      description: "Welcoming Muhammed Rishad & Sainaba Jesli with warm family blessings and heartfelt prayers.",
      icon: <Heart className="w-5 h-5 text-[#d4af37]" />,
      align: "right",
    },
    {
      time: "12:30 PM",
      title: "ROYAL WEDDING FEAST",
      description: "Join us in savoring a grand traditional Malabar wedding feast, fragrant biryani, and celebratory delicacies.",
      icon: <Utensils className="w-5 h-5 text-[#d4af37]" />,
      align: "left",
    },
    {
      time: "02:00 PM",
      title: "MEMORIES & BLESSINGS",
      description: "Felicitation, capturing lovely portraits, and sharing sweet congratulatory moments with the couple.",
      icon: <Camera className="w-5 h-5 text-[#d4af37]" />,
      align: "right",
    },
    {
      time: "02:30 PM",
      title: "FAREWELL WITH GRATITUDE",
      description: "Concluding the joyous celebration with profound thanks for gracing our special day with your presence.",
      icon: <PartyPopper className="w-5 h-5 text-[#d4af37]" />,
      align: "left",
    },
  ];

  return (
    <div className="relative py-12 px-4 max-w-xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <span className="font-cinzel text-xs tracking-[0.25em] text-[#d4af37] uppercase">
          Programme of the Day
        </span>
        <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#f7eccd] mt-1">
          ITINERARY
        </h2>
        <div className="flex items-center justify-center space-x-2 text-[#c5a059] mt-2">
          <span className="h-[1px] w-8 bg-[#c5a059]" />
          <Clock className="w-4 h-4" />
          <span className="h-[1px] w-8 bg-[#c5a059]" />
        </div>
      </div>

      {/* Vertical Curved Connecting Path SVG */}
      <div className="relative">
        {/* Curving Center Line */}
        <div className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#d4af37]/40 pointer-events-none" />

        <div className="space-y-12">
          {events.map((item, idx) => {
            const isLeft = item.align === "left";
            return (
              <div
                key={idx}
                className={`relative flex items-center ${
                  isLeft ? "flex-row" : "flex-row-reverse"
                } justify-between`}
              >
                {/* Content Box */}
                <div
                  className={`w-[42%] p-4 rounded-xl bg-gradient-to-b from-[#221309] to-[#160c06] border border-[#d4af37]/40 shadow-lg text-${
                    isLeft ? "right" : "left"
                  }`}
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#3c2111] text-[#f5e6b3] font-cinzel text-xs font-bold border border-[#d4af37]/50 tracking-wider">
                    {item.time}
                  </span>
                  <h4 className="font-cinzel text-xs md:text-sm font-bold text-[#e8cf8d] mt-2 tracking-wide uppercase">
                    {item.title}
                  </h4>
                  <p className="font-cormorant text-xs md:text-sm text-[#cebea9] mt-1 italic leading-snug">
                    {item.description}
                  </p>
                </div>

                {/* Center Node / Milestone Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#8f6f1c] via-[#d4af37] to-[#faeec7] p-0.5 shadow-[0_0_15px_rgba(212,175,55,0.4)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#1b0d06] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-cinzel text-[#d4af37] font-semibold mt-1">
                    {idx + 1}
                  </span>
                </div>

                {/* Balance placeholder for spacing */}
                <div className="w-[42%]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

