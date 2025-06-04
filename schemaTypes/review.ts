import { defineField, defineType } from "sanity";


export const review = defineType({
  name: "review",
  type: "document",
  title: "Review",
  description: "Ulasan dari pelanggan tentang layanan perbaikan",
  fields: [
    {
      name: "order",
      type: "reference",
      to: [{ type: "repair" }],
      title: "Order",
    },
    {
      name: "score",
      type: "number",
      title: "Rating",
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: "review",
      type: "text",
      title: "Ulasan",
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Tanggal Rating",
    },
  ],
});