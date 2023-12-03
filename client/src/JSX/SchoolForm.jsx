import React, { useState } from 'react';
import axios from 'axios';

const citiesInJordan = [
  'Amman',
  'Irbid',
  'Zarqa',
  'Jerash',
  'Madaba',

];

function SchoolForm() {
  const [formData, setFormData] = useState({
    fullname: '',
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
      await axios.post('http://localhost:3001/schools', formData);
      setFormData({
        fullname: '',
        number: '',
        companyName: '',
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
    } catch (error) {
      console.error('Error creating school:', error);
    }
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4 text-center">School Information</h2>
        <a className='text-l font-bold mt-4 mb-10'>please fill the form for do order  :</a>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-6">
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
          {/* Other form fields */}
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
              School Name
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

export default SchoolForm;
