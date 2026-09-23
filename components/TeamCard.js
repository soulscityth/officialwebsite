import Image from "next/image";
import { BookOpen, Quote } from "lucide-react";
import KeepWords from "@/components/KeepWords";

// A square photo inside a panel that is taller than it is wide gets scaled to
// cover the HEIGHT, so that — not the width — is what sets the resolution the
// browser has to fetch. Describing the panel's width here made next/image serve
// a 96px file into a 243px-tall box on phones, upscaled 2.5x and visibly soft.
const PHOTO_SIZES = "(min-width: 1024px) 320px, 420px";

// The left panel varies in shade per person, as the design does, but stays
// inside the brand ramp instead of the five ad-hoc greens it used.
const PANEL_SHADES = [
  "from-brand-600 to-brand-900",
  "from-brand-500 to-brand-800",
  "from-brand-700 to-brand-950",
  "from-brand-500 to-brand-700",
  "from-brand-600 to-brand-800",
];

export default function TeamCard({ member, index = 0 }) {
  const shade = PANEL_SHADES[index % PANEL_SHADES.length];

  return (
    <div className="flex overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-slate-100">
      {/* Photo where we have one, the initial where we don't. */}
      <div
        className={`relative w-28 shrink-0 bg-gradient-to-br min-[380px]:w-36 sm:w-44 ${shade}`}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} (${member.nickname})`}
            fill
            sizes={PHOTO_SIZES}
            style={{ objectPosition: member.focal || "50% 50%" }}
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {member.nickname.slice(0, 1)}
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5 p-4 sm:p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-sm font-semibold !leading-snug text-slate-900 sm:text-lg">
            <KeepWords>{member.name}</KeepWords>{" "}
            <span className="font-sans text-[11px] font-normal text-slate-500 sm:text-sm">
              ({member.nickname})
            </span>
          </h3>
          <span className="self-start rounded-full min-[360px]:whitespace-nowrap bg-brand-50 px-2 py-1 text-[11px] font-semibold text-brand-700 sm:px-3 sm:text-xs">
            {member.role}
          </span>
        </div>

        <div className="h-px bg-slate-100" />

        <div className="flex items-start gap-2.5">
          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
          <p className="text-xs leading-relaxed text-slate-600">{member.education}</p>
        </div>

        {member.quote && (
          <div className="flex items-start gap-2.5 rounded-xl bg-brand-50/60 px-3 py-2.5">
            <Quote className="mt-0.5 h-4 w-4 shrink-0 text-brand-600/60" aria-hidden="true" />
            <p className="text-xs font-medium leading-relaxed text-slate-700"><KeepWords>{member.quote}</KeepWords></p>
          </div>
        )}

        {member.expertise && (
          <div className="flex flex-wrap gap-1">
            {member.expertise.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-brand-50 px-2 py-0.5 text-[10px] font-medium text-brand-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
