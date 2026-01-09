// apps/cms/src/collections/Pages.ts
import { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'heroTitle',
      type: 'text',
    },
    {
      name: 'heroRoles',
      type: 'array',
      fields: [
        {
          name: 'role',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'heroDescription',
      type: 'textarea',
    },
    {
      name: 'heroLogos',
      type: 'array',
      fields: [
        {
          name: 'logo',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaButton',
      type: 'text',
    },
    // Process section
    {
      name: 'processHeading',
      type: 'text',
    },
    {
      name: 'processSubheading',
      type: 'text',
    },
    {
      name: 'processSteps',
      type: 'array',
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    // Brag section
    {
      name: 'bragTitle',
      type: 'text',
    },
    {
      name: 'bragSubtitle',
      type: 'text',
    },
    {
      name: 'bragPosters',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'bragRows',
      type: 'array',
      fields: [
        { name: 'company', type: 'text', required: true },
        { name: 'award', type: 'text', required: true },
        { name: 'category', type: 'text', required: true },
        { name: 'year', type: 'text', required: true },
      ],
    },
    // Footer Logos
    {
      name: 'footerLogosTitle',
      type: 'text',
    },
    {
      name: 'footerLogos',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
      ],
    },
  ],
};
