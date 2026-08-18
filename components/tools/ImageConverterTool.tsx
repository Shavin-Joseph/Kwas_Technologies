"use client";

import { useState, useRef, useEffect } from "react";
import { CTA } from "@/components/CTA";
import { Image as ImageIcon, Download, Upload, RefreshCw, Sparkles, ShieldCheck, Zap, Maximize2, Lock, Unlock } from "lucide-react";

export function ImageConverterTool() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [origDimensions, setOrigDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });
  const [targetWidth, setTargetWidth] = useState<number>(0);
  const [targetHeight, setTargetHeight] = useState<number>(0);
  const [lockRatio, setLockRatio] = useState<boolean>(true);
  const [targetFormat, setTargetFormat] = useState<"image/webp" | "image/jpeg" | "image/png">("image/webp");
  const [quality, setQuality] = useState<number>(0.8);
  const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
  const [convertedSize, setConvertedSize] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      const url = URL.createObjectURL(selected);
      setPreviewUrl(url);
      setConvertedUrl(null);
      setConvertedSize(null);

      const img = new Image();
      img.src = url;
      img.onload = () => {
        setOrigDimensions({ width: img.width, height: img.height });
        setTargetWidth(img.width);
        setTargetHeight(img.height);
      };
    }
  };

  const handleWidthChange = (val: number) => {
    setTargetWidth(val);
    if (lockRatio && origDimensions.width > 0) {
      const ratio = origDimensions.height / origDimensions.width;
      setTargetHeight(Math.round(val * ratio));
    }
  };

  const handleHeightChange = (val: number) => {
    setTargetHeight(val);
    if (lockRatio && origDimensions.height > 0) {
      const ratio = origDimensions.width / origDimensions.height;
      setTargetWidth(Math.round(val * ratio));
    }
  };

  const convertImage = () => {
    if (!file || !previewUrl) return;
    setIsProcessing(true);

    const img = new Image();
    img.src = previewUrl;
    img.onload = () => {
      const canvas = canvasRef.current || document.createElement("canvas");
      canvas.width = targetWidth || img.width;
      canvas.height = targetHeight || img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (targetFormat === "image/jpeg") {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setConvertedUrl(URL.createObjectURL(blob));
            setConvertedSize(blob.size);
          }
          setIsProcessing(false);
        },
        targetFormat,
        quality
      );
    };
  };

  const getFormatExtension = () => {
    if (targetFormat === "image/webp") return "webp";
    if (targetFormat === "image/jpeg") return "jpg";
    return "png";
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
              <Zap size={14} />
              <span>Pro Studio · 100% Private Client-Side Browser Engine</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Pro Image Studio &amp; WebP Converter
            </h1>
            <p className="mt-3 text-base leading-relaxed text-muted">
              Resize dimensions, convert between <strong className="text-fg">PNG, JPG, and WebP</strong>, adjust compression quality, and download optimized files instantly.
            </p>
          </div>

          {/* Converter Workspace */}
          <div className="mt-10 rounded-2xl border border-line bg-panel/70 p-6 sm:p-8 shadow-xl">
            {/* Upload Box */}
            <div className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-line bg-panel2 p-8 text-center transition-colors hover:border-amber/50">
              <input
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber/30 bg-amber/10 text-amber mb-3">
                <Upload size={24} />
              </div>
              <h3 className="font-display text-base font-semibold text-fg">
                {file ? file.name : "Click or drag & drop image file"}
              </h3>
              <p className="mt-1 text-xs text-muted">Supports PNG, JPG, and WebP up to 50MB</p>
            </div>

            {file && (
              <div className="mt-8 grid grid-cols-1 gap-8 border-t border-line pt-6 lg:grid-cols-12">
                {/* Controls Column */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  {/* Format Selector */}
                  <div>
                    <label className="block font-mono text-xs text-muted mb-2 font-semibold">Format Output:</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "WebP (Next-Gen)", value: "image/webp" },
                        { label: "JPG (Universal)", value: "image/jpeg" },
                        { label: "PNG (Lossless)", value: "image/png" },
                      ].map((f) => (
                        <button
                          key={f.value}
                          onClick={() => setTargetFormat(f.value as any)}
                          className={`rounded-lg px-3 py-2 font-mono text-xs font-semibold transition-all ${
                            targetFormat === f.value
                              ? "bg-amber text-ink shadow-md"
                              : "bg-panel2 border border-line text-muted hover:text-fg"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dimension Resizer */}
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs text-muted mb-2 font-semibold">
                      <span>Image Dimensions:</span>
                      <button
                        onClick={() => setLockRatio(!lockRatio)}
                        className="flex items-center gap-1 text-amber hover:underline"
                      >
                        {lockRatio ? <Lock size={12} /> : <Unlock size={12} />}
                        {lockRatio ? "Aspect Ratio Locked" : "Free Resize"}
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="font-mono text-[10px] text-faint">Width (px):</span>
                        <input
                          type="number"
                          value={targetWidth}
                          onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                          className="w-full rounded-lg border border-line bg-panel2 px-3 py-2 text-xs font-mono text-fg focus:border-amber focus:outline-none"
                        />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] text-faint">Height (px):</span>
                        <input
                          type="number"
                          value={targetHeight}
                          onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                          className="w-full rounded-lg border border-line bg-panel2 px-3 py-2 text-xs font-mono text-fg focus:border-amber focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Quality Slider */}
                  <div>
                    <div className="flex justify-between text-xs font-mono text-muted mb-2 font-semibold">
                      <span>Compression Quality:</span>
                      <span className="text-amber font-bold">{Math.round(quality * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.05"
                      value={quality}
                      onChange={(e) => setQuality(parseFloat(e.target.value))}
                      className="w-full accent-amber"
                    />
                  </div>

                  <button
                    onClick={convertImage}
                    disabled={isProcessing}
                    className="flex items-center justify-center gap-2 rounded-xl bg-amber px-5 py-3.5 text-sm font-bold text-ink shadow-lg transition-transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw size={16} className="animate-spin" /> Processing Image...
                      </>
                    ) : (
                      <>
                        <Sparkles size={16} /> Process &amp; Convert Image
                      </>
                    )}
                  </button>
                </div>

                {/* Preview & Side-by-Side Comparison */}
                <div className="lg:col-span-6 flex flex-col items-center rounded-2xl border border-line bg-panel2 p-6 text-center">
                  {previewUrl && (
                    <div className="flex flex-col items-center w-full gap-3">
                      <div className="text-xs font-mono text-muted break-words max-w-full">
                        Original: <strong className="text-fg">{origDimensions.width}×{origDimensions.height}px ({formatBytes(file.size)})</strong>
                      </div>
                      
                      <div className="relative overflow-hidden rounded-xl border border-line bg-panel max-h-48 p-2 w-full flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={convertedUrl || previewUrl}
                          alt="Image preview"
                          className="max-h-44 max-w-full w-auto object-contain rounded-lg"
                        />
                      </div>

                      {convertedSize && (
                        <div className="flex flex-col items-center w-full gap-2">
                          <div className="text-sm font-mono text-emerald-500 font-bold break-words">
                            Processed: {targetWidth}×{targetHeight}px ({formatBytes(convertedSize)})
                          </div>
                          <div className="font-mono text-xs text-amber font-semibold break-words">
                            ({Math.round(((file.size - convertedSize) / file.size) * 100)}% File Reduction!)
                          </div>
                          {convertedUrl && (
                            <a
                              href={convertedUrl}
                              download={`pro-kwas.${getFormatExtension()}`}
                              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.03]"
                            >
                              <Download size={16} />
                              Download Processed Image (.{getFormatExtension()})
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <canvas ref={canvasRef} className="hidden" />
        </section>
    </>
  );
}
