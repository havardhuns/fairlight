import { defineType } from "sanity";

export const aboutInfoType = defineType({
  name: "aboutInfo",
  title: "Mer info (om oss)",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Beskrivelse",
      validation: (Rule) => Rule.required(),
    },
  ],
});
