"use client";

import React, { useState, useEffect } from "react";
import { Info, X, Sparkles, MessageCircle, Heart } from "lucide-react";

export default function DeveloperCreditWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Info / "Want your own?" Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-4 left-4 sm:top-6 sm:left-6 z-[60] h-10 rounded-full flex items-center justify-center bg-[#25140b]/85 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)] border border-[#d4af37]/50 text-[#f5e6b3] hover:text-[#ffffff] hover:border-[#f3e5ab] hover:scale-105 transition-all duration-300 cursor-pointer group ${
          isScrolled ? "w-10 px-0 gap-0" : "px-3.5 gap-2"
        }`}
        title="Custom Invitation Inquiries & Developer Credits"
      >
        <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
        <span
          className={`font-cinzel text-[10px] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 hidden sm:block ${
            isScrolled ? "max-w-0 opacity-0" : "max-w-[130px] opacity-100"
          }`}
        >
          Want your own?
        </span>
        <span
          className={`font-cinzel text-[10px] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 sm:hidden ${
            isScrolled ? "max-w-0 opacity-0" : "max-w-[100px] opacity-100"
          }`}
        >
          Create
        </span>
      </button>

      {/* Luxury Developer Inquiry Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#0e0704]/80 backdrop-blur-sm animate-fade-in transition-opacity"
          />

          {/* Modal Card */}
          <div className="relative z-10 w-full max-w-md p-6 sm:p-8 rounded-3xl text-center shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden border-2 border-[#d4af37]/60 parchment-card animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#7a5c42] hover:text-[#2b1810] hover:bg-[#d4af37]/20 transition-colors cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Corner filigree */}
            <div className="absolute top-2 left-2 text-[#d4af37]/40 text-xs">❦</div>
            <div className="absolute bottom-2 right-2 text-[#d4af37]/40 text-xs">❦</div>

            {/* Decorative Header */}
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#aa8420]" />
              <span className="font-cinzel text-[11px] tracking-[0.22em] uppercase text-[#876510] font-bold">
                Custom Web Development
              </span>
              <Sparkles className="w-4 h-4 text-[#aa8420]" />
            </div>

            <h3 className="font-cinzel font-bold text-2xl text-[#3d2310] leading-tight mb-2">
              Craft Your Dream Invitation
            </h3>
            <p className="font-cormorant italic text-sm md:text-base text-[#614529] leading-relaxed mb-6 max-w-sm mx-auto">
              Looking for a bespoke luxury wedding invitation, animated wax seal experience, or premium celebration website? Connect directly with the developers:
            </p>

            {/* Developers Contact Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <a
                href="https://wa.me/918590190369?text=Hi!%20I%20saw%20the%20wedding%20invitation%20website%20and%20would%20love%20to%20get%20a%20custom%20invitation%20site%20built%20for%20myself."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-cinzel font-bold tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="https://www.instagram.com/daybuildemup/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-cinzel font-bold tracking-wider text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                style={{
                  background:
                    "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                }}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>@daybuildemup</span>
              </a>
            </div>

            {/* Note & Features */}
            <div className="pt-3 border-t border-[#d4af37]/30 text-[11px] font-cormorant italic text-[#7a5c42]">
              Custom luxury themes &bull; Interactive Wax Seals &bull; Live Countdowns &bull; Ambient Music &bull; Instant RSVP
            </div>

            <div className="mt-3 flex items-center justify-center space-x-1.5 text-[10px] font-cinzel text-[#997a15] font-semibold uppercase tracking-wider">
              <span>Developed with</span>
              <Heart className="w-3 h-3 fill-[#aa8420] text-[#aa8420]" />
              <span>by DayBuildEmUp</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

