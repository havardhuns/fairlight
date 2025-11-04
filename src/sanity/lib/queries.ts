import { defineQuery } from "next-sanity";

export const allProjectsQuery =
  defineQuery(`*[_type == "projects"] | order(date desc){
  _id,
  title,
  location,
  description,
  date,
  images[] {
    asset-> {
      _id,
      url
    },
    alt
  }
}`);

export const shortInfoQuery = defineQuery(`*[_type == "shortInfo"][0]{
  title,
  description,
  image {
    asset-> {
      _id,
      url
    },
    alt
  }
}`);
