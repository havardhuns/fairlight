import { defineType } from "sanity";

export const employeeType = defineType({
  name: "employee",
  title: "Ansatt",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Navn",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "title",
      type: "string",
      title: "Stilling",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "photo",
      type: "image",
      title: "Foto",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Beskrivelse",
    },
    {
      name: "email",
      type: "string",
      title: "E-post",
      validation: (Rule) => Rule.email(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "photo",
    },
  },
});
