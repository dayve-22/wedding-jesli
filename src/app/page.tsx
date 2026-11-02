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

  // Auto-scroll smoothly through the invitation after envelope opens
  useEffect(() => {
    if (!isOpen) return;

    // Reset window scroll to top when page opens
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    let animationFrameId: number;
    let isStopped = false;
    let isInteracting = false;
    let resumeTimeout: NodeJS.Timeout | null = null;

    // Pause on touch or mouse press
    const handleTouchStart = () => {
      isInteracting = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    // Resume scrolling after releasing screen
    const handleTouchEnd = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isInteracting = false;
      }, 600);
    };

    // Pause on mouse wheel / trackpad scroll and resume shortly after
    const handleWheel = () => {
      isInteracting = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        isInteracting = false;
      }, 1000);
    };

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("mousedown", handleTouchStart);
      window.removeEventListener("mouseup", handleTouchEnd);
      window.removeEventListener("wheel", handleWheel);
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("touchcancel", handleTouchEnd, { passive: true });
    window.addEventListener("mousedown", handleTouchStart, { passive: true });
    window.addEventListener("mouseup", handleTouchEnd, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Wait 1 second after opening, then scroll down slowly and smoothly
    const timer = setTimeout(() => {
      if (isStopped) return;

      const getTargetY = () =>
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight
        ) - window.innerHeight;

      let lastTime = performance.now();
      const pixelsPerSecond = 38; // Gentle, smooth reading pace

      const animateScroll = (now: number) => {
        if (isStopped) return;

        const deltaTime = (now - lastTime) / 1000;
        lastTime = now;

        const targetY = getTargetY();

        // Check if reached the end
        if (window.scrollY >= targetY - 2) {
          isStopped = true;
          cleanupListeners();
          return;
        }

        // Only scroll if user is not currently touching / interacting
        if (!isInteracting) {
          const nextY = Math.min(
            targetY,
            window.scrollY + pixelsPerSecond * deltaTime
          );
          window.scrollTo({
            top: nextY,
            left: 0,
            behavior: "instant" as ScrollBehavior,
          });
        }

        animationFrameId = requestAnimationFrame(animateScroll);
      };

      animationFrameId = requestAnimationFrame(animateScroll);
    }, 1000);

    return () => {
      clearTimeout(timer);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      isStopped = true;
      cancelAnimationFrame(animationFrameId);
      cleanupListeners();
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
                S/o. A.K Hassainar Bava (Late) &amp; Sainaba K (Late) &bull; D/o Moothedath Marakkar (Late) &amp; Thithikutti (Late)
              </p>
              <p className="font-cinzel text-[11px] text-[#c5a059] tracking-wider mt-1.5">
                Anekulangara / Kalliyath (H), Near HSM School, Tanur &bull; Ph: +91 9846 501 477
              </p>

              <OrnateDivider className="my-5" />

              <p className="font-cormorant italic text-base md:text-lg text-[#f3e5ab] px-2 leading-relaxed">
                Cordially invite your esteemed presence with family for the wedding reception of our Daughter
              </p>

              <div className="my-5">
                <h2 className="font-script text-4xl md:text-5xl text-[#fff2b2] drop-shadow-[0_2px_12px_rgba(212,175,55,0.4)]">
                  Sainaba Jesli AK
                </h2>
                <p className="font-cinzel text-[10px] md:text-xs text-[#d4af37] tracking-wider mt-1">
                  GGD/o. Kalliyath Mohammed Haji (Late) &amp; Beepathu (Late)
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
