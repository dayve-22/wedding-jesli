import React from "react";

interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  variant?: "parchment" | "dark" | "gold";
  title?: string;
  subtitle?: string;
}

export const OrnateCorner = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 60 60"
    className={`w-10 h-10 md:w-14 md:h-14 text-[#c5a059] fill-current pointer-events-none ${className}`}
  >
    <path d="M4,4 L24,4 C14,10 10,14 4,24 Z" opacity="0.85" />
    <path
      d="M2,2 L32,2 C22,6 18,12 12,18 C6,24 6,28 2,32 Z"
      fill="none"
      stroke="#d4af37"
      strokeWidth="1.5"
    />
    <circle cx="8" cy="8" r="3" fill="#e8cf8d" />
    <circle cx="20" cy="5" r="1.5" fill="#c5a059" />
    <circle cx="5" cy="20" r="1.5" fill="#c5a059" />
    <path
      d="M10,25 Q15,15 25,10 Q18,6 10,2"
      fill="none"
      stroke="#aa8420"
      strokeWidth="1"
    />
  </svg>
);

export const OrnateCrown = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center space-x-2 text-[#d4af37] ${className}`}>
    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
    <svg viewBox="0 0 100 30" className="w-16 h-6 md:w-24 md:h-8 fill-current">
      <path d="M50,2 L55,14 L67,10 L58,20 L68,26 L50,23 L32,26 L42,20 L33,10 L45,14 Z" opacity="0.9" />
      <circle cx="50" cy="1" r="2" fill="#fff2b2" />
      <circle cx="67" cy="9" r="1.5" fill="#fff2b2" />
      <circle cx="33" cy="9" r="1.5" fill="#fff2b2" />
      <path d="M20,24 Q35,21 50,21 Q65,21 80,24" fill="none" stroke="#aa8420" strokeWidth="1" />
    </svg>
    <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
  </div>
);

export const OrnateDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center my-4 ${className}`}>
    <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
    <div className="mx-3 text-[#d4af37] flex items-center space-x-1.5">
      <span className="text-xs">✦</span>
      <span className="text-sm">❦</span>
      <span className="text-xs">✦</span>
    </div>
    <div className="h-[1px] flex-1 max-w-[80px] bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
  </div>
);

export default function OrnateFrame({
  children,
  className = "",
  variant = "parchment",
  title,
  subtitle,
}: OrnateFrameProps) {
  const isParchment = variant === "parchment";

  return (
    <div
      className={`relative mx-auto my-6 rounded-2xl p-6 md:p-10 border-2 transition-all duration-300 ${
        isParchment
          ? "parchment-card border-[#d4af37]/60 shadow-[0_15px_40px_rgba(0,0,0,0.45)] text-[#2b1810]"
          : variant === "gold"
          ? "bg-gradient-to-b from-[#2a170d] via-[#1f1109] to-[#160c06] border-[#d4af37] shadow-[0_15px_40px_rgba(0,0,0,0.6)] text-[#faf3e0]"
          : "bg-[#1d1009]/90 backdrop-blur-md border-[#d4af37]/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)] text-[#f5ebd7]"
      } ${className}`}
    >
      {/* Decorative Ornate Frame Borders */}
      <div className="absolute inset-1.5 border border-[#d4af37]/40 rounded-xl pointer-events-none" />
      <div className="absolute inset-3 border border-dashed border-[#c5a059]/30 rounded-lg pointer-events-none" />

      {/* 4 Vintage Baroque Corners */}
      <div className="absolute top-1 left-1">
        <OrnateCorner />
      </div>
      <div className="absolute top-1 right-1 rotate-90">
        <OrnateCorner />
      </div>
      <div className="absolute bottom-1 right-1 rotate-180">
        <OrnateCorner />
      </div>
      <div className="absolute bottom-1 left-1 -rotate-90">
        <OrnateCorner />
      </div>

      {/* Top Header Crown Ornament */}
      <div className="relative z-10 text-center mb-4">
        <OrnateCrown />
        {title && (
          <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-wider mt-2 text-[#7d501b] uppercase">
            {title}
          </h3>
        )}
        {subtitle && (
          <p className="font-cormorant italic text-sm md:text-base text-[#614529] mt-0.5">
            {subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom Subtle Ornament */}
      <div className="relative z-10 text-center mt-4">
        <div className="flex justify-center items-center space-x-2 text-[#c5a059]/70 text-xs">
          <span>❖</span>
          <span className="w-8 h-[1px] bg-[#c5a059]/50" />
          <span>❦</span>
          <span className="w-8 h-[1px] bg-[#c5a059]/50" />
          <span>❖</span>
        </div>
      </div>
    </div>
  );
}

