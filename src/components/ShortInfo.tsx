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
    <div
      className="w-full md:pb-8 flex flex-col items-stretch gap-10 lg:flex-row lg:gap-20
    h-[calc(100vh-8rem)] max-h-[1200px]"
    >
      <div className="w-full lg:w-1/3 flex items-center">
        <div>
          <Title>{shortInfo?.title}</Title>
          <p className="text-lg leading-relaxed md:text-xl lg:text-2xl">
            {shortInfo?.description}
          </p>
          <Link href="/prosjekter">
            <Button size="lg" className="mt-8 rounded-full">
              Se prosjekter
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button
              size="lg"
              className="mt-8 ml-4 rounded-full"
              variant="secondary"
            >
              Snakk med oss
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-2/3 flex justify-center md:px-12 8xl:px-32 md:py-32 8xl:py-48">
        {/* widened max width and subtler accents for a premium look */}
        <div className="relative w-full">
          {/* soft red glow behind the image (subtle) */}
          <div className="absolute -inset-1 bg-linear-to-r from-red-500 via-rose-600 to-red-800 rounded-lg blur-2xl opacity-20 -z-10" />

          {/* smaller decorative blur for tasteful depth */}
          <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full bg-linear-to-br from-red-300/30 to-rose-300/20 blur-2xl -z-20" />

          <div className="relative overflow-hidden rounded-xl scale-95 animate-scale-in bg-white/4 backdrop-blur-sm shadow-[0_30px_60px_rgba(139,15,15,0.18)] ring-1 ring-rose-200/10 border-red-50/6 h-full">
            {/* soft overlay to add contrast and make photos pop without heavy effects */}
            <div className="absolute inset-0 bg-linear-to-t from-black/6 to-transparent mix-blend-overlay pointer-events-none" />

            <div className="relative w-full h-96 md:h-[520px] lg:h-full">
              {shortInfo?.image?.asset && (
                <Image
                  src={imageUrlFor(shortInfo.image).url()}
                  alt="Short Info Image"
                  fill
                  className="object-cover filter contrast-110 saturate-110"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortInfo;
