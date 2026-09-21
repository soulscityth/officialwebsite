import Image from "next/image";
import { BookOpen, Quote } from "lucide-react";

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
        className={`relative w-24 shrink-0 bg-gradient-to-br sm:w-40 lg:w-56 ${shade}`}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={`${member.name} (${member.nickname})`}
            fill
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 160px, 96px"
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

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-2.5 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-base font-semibold !leading-snug text-slate-900 sm:text-lg">
            {member.name}{" "}
            <span className="font-sans text-sm font-normal text-slate-500">
              ({member.nickname})
            </span>
          </h3>
          <span className="self-start rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
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
            <p className="text-xs font-medium leading-relaxed text-slate-700">{member.quote}</p>
          </div>
        )}

        {member.expertise && (
          <div className="flex flex-wrap gap-1.5">
            {member.expertise.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700"
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
