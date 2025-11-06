import { defineType } from "sanity";

export const servicesOverviewType = defineType({
  name: "servicesOverview",
  title: "Tjenester (overordnet)",
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
