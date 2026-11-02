"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log("Audio play blocked by browser policy or paused:", err);
          setIsPlaying(false);
        });
      }
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, setIsPlaying]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log("Play failed:", err);
        });
    }
  };

  return (
    <>
      {/* Hidden Audio Tag playing the user's wedding nasheed */}
      <audio
        ref={audioRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* Floating Top-Right Music Toggle with Scroll Shrink Effect */}
      <button
        onClick={toggle}
        className={`fixed top-4 right-4 sm:top-6 sm:right-6 z-[60] h-10 rounded-full flex items-center justify-center bg-[#25140b]/85 backdrop-blur-md shadow-[0_8px_25px_rgba(0,0,0,0.6)] border border-[#d4af37]/50 text-[#f5e6b3] hover:text-[#ffffff] hover:border-[#f3e5ab] hover:scale-105 transition-all duration-300 cursor-pointer group ${
          isScrolled ? "w-10 px-0 gap-0" : "px-3.5 gap-2"
        }`}
        title={isPlaying ? "Mute Wedding Nasheed" : "Play Wedding Nasheed"}
        aria-label={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse shrink-0" />
        ) : (
          <VolumeX className="w-4 h-4 text-[#a88a53] shrink-0" />
        )}

        {/* Text for desktop */}
        <span
          className={`font-cinzel text-[10px] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 hidden sm:block ${
            isScrolled ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
          }`}
        >
          {isPlaying ? "Music On" : "Music Off"}
        </span>

        {/* Text for mobile */}
        <span
          className={`font-cinzel text-[10px] font-bold tracking-wider uppercase overflow-hidden whitespace-nowrap transition-all duration-300 sm:hidden ${
            isScrolled ? "max-w-0 opacity-0" : "max-w-[90px] opacity-100"
          }`}
        >
          {isPlaying ? "Sound" : "Mute"}
        </span>
      </button>
    </>
  );
}
