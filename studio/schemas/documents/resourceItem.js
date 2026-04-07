export default {
  name: 'resourceItem',
  title: 'Resource Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Developer Tools',
          'Learning Platforms',
          'Uganda & Africa Blockchain',
          'Wallets & Testnet Tools',
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      options: {
        list: ['Essential', 'Free', 'Intermediate', 'Advanced', 'Beginner', 'Tool', 'Uganda', 'Africa'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Image (Optional)',
      type: 'image',
      description: 'Small image shown beside the resource title.',
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
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Turn off to hide this resource from the website.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'logo',
    },
  },
}
