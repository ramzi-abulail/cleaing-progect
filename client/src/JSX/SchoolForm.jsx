import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
const citiesInJordan = [
  'Amman',
  'Irbid',
  'Zarqa',
  'Jerash',
  'Madaba',

];

function SchoolForm1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    number: '',
    schoolName: '',
    city: '',
    streetName: '',
    numOfClassrooms: '',
    numOfFloors: '',
    numOfSchoolYards: '',
    numOfRoomsForTeachers: '',
    numOfGyms: '',
    numOfSwimmingPools: '',
    serviceName:'school Cleaning',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'number') {
      const isValidNumber = /^\d+$/.test(value);
      if (!isValidNumber) {
        return;
      }
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const totalPrice = calculateTotalPrice(formData); // Calculate total price
      const dataWithTotalPrice = { ...formData, totalPrice }; // Add totalPrice to form data
      await axios.post('http://localhost:3001/order', dataWithTotalPrice);
      // Reset form data after submission
      setFormData({
        firstName: '',
        lastName: '',
        number: '',
        schoolName: '',
        city: '',
        streetName: '',
        numOfClassrooms: '',
        numOfFloors: '',
        numOfSchoolYards: '',
        numOfRoomsForTeachers: '',
        numOfGyms: '',
        numOfSwimmingPools: '',
      });
      alert('School information submitted successfully!');
      navigate('/Payment2');
    } catch (error) {
      console.error('Error creating school:', error);
    }
  };



  const calculateTotalPrice = (formData) => {
    const baseNumberOfClassrooms = 15;
    const baseNumOfFloors = 80;
    const baseNumOfSchoolYards = 100;
    const baseNumOfRoomsForTeachers = 20;
    const baseNumOfGyms = 40;
    const baseNumOfSwimmingPools = 50;

    const numOfClassrooms = parseInt(formData.numOfClassrooms) * baseNumberOfClassrooms;
    const numOfFloors = parseInt(formData.numOfFloors) * baseNumOfFloors;
    const numOfSchoolYards = parseInt(formData.numOfSchoolYards) * baseNumOfSchoolYards;
    const numOfRoomsForTeachers = parseInt(formData.numOfRoomsForTeachers) * baseNumOfRoomsForTeachers;
    const numOfGyms = parseInt(formData.numOfGyms) * baseNumOfGyms;
    const numOfSwimmingPools = parseInt(formData.numOfSwimmingPools) * baseNumOfSwimmingPools;

    const totalPrice = numOfClassrooms + numOfFloors + numOfSchoolYards + numOfRoomsForTeachers + numOfGyms + numOfSwimmingPools;
    return totalPrice;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">School Information</h2>
        <a className='text-l font-bold mt-4 mb-10'>please fill the form for do order  :</a>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-6">
            <label htmlFor="firstName" className="block mb-2 font-semibold">
              firstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter firstName"
            />
          </div>
          <div className="mb-4 mt-6">
            <label htmlFor="lastName" className="block mb-2 font-semibold">
              lastName
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter lastName"
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
            <label htmlFor="schoolName" className="block mb-2 font-semibold">
              schoolName
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter school name"
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
              streetName
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
            <label htmlFor="numOfClassrooms" className="block text-gray-700 text-sm font-bold mb-2">
              numOfClassrooms
            </label>
            <select
              id="numOfClassrooms"
              name="numOfClassrooms"
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
            <label htmlFor="numOfSchoolYards" className="block text-gray-700 text-sm font-bold mb-2">
              numOfSchoolYards
            </label>
            <select
              id="numOfSchoolYards"
              name="numOfSchoolYards"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfSchoolYards}
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
            <label htmlFor="numOfRoomsForTeachers" className="block text-gray-700 text-sm font-bold mb-2">
              numOfRoomsForTeachers
            </label>
            <select
              id="numOfRoomsForTeachers"
              name="numOfRoomsForTeachers"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfRoomsForTeachers}
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
            <label htmlFor="numOfGyms" className="block text-gray-700 text-sm font-bold mb-2">
              numOfGyms
            </label>
            <select
              id="numOfGyms"
              name="numOfGyms"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfGyms}
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
            <label htmlFor="numOfSwimmingPools" className="block text-gray-700 text-sm font-bold mb-2">
              numOfSwimmingPools
            </label>
            <select
              id="numOfSwimmingPools"
              name="numOfSwimmingPools"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.numOfSwimmingPools}
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

export default SchoolForm1;
