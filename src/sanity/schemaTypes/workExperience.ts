import { defineField, defineType } from "sanity";

export const workExperience = defineType({
  name: "workExperience",
  title: "Work Experience",
  type: "document",
  fields: [
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "href",
      title: "Company Link",
      type: "url",
    }),
    defineField({
      name: "badges",
      title: "Badges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "start",
      title: "Start",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "end",
      title: "End",
      description: "Free text, e.g. \"Present\".",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
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
    select: { title: "title", subtitle: "company", media: "logo" },
  },
});
