import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const InfoForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    phone: '',
    city: '',
    country: '',
    StreetName: '',

  });

  const handleChange = (e) => {
    const { name, value , password } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users', {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        StreetName: formData.street,
        password: formData.password
      });

      console.log('Data posted successfully', response.data.users);
      localStorage.setItem('id',formData. id);
      localStorage.setItem('firstName', formData.firstName);
      localStorage.setItem('lastName',  formData. lastName);

      alert('Data saved!');
      navigate('/Login');
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="max-w-md mx-auto bg-white rounded p-6 border shadow-xl mb-4">
      <h1 className="text-xl font-bold mb-4">Sign up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block mb-1">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-1">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>
  
        <div>
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-1">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="city" className="block mb-1">
            City:
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option>Amman</option>
            <option>Zarqa</option>
            <option>Irbid</option>
            {/* Add more options here */}
          </select>
        </div>

        <div>
          <label htmlFor="country" className="block mb-1">
            Country:
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="StreetName" className="block mb-1">
          StreetName
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>

            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
              Submit
            </button>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
