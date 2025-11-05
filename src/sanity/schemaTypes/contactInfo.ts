import { defineType } from "sanity";

export const fairlightInfoType = defineType({
  name: "contactInfo",
  title: "Kontaktinformasjon",
  type: "document",
  fields: [
    {
      name: "email",
      type: "string",
      title: "E-post",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      type: "string",
      title: "Telefonnummer",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      type: "string",
      title: "Lokasjon",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slogan",
      type: "string",
      title: "Slagord",
      validation: (Rule) => Rule.required(),
    },
  ],
});
