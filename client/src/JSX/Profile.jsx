import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const Profile = () => {
  const [userData, setUserData] = useState({ photo: null, details: null });
  const [photo, setPhoto] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a JSON server running on http://localhost:3000
      await axios.post('http://localhost:3001/users', { url: photo });
      // Handle success by updating the state or fetching the updated data again
      console.log('Photo added successfully!');
    } catch (error) {
      // Handle error
      console.error('Error adding photo:', error);
    }
  };




  useEffect(() => {
    axios.get(`http://localhost:3001/users?id=${localStorage.id}`)
      .then((response) => {
        setUserData(response.data[0]);


        console.log(response.data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);





  return (
    <div className="flex flex-raw">
      {/* slidbar */}
      <div className="bg-gray-800 text-white w-64 h-screen flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Sidebar</h1>
          <ul className="space-y-2 font-medium">
            <Link to="/Profile">
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Profile
              </li>
            </Link>
            <Link to="/ProfileForm"> <li className="py-2 hover:bg-gray-700 cursor-pointer">
              Edit Profile
            </li></Link>
            <Link to="/OurServices">
              <li className="py-2 hover:bg-gray-700 cursor-pointer">
                Order
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <main className=" flex flex-col p-8">
        {/* Display uploaded photo */}

        
        {/* User details */}
        <div className=" ml-6">

          {userData && (
            <div className='text-black font-bold '>
              <p>firstName: {userData.firstName}</p>
              <p>lastName: {userData.lastName}</p>
              <p>Email: {userData.email}</p>

              <section>
                <h2 className="text-lg font-semibold mt-4">Additional Information</h2>
                <p>Phone: {userData.phone}</p>
                <p>City: {userData.city}</p>
                <p>Country: {userData.country}</p>
                <p>streetName: {userData.StreetName}</p>
              </section>
            </div>
          )}

        </div>

      </main>



    </div>


  );
};

export default Profile;
