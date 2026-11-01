"use client";

import React, { useState, useEffect } from "react";
import { MessageSquareHeart, Send } from "lucide-react";
import OrnateFrame from "./OrnateFrame";

interface Wish {
  id: string;
  name: string;
  message: string;
  date: string;
}

export default function WishesWall() {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: "1",
      name: "Kalliyath Family Elders",
      message:
        "Barakallahu lakuma wa baraka alaykuma wa jama'a baynakuma fee khayr. May Allah shower endless mercy, good health, and abundant joy on Rishad & Jesli.",
      date: "Oct 2026",
    },
    {
      id: "2",
      name: "Parambil Relatives",
      message:
        "Warmest congratulations to Rishad and Jesli on your blessed union! Wishing you both a lifetime of smiles and harmony.",
      date: "Oct 2026",
    },
    {
      id: "3",
      name: "HSM Tanur Friends",
      message:
        "Heartiest congratulations to our dearest friend Jesli and Rishad! Can't wait to celebrate together on December 5th at Hayath Convention Centre!",
      date: "Oct 2026",
    },
  ]);

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_wishes_rishad_jesli");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setWishes(parsed);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: author.trim(),
      message: text.trim(),
      date: "Just now",
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem("wedding_wishes_rishad_jesli", JSON.stringify(updated));
    } catch {
      // ignore
    }

    setAuthor("");
    setText("");
  };

  return (
    <div id="wishes" className="relative py-8 px-4 max-w-lg mx-auto">
      <OrnateFrame
        variant="parchment"
        title="Best Wishes"
        subtitle="MESSAGES OF LOVE &amp; PRAYERS"
      >
        <div className="space-y-6 pt-1">
          {/* Post A Wish Form */}
          <form
            onSubmit={handleAddWish}
            className="p-4 rounded-xl bg-[#fffefc] border border-[#d4af37]/40 shadow-sm space-y-3"
          >
            <h4 className="font-cinzel text-xs font-bold text-[#55361b] uppercase tracking-wider flex items-center space-x-1.5">
              <MessageSquareHeart className="w-4 h-4 text-[#8f6f1c]" />
              <span>Leave A Blessing or Message</span>
            </h4>

            <input
              type="text"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Your Name (e.g. Uncle Farooq / Shamil)"
              className="w-full px-3 py-2 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] text-xs placeholder-[#9c8266] focus:outline-none focus:ring-1 focus:ring-[#aa8420]"
            />

            <textarea
              required
              rows={2}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your heartfelt wish or du'a..."
              className="w-full px-3 py-2 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] text-xs placeholder-[#9c8266] focus:outline-none focus:ring-1 focus:ring-[#aa8420] resize-none"
            />

            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-[#2c170d] to-[#452817] text-[#f7edd4] font-cinzel text-xs font-bold tracking-wider uppercase hover:border-[#d4af37] border border-transparent transition-all flex items-center justify-center space-x-1.5"
            >
              <Send className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Post Your Blessing</span>
            </button>
          </form>

          {/* List of Wishes */}
          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {wishes.map((w) => {
              const initials = w.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")
                .toUpperCase();

              return (
                <div
                  key={w.id}
                  className="p-3.5 rounded-xl bg-[#fffefb] border border-[#d4af37]/35 shadow-sm text-left flex space-x-3 items-start"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8a6813] text-[#1e1008] font-cinzel text-xs font-bold flex items-center justify-center shrink-0 shadow">
                    {initials || "❤"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-cinzel text-xs font-bold text-[#442813] truncate">
                        {w.name}
                      </span>
                      <span className="text-[10px] font-cormorant italic text-[#876510]">
                        {w.date}
                      </span>
                    </div>
                    <p className="font-cormorant italic text-xs md:text-sm text-[#5a3e26] mt-1 leading-snug">
                      &ldquo;{w.message}&rdquo;
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </OrnateFrame>
    </div>
  );
}

