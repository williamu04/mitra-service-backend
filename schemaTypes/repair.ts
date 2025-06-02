import { defineField, defineType } from "sanity";


export const repair = defineType({
  name: "repair",
    title: "Repair",
    type: "document",
    fields: [
        defineField({
            name: "user_id",
            type: "reference",
            to: [{ type: "user" }],
            validation: (Rule) => Rule.required(),
        }),

    ]
});