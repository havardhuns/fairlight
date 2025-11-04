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
    },
    {
      name: "location",
      type: "string",
      title: "Lokasjon",
    },
    {
      name: "date",
      type: "date",
      title: "Dato",
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
    },
  ],
});
