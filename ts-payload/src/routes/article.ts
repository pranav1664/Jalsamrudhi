import express from 'express';
const articleRouter = express.Router();

const { getAllJSN } = require('../controllers/article');

articleRouter.route('/').get(getAllJSN);

module.exports = articleRouter;
