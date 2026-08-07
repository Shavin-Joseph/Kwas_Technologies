"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ArrowLeftRight, HardDrive, Ruler, Scale, Thermometer } from "lucide-react";

type UnitCategory = "storage" | "length" | "mass" | "temp";

export function UnitConverterTool() {
  const [category, setCategory] = useState<UnitCategory>("storage");
  const [inputValue, setInputValue] = useState<number>(1024);
  const [fromUnit, setFromUnit] = useState("MB");
  const [toUnit, setToUnit] = useState("GB");

  const storageRates: Record<string, number> = {
    B: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024,
  };

  const lengthRates: Record<string, number> = {
    M: 1,
    KM: 1000,
    CM: 0.01,
    FT: 0.3048,
    MILE: 1609.34,
    INCH: 0.0254,
  };

  const massRates: Record<string, number> = {
    G: 1,
    KG: 1000,
    LB: 453.592,
    OZ: 28.3495,
  };

  const calculateResult = () => {
    if (isNaN(inputValue)) return 0;

    if (category === "storage") {
      const fromBytes = inputValue * (storageRates[fromUnit] || 1);
      return fromBytes / (storageRates[toUnit] || 1);
    }
    if (category === "length") {
      const fromMeters = inputValue * (lengthRates[fromUnit] || 1);
      return fromMeters / (lengthRates[toUnit] || 1);
    }
    if (category === "mass") {
      const fromGrams = inputValue * (massRates[fromUnit] || 1);
      return fromGrams / (massRates[toUnit] || 1);
    }
    if (category === "temp") {
      if (fromUnit === "C" && toUnit === "F") return (inputValue * 9) / 5 + 32;
      if (fromUnit === "F" && toUnit === "C") return ((inputValue - 32) * 5) / 9;
      if (fromUnit === "C" && toUnit === "K") return inputValue + 273.15;
      if (fromUnit === "K" && toUnit === "C") return inputValue - 273.15;
      return inputValue;
    }
    return 0;
  };

  const result = calculateResult();

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
              <ArrowLeftRight size={14} />
              <span>Free Instant Unit &amp; Storage Conversion</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Universal Unit Converter
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Convert digital storage <strong className="text-fg">(MB, GB, TB)</strong>, length, mass, and temperature units instantly in your browser.
            </p>
          </div>

          {/* Converter Workspace */}
          <div className="mt-10 rounded-2xl border border-line bg-panel/70 p-6 sm:p-8 shadow-xl">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-line pb-4">
              {[
                { id: "storage", label: "Digital Storage (MB/GB/TB)", icon: HardDrive },
                { id: "length", label: "Length & Distance", icon: Ruler },
                { id: "mass", label: "Mass & Weight", icon: Scale },
                { id: "temp", label: "Temperature", icon: Thermometer },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCategory(item.id as UnitCategory);
                      if (item.id === "storage") { setFromUnit("MB"); setToUnit("GB"); setInputValue(1024); }
                      if (item.id === "length") { setFromUnit("KM"); setToUnit("MILE"); setInputValue(10); }
                      if (item.id === "mass") { setFromUnit("KG"); setToUnit("LB"); setInputValue(1); }
                      if (item.id === "temp") { setFromUnit("C"); setToUnit("F"); setInputValue(25); }
                    }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all ${
                      category === item.id
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

            {/* Inputs Grid */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
              {/* From Input */}
              <div className="sm:col-span-5">
                <label className="block font-mono text-xs text-muted mb-2 font-semibold">Value to Convert:</label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(parseFloat(e.target.value))}
                  className="w-full rounded-xl border border-line bg-panel2 px-4 py-3 text-lg font-mono font-bold text-fg focus:border-amber focus:outline-none transition-colors"
                />
                <select
                  value={fromUnit}
                  onChange={(e) => setFromUnit(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-panel2 px-4 py-2.5 text-xs font-mono text-fg focus:border-amber focus:outline-none"
                >
                  {category === "storage" && (
                    <>
                      <option value="B">Bytes (B)</option>
                      <option value="KB">Kilobytes (KB)</option>
                      <option value="MB">Megabytes (MB)</option>
                      <option value="GB">Gigabytes (GB)</option>
                      <option value="TB">Terabytes (TB)</option>
                    </>
                  )}
                  {category === "length" && (
                    <>
                      <option value="M">Meters (m)</option>
                      <option value="KM">Kilometers (km)</option>
                      <option value="CM">Centimeters (cm)</option>
                      <option value="FT">Feet (ft)</option>
                      <option value="MILE">Miles (mi)</option>
                      <option value="INCH">Inches (in)</option>
                    </>
                  )}
                  {category === "mass" && (
                    <>
                      <option value="KG">Kilograms (kg)</option>
                      <option value="G">Grams (g)</option>
                      <option value="LB">Pounds (lbs)</option>
                      <option value="OZ">Ounces (oz)</option>
                    </>
                  )}
                  {category === "temp" && (
                    <>
                      <option value="C">Celsius (°C)</option>
                      <option value="F">Fahrenheit (°F)</option>
                      <option value="K">Kelvin (K)</option>
                    </>
                  )}
                </select>
              </div>

              {/* Equals Arrow */}
              <div className="sm:col-span-2 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-amber/40 bg-amber/10 text-amber">
                  <ArrowLeftRight size={18} />
                </div>
              </div>

              {/* To Output */}
              <div className="sm:col-span-5">
                <label className="block font-mono text-xs text-muted mb-2 font-semibold">Converted Result:</label>
                <div className="w-full rounded-xl border border-amber/40 bg-panel2 px-4 py-3 text-lg font-mono font-bold text-amber">
                  {result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                </div>
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-panel2 px-4 py-2.5 text-xs font-mono text-fg focus:border-amber focus:outline-none"
                >
                  {category === "storage" && (
                    <>
                      <option value="B">Bytes (B)</option>
                      <option value="KB">Kilobytes (KB)</option>
                      <option value="MB">Megabytes (MB)</option>
                      <option value="GB">Gigabytes (GB)</option>
                      <option value="TB">Terabytes (TB)</option>
                    </>
                  )}
                  {category === "length" && (
                    <>
                      <option value="M">Meters (m)</option>
                      <option value="KM">Kilometers (km)</option>
                      <option value="CM">Centimeters (cm)</option>
                      <option value="FT">Feet (ft)</option>
                      <option value="MILE">Miles (mi)</option>
                      <option value="INCH">Inches (in)</option>
                    </>
                  )}
                  {category === "mass" && (
                    <>
                      <option value="KG">Kilograms (kg)</option>
                      <option value="G">Grams (g)</option>
                      <option value="LB">Pounds (lbs)</option>
                      <option value="OZ">Ounces (oz)</option>
                    </>
                  )}
                  {category === "temp" && (
                    <>
                      <option value="C">Celsius (°C)</option>
                      <option value="F">Fahrenheit (°F)</option>
                      <option value="K">Kelvin (K)</option>
                    </>
                  )}
                </select>
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
