import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageUrlBuilder(client);

export const imageUrlFor = (source?: SanityImageSource | null) => {
  if (!source) {
    return { url: () => "" };
  }
  return builder.image(source);
};
