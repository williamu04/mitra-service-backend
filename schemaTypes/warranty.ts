import { defineField, defineType } from "sanity";


export const warranty = defineType({
  name: "warranty",
    title: "Warranty",
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
            name: "reason",
            type: "text",
            validation: (Rule) => Rule.required().min(10).max(500).error("Reason must be between 10 and 500 characters."),
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Approved", value: "approved" },
                    { title: "Rejected", value: "rejected" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "createdAt",
            type: "datetime",
            readOnly: true,
            initialValue: () => new Date().toISOString(),
        }),
    ]
});