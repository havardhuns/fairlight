import { defineType } from "sanity";

export const projectsType = defineType({
  name: "projects",
  title: "Prosjekter",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
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
