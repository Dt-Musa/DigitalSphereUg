export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Upload a member photo. Initials are used if empty.',
      options: {hotspot: true},
    },
    {
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'Shown when no photo is uploaded.',
      validation: (Rule) => Rule.required().max(4),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Card accent color in hex format (example: #2847D4).',
      validation: (Rule) => Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {name: 'hex color'}),
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: false}),
    },
    {
      name: 'xUrl',
      title: 'X (Twitter) URL',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: false}),
    },
    {
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Inactive members are shown as muted/placeholder cards.',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Controls display order on the page (lowest first).',
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
  },
}
