import {defineField, defineType} from 'sanity'

export const pickup = defineType({
  name: 'pickup',
  title: 'Pickup',
  type: 'document',
  fields: [
    defineField({
      name: 'customer',
      type: 'string',
      title: 'customerID',
    }),
    defineField({
      name: 'repair_id',
      type: 'reference',
      to: [{type: 'repair'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      type: 'text',
      title: 'Pickup Address',
      validation: (Rule) =>
        Rule.required().min(10).max(500).error('Address must be between 10 and 500 characters.'),
    }),
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          {title: 'Scheduled', value: 'scheduled'},
          {title: 'In Transit', value: 'in_transit'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      readOnly: true,
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
