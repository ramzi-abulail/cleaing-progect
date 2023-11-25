import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const InfoForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    street: '',
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
      const response = await axios.post('http://localhost:3001/user', formData);
      console.log('you post data Successfully', response.data);
      alert('you create account Successfully ')
      // يمكنك هنا إضافة أكواد أخرى بعد الاستجابة من السيرفر
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded p-6">
      <h1 className="text-xl font-bold mb-4"> sign up </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* حقل الاسم الكامل */}
        <div>
          <label htmlFor="firstName" className="block mb-1"> FirstName :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* حقل الاسم الأخير */}
        <div>
          <label htmlFor="lastName" className="block mb-1"> LastName :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* حقل البريد الإلكتروني */}
        <div>
          <label htmlFor="email" className="block mb-1"> email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* حقل رقم الهاتف */}
        <div>
          <label htmlFor="phone" className="block mb-1"> phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* حقل المدينة */}
        <div>
          <label htmlFor="city" className="block mb-1">city</label>
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
            <option>Mafraq</option>
            <option>Ajloun</option>
            <option>Jerash</option>
            <option>Madaba</option>
            <option>Balqa</option>
            <option>Karak</option>
            <option>Tafileh</option>
            <option>Ma'an </option>
            <option>Aqaba</option>
            {/* يمكنك إضافة المزيد من الخيارات هنا */}
          </select>
        </div>

        {/* حقل الدولة */}
        <div>
          <label htmlFor="country" className="block mb-1">country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* حقل اسم الشارع */}
        <div>
          <label htmlFor="street" className="block mb-1">street :</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <Link to="Login">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2">
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
};

export default InfoForm;
