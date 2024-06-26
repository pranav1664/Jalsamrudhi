import { CollectionConfig } from 'payload/types';

export const JSN: CollectionConfig = {
  slug: 'jsn',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'text',
      required: true,
    },
  ],
};
