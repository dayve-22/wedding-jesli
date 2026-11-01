"use client";

import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

export default function MusicPlayer({ isPlaying, setIsPlaying }: MusicPlayerProps) {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Gentle acoustic serene arpeggio chord frequencies (Peaceful pentatonic / oriental major scale)
  // C4, E4, G4, A4, B4, C5, D5, E5
  const notes = [261.63, 329.63, 392.0, 440.0, 493.88, 523.25, 587.33, 659.25];

  const playPluck = (freq: number, timeOffset: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime + timeOffset;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, now);

    // Warm soft bell/harp envelope
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 2.5);
  };

  const startAmbientLoop = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }

    let step = 0;
    const patterns = [
      [0, 2, 4, 7],
      [1, 3, 5, 7],
      [2, 4, 6, 7],
      [0, 3, 5, 7],
    ];

    if (intervalRef.current) clearInterval(intervalRef.current);

    // Play initial chord arpeggio
    const playCurrentChord = () => {
      if (!isPlayingRef.current) return;
      const chord = patterns[step % patterns.length];
      chord.forEach((noteIdx, i) => {
        playPluck(notes[noteIdx], i * 0.45);
      });
      step++;
    };

    playCurrentChord();
    intervalRef.current = setInterval(playCurrentChord, 2800);
  };

  const stopAmbientLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const toggle = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopAmbientLoop();
    } else {
      setIsPlaying(true);
      startAmbientLoop();
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startAmbientLoop();
    } else {
      stopAmbientLoop();
    }
    return () => {
      stopAmbientLoop();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggle}
        className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#2c170d] to-[#1a0e07] border border-[#d4af37] text-[#f7edd4] shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-all duration-300"
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#d4af37] animate-pulse" />
            <span className="text-xs font-cinzel tracking-wider hidden sm:inline">
              Mute Music
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#a88a53]" />
            <span className="text-xs font-cinzel tracking-wider hidden sm:inline">
              Play Music
            </span>
          </>
        )}
      </button>
    </div>
  );
}

