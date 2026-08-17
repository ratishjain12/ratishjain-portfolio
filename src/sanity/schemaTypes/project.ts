import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "href",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      description: "Supports markdown formatting.",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          name: "projectLink",
          fields: [
            defineField({
              name: "type",
              title: "Type",
              type: "string",
              options: { list: ["Website", "Source"] },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "href",
              title: "Link",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "imageUpload",
      title: "Image",
      description: "Upload an image directly. Takes priority over Image URL below.",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "image",
      title: "Image URL",
      description: "Used only if no image is uploaded above (e.g. a Cloudinary URL).",
      type: "url",
    }),
    defineField({
      name: "videoUpload",
      title: "Video",
      description: "Upload a video file directly. Takes priority over Video URL below.",
      type: "file",
      options: { accept: "video/*" },
    }),
    defineField({
      name: "video",
      title: "Video URL",
      description: "Used only if no video is uploaded above (e.g. a Cloudinary URL).",
      type: "url",
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
    select: { title: "title", subtitle: "href", media: "imageUpload" },
  },
});
