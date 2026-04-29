import { shortInfoQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ShortInfoQueryResult } from "../../sanity.types";
import { imageUrlFor } from "@/utils/image";
import { Title } from "./ui/typography";

const ShortInfo = async () => {
  const shortInfo = await client.fetch<ShortInfoQueryResult>(shortInfoQuery);

  return (
    <div className="w-full flex flex-col items-stretch gap-8 lg:flex-row lg:gap-20 lg:h-[calc(100vh-8rem)] lg:max-h-[1200px]">

      {/* ── Text side ── */}
      <div className="w-full lg:w-1/3 flex items-start lg:items-center py-8 lg:py-0">
        <div className="w-full">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-rose-400" />
            <p className="text-xs font-semibold uppercase tracking-widest text-rose-400">
              Lysdesign & Teknikk
            </p>
          </div>

          <Title className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {shortInfo?.title}
          </Title>

          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs mt-2 mb-8">
            {shortInfo?.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href="/prosjekter">Se prosjekter</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-7" variant="secondary">
              <Link href="/kontakt">Snakk med oss</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Image side — original proportions ── */}
      <div className="w-full lg:w-2/3 flex justify-center lg:px-12 8xl:px-32 lg:py-32 8xl:py-48">
        <div className="relative w-full h-64 sm:h-80 md:h-[520px] lg:h-full">

          {/* rose glow behind image */}
          <div className="absolute -inset-2 bg-linear-to-r from-red-500 via-rose-600 to-red-800 rounded-xl blur-3xl opacity-20 -z-10" />
          <div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-linear-to-br from-red-300/30 to-rose-300/20 blur-2xl -z-20" />

          <div className="relative overflow-hidden rounded-xl scale-95 animate-scale-in bg-white/5 shadow-[0_30px_60px_rgba(139,15,15,0.18)] ring-1 ring-rose-200/10 h-full">
            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none z-10" />
            {shortInfo?.image?.asset && (
              <Image
                src={imageUrlFor(shortInfo.image).url()}
                alt="Fairlight"
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShortInfo;
