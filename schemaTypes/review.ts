import { defineField, defineType } from "sanity";


export const review = defineType({
    name: "review",
    title: "Review",
    type: "document",
    fields: [
        defineField({
        name: "user_id",
        type: "reference",
        to: [{ type: "user" }],
        validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: "repair_id",
        type: "reference",
        to: [{ type: "repair" }],
        validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: "rating",
        type: "number",
        validation: (Rule) => Rule.required().min(1).max(5).error("Rating must be between 1 and 5."),
        }),
        defineField({
        name: "comment",
        type: "text",
        validation: (Rule) => Rule.max(500).error("Comment must not exceed 500 characters."),
        }),
        defineField({
        name: "createdAt",
        type: "datetime",
        readOnly: true,
        initialValue: () => new Date().toISOString(),
        }),
    ],
});