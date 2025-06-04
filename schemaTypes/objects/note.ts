import { defineField, defineType } from "sanity";

export const note = defineType({
  name: "note",
  title: "Note",
  type: "object",
  fields: [
    { name: "date", type: "datetime", title: "Date" },
    { name: "author", type: "string", title: "Author" },
    { name: "type", type: "string", title: "Type", options: { list: ["diagnostic", "progress", "final"] } },
    { name: "content", type: "text", title: "Content" },
  ],
});