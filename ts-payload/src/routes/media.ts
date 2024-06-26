import express from 'express';
const mediaRouter = express.Router();

const { getAllMedia, getMediaById } = require('../controllers/media');

mediaRouter.route('/').get(getAllMedia);
mediaRouter.route('/:id').get(getMediaById);

module.exports = mediaRouter;
