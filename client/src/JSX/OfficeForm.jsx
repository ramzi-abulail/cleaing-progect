import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function OfficeForm() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessName: '',
    numEmployees: '',
    squareFootage: '',
  });

  const [totalPrice, settotalPrice] = useState(0);
  const navigate = useNavigate();
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Include the price in the formData before sending to the server
      const dataToSend = {
        ...formData,
        totalPrice: totalPrice, // Add the price to the form data
      };

      const response = await axios.post('http://localhost:3001/order', dataToSend);
      console.log('Data sent:', response.data);

      // Reset form fields after successful submission
      setFormData({
        fullName: '',
        phone: '',
        businessName: '',
        numEmployees: '',
        squareFootage: '',
      });
      settotalPrice(0); // Reset price
      navigate('/Payment2');
    } catch (error) {
      console.error('Error creating office:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const calculatePrice = () => {
      const { squareFootage, numEmployees } = formData;

      const priceMap = {
        '1000-2000': 600,
        '2001-5000': 800,
        '5001-10000': 1200,
        // Add more options for square footage

        '1-50': 400,
        '51-100': 600,
        '101-500': 1000,
        // Add more options for number of employees
      };

      const calculatedPrice =
        (priceMap[squareFootage] || 0) + (priceMap[numEmployees] || 0);

        settotalPrice(calculatedPrice);
    };

    calculatePrice();
  }, [formData]);



  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Office Information</h2>
        <a className='text-l font-bold mt-4 mb-10'>please fill the form for do order for your office :</a>
        <form onSubmit={handleCreate}>
          <div className="mb-4 mt-4w">
            <label htmlFor="fullName" className="block mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-semibold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="businessName" className="block mb-2 font-semibold">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your business name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="numEmployees" className="block mb-2 font-semibold">
              Number of Employees
            </label>
            <select
              id="numEmployees"
              name="numEmployees"
              value={formData.numEmployees}
              onChange={(e) => setFormData({ ...formData, numEmployees: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select number of employees</option>
              <option value="1-50">1-50</option>
              <option value="51-100">51-100</option>
              <option value="101-500">101-500</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="squareFootage" className="block mb-2 font-semibold">
              Square Footage
            </label>
            <select
              id="squareFootage"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select square footage</option>
              <option value="1000-2000">1000-2000</option>
              <option value="2001-5000">2001-5000</option>
              <option value="5001-10000">5001-10000</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4 text-center font-semibold">
            totalPrice: ${totalPrice}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>


      </div>
    </div>
  );
}

export default OfficeForm;
