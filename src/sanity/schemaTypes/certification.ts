import { defineField, defineType } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issuer",
      title: "Issuer",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Credential Link",
      type: "url",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      description: "Free text, e.g. \"November 2025\".",
      type: "string",
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "issuer", media: "logo" },
  },
});
