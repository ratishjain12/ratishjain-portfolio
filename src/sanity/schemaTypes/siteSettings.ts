import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "profile", title: "Profile" },
    { name: "contact", title: "Contact" },
    { name: "navigation", title: "Navigation" },
  ],
  fields: [
    defineField({
      name: "heroName",
      title: "Name",
      type: "string",
      group: "hero",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroTagline",
      title: "Tagline",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroBio",
      title: "Bio",
      type: "text",
      rows: 3,
      group: "hero",
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      group: "hero",
    }),
    defineField({
      name: "bookingUrl",
      title: "Booking Link",
      type: "url",
      group: "hero",
    }),
    defineField({
      name: "bookingLabel",
      title: "Booking Button Label",
      type: "string",
      initialValue: "Book a Call",
      group: "hero",
    }),
    defineField({
      name: "avatarUrl",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
      group: "profile",
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      group: "profile",
    }),
    defineField({
      name: "contactEmail",
      title: "Email",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "contactTel",
      title: "Phone",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      group: "navigation",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "iconKey",
              title: "Icon",
              type: "string",
              options: { list: ["github", "linkedin", "x"] },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "showInNavbar",
              title: "Show in Navbar",
              type: "boolean",
              initialValue: true,
            }),
          ],
          preview: {
            select: { title: "name", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "navbarItems",
      title: "Navbar Items",
      type: "array",
      group: "navigation",
      of: [
        {
          type: "object",
          name: "navbarItem",
          fields: [
            defineField({
              name: "href",
              title: "Link",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "iconKey",
              title: "Icon",
              type: "string",
              options: { list: ["home"] },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
