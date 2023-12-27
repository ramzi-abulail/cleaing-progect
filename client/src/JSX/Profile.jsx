import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import img16 from '../img/img16.svg'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Profile = () => {
  const [userData, setUserData] = useState({ photo: null, details: null });

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
    <div className="flex flex-row">
      {/* slidbar */}
      <div className="text-white w-64 h-screen flex flex-col rounded-3xl ml-1 mb-4 shadow-2xl bg-blue-900 ">

        <div className="mt-10 ml-4 mr-4">
          <ul className="font-medium flex flex-col gap-14 ">
            <Link to="/Profile">
              <li className=" hover:bg-emerald-300  hover:text-black cursor-pointer rounded-3xl p-2 ">
                PROFILE
              </li>
            </Link>
            <li className="mt-4">
              <Link to="/ProfileForm">
                <li className=" hover:bg-emerald-300 hover:text-black cursor-pointer rounded-3xl p-2  ">
                  EDIT PROFILE
                </li>
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/PaymentInformation">
                <li className=" hover:bg-emerald-300 hover:text-black cursor-pointer rounded-3xl p-2 ">
                  ORDER
                </li>
              </Link>
            </li>
          </ul>
        </div>
      </div>



      <main className=" flex flex-row justify-center text-center p-8">
        {/* User details */}
        {userData && (
          <div className=" flex flex-col rounded-xl shadow-xl border-4 border-opacity-40 border-blue-800 px-40 py-8 mx-64 text-center items-center h-[30rem]">
            <div className='w-40  ' >
              <img src={img16} className='rounded-full' />
            </div>

            <div className=" flex flex-col gap-5 justify-center mt-4 ">
              <div className='flex flex-row'>
                <i class="fa-solid fa-user mt-2"></i>
                <p className="text-3xl font-semibold ml-4 ">{userData.firstName} {userData.lastName}</p>

              </div>

              <div className='flex flex-row'>
                <i class="fa-solid fa-envelope mt-2"></i>
                <p className="text-xl font-semibold ml-4 "> {userData.email}</p>
              </div>

            </div>


            <div className=" flex flex-col mt-6 gap-2 justify-center">
              <div className='flex flex-row'>
                <i class="fa-solid fa-phone mt-2"></i>
                <p className="text-lg font-semibold ml-4"> {userData.phone}</p>
              </div>
              <div className='flex flex-row '>
                <i class="fa-solid fa-location-dot mt-2"></i>
                <p className="text-lg font-semibold ml-4">{userData.city} | {userData.country}</p>
              </div>
              <div className='flex flex-row '>
                <i class="fa-solid fa-map-location-dot mt-2"></i>
                <p className="text-lg  font-semibold ml-4">{userData.StreetName}</p>
              </div>

            </div>
          </div>
        )}


      </main>



    </div>


  );
};

export default Profile;
