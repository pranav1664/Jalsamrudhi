import Razorpay from 'razorpay';
import crypto from 'crypto';
import { Request, Response } from 'express';
const Order = require('../models/payment');

const razorpay = new Razorpay({
  key_id: 'rzp_test_a6p988jDCASdbT',
  key_secret: 'O6KOqMfPuiIfFrUcmMOcQ9Ne',
});

const order = async (req: Request, res: Response) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || '',
      key_secret: process.env.RAZORPAY_SECRET || '',
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send('Error');
    }

    res.json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error');
  }
};

const validateOrder = async (req: Request, res: Response) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac('sha256', process.env.RAZORPAY_SECRET || '');
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest('hex');
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: 'Transaction is not legit!' });
  }

  res.json({
    msg: 'success',
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
};

const postOrderInfo = async (req, res) => {
  try {
    const {
      orderId,
      orderAmount,
      paymentId,
      name,
      email,
      mobileNo,
      msg,
      panDetails,
    } = req.body;

    const order = new Order({
      orderId,
      orderAmount,
      paymentId,
      name,
      email,
      mobileNo,
      msg,
      panDetails,
    });

    console.log(order);
    

    await order.save();

    res.status(201).json({ message: 'Order info saved successfully' });
  } catch (error) {
    console.error('Error saving order info:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.find();
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { order, getOrder, validateOrder, postOrderInfo };
