import { Users2, Zap, ShieldCheck, Heart } from "lucide-react";
import { facilitatorNote } from "@/lib/data";

// Closes the team grid as its sixth cell, so the two-column layout ends even
// rather than leaving a hole beside the fifth member.
const POINT_ICONS = [Zap, ShieldCheck, Heart];

export default function FacilitatorCard() {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-950 p-6 sm:p-7">
      <Users2 className="h-7 w-7 text-white" aria-hidden="true" />
      <p className="max-w-sm font-display text-lg font-semibold !leading-snug text-white sm:text-xl">
        {facilitatorNote.heading}
      </p>
      <div className="flex flex-wrap gap-2">
        {facilitatorNote.points.map((point, i) => {
          const Icon = POINT_ICONS[i % POINT_ICONS.length];
          return (
            <span
              key={point}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-inset ring-white/10"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {point}
            </span>
          );
        })}
      </div>
    </div>
  );
}
