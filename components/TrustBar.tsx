import { Check } from "lucide-react";

const CLAIMS = ["MIT licensed", "No ads · no trackers", "Android + Desktop", "Community driven"];

export function TrustBar() {
  return (
    <div className="border-y border-line/70 bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-5 sm:justify-between sm:px-8">
        {CLAIMS.map((c) => (
          <span key={c} className="flex items-center gap-2 font-mono text-xs text-muted sm:text-[13px]">
            <Check size={14} className="text-signal" strokeWidth={2.5} />
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}
