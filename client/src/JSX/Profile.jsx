import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [photo, setPhoto] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the JSON server using axios
    axios.get(`http://localhost:3001/user`)
      .then((response) => {
        setUserData(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
  };

  return (
    <div className="flex">
      <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
          <ul className="mt-4">
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Profile</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Edit Profile</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">Order</li>
            <li className="py-2 hover:bg-gray-700 cursor-pointer">back to home page</li>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </div>
      <main className="flex-1 bg-gray-200 p-8">
        {/* Display uploaded photo */}
        {photo && (
          <div className="mb-4">
            <img
              src={URL.createObjectURL(photo)}
              alt="Uploaded"
              className="md:w-60 md:h-60 object-cover rounded-full ml-10 mt-10"
            />
          </div>
        )}
      {/* User details */}
      <div className="ml-6">
          <div>
            {userData && (
              <div>
                <p>Full Name: {userData.fullName}</p>
                <p>Email: {userData.email}</p>
                {/* Additional Information Section */}
                <section>
                  <h2 className="text-lg font-semibold mt-4">Additional Information</h2>
                  <p>Phone: {userData.phone}</p>
                  <p>City: {userData.city}</p>
                  <p>Country: {userData.country}</p>
                  <p>Street Name: {userData.street}</p>
                </section>
              </div>
            )}
          </div>
        </div>
    

        {/* Photo upload section */}
        {!photo && (
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="mb-4 ml-6"
          />
        )}
      </main>
    
    </div>
  );
};

export default Profile;
