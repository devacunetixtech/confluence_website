'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

interface NavbarProps {
  isRegisterOpen?: boolean;
  setIsRegisterOpen?: (open: boolean) => void;
}

export default function Navbar({ isRegisterOpen: propsRegisterOpen, setIsRegisterOpen: propsSetRegisterOpen }: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [localRegisterOpen, setLocalRegisterOpen] = useState(false);
  
  const isRegisterOpen = propsRegisterOpen !== undefined ? propsRegisterOpen : localRegisterOpen;
  const setIsRegisterOpen = propsSetRegisterOpen !== undefined ? propsSetRegisterOpen : setLocalRegisterOpen;

  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const sheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || "https://script.google.com/macros/s/YOUR_APPS_SCRIPT_ID/exec";

      const response = await fetch(sheetsUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `email=${encodeURIComponent(email)}`
      });

      // With mode: 'no-cors', the response status is 0. We treat it as success.
      if (response.status === 0 || response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setIsRegisterOpen(false);
          setEmail("");
        }, 3000);
      } else {
        setError("Failed to submit. Please try again.");
      }
    } catch {
      setError("A connection error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    // { label: "The Human Layer", href: "#human-layer" },
    { label: "Speakers", href: "#speakers" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "BCL Hub", href: "https://blockchainlautech.club" },
  ];

  return (
    <>
      {/* Global Announcement Bar */}
      <div className="bg-[#0C1246] text-white py-2 px-4 sm:px-6 text-[10px] sm:text-xs font-bold z-50 fixed top-0 left-0 w-full flex items-center border-b border-white/10 shadow-sm overflow-hidden select-none">
        <div className="bg-[#0C1246] pr-4 z-10 flex items-center flex-shrink-0">
          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[#286cfd] text-[9px] font-black uppercase tracking-wider animate-pulse">
            ANNOUNCEMENT
          </span>
        </div>
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="animate-marquee whitespace-nowrap flex gap-16 text-slate-200">
            <span>The Largest Student Web3 Conference in Southwestern Nigeria is Back! Powered by Blockchain LAUTECH — a Tier-1 University Blockchain Club in Africa.</span>
            <span>The Largest Student Web3 Conference in Southwestern Nigeria is Back! Powered by Blockchain LAUTECH — a Tier-1 University Blockchain Club in Africa.</span>
            <span>The Largest Student Web3 Conference in Southwestern Nigeria is Back! Powered by Blockchain LAUTECH — a Tier-1 University Blockchain Club in Africa.</span>
            <span>The Largest Student Web3 Conference in Southwestern Nigeria is Back! Powered by Blockchain LAUTECH — a Tier-1 University Blockchain Club in Africa.</span>
          </div>
        </div>
      </div>

      {/* Background overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-md transition-all duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating Navbar Container */}
      <div className="bg-black/80 backdrop-blur-md max-w-[1200px] mx-auto rounded-full shadow-2xl border border-white/10 fixed top-12 sm:top-12 left-1/2 transform -translate-x-1/2 w-[92%] transition-all duration-300 z-50">
        <nav className="px-6 py-3.5">
          <div className="flex items-center justify-between mx-auto gap-4">
            
            {/* Logo */} 
            <Link href="/" className="flex items-center flex-shrink-0 transition-transform hover:scale-[1.02]">
              <Image
                src="/actual-logo.png"
                width={160}
                height={35}
                alt="Confluence Logo"
                className="w-28 sm:w-36 md:w-[150px] h-auto invert"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-300 hover:text-[#ccff00] font-semibold text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Buttons & Actions */}
            <div className="flex space-x-3 items-center flex-shrink-0">
              <Link href="/2025">
                <button
                  type="button"
                  className="text-slate-300 hover:text-white border border-white/10 hover:border-white/20 font-bold rounded-full text-xs px-3.5 py-2 text-center cursor-pointer transition-all duration-200 max-sm:hidden"
                >
                  Relive 2025
                </button>
              </Link>
              
              <button
                onClick={() => setIsRegisterOpen(true)}
                type="button"
                className="text-black bg-[#ccff00] hover:bg-[#b5e000] font-black rounded-full text-xs sm:text-sm px-5 py-2 sm:py-2.5 text-center cursor-pointer transition-all duration-200 neo-shadow-blue border border-black"
              >
                Join Waitlist
              </button>

              {/* Mobile hamburger menu */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center p-2 justify-center text-slate-300 rounded-full md:hidden hover:bg-white/5 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Fullscreen Navigation Menu */}
          <div
            id="mobile-menu"
            className={`${
              isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95 pointer-events-none"
            } absolute top-[calc(100%+12px)] left-0 w-full bg-black/95 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl p-6 md:hidden transition-all duration-300 origin-top z-50`}
          >
            <ul className="flex flex-col space-y-4 font-semibold text-slate-200 text-lg">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block py-2 px-4 rounded-xl hover:bg-white/5 hover:text-[#ccff00] transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <hr className="border-white/10 my-4" />
              <li className="flex flex-col gap-3">
                <Link href="/2025" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full py-3 border border-white/10 rounded-xl font-bold text-slate-300 hover:bg-white/5 transition-colors">
                    Relive Confluence 2025
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Registration Modal (TBA / Join waitlist vibe) */}
      {isRegisterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setIsRegisterOpen(false)}
          />
          <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-10 w-full max-w-lg overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
            
            {/* Top border accent line */}
            <div className="absolute top-0 left-0 w-full h-2.5 bg-gradient-to-r from-[#286cfd] to-purple-600" />
            
            <button 
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-50 text-[#286cfd] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">You&apos;re on the list!</h3>
                <p className="text-slate-600">
                  Thank you for registering your interest in Confluence 2.0. We will email you details soon.
                </p>
              </div>
            ) : (
              <div>
                <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-[#286cfd] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  <span className="w-2 h-2 bg-[#286cfd] rounded-full animate-pulse"></span>
                  COMING SEPTEMBER 2026
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-2">
                  JOIN CONFLUENCE 2.0
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mb-6">
                  Enter your email to receive early access, speaker announcements, and official registration details.
                </p>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
                    <input 
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#286cfd] focus:border-transparent font-medium text-slate-900 transition-all placeholder-slate-400 disabled:opacity-50"
                    />
                    {error && (
                      <p className="text-red-500 text-xs font-semibold mt-2 animate-in fade-in">
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#286cfd] hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/20 cursor-pointer transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Submitting...
                      </>
                    ) : (
                      "Keep Me Updated"
                    )}
                  </button>
                </form>

                <p className="text-slate-400 text-xs text-center mt-5">
                  LAUTECH, Ogbomoso • Nigeria
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
