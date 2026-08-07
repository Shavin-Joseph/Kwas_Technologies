"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const consent = localStorage.getItem("kwas_cookie_consent");
    if (!consent) {
      // Delay display slightly for smooth page load
      const timer = setTimeout(() => setShowBanner(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("kwas_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("kwas_cookie_consent", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[300] rounded-2xl border border-amber/40 bg-panel/95 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber/30 bg-amber/10 text-amber">
              <Cookie size={20} />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-fg flex items-center gap-1.5">
                <span>Cookie &amp; Privacy Notice</span>
                <ShieldCheck size={14} className="text-emerald-500" />
              </h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                KWAS Technologies uses cookies to enhance browsing experience, measure analytics, and support personalized advertising (Google AdSense). Read our{" "}
                <Link href="/privacy" className="text-amber hover:underline font-semibold">
                  Privacy Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 border-t border-line/60 pt-3">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs text-muted hover:text-fg transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-amber px-4 py-1.5 font-mono text-xs font-semibold text-ink shadow-md transition-transform hover:scale-[1.02]"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
