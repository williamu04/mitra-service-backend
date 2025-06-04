import { defineField, defineType } from "sanity";


export const notification = defineType({ 
    name: "notification",
    title: "Notification",
    type: "document",
    fields: [
        defineField({
        name: "user_id",
        type: "reference",
        to: [{ type: "user" }],
        validation: (Rule) => Rule.required(),
        }),
        defineField({
        name: "message",
        type: "string",
        validation: (Rule) => Rule.required().min(1).max(500).error("Message must be between 1 and 500 characters."),
        }),
        defineField({
        name: "isRead",
        type: "boolean",
        initialValue: false,
        }),
        defineField({
        name: "createdAt",
        type: "datetime",
        readOnly: true,
        initialValue: () => new Date().toISOString(),
        }),
    ],
});