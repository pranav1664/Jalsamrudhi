import axios from 'axios';
import { generateDonationReceiptPDF } from './generateDonationReceiptPdf';

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayInstance {
  on(event: string, callback: (response: any) => void): void;
  open(): void;
}

declare global {
  interface Window {
    Razorpay: {
      new (options: RazorpayOptions): RazorpayInstance;
    };
  }
}

interface PaymentHandler {
  (
    // e: React.MouseEvent<HTMLButtonElement>,
    amount: number,
    name: string,
    email: string,
    mobileNo: number,
    panDetails: string
  ): Promise<void>;
}

const postRaymentInfo = async (
  orderId: string,
  orderAmount: number,
  paymentId: string,
  name: string,
  email: string,
  mobileNo: string,
  msg: string,
  panDetails: string
) => {
  try {
    const response = await axios.post(
      'https://winjit-proj.vercel.app/order/orderInfo',
      {
        orderId,
        orderAmount,
        paymentId,
        name,
        email,
        mobileNo,
        msg,
        panDetails,
      }
    );

    console.log('Receipt generated:', response.data);
  } catch (error) {
    console.error('Error generating receipt:', error);
  }
};

export const Payment: PaymentHandler = async (
  amount,
  name,
  email,
  mobileNo,
  panDetails
) => {
  const mobileNumber = String(mobileNo);
  const newAmount = amount * 100;
  const response = await axios.post('https://winjit-proj.vercel.app/order', {
    amount: newAmount,
    currency: 'INR',
    // receipt: receiptId,
  });
  const order = await response.data;
  console.log('order', order);

  var options = {
    key: 'rzp_test_GkhWJfJbqiIQjD', // Enter the Key ID generated from the Dashboard
    amount: newAmount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Samruddh Nashik Foundation', //your business name
    description: 'Test Transaction',
    image: 'https://i.ibb.co/Z6bnt7v/1-removebg-preview.png',
    order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1

    handler: async function (response: any) {
      const body = {
        ...response,
      };

      const validateRes = await axios.post(
        'https://winjit-proj.vercel.app/order/validate',
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const jsonRes = await validateRes.data;
      console.log('jsonRes', jsonRes);
      const orderId = jsonRes.orderId;
      const payment_id = jsonRes.paymentId;
      const msg = jsonRes.msg;

      await postRaymentInfo(
        orderId,
        amount,
        payment_id,
        name,
        email,
        mobileNumber,
        msg,
        panDetails
      );

      generateDonationReceiptPDF({
        name,
        amount,
        email,
        // orderId,
        payment_id,
        panDetails,
        mobileNumber,
      });
    },

    prefill: {
      //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
      name, //your customer's name
      email,
      contact: mobileNumber, //Provide the customer's phone number for better conversion rates
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };
  var rzp1 = new window.Razorpay(options);
  rzp1.on('payment.failed', function (response: any) {
    alert(response.error.description);
    alert(response.error.reason);
  });
  rzp1.open();
  // e.preventDefault();
};
