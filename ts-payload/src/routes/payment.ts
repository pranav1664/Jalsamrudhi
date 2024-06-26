import express from 'express';
const donateRouter = express.Router();

const {
  order,
  getOrder,
  validateOrder,
  postOrderInfo,
} = require('../controllers/payment');

donateRouter.route('/').post(order).get(getOrder);
donateRouter.route('/validate').post(validateOrder);
donateRouter.route('/orderInfo').post(postOrderInfo);

module.exports = donateRouter;
