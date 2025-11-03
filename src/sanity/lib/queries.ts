import { defineQuery } from "next-sanity";

export const allServicesQuery = defineQuery(`*[_type == "imageGallery"]{
  _id,
  title,
  slug,
  description,
  images[] {
    asset-> {
      _id,
      url
    },
    alt
  }
}`);
