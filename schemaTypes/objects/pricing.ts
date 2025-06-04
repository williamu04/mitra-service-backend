import { defineField, defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "object",
  fields: [
    { name: "diagnosticFee", type: "number", title: "Diagnostic Fee" },
    { name: "repairFee", type: "number", title: "Repair Fee" },
    { name: "partsCost", type: "number", title: "Parts Cost" },
    { name: "total", type: "number", title: "Total" },
    { name: "paid", type: "number", title: "Paid" },
    { name: "remaining", type: "number", title: "Remaining" },
  ],
})