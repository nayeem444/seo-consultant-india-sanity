import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'

const linkType = {
  title: 'Link',
  name: 'link',
  type: 'object',
  fields: [
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.uri({ allowRelative: false, scheme: ['http', 'https', 'mailto', 'tel'] }),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'target',
      title: 'Target',
      type: 'string',
      options: {
        list: ['_self', '_blank', '_parent', '_top'],
      },
      description: 'Specifies where to open the linked document.',
    },
    {
      name: 'nofollow',
      title: 'No Follow',
      type: 'boolean',
      description: 'Specifies that the link should not be followed by search engines.',
    },
    {
      name: 'dofollow',
      title: 'Do Follow',
      type: 'boolean',
      description: 'Specifies that the link should be followed by search engines.',
    },
    {
      name: 'rel',
      title: 'Rel',
      type: 'string',
      description: 'Specifies the relationship between the current document and the linked document.',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Specifies extra information about the link.',
    },
    {
      name: 'class',
      title: 'Class',
      type: 'string',
      description: 'Specifies one or more class names for an element (refers to a class in a style sheet).',
    },
    {
      name: 'id',
      title: 'ID',
      type: 'string',
      description: 'Specifies a unique id for an element.',
    },
    {
      name: 'style',
      title: 'Style',
      type: 'string',
      description: 'Specifies an inline CSS style for an element.',
    },
    // Add more fields as needed for additional attributes
  ],
}

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
        // Add linkType to allow HTML editing for links
        linkType,
      ],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date }) {
      const subtitles = [
        author && `by ${author}`,
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
