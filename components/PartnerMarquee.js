import Image from "next/image";
import { partners } from "@/lib/data";

function Row({ items, direction }) {
  // The track holds the list twice, so translating it by -50% lands exactly on
  // the duplicate and the loop reads as seamless. The spacing lives on each
  // card (mr-4) rather than a flex gap, otherwise the extra gap between the two
  // copies would make -50% fall short and the loop would visibly jump.
  const animation = direction === "left" ? "animate-marqueeLeft" : "animate-marqueeRight";

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max ${animation} motion-reduce:animate-none`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((partner) => (
              <div
                key={partner.name}
                title={partner.name}
                className="mr-4 flex h-20 w-36 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white p-4 sm:w-44"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-contain grayscale transition-all duration-200 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PartnerMarquee() {
  const half = Math.ceil(partners.length / 2);

  return (
    <div className="relative space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <Row items={partners.slice(0, half)} direction="left" />
      <Row items={partners.slice(half)} direction="right" />
    </div>
  );
}
