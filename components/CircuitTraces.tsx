import { cn } from "@/lib/utils";

interface Trace {
  d: string;
  duration: number;
  delay: number;
  color: string;
}

const HERO_TRACES: Trace[] = [
  { d: "M -40 90 H 180 V 220 H 460 V 60 H 840", duration: 7, delay: -1, color: "#E0A63E" },
  { d: "M -40 300 H 220 V 400 H 540 V 260 H 840", duration: 9, delay: -4, color: "#4FE3B0" },
  { d: "M 120 -40 V 120 H 340 V 380 H 700 V 560", duration: 8, delay: -2.5, color: "#4FE3B0" },
  { d: "M 840 180 H 560 V 40 H 260 V 200 H -40", duration: 10, delay: -6, color: "#E0A63E" },
  { d: "M 640 -40 V 160 H 780 V 420 H 480 V 560", duration: 11, delay: -3, color: "#EDEFEA" },
];

const AMBIENT_TRACES: Trace[] = [
  { d: "M -40 120 H 260 V 300 H 640 V 90 H 1400", duration: 16, delay: -3, color: "#E0A63E" },
  { d: "M -40 460 H 380 V 620 H 900 V 380 H 1400", duration: 19, delay: -9, color: "#4FE3B0" },
  { d: "M 200 -40 V 220 H 560 V 640 H 1100 V 900", duration: 21, delay: -5, color: "#4FE3B0" },
  { d: "M 1400 260 H 980 V 60 H 480 V 320 H -40", duration: 18, delay: -12, color: "#E0A63E" },
];

export function CircuitTraces({
  variant = "ambient",
  className,
}: {
  variant?: "hero" | "ambient";
  className?: string;
}) {
  const traces = variant === "hero" ? HERO_TRACES : AMBIENT_TRACES;
  const viewBox = variant === "hero" ? "0 0 800 560" : "0 0 1400 900";

  return (
    <svg
      className={cn("h-full w-full", className)}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {traces.map((t, i) => (
        <g key={i}>
          <path
            d={t.d}
            fill="none"
            stroke={t.color}
            strokeOpacity={variant === "hero" ? 0.16 : 0.09}
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <circle
            r={variant === "hero" ? 3.2 : 2.4}
            fill={t.color}
            className="trace-dot"
            style={{
              offsetPath: `path('${t.d}')`,
              animationDuration: `${t.duration}s`,
              animationDelay: `${t.delay}s`,
              filter: `drop-shadow(0 0 4px ${t.color})`,
            }}
          />
        </g>
      ))}
    </svg>
  );
}
