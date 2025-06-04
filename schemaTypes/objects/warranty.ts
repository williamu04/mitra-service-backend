import { defineField, defineType } from "sanity";

export const warranty = defineType({
  name: "warranty",
  title: "Warranty",
  type: "object",
  fields: [
    { name: "duration", type: "string", title: "Duration" },
    { name: "expiryDate", type: "date", title: "Expiry Date" },
    { name: "coverage", type: "text", title: "Coverage" },
  ],
})