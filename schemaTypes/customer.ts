import { defineType } from "sanity";

export const customer = defineType({
    name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    { name: "clerkId", type: "string", title: "Clerk ID", validation: Rule => Rule.required().unique() },
    { name: "name", type: "string", title: "Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "phone", type: "string", title: "Phone Number" },
    { name: "address", type: "text", title: "Address" },
  ],
})