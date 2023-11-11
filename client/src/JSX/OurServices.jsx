import React from 'react'
import classNames from "classnames";
import img2 from "../img/img2.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";


function OurServices() {
    return (

        <div>

            <section className='bg-blue-100 md:h-88 p-6'>

                <div className='text-center font-bold text-3xl mb-2'>
                    <a>Our Services</a>
                </div>
                <div className='text-center font-bold text-2xl mb-4'>
                    <a>What We Are Offering</a>
                </div>

                <div class="flex flex-raw justify-evenly mx-4 bg-blue-100 ">
                    {/*1 card */}
                    <div className='mb-4 border border-black rounded-t-lg bg-white'>

                        <img class="rounded-t-lg md:w-60 md:h-48 p-2" src={img11} alt="" />

                        <div class="p-5">

                            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center ">House Cleaning </h5>


                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
                                Make A Order
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* 2card */}
                    <div className='mb-4 border border-black rounded-t-lg  bg-white'>

                        <img class="rounded-t-lg md:w-60 md:h-48 p-2 " src={img2} alt="" />

                        <div class="p-5">

                            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Office Cleaning </h5>


                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
                                Make A Order
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* 3card */}
                    <div className='mb-4 border border-black rounded-t-lg  bg-white'>

                        <img class="rounded-t-lg md:w-60 md:h-48 p-2" src={img10} alt="" />

                        <div class="p-5">

                            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Company Cleaning </h5>


                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
                                Make A Order
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    {/* 4 card */}
                    <div className='mb-4 border border-black rounded-t-lg  bg-white'>

                        <img class="rounded-t-lg md:w-60 md:h-48 p-2" src={img12} alt="" />

                        <div class="p-5">

                            <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">School Cleaning </h5>


                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
                                Make A Order
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>



                </div>

            </section>
        </div>
    )
}

export default OurServices