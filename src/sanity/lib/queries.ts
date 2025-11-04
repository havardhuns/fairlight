import { defineQuery } from "next-sanity";

export const projectsOverviewQuery =
  defineQuery(`*[_type == "projectsOverview"][0]{
  title,
  description
}`);

export const allProjectsQuery =
  defineQuery(`*[_type == "projects"] | order(date desc){
  _id,
  title,
  location,
  description,
  date,
  slug,
  showOnFrontpage,
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
