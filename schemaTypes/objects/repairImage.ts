import { defineType } from "sanity";

export const repairImage = defineType({
      name: "repairImage",
  title: "Repair Image",
  type: "object",
  fields: [
    { name: "url", type: "image", title: "Image" },
    { name: "caption", type: "string", title: "Caption" },
    { name: "type", type: "string", title: "Type", options: { list: ["before", "diagnostic", "progress", "after"] } },
    { name: "uploadedAt", type: "datetime", title: "Uploaded At" },
  ],
})