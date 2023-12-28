import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const citiesInJordan = [
  'Amman',
  'Irbid',
  'Zarqa',
  'Jerash',
  'Madaba',
  'Mafraq',
  'Ajloun',
  'Balqa',
  'Karak',
  'Tafileh',
  'Ma`an',
  'Aqaba',
];

function CompanyForm() {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    number: '',
    companyName: '',
    city: '',
    streetName: '',
    numOfFloors: '',
    numOfOffices: '',
    serviceName:'company Cleaning',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Retrieve ID from local storage
      const userId = localStorage.getItem('id'); // Assuming 'userId' is the key for the ID
  
      // Calculate total price
      const totalPrice = calculateTotalPrice(formData);
  
      // Add the userId and total price to the formData
      const dataWithUserId = {
        ...formData,
        userId: userId, // Adding the userId to the formData object
        totalPrice: totalPrice, // Adding the totalPrice to the formData object
      };
  
      // Post the form data with additional details
      await axios.post('http://localhost:3001/order', dataWithUserId);
  
      // Clear form fields after submission
      setFormData({
        fullname: '',
        number: '',
        companyName: '',
        city: '',
        streetName: '',
        numOfFloors: '',
        numOfOffices: '',
      });
  
      // Display success message
      alert('Company information submitted successfully!');
  
      // Navigate to the payment page
      navigate('/Payment2');
    } catch (error) {
      console.error('Error creating company:', error);
    }
  };
  
  
  const calculateTotalPrice = (formData) => {
    
    const baseNumOfFloors = 80;
    const basenumOfOffices = 25; 

   
    const numOfFloors = parseInt(formData.numOfFloors) * baseNumOfFloors;
    const numOfOffices = parseInt(formData.numOfOffices) * basenumOfOffices;

    const totalPrice = numOfFloors + numOfOffices;
    return totalPrice;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md border-4 border-opacity-40 border-blue-800 mb-4 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Clean Your Company</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullname" className="block mb-2 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter full name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block mb-2 font-semibold">
              Number
            </label>
            <input
              type="text"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="companyName" className="block mb-2 font-semibold">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter company name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block mb-2 font-semibold">
              City
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select city</option>
              {citiesInJordan.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="streetName" className="block mb-2 font-semibold">
              Street Name
            </label>
            <input
              type="text"
              id="streetName"
              name="streetName"
              value={formData.streetName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter street name"
            />
          </div>


          <div className="mb-4">
            <label htmlFor="numOfFloors" className="block text-gray-700 text-sm font-bold mb-2">
              numOfFloors
            </label>
            <select
              id="numOfFloors"
              name="numOfFloors"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfFloors}
              onChange={handleChange}
            >
              {[...Array(11).keys()].map((num) => (
                <option key={num} value={String(num)}>
                  {num}
                </option>
              ))}

            </select>
          </div>


          <div className="mb-4">
            <label htmlFor="numOfOffices" className="block text-gray-700 text-sm font-bold mb-2">
            numOfOffices
            </label>
            <select
              id="numOfOffices"
              name="numOfOffices"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfClassrooms}
              onChange={handleChange}
            >
              {[...Array(101).keys()].map((num) => (
                <option key={num} value={String(num)}>
                  {num}
                </option>
              ))}

            </select>
          </div>


          <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Total Price</label>
                    <p className="text-gray-700">{`$${calculateTotalPrice(formData)}`}</p>
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

export default CompanyForm;
