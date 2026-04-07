export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Primary Image',
      type: 'image',
      description: 'Main image shown on blog cards and article pages.',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main headline for the blog post.',
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path. Click Generate to create from title.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the blog listing.',
      validation: (Rule) => Rule.required().max(220),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Full rich text content for the article.',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    title: 'URL',
                    type: 'url',
                    validation: (Rule) => Rule.required().uri({allowRelative: false}),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Describe the image for accessibility.',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Category label shown on cards.',
      options: {
        list: ['Education', 'Opportunities', 'Community', 'Resources', 'Events', 'Insights'],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tagColor',
      title: 'Tag Color',
      type: 'string',
      description: 'Choose a tag accent color in hex format (example: #4d6ff0).',
      validation: (Rule) => Rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {name: 'hex color'}),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Post author name.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
      description: 'Date/time when the post was published.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Example: 5 min read.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
      description: 'Enable to feature this article.',
    },
    {
      name: 'coverImage',
      title: 'Cover Image (Optional)',
      type: 'image',
      options: {hotspot: true},
      description: 'Optional alternate cover image.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      media: 'image',
    },
  },
}
