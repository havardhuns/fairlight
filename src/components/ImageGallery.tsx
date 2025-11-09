"use client";

import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import Image from "next/image";
import { getImageDimensions, imageUrlFor } from "@/utils/image";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageGalleryProps {
  images: SanityImageObject[];
}

export const renderNextImage = (
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) => (
  <div
    style={{
      width: "100%",
      position: "relative",
      aspectRatio: `${width} / ${height}`,
    }}
  >
    <Image
      fill
      src={photo}
      alt={alt}
      title={title}
      sizes={sizes}
      placeholder={"blurDataURL" in photo ? "blur" : undefined}
    />
  </div>
);

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [index, setIndex] = useState(-1);

  const imagesWithProps = images.map((image) => ({
    ...getImageDimensions(image),
    src: imageUrlFor(image).url(),
  }));

  return (
    <>
      <RowsPhotoAlbum
        photos={imagesWithProps}
        render={{ image: renderNextImage }}
        defaultContainerWidth={1200}
        sizes={{
          size: "1168px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={imagesWithProps}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default ImageGallery;
