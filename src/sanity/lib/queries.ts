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
  images[],
  _type,
  _createdAt,
  _updatedAt,
  _rev
}`);

export const projectBySlugQuery =
  defineQuery(`*[_type == "projects" && slug.current == $slug][0]{
  _id,
  title,
  location,
  description,
  date,
  slug,
  showOnFrontpage,
  images[],
  client,
  eventType,
  _type,
  _createdAt,
  _updatedAt,
  _rev
}`);

export const shortInfoQuery = defineQuery(`*[_type == "shortInfo"][0]{
  title,
  description,
  image,
}`);

export const aboutInfoQuery = defineQuery(`*[_type == "aboutInfo"][0]{
  title,
  description,
}`);

export const allEmployeesQuery = defineQuery(`*[_type == "employee"]{
  _id,
  name,
  title,
  photo,
  description,
  email
}`);

export const contactInfoQuery = defineQuery(`*[_type == "contactInfo"][0]{
  email,
  phone,
  location,
  slogan
}`);
