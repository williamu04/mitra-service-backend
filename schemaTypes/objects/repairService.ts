import { defineType } from "sanity";

export const repairService = defineType({
      name: "repairService",
  title: "Repair Service",
  type: "object",
  fields: [
    { name: "name", type: "string", title: "Service Name" },
    { name: "description", type: "text", title: "Description" },
    { name: "status", type: "string", title: "Status", options: { list: ["pending", "in-progress", "completed"] } },
    { name: "fee", type: "number", title: "Fee" },
  ],
})