import { defineType } from "sanity";

export const shortInfoType = defineType({
  name: "shortInfo",
  title: "Kort Info (fremside)",
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
    {
      name: "image",
      type: "image",
      title: "Bilde",
      options: {
        hotspot: true,
      },
    },
  ],
});
