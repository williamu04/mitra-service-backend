import { defineField, defineType } from "sanity";

export const repair = defineType({
  name: "repair",
  title: "Repair Order",
  type: "document",
  fields: [
    { name: "orderId", type: "string", title: "Order ID" },
    { name: "device", type: "string", title: "Device" },
    { name: "brand", type: "string", title: "Brand" },
    { name: "model", type: "string", title: "Model" },
    { name: "issue", type: "text", title: "Issue Description" },
    {
      name: "status",
      type: "string",
      title: "Status",
      options: { list: ["received", "diagnosed", "in-progress", "completed", "cancelled"] },
    },
    {
      name: "priority",
      type: "string",
      title: "Priority",
      options: { list: ["low", "normal", "high"] },
    },
    { name: "dateCreated", type: "datetime", title: "Date Created" },
    { name: "dateUpdated", type: "datetime", title: "Date Updated" },
    { name: "estimatedCompletion", type: "datetime", title: "Estimated Completion" },
    { name: "actualCompletion", type: "datetime", title: "Actual Completion" },

    { name: "technician", type: "reference", to: [{ type: "technician" }] },
    { name: "customer", type: "reference", to: [{ type: "customer" }] },

    { name: "pricing", type: "pricing", title: "Pricing" },
    { name: "warranty", type: "warranty", title: "Warranty" },

    { name: "images", type: "array", of: [{ type: "repairImage" }] },
    { name: "timeline", type: "array", of: [{ type: "timelineEvent" }] },
    { name: "notes", type: "array", of: [{ type: "note" }] },
    { name: "services", type: "array", of: [{ type: "repairService" }] },

    { name: "rating", type: "number", title: "Rating", validation: Rule => Rule.min(0).max(5) },
  ],
});