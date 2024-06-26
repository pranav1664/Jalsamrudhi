import { CollectionConfig } from 'payload/types';

export const Media_Gallery: CollectionConfig = {
  slug: 'media_Gallery',
  access: {
    read: () => true,
  },
  upload: {
    staticURL: '/media_Gallery',
    staticDir: 'media/media_Gallery',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
};
