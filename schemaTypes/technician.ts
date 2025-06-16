import { defineType } from "sanity";

export const technician = defineType({
  name: "technician",
  title: "Technician",
  type: "document",
  fields: [
    { name: "id", type: "string", title: "ID"},
    { name: "name", type: "string", title: "Name" },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "specialization", type: "string", title: "Specialization" },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "specialization",
    }
  }
})