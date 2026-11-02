"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, MessageCircle, Send } from "lucide-react";
import OrnateFrame from "./OrnateFrame";

interface RsvpData {
  name: string;
  attendance: "yes" | "no";
  guestCount: number;
  phone: string;
  notes: string;
  submittedAt: string;
}

export default function RsvpSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState<number>(1);
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [savedData, setSavedData] = useState<RsvpData | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_rsvp_rishad_jesli");
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedData(parsed);
        setSubmitted(true);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const phoneNumber = "919995601477";
    const attendanceText =
      attendance === "yes"
        ? "Yes, I will joyfully attend! ✨"
        : "Sadly not, celebrating with you in spirit 🤍";

    let message = `Assalamu Alaikum, this is *${name.trim()}*.\nI would like to RSVP for the Wedding Reception of *Sainaba Jesli & Muhammed Rishad* (05 Dec 2026, Hayath Convention Centre, Cherumukku).\n\n*Attendance:* ${attendanceText}`;

    if (attendance === "yes") {
      message += `\n*Attending Guests:* ${guestCount} Person(s)`;
    }
    if (phone.trim()) {
      message += `\n*Contact Number:* ${phone.trim()}`;
    }
    if (notes.trim()) {
      message += `\n*Message / Du'a:* ${notes.trim()}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    const newRsvp: RsvpData = {
      name: name.trim(),
      attendance,
      guestCount: attendance === "yes" ? guestCount : 0,
      phone: phone.trim(),
      notes: notes.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem("wedding_rsvp_rishad_jesli", JSON.stringify(newRsvp));
    } catch {
      // ignore
    }

    setSavedData(newRsvp);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 85,
        spread: 80,
        origin: { y: 0.65 },
        colors: ["#d4af37", "#f3e5ab", "#aa8420", "#462b16", "#ffffff"],
      });
    } catch {
      // ignore
    }
  };

  const handleEdit = () => {
    if (savedData) {
      setName(savedData.name);
      setAttendance(savedData.attendance);
      setGuestCount(savedData.guestCount || 1);
      setPhone(savedData.phone || "");
      setNotes(savedData.notes || "");
    }
    setSubmitted(false);
  };

  return (
    <div id="rsvp" className="relative py-12 px-4 max-w-lg mx-auto">
      <OrnateFrame
        variant="parchment"
        title="Kindly RSVP"
        subtitle="READY TO CELEBRATE WITH US?"
      >
        {submitted && savedData ? (
          <div className="py-6 px-4 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-14 h-14 text-[#997a15] animate-bounce" />
            </div>
            <h4 className="font-cinzel text-xl font-bold text-[#442813]">
              {savedData.attendance === "yes"
                ? "Shukran! We Can't Wait To See You!"
                : "Thank You For Letting Us Know!"}
            </h4>
            <p className="font-cormorant italic text-base text-[#614529] leading-relaxed">
              {savedData.attendance === "yes"
                ? `Dearest ${savedData.name}, your RSVP for ${savedData.guestCount} guest(s) has been shared via WhatsApp. Your presence will multiply our celebration's happiness!`
                : `Dearest ${savedData.name}, thank you for your sincere response and prayers. You will be warmly remembered in our du'as.`}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/919995601477?text=${encodeURIComponent(
                  `Hi, this is ${savedData.name}. Following up on my RSVP for Jesli & Rishad's wedding reception.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-cinzel text-xs font-bold tracking-wider uppercase transition-all shadow flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Open WhatsApp (9995601477)</span>
              </a>

              <button
                type="button"
                onClick={handleEdit}
                className="py-2.5 px-4 text-xs font-cinzel text-[#876510] hover:text-[#442813] underline tracking-wider uppercase font-semibold transition-colors"
              >
                Edit RSVP
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 text-left pt-2">
            {/* Guest Name */}
            <div>
              <label className="block font-cinzel text-xs font-bold tracking-wider text-[#523318] uppercase mb-1.5">
                YOUR NAME / FAMILY NAME *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. Salman & Family"
                className="w-full px-4 py-2.5 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] placeholder-[#9c8266] focus:outline-none focus:ring-2 focus:ring-[#aa8420] text-sm font-medium shadow-inner"
              />
            </div>

            {/* Attendance Choice */}
            <div>
              <label className="block font-cinzel text-xs font-bold tracking-wider text-[#523318] uppercase mb-2">
                WILL YOU BE CELEBRATING WITH US ON OUR BIG DAY? *
              </label>
              <div className="space-y-2">
                <label
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                    attendance === "yes"
                      ? "bg-[#ecd9be]/60 border-[#aa8420] text-[#3d2310] font-semibold"
                      : "bg-[#fffdf7]/80 border-[#c5a059]/40 text-[#684c33] hover:bg-[#faf1e4]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={attendance === "yes"}
                    onChange={() => setAttendance("yes")}
                    className="mr-3 accent-[#997a15] w-4 h-4"
                  />
                  <span className="font-cinzel text-xs tracking-wider">
                    ABSOLUTELY, WOULDN'T MISS IT!
                  </span>
                </label>

                <label
                  className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                    attendance === "no"
                      ? "bg-[#ecd9be]/60 border-[#aa8420] text-[#3d2310] font-semibold"
                      : "bg-[#fffdf7]/80 border-[#c5a059]/40 text-[#684c33] hover:bg-[#faf1e4]"
                  }`}
                >
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={attendance === "no"}
                    onChange={() => setAttendance("no")}
                    className="mr-3 accent-[#997a15] w-4 h-4"
                  />
                  <span className="font-cinzel text-xs tracking-wider">
                    SADLY NOT, WE'LL CELEBRATE IN SPIRIT
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Count */}
            {attendance === "yes" && (
              <div>
                <label className="block font-cinzel text-xs font-bold tracking-wider text-[#523318] uppercase mb-1.5">
                  NUMBER OF ATTENDING GUESTS *
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] focus:outline-none focus:ring-2 focus:ring-[#aa8420] text-sm font-medium shadow-inner"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests (with Family)"}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Contact / Phone */}
            <div>
              <label className="block font-cinzel text-xs font-bold tracking-wider text-[#523318] uppercase mb-1.5">
                PHONE NUMBER / WHATSAPP (OPTIONAL)
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98465 XXXXX"
                className="w-full px-4 py-2.5 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] placeholder-[#9c8266] focus:outline-none focus:ring-2 focus:ring-[#aa8420] text-sm font-medium shadow-inner"
              />
            </div>

            {/* Wishes / Dietary */}
            <div>
              <label className="block font-cinzel text-xs font-bold tracking-wider text-[#523318] uppercase mb-1.5">
                WARM WISHES &amp; DU'AS FOR THE COUPLE
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share your prayers, congratulations or dietary preferences..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#c5a059]/60 bg-[#fffdf7] text-[#2b1810] placeholder-[#9c8266] focus:outline-none focus:ring-2 focus:ring-[#aa8420] text-sm font-medium shadow-inner resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#2c170d] via-[#4a2b1a] to-[#2c170d] text-[#f7edd4] border border-[#d4af37] font-cinzel text-sm font-bold tracking-widest uppercase shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:from-[#3e2112] hover:to-[#3e2112] hover:border-[#f3e5ab] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                <span>SUBMIT RSVP VIA WHATSAPP</span>
              </button>
              <p className="text-[10px] font-cinzel text-center text-[#805e1b] mt-2 tracking-wide uppercase">
                Directly sends your response to +91 99956 01477
              </p>
            </div>
          </form>
        )}
      </OrnateFrame>
    </div>
  );
}
