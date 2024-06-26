import payload from 'payload';

const getAllMedia = async (req, res) => {
  const result = await payload.find({
    collection: 'media',
  });

  const media = await result.docs;

  const media_card = media.map((item) => ({
    id: item.id,
    alt: item.alt,
    description: item.description,
    filename: item.filename,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
    imageUrl: item.url,
  }));

  res.json(media_card);
};

const getMediaById = async (req, res) => {
  try {
    const { id: mediaId } = req.params;
    const media = await payload.findByID({
      collection: 'media',
      id: mediaId,
    });

    if (!media) {
      return res.status(404).json({ error: 'Media not found' });
    }

    const { id, alt, description, filename, createdAt, updatedAt } = media;
    const media_card = { id, alt, description, filename, createdAt, updatedAt };

    res.json(media_card);
  } catch (error) {
    console.error('Error fetching media by ID:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllMedia,
  getMediaById,
};
