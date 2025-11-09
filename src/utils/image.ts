import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import {
  SanityImageObject,
  SanityImageSource,
} from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export const imageUrlFor = (image?: SanityImageSource | null) => {
  if (!image) {
    return { url: () => "" };
  }
  return builder.image(image);
};

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export const getImageDimensions = (image?: SanityImageObject | null) => {
  if (!image?.asset?._ref) {
    return {
      width: 0,
      height: 0,
    };
  }

  const match = pattern.exec(image.asset._ref);
  if (!match) {
    return {
      width: 0,
      height: 0,
    };
  }
  const dimensions = match[2];
  const [width, height] = dimensions
    .split("x")
    .map((v: string) => parseInt(v, 10));
  return { width, height };
};
