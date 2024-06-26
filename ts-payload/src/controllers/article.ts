import payload from 'payload';

const getAllJSN = async (req, res) => {
  const result = await payload.find({
    collection: 'jsn',
  });

  const article = await result.docs;

  const articleItem = article.map((item) => ({
    id: item.id,
    text: item.text,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  res.json(articleItem);
};

module.exports = {
  getAllJSN,
};
