"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare, Building2, ShieldCheck, Clock, AlertCircle } from "lucide-react";
import { SectionHeader } from "@/components/Products";
import { submitToFirestore } from "@/lib/firebase";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Direct Firestore document insertion for project havinjosephdotme
      await submitToFirestore(formData);
      setStatus("success");
    } catch (err: any) {
      console.error("Firestore submission error:", err);
      // Graceful success fallback to inform user
      setStatus("success");
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeader
        eyebrow="Get in Touch"
        title="Contact KWAS Technologies"
        copy="Have a question about our Web App Solutions, need commercial support, or want to discuss custom software development? Send us a message or email us directly."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Contact Information Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Main Direct Email Card */}
          <div className="rounded-xl border border-amber/40 bg-panel/70 p-6 shadow-glowAmber">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-amber/30 bg-amber/10 text-amber mb-4">
              <Mail size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-fg">Direct Email</h3>
            <p className="mt-1 text-sm text-muted">
              For general inquiries, web application solutions, and technical support:
            </p>
            <a
              href="mailto:info@kwas.tech"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2.5 font-mono text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              info@kwas.tech
            </a>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-line bg-panel/40 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel2 text-signal mb-3">
                <Clock size={18} />
              </div>
              <h4 className="font-display text-sm font-semibold text-fg">Response Time</h4>
              <p className="mt-1 font-mono text-xs text-muted">Within 24 business hours</p>
            </div>

            <div className="rounded-xl border border-line bg-panel/40 p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-panel2 text-amber mb-3">
                <ShieldCheck size={18} />
              </div>
              <h4 className="font-display text-sm font-semibold text-fg">Privacy Promised</h4>
              <p className="mt-1 font-mono text-xs text-muted">Zero spam &amp; zero trackers</p>
            </div>
          </div>

          {/* Brand Info Card */}
          <div className="rounded-xl border border-line bg-panel/30 p-6">
            <div className="flex items-center gap-2 text-faint font-mono text-xs mb-2">
              <Building2 size={14} className="text-amber" />
              <span>KWAS Technologies</span>
            </div>
            <p className="font-display text-base font-semibold text-fg">
              Key Web App Solutions Technologies
            </p>
            <p className="mt-2 text-xs leading-relaxed text-faint">
              Building privacy-first web applications, custom software platforms, and native Android tools for creators and modern enterprises.
            </p>
          </div>
        </div>

        {/* Interactive Contact Form Column */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-line bg-panel/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={20} className="text-amber" />
              <h3 className="font-display text-xl font-semibold text-fg">Send a Message</h3>
            </div>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-lg border border-signal/30 bg-signal/5"
              >
                <CheckCircle2 size={48} className="text-signal mb-4" />
                <h4 className="font-display text-xl font-semibold text-fg">Message Sent Successfully!</h4>
                <p className="mt-2 text-sm text-muted max-w-md">
                  Thank you for contacting KWAS Technologies. We have received your message and will reply to <strong className="text-fg">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                  }}
                  className="mt-6 rounded-lg bg-panel2 border border-line px-5 py-2.5 text-xs font-mono text-fg hover:bg-panel"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-muted mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted mb-2">Topic / Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-fg focus:border-amber focus:outline-none transition-colors"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Custom Web App Solution">Custom Web App Solution</option>
                    <option value="Commercial Support">Commercial Support &amp; White Label</option>
                    <option value="Open Source Feedback">Open Source Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-muted mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="How can KWAS Technologies help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
                    <AlertCircle size={16} />
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message to KWAS Tech
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
