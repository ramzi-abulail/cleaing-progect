import React from 'react';
import img2 from '../img/img2.jpg';
import img10 from '../img/img10.jpg';
import img11 from '../img/img11.jpg';
import img12 from '../img/img12.jpg';
import { Link } from 'react-router-dom';



function OurServices() {
  const role = localStorage.getItem('role');


  return (
    <div>
      <section className='bg-white md:h-88 p-6'>
        <div className='text-center font-bold text-3xl mb-2 text-blue-500'>
          <a>Our Services</a>
        </div>
        <div className='text-center font-bold text-2xl mb-4 text-blue-500'>
          <a>What We Are Offering</a>
        </div>

        <div className='flex flex-col md:flex-row justify-evenly mx-4 bg-white mt-20'>

          {/* 1st card */}
          <div className='mb-4 bg-white shadow-2xl md:w-80'>
            <img className="rounded-t-lg md:h-60 p-2" src={img11} alt="" />
            <div className="p-5">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">House Cleaning</h5>
              <Link to="/HouseCleaningDetails" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto md:ml-[75px]">
                read more details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 2nd card */}
          <div className='mb-4 border shadow-2xl md:w-80'>
            <img className="rounded-t-lg md:h-60 p-2" src={img2} alt="" />
            <div className="p-5">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Office Cleaning</h5>
              <Link to="/OfficeCleaningDetails" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto md:ml-[75px]">
                read more details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 3rd card */}
          <div className='mb-4 border shadow-2xl md:w-80'>
            <img className="rounded-t-lg md:h-60 p-2" src={img10} alt="" />
            <div className="p-5">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Company Cleaning</h5>
              <Link to="/CompanyCleaningDetails" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto md:ml-[75px]">
                read more details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

          {/* 4th card */}
{   (role==2 ) &&      <div className='mb-4 border shadow-2xl md:w-80'>
            <img className="rounded-t-lg md:h-60 p-2" src={img12} alt="" />
            <div className="p-5">
              <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">School Cleaning</h5>
              <Link to="/SchoolCleaningDetails" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto md:ml-[75px]">
                read more details
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>}

        </div>

      </section>
    </div>
  );
}

export default OurServices;