export default {
  name: 'campusChapter',
  title: 'Campus Chapter',
  type: 'document',
  fields: [
    {
      name: 'universityName',
      title: 'University Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Active', 'Coming Soon'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'chapterLeadName',
      title: 'Chapter Lead Name (Optional)',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls display order (lowest first).',
      validation: (Rule) => Rule.required().integer().min(0),
    },
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'universityName',
      subtitle: 'status',
    },
  },
}
