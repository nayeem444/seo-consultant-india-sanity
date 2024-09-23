// pages/api/razorpay.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body;  // Expecting amount from the client-side

    // Razorpay API credentials
    const razorpayKey = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;
    const authHeader = Buffer.from(`${razorpayKey}:${razorpaySecret}`).toString('base64');

    // Payload for creating an order in Razorpay
    const payload = {
      amount,  // Amount in paisa, passed from the frontend
      currency: 'INR',
      receipt: 'receipt#1',
      notes: {
        key1: 'value3',
        key2: 'value2',
      },
    };

    try {
      // Create an order via Razorpay API
      const response = await axios.post(
        'https://api.razorpay.com/v1/orders',
        payload,
        {
          headers: {
            Authorization: `Basic ${authHeader}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Send the order data (including the order_id) back to the client-side
      if(response.status == 200 ){
        res.status(200).json(response.data);
      }else{
        res.status(500).json(response.status);
      }
      
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      res.status(500).json({ error: 'Error creating Razorpay order' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
