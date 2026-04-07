const resourceTypes = [
  'Video',
  'Course',
  'Interactive',
  'Docs',
  'Article',
  'Tool',
  'Project',
  'Jobs',
  'Earn',
  'Funding',
  'Community',
]

export default {
  name: 'learningTrack',
  title: 'Learning Track',
  type: 'document',
  fields: [
    {
      name: 'trackNumber',
      title: 'Track Number',
      type: 'number',
      description: 'Display order by track number (1, 2, 3, ...).',
      validation: (Rule) => Rule.required().integer().min(1),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Example: TRACK 01',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Track title shown in cards.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Example: No code required.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Icon (Emoji)',
      type: 'string',
      description: 'Example: 🔗, 🧠, 🛠️',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Track accent color in hex format (example: #34d399).',
      validation: (Rule) => Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {name: 'hex color'}),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      description: 'Target learner level.',
      options: {
        list: ['Beginner', 'Intermediate', 'All Levels'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Example: 2-3 weeks',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Brief overview of the track.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      description: 'Learning resources shown when a track is expanded.',
      of: [
        {
          type: 'object',
          name: 'resourceItem',
          fields: [
            {
              name: 'resourceTitle',
              title: 'Resource Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({allowRelative: false}),
            },
            {
              name: 'estimatedTime',
              title: 'Estimated Time',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: resourceTypes,
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  orderings: [
    {
      title: 'Track Number Ascending',
      name: 'trackNumberAsc',
      by: [{field: 'trackNumber', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'label',
    },
  },
}
