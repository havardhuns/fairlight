import { defineType } from "sanity";

export const projectsOverviewType = defineType({
  name: "projectsOverview",
  title: "Prosjekter (overordnet)",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Tittel",
    },
    {
      name: "description",
      type: "text",
      title: "Beskrivelse",
    },
  ],
});
