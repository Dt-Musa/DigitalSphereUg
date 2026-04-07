export default {
  name: 'communityLink',
  title: 'Community Link',
  type: 'document',
  fields: [
    {
      name: 'platformName',
      title: 'Platform Name',
      type: 'string',
      description: 'Example: Telegram, WhatsApp, X, ETHNile',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'handle',
      title: 'Handle',
      type: 'string',
      description: 'Example: @digitalsphereug',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    },
    {
      name: 'logo',
      title: 'Logo Image (Optional)',
      type: 'image',
      description: 'Small platform logo shown on community cards.',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Accessibility text for screen readers.',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'memberCount',
      title: 'Member Count',
      type: 'string',
      description: 'Example: 313+, 146',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Primary', 'Secondary', 'Ecosystem'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off to hide without deleting.',
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
      title: 'platformName',
      subtitle: 'type',
      media: 'logo',
    },
  },
}
