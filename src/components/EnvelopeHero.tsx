"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Sparkles, Heart } from "lucide-react";

interface EnvelopeHeroProps {
  onOpenInvitation: () => void;
  isPlayingMusic: boolean;
  toggleMusic: () => void;
}

export default function EnvelopeHero({
  onOpenInvitation,
  isPlayingMusic,
  toggleMusic,
}: EnvelopeHeroProps) {
  const [phase, setPhase] = useState<
    "idle" | "unsealing" | "flap-open" | "letter-emerge" | "complete"
  >("idle");
  const [isHovered, setIsHovered] = useState(false);

  const handleOpen = (e?: React.MouseEvent) => {
    if (phase !== "idle") return;

    // Start ambient music if not yet playing
    if (!isPlayingMusic) {
      toggleMusic();
    }

    // Phase 1: Unsealing & Golden Confetti Burst
    setPhase("unsealing");

    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.55;

    try {
      confetti({
        particleCount: 65,
        spread: 80,
        origin: { x, y },
        colors: ["#d4af37", "#f3e5ab", "#aa8420", "#faf6ee", "#ffffff"],
        gravity: 0.7,
        scalar: 1.1,
      });
    } catch {
      // ignore
    }

    // Phase 2: Flap Opens Backwards
    setTimeout(() => {
      setPhase("flap-open");
    }, 450);

    // Phase 3: Letter Emerges
    setTimeout(() => {
      setPhase("letter-emerge");
      try {
        confetti({
          particleCount: 45,
          spread: 100,
          origin: { x: 0.5, y: 0.4 },
          colors: ["#d4af37", "#f5e6b3", "#ecd9be"],
          gravity: 0.6,
          scalar: 0.9,
        });
      } catch {
        // ignore
      }
    }, 1100);

    // Phase 4: Complete transition to next page
    setTimeout(() => {
      setPhase("complete");
      setTimeout(() => {
        onOpenInvitation();
      }, 700);
    }, 2800);
  };

  const isFlapOpen =
    phase === "flap-open" || phase === "letter-emerge" || phase === "complete";
  const isLetterEmerging = phase === "letter-emerge" || phase === "complete";

  return (
    <div
      className={`fixed inset-0 z-50 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-4 bg-[#140b07] transition-all duration-700 select-none ${
        phase === "complete"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,44,29,0.55)_0%,rgba(20,11,7,0.98)_75%)] pointer-events-none" />

      {/* Floating Sparkles & Arabesque Pattern Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Top Header Monogram & Bismillah */}
      <div
        className={`relative z-10 text-center mb-6 transition-all duration-500 ${
          phase !== "idle" ? "opacity-30 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="font-amiri text-lg md:text-xl text-[#d4af37] tracking-wider mb-1">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
        <span className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/40 bg-[#2b170f]/80 font-cinzel text-[11px] tracking-[0.25em] text-[#e8cf8d] uppercase shadow">
          Wedding Reception Invitation
        </span>
      </div>

      {/* Envelope Card Container */}
      <div className="relative z-10 w-full max-w-md">
        <div
          className={`relative rounded-3xl p-1 bg-gradient-to-b from-[#e3cca6] via-[#9e762c] to-[#462b16] shadow-[0_30px_70px_rgba(0,0,0,0.9)] cursor-pointer group transition-transform duration-500 ${
            isHovered && phase === "idle" ? "scale-[1.02]" : "scale-100"
          }`}
          onClick={handleOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Envelope Body */}
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#25140a] via-[#1c0e07] to-[#120803] p-7 md:p-9 border border-[#d4af37]/35 text-center overflow-hidden min-h-[380px] flex flex-col justify-between">
            {/* Corner Filigree */}
            <div className="absolute top-3 left-3 text-[#d4af37]/40 text-xs">❦</div>
            <div className="absolute top-3 right-3 text-[#d4af37]/40 text-xs">❦</div>
            <div className="absolute bottom-3 left-3 text-[#d4af37]/40 text-xs">❦</div>
            <div className="absolute bottom-3 right-3 text-[#d4af37]/40 text-xs">❦</div>

            {/* Sliding Letter Animation (Card emerges when opened) */}
            <div
              className={`absolute left-4 right-4 rounded-xl p-6 parchment-card border border-[#d4af37] text-center shadow-2xl transition-all duration-1000 ease-out z-20 ${
                isLetterEmerging
                  ? "top-4 opacity-100 scale-100 pointer-events-auto"
                  : "top-28 opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="w-8 h-8 mx-auto rounded-full bg-[#f4ebd9] border border-[#d4af37] flex items-center justify-center text-[#8f6f1c] mb-2">
                <Heart className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
              </div>
              <p className="font-cinzel text-[10px] tracking-widest text-[#7a5c42] uppercase font-bold">
                You Are Cordially Invited
              </p>
              <h3 className="font-script text-3xl text-[#3d2310] mt-1">
                Jesli &amp; Rishad
              </h3>
              <p className="font-cormorant italic text-xs text-[#5c3e25] mt-1">
                Saturday, 05 December 2026 &bull; Hayath Convention Centre
              </p>
              <div className="mt-3 text-[10px] font-cinzel text-[#8f6f1c] tracking-widest animate-pulse font-bold">
                OPENING CELEBRATION...
              </div>
            </div>

            {/* Envelope Flap Animation Overlay */}
            <div
              className={`absolute -top-10 left-0 right-0 h-28 bg-gradient-to-b from-[#3a2012] via-[#28150b] to-transparent pointer-events-none transition-transform duration-700 origin-top ${
                isFlapOpen ? "scale-y-0 opacity-20" : "scale-y-100 opacity-60"
              }`}
            />

            {/* Monogram Royal Crest */}
            <div className="flex justify-center my-2">
              <div className="relative w-20 h-20 rounded-full border-2 border-[#d4af37] p-1 flex items-center justify-center bg-gradient-to-tr from-[#1b0d06] to-[#361c0e] shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                <div className="w-full h-full rounded-full border border-dashed border-[#c5a059]/60 flex flex-col items-center justify-center">
                  <span className="font-cinzel text-lg font-bold text-[#f5e6b3] tracking-widest">
                    J &amp; R
                  </span>
                  <span className="text-[9px] font-cinzel text-[#d4af37] -mt-1 tracking-wider">
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Couple Names */}
            <div>
              <h1 className="font-script text-4xl md:text-5xl text-[#f3e5ab] tracking-wide mb-1 drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)]">
                Jesli &amp; Rishad
              </h1>
              <p className="font-cinzel text-xs md:text-sm tracking-[0.2em] text-[#d4af37] uppercase font-semibold">
                Sainaba Jesli AK &amp; Muhammed Rishad P
              </p>
            </div>

            {/* Event Date Pill */}
            <div className="flex items-center justify-center my-3 space-x-3 text-[#c5a059]">
              <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c5a059]" />
              <span className="font-cormorant italic text-xs md:text-sm text-[#ecd9be]">
                Saturday, December 05, 2026
              </span>
              <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c5a059]" />
            </div>

            {/* 3D Wax Seal Button */}
            <div className="relative my-4 flex justify-center">
              <div
                className={`relative w-24 h-24 rounded-full p-1.5 transition-all duration-500 flex items-center justify-center ${
                  phase === "unsealing"
                    ? "scale-125 rotate-12 opacity-80"
                    : isHovered
                    ? "scale-110"
                    : "scale-100"
                }`}
              >
                {/* 3D Gold Wax Seal */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d4af37] via-[#aa8420] to-[#614709] p-1 shadow-[0_12px_28px_rgba(0,0,0,0.85),inset_0_2px_4px_rgba(255,255,255,0.5)] flex items-center justify-center border border-[#fff2b2]/40">
                  <div className="w-full h-full rounded-full border border-[#806112] flex flex-col items-center justify-center bg-[#876510] text-[#fff6d6] shadow-inner">
                    <span className="text-xs">👑</span>
                    <span className="font-cinzel text-[11px] font-bold tracking-widest mt-0.5">
                      {phase === "idle" ? "CLICK" : "OPENING"}
                    </span>
                    {phase === "idle" && (
                      <span className="text-[8px] font-cinzel text-[#f3e5ab] tracking-widest">
                        TO OPEN
                      </span>
                    )}
                  </div>
                </div>

                {/* Wax relief edges */}
                <div className="absolute -top-1 right-2 w-3 h-3 bg-[#aa8420] rounded-full blur-[0.5px]" />
                <div className="absolute -bottom-1 left-3 w-4 h-3 bg-[#947217] rounded-full blur-[0.5px]" />
                <div className="absolute top-2 -left-1 w-2.5 h-2.5 bg-[#aa8420] rounded-full blur-[0.5px]" />
              </div>
            </div>

            {/* Invitation teaser */}
            <p className="font-cormorant italic text-xs md:text-sm text-[#cfbca8] px-4 leading-relaxed">
              &ldquo;You received this invitation because we want you by our side on our special day!&rdquo;
            </p>

            <div className="mt-4 flex items-center justify-center space-x-2 text-[#e8cf8d] text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />
              <span>Tap the Wax Seal to Open</span>
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
