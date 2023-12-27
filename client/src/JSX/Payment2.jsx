import React, { useState , useEffect  } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';

function Payment2() {

  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiry: new Date(),
    cvv: '',
  });
  const navigate = useNavigate();

  const [paymentInfo, setPaymentInfo] = useState({
    totalPrice: '',
    serviceName: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
 

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      expiry: date,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^\d{3}$/.test(formData.cvv)) {
      alert('CVV must be a 3-digit number');
      return;
    }

    if (!/^\d{4}-\d{4}-\d{4}-\d{4}$/.test(formData.cardNumber)) {
      alert('Expiry Date should be in the format xxxx-xxxx-xxxx-xxxx');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/payment', formData);
      console.log('Payment data saved:', response.data);
      alert('Payment successfully submitted!');

      // Clear form data after successful submission
      setFormData({
        name: '',
        cardNumber: '',
        expiry: new Date(),
        cvv: '',
      });

      // Navigate to the profile page after successful payment
      navigate('/'); // Replace '/profile' with your actual profile route
    } catch (error) {
      console.error('Error saving payment:', error);
      alert('There was an error while processing your payment. Please try again.');
    }
  };

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      try {
        const response = await axios.get('http://localhost:3001/order');
        const order = response.data[0]; // Assuming the first order's details
  
        setPaymentInfo({
          totalPrice: order.totalPrice,
          serviceName: order.serviceName,
        });
      } catch (error) {
        console.error('Error fetching payment info:', error);
      }
    };
  
    fetchPaymentInfo();
  }, []);


  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name on Card
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="write your card name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cardNumber"
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="write your card number"
          />
        </div>

        <div className="mb-4 flex">
          <div className="w-1/2 mr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiry">
              Expiry Date
            </label>
            <DatePicker
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="expiry"
              selected={formData.expiry}
              onChange={handleDateChange}
              showMonthYearPicker
              dateFormat="MM/yyyy"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="cvv"
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              maxLength={3}
              placeholder="CVV"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Payment
          </button>
        </div>
      </form>
      <div className='w-80 h-80 shadow-md ml-20 border rounded-lg bg-blue-50'> 
      <p className=' font-bold text-xl text-center mt-4'> Receipt </p>
    
        <p className='font-blod text-lg ml-4 mt-10'>Service Name: {paymentInfo.serviceName}</p>
        <p className='font-blod text-lg ml-4 mt-10'>Total Price: {paymentInfo.totalPrice}</p>
        <p className=' font-bold text-xl text-center mt-20'> Thank you </p>
      </div>
    </div>

);
}

export default Payment2;
