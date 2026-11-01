"use client";

import React, { useState, useEffect } from "react";
import EnvelopeHero from "@/components/EnvelopeHero";
import CalendarCard from "@/components/CalendarCard";
import CountdownTimer from "@/components/CountdownTimer";
import VenueSection from "@/components/VenueSection";
import StoryCard from "@/components/StoryCard";
import RsvpSection from "@/components/RsvpSection";
import FamilyFooter from "@/components/FamilyFooter";
import MusicPlayer from "@/components/MusicPlayer";
import DeveloperCreditWidget from "@/components/DeveloperCreditWidget";
import { OrnateCrown, OrnateDivider } from "@/components/OrnateFrame";

export default function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Auto-scroll smoothly through the invitation after envelope opens (from previous site)
  useEffect(() => {
    if (!isOpen) return;

    // Reset window scroll to top when page opens
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    let animationFrameId: number;
    let isCancelled = false;

    // Only cancel if user intentionally tries to scroll manually
    const handleUserScroll = () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      cleanup();
    };

    const handleUserKey = (e: KeyboardEvent) => {
      if (
        [
          "ArrowDown",
          "ArrowUp",
          "PageDown",
          "PageUp",
          "Space",
          "Home",
          "End",
        ].includes(e.code)
      ) {
        handleUserScroll();
      }
    };

    const cleanup = () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
      window.removeEventListener("keydown", handleUserKey);
    };

    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    window.addEventListener("keydown", handleUserKey, { passive: true });

    // Wait 4.5 seconds after opening, then scroll down slowly and smoothly
    const timer = setTimeout(() => {
      if (isCancelled) return;

      const getTargetY = () =>
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        ) - window.innerHeight;

      let lastTime = performance.now();
      const pixelsPerSecond = 38; // Gentle, smooth reading pace

      const animateScroll = (now: number) => {
        if (isCancelled) return;

        const deltaTime = (now - lastTime) / 1000;
        lastTime = now;

        const targetY = getTargetY();
        if (window.scrollY < targetY - 2) {
          const nextY = window.scrollY + pixelsPerSecond * deltaTime;
          window.scrollTo({
            top: nextY,
            left: 0,
            behavior: "instant" as ScrollBehavior,
          });
          animationFrameId = requestAnimationFrame(animateScroll);
        } else {
          cleanup();
        }
      };

      animationFrameId = requestAnimationFrame(animateScroll);
    }, 4500);

    return () => {
      clearTimeout(timer);
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      cleanup();
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(true);
  };

  return (
    <main
      className={`min-h-screen bg-[#140b07] text-[#f7ede2] relative selection:bg-[#d4af37] selection:text-[#180d07] ${
        !isOpen ? "h-screen overflow-hidden" : "overflow-x-hidden"
      }`}
    >
      {/* Background Ambience Texture */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(66,38,24,0.35)_0%,rgba(20,11,7,0.95)_75%)] -z-10" />

      {/* Floating Ambient Music Controller */}
      <MusicPlayer
        isPlaying={isPlayingMusic}
        setIsPlaying={setIsPlayingMusic}
      />

      {/* Developer Credit & Inquiry Widget */}
      <DeveloperCreditWidget />

      {!isOpen ? (
        /* SCREEN 1: WAX SEAL ENVELOPE OPENING PAGE (Isolated view - bottom content is invisible & not scrollable) */
        <EnvelopeHero
          onOpenInvitation={handleOpenInvitation}
          isPlayingMusic={isPlayingMusic}
          toggleMusic={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      ) : (
        /* SCREEN 2: INVITATION CELEBRATION DETAILS (Appears only after seal opens) */
        <div className="animate-fade-in transition-opacity duration-700">
          {/* Islamic Greeting & Formal Invitation Announcement */}
          <section className="pt-12 pb-8 px-4 max-w-xl mx-auto text-center">
            <OrnateCrown className="mb-4" />

            <p className="font-amiri text-2xl md:text-3xl text-[#d4af37] tracking-wider mb-2 leading-relaxed">
              السلام عليكم ورحمة الله وبركاته
            </p>

            <p className="font-cormorant italic text-sm md:text-base text-[#cfbca8] mb-6">
              In the name of Allah, the most Gracious and the Most Merciful
            </p>

            <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#241309] to-[#160b05] border border-[#d4af37]/45 shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
              <p className="font-cinzel text-xs md:text-sm tracking-[0.2em] text-[#e8cf8d] uppercase font-semibold">
                Mr. Abdul Jaleel (Babu) &amp; Mrs. Jameela
              </p>
              <p className="font-cormorant italic text-xs text-[#a88a53] mt-0.5">
                S/o. A.K Hassainar Bava (Late) &amp; Sainaba K (Late) • D/o Moothedath Marakkar (Late) &amp; Thithikutti (Late)
              </p>

              <OrnateDivider className="my-5" />

              <p className="font-cormorant italic text-base md:text-lg text-[#f3e5ab] px-2 leading-relaxed">
                Cordially invite your esteemed presence with family for the wedding reception of our beloved Daughter
              </p>

              <div className="my-5">
                <h2 className="font-script text-4xl md:text-5xl text-[#fff2b2] drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                  Sainaba Jesli AK
                </h2>
                <p className="font-cinzel text-[10px] md:text-xs text-[#d4af37] tracking-wider mt-1">
                  GS/o. Kalliyath Mohammed Haji (Late) &amp; Beepathu (Late)
                </p>
              </div>

              <div className="flex items-center justify-center my-3 text-[#d4af37]">
                <span className="font-script text-2xl text-[#f3e5ab]">With</span>
              </div>

              <div className="my-5">
                <h2 className="font-script text-4xl md:text-5xl text-[#fff2b2] drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                  Muhammed Rishad P
                </h2>
                <p className="font-cinzel text-[10px] md:text-xs text-[#d4af37] tracking-wider mt-1">
                  S/o Mr. Abdul Hameed and Mrs. Balkees
                </p>
                <p className="font-cormorant italic text-xs text-[#a88a53] mt-0.5">
                  Parambil House, Venniyur
                </p>
              </div>
            </div>
          </section>

          {/* CALENDAR & DATE HIGHLIGHT SECTION */}
          <section className="py-6 px-4">
            <CalendarCard />
          </section>

          {/* COUNTDOWN TIMER SECTION */}
          <section className="py-6 px-4">
            <CountdownTimer />
          </section>

          {/* VENUE & DIRECTIONS SECTION */}
          <section className="py-6 px-4">
            <VenueSection />
          </section>

          {/* SPIRITUAL BLESSING & STORY (No couple photos) */}
          <section className="py-6 px-4">
            <StoryCard />
          </section>

          {/* RSVP FORM SECTION (With WhatsApp 9995601477 submission) */}
          <section className="py-6 px-4">
            <RsvpSection />
          </section>

          {/* FAMILY FOOTER & SPONSORS */}
          <FamilyFooter />
        </div>
      )}
    </main>
  );
}
