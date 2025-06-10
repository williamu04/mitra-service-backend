import { defineField, defineType } from "sanity";


export const payment = defineType({
  name: "payment",
    title: "Payment",
    type: "document",
    fields: [
        defineField({
            name: "customer",
            type: "string",
            title: "customerID"
        }),
        defineField({
            name: "repair_id",
            type: "reference",
            to: [{ type: "repair" }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "amount",
            type: "number",
            validation: (Rule) => Rule.required().min(0).error("Amount must be a positive number."),
        }),
        defineField({
            name: "status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Completed", value: "completed" },
                    { title: "Failed", value: "failed" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "createdAt",
            type: "datetime",
            readOnly: true,
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: "updatedAt",
            type: "datetime",
            readOnly: true,
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: "paymentMethod",
            type: "string",
            options: {
                list: [
                    { title: "Credit Card", value: "credit_card" },
                    { title: "E-Wallet", value: "e_wallet" },
                    { title: "Bank Transfer", value: "bank_transfer" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "paymentUrl",
            type: "url",
            validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
                allowRelative: false
            }).error("Payment URL must be a valid URL."),
        })
    ]
});