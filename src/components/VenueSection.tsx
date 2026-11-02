"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Calendar, Phone, Check, Copy } from "lucide-react";
import OrnateFrame from "./OrnateFrame";

export default function VenueSection() {
  const [copied, setCopied] = useState(false);

  // Google Maps URL for Hayath Convention Centre, Cherumukku
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Hayath+Convention+Centre+Cherumukku";

  // Google Calendar Link
  const googleCalendarUrl =
    "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+|+Sainaba+Jesli+%26+Muhammed+Rishad&dates=20261205T053000Z/20261205T090000Z&details=Wedding+Reception+of+Sainaba+Jesli+AK+and+Muhammed+Rishad+P+at+Hayath+Convention+Centre,+Cherumukku.&location=Hayath+Convention+Centre,+Cherumukku";

  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Sainaba Jesli & Muhammed Rishad Wedding//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "SUMMARY:Wedding Reception | Sainaba Jesli & Muhammed Rishad",
      "DESCRIPTION:Cordially invite your esteemed presence with family for the wedding reception of Sainaba Jesli & Muhammed Rishad.",
      "LOCATION:Hayath Convention Centre, Cherumukku",
      "DTSTART:20261205T053000Z",
      "DTEND:20261205T090000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "jesli-rishad-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "Hayath Convention Centre, Cherumukku, Tanur - Tirurangadi, Kerala"
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div id="venue" className="relative py-12 px-4 max-w-lg mx-auto">
      <OrnateFrame
        variant="parchment"
        title="Venue &amp; Location"
        subtitle="HAYATH CONVENTION CENTRE, CHERUMUKKU"
      >
        <div className="space-y-6 pt-2 text-center">
          {/* Venue Card Badge */}
          <div className="p-5 rounded-2xl bg-[#fffefc] border border-[#d4af37]/50 shadow-sm text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#f4ebd9] border border-[#aa8420] flex items-center justify-center text-[#7d501b] mb-3">
              <MapPin className="w-6 h-6" />
            </div>

            <h3 className="font-cinzel text-lg md:text-xl font-bold text-[#3d2310]">
              Hayath Convention Centre
            </h3>
            <p className="font-cormorant italic text-sm md:text-base text-[#614529] mt-0.5">
              Cherumukku, Tanur – Tirurangadi Road, Malappuram
            </p>

            <div className="inline-block mt-3 px-3 py-1 rounded-full bg-[#f4ebd9] border border-[#c5a059] font-cinzel text-xs font-bold text-[#684c33]">
              Saturday, 05 December 2026 • 11:00 AM – 02:30 PM
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl bg-gradient-to-r from-[#2c170d] via-[#4a2b1a] to-[#2c170d] text-[#f7edd4] border border-[#d4af37] font-cinzel text-xs font-bold tracking-wider uppercase shadow hover:border-[#f3e5ab] transition-all flex items-center justify-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-[#d4af37]" />
              <span>Google Maps</span>
            </a>

            <button
              onClick={copyAddress}
              className="py-3 px-4 rounded-xl bg-[#fffcf5] border border-[#c5a059] text-[#442813] font-cinzel text-xs font-bold tracking-wider uppercase shadow-sm hover:bg-[#f6efe2] transition-all flex items-center justify-center space-x-2"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-700" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#876510]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Add to Calendar Section */}
          <div className="pt-2 border-t border-[#d4af37]/30 flex flex-wrap justify-center gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#efe5d3] border border-[#aa8420]/50 text-[#442813] font-cinzel text-xs font-semibold hover:bg-[#e6d8c0] transition-colors flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#876510]" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={downloadIcs}
              className="px-4 py-2 rounded-lg bg-[#efe5d3] border border-[#aa8420]/50 text-[#442813] font-cinzel text-xs font-semibold hover:bg-[#e6d8c0] transition-colors flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#876510]" />
              <span>Apple / Outlook (.ics)</span>
            </button>
          </div>

          {/* Contact & Enquiries */}
          <div className="pt-3 text-xs text-[#6e4e30]">
            <p className="font-cinzel tracking-wider uppercase font-semibold">
              Host Inquiries:
            </p>
            <a
              href="tel:+919846501477"
              className="inline-flex items-center space-x-1.5 text-[#805e1b] hover:text-[#442813] font-medium mt-1"
            >
              <Phone className="w-3 h-3" />
              <span>+91 9846 501 477 (Abdul Jaleel Babu)</span>
            </a>
          </div>
        </div>
      </OrnateFrame>
    </div>
  );
}

