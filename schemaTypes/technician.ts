import { defineType } from "sanity";

export const technician = defineType({
  name: "technician",
  title: "Technician",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "specialization", type: "string", title: "Specialization" },
  ],
})