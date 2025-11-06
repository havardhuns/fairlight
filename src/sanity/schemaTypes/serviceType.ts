import { defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Tjeneste",
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
