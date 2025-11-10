import { defineType } from "sanity";

export const projectsType = defineType({
  name: "projects",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "string",
      title: "Lokasjon",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      type: "date",
      title: "Dato",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "eventType",
      type: "string",
      title: "Type event",
    },
    { name: "description", type: "text", title: "Beskrivelse" },
    {
      name: "images",
      type: "array",
      title: "Bilder",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: "grid", // optional: makes the UI nicer
      },
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "showOnFrontpage",
      type: "boolean",
      title: "Vis på forsiden",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
  ],
});
