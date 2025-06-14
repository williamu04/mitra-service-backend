import {defineField, defineType} from 'sanity'

export const customer = defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField({
      name: 'clerkId',
      type: 'string',
      title: 'Clerk User ID',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Full Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    }),
    defineField({
      name: 'address',
      type: 'text',
      title: 'Address',
    }),
    defineField({
      name: 'registeredAt',
      type: 'datetime',
      title: 'Registration Date',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
