export default {
  name: 'opportunity',
  title: 'Opportunity',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Opportunity name shown on the card.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Select the group this belongs to.',
      options: {
        list: ['Learn & Earn', 'Grants & Funding', 'Hackathons', 'Jobs & Internships'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Short explanation for visitors.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Destination URL.',
      validation: (Rule) => Rule.required().uri({allowRelative: false}),
    },
    {
      name: 'level',
      title: 'Level',
      type: 'string',
      description: 'Audience skill level.',
      options: {
        list: ['Beginner', 'Intermediate', 'All Levels', 'Beginner-Intermediate'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo Image (Optional)',
      type: 'image',
      description: 'Small brand logo shown on the opportunity card.',
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
      description: 'Turn off to hide without deleting.',
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
