import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FirebaseImageUpload from '../FireBase/FirebaseImageUpload';

function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    country: '',
    url:[],
    phone: '',
    streetName: '', 
  });
  
  // Inside FirebaseImageUpload component


  useEffect(() => {
    // Fetch data from JSON server
    axios.get(`http://localhost:3001/users?id=${localStorage.id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
  
    console.log(formDataToSend);
    // Append the file URL to the FormData
    formDataToSend.append('profileImage', formData.url); // Adjust the key based on your form data
  
    console.log(formData);
    // Send updated data to JSON server
    axios.put(`http://localhost:3001/users/${formData[0].id}`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set content type for file upload
      },
    })
    .then(response => {
      console.log('Data updated:', response.data);
      // Handle success, redirect, or perform additional actions
    })
    .catch(error => {
      console.error('Error updating data:', error);
      // Handle error scenarios
    });
  };
  
// Inside ProfileForm component
const handleImageUpdate = (imageURL) => {
  console.log(imageURL);
  setFormData(prevData => ({
    ...prevData,
    url: imageURL, // Assuming 'url' is the key for the image URL in formData
  }));
};


  return (
    <form onSubmit={handleSubmit}>

      <div className="space-y-12 md:ml-10 md:mr-10">
        <div className="border-b border-gray-900/10 pb-12">
        <FirebaseImageUpload handleImageUpdate={handleImageUpdate} />
          <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
       
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  onChange={handleInputChange}
                  value={formData.firstName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  onChange={handleInputChange}
                  value={formData.lastName}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* Include other fields similarly */}
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  onChange={handleInputChange}
                  value={formData.phone}
                  id="phone"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="City" className="block text-sm font-medium leading-6 text-gray-900">
                City
              </label>
              <div className="mt-2">
                <select
                  id="City"
                  name="city"
                  autoComplete="City-name"
                  onChange={handleInputChange}
                  value={formData.city}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
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
                </select>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="Country" className="block text-sm font-medium leading-6 text-gray-900">
                Country
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="country"
                  onChange={handleInputChange}
                  value={formData.country}
                  id="Country"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="streetName" className="block text-sm font-medium leading-6 text-gray-900">
              streetName              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="StreetName"
                  onChange={handleInputChange}
                  value={formData.streetName}
                  id="Country"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to="/Profile" className="text-sm font-semibold leading-6 text-gray-900">
          Back
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;
