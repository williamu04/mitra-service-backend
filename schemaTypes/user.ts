import { defineField, defineType } from "sanity";


export const user = defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    { name: "email", type: "string", title: "Email" },
    { name: "password", type: "string", title: "Password" },
    { name: "profilePicture", type: "image", title: "Profile Picture" },
    { name: "role", type: "string", title: "Role", options: { list: ["admin", "technician", "customer"] } },
    { name: "linkedCustomer", type: "reference", to: [{ type: "customer" }] },
    { name: "linkedTechnician", type: "reference", to: [{ type: "technician" }] },
  ],
});
    