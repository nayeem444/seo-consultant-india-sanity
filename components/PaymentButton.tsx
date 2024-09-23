import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

interface PaymentButtonProps {
  customerName: string;
  customerEmail: string;
  customerContact: string;
}

export default function PaymentButton({
  customerName,
  customerEmail,
  customerContact,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Call the backend API to create the order with Razorpay
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 100, // Amount in cents (5000 cents = $50)
          currency: 'USD' // Set currency to USD
        }),
      });

      const orderData = await res.json();

      if (!orderData || !orderData.id) {
        setLoading(false);
        return alert('Failed to create Razorpay order');
      }

      // Initialize Razorpay payment options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Razorpay Key ID (client-side)
        amount: orderData.amount, // Amount from the order in cents
        currency: orderData.currency, // Currency code 'USD'
        order_id: orderData.id, // Pass the Razorpay order ID
        handler: function (response: any) {
          // Handle successful payment
          setLoading(false);

          // Trigger the PDF download after successful payment
          initiateDownload();
        },
        prefill: {
          name: customerName, // Use dynamic data
          email: customerEmail,
          contact: customerContact,
        },
        theme: {
          color: '#2275FB',
        },
      };

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      setLoading(false);
      alert('Failed to initiate payment');
    }
  };

  // Function to download the existing PDF after payment
  const initiateDownload = () => {
    const link = document.createElement('a');
    link.href = '/sample.pdf'; // Replace this with the actual path to your PDF file
    link.download = 'sample.pdf'; // Set the file name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mr-4'>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 z-10 flex items-center group"
      >
        {loading ? 'Processing...' : 'Download Checklist'}
        <Download className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300 ml-4" />
      </button>
    </div>
  );
}
