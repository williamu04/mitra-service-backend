import { defineField, defineType } from "sanity";


export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "string",
        validation: (Rule) => Rule.required().email(),
    }),
    defineField({
        name: "phone",
        type: "string",
        validation: (Rule) => Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
            name: 'phone number',
            invert: false
        }),
    }),
    defineField({
        name: "role",
        type: "string",
        options: {
          list: [
            { title: "Admin", value: "admin" },
            { title: "User", value: "user" },
          ],
        },
    }),
    defineField({
      name: "createdAt",
      type: "datetime",
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ]
});
    