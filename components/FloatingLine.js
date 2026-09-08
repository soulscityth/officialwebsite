import { siteConfig } from "@/lib/site";

// Official LINE brand green. Kept literal rather than added to the Tailwind
// palette — it is a third-party brand colour, not part of the SoulScity system.
const LINE_GREEN = "#06C755";

export default function FloatingLine() {
  const line = siteConfig.line;
  if (!line?.url) return null;

  return (
    <a
      href={line.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={line.label}
      data-ga-event="line_click"
      style={{ backgroundColor: LINE_GREEN }}
      className="group fixed bottom-5 right-5 z-40 flex items-center rounded-full shadow-lg ring-1 ring-black/5 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-7 w-7 fill-white"
        >
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
      </span>

      {/* Label slides open on pointer hover; stays collapsed on touch, where the
          circle alone is the target. */}
      <span
        aria-hidden="true"
        className="max-w-0 overflow-hidden whitespace-nowrap font-display text-sm !leading-snug tracking-wide text-white transition-[max-width,padding] duration-300 group-hover:max-w-[12rem] group-hover:pr-6 motion-reduce:transition-none"
      >
        {line.cta}
      </span>
    </a>
  );
}
