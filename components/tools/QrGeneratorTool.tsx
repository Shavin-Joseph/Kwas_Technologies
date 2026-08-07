"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { QrCode, Download, Copy, CheckCircle2, Link2, Type, Wifi, Mail, Phone } from "lucide-react";

type QRType = "url" | "text" | "wifi" | "email" | "phone";

export function QrGeneratorTool() {
  const [type, setType] = useState<QRType>("url");
  const [textValue, setTextValue] = useState("https://kwas.tech");
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPassword, setWifiPassword] = useState("");
  const [fgColor, setFgColor] = useState("121814");
  const [bgColor, setBgColor] = useState("ffffff");
  const [copied, setCopied] = useState(false);

  const getPayload = () => {
    if (type === "wifi") {
      return `WIFI:T:WPA;S:${wifiSsid};P:${wifiPassword};;`;
    }
    if (type === "email") {
      return `mailto:${textValue}`;
    }
    if (type === "phone") {
      return `tel:${textValue}`;
    }
    return textValue || "https://kwas.tech";
  };

  const payload = getPayload();
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(payload)}&color=${fgColor}&bgcolor=${bgColor}`;

  const copyImage = async () => {
    try {
      await navigator.clipboard.writeText(qrImageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
              <QrCode size={14} />
              <span>Free Custom QR Code Creator</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Universal QR Code Generator
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Create vector-sharp QR codes for <strong className="text-fg">Websites, Wi-Fi Passwords, Text Messages, and Contacts</strong>. Customize colors and download high-res PNG images instantly.
            </p>
          </div>

          {/* Interactive Generator Workspace */}
          <div className="mt-10 rounded-2xl border border-line bg-panel/70 p-6 sm:p-8 shadow-xl">
            {/* Type Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
              {[
                { id: "url", label: "Website URL", icon: Link2 },
                { id: "text", label: "Plain Text", icon: Type },
                { id: "wifi", label: "Wi-Fi Network", icon: Wifi },
                { id: "email", label: "Email", icon: Mail },
                { id: "phone", label: "Phone Number", icon: Phone },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setType(item.id as QRType);
                      if (item.id === "url") setTextValue("https://kwas.tech");
                      if (item.id === "email") setTextValue("info@kwas.tech");
                      if (item.id === "phone") setTextValue("+1234567890");
                    }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                      type === item.id
                        ? "bg-amber text-ink shadow-md"
                        : "bg-panel2 border border-line text-muted hover:text-fg"
                    }`}
                  >
                    <Icon size={14} />
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Form Input Section */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                {type === "wifi" ? (
                  <>
                    <div>
                      <label className="block font-mono text-xs text-muted mb-2 font-semibold">Wi-Fi Network Name (SSID):</label>
                      <input
                        type="text"
                        placeholder="e.g. MyHomeWiFi"
                        value={wifiSsid}
                        onChange={(e) => setWifiSsid(e.target.value)}
                        className="w-full rounded-xl border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-xs text-muted mb-2 font-semibold font-mono">Wi-Fi Password:</label>
                      <input
                        type="text"
                        placeholder="Network password"
                        value={wifiPassword}
                        onChange={(e) => setWifiPassword(e.target.value)}
                        className="w-full rounded-xl border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2 font-semibold">
                      {type === "url" && "Website URL:"}
                      {type === "text" && "Enter Text / Message:"}
                      {type === "email" && "Email Address:"}
                      {type === "phone" && "Phone Number:"}
                    </label>
                    <textarea
                      rows={3}
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder="Type content to encode..."
                      className="w-full rounded-xl border border-line bg-panel2 px-4 py-3 text-sm text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors resize-none"
                    />
                  </div>
                )}

                {/* Color Chooser */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2 font-semibold">QR Code Color:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={`#${fgColor}`}
                        onChange={(e) => setFgColor(e.target.value.replace("#", ""))}
                        className="h-10 w-12 cursor-pointer rounded-lg border border-line bg-panel2 p-1"
                      />
                      <span className="font-mono text-xs text-fg">#{fgColor}</span>
                    </div>
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2 font-semibold">Background Color:</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={`#${bgColor}`}
                        onChange={(e) => setBgColor(e.target.value.replace("#", ""))}
                        className="h-10 w-12 cursor-pointer rounded-lg border border-line bg-panel2 p-1"
                      />
                      <span className="font-mono text-xs text-fg">#{bgColor}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Preview & Download Card */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center rounded-2xl border border-line bg-panel2 p-6 text-center">
                <div className="rounded-2xl border border-amber/30 bg-white p-4 shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrImageUrl}
                    alt="Generated QR Code"
                    className="h-48 w-48 object-contain"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 w-full">
                  <a
                    href={qrImageUrl}
                    download="qrcode-kwas.png"
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber px-4 py-2.5 text-xs font-bold text-ink shadow-md transition-transform hover:scale-[1.02]"
                  >
                    <Download size={15} />
                    Download PNG
                  </a>
                  <button
                    onClick={copyImage}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-line bg-panel px-4 py-2.5 text-xs font-mono font-medium text-fg hover:border-amber/50"
                  >
                    {copied ? <CheckCircle2 size={15} className="text-emerald-500" /> : <Copy size={15} />}
                    {copied ? "Copied Link!" : "Copy Link"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
