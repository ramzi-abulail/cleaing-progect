import React from 'react'
import img7 from '../img/img7.jpg';
import img8 from '../img/img8.jpg';
import img9 from '../img/img9.png';


function AboutUs() {
    return (
        <div className='bg-white'>
            <section className="flex items-center bg-whitelg:h-screen font-poppins dark:bg-gray-800 mt-5">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <p className="mb-2 text-3xl font-semibold text-blue-500">
                            About Us
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                            <h2 className="mb-4 text-2xl font-bold text-blue-500">
                                Who We Are
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                - We are committed to providing our customers with the highest quality cleaning services at an affordable price. We use only the best cleaning products and equipment, and our staff is highly trained and experienced.
                            </p>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                - We understand that a clean environment is important for your health and well-being. That's why we are dedicated to providing our customers with the best possible cleaning services.
                            </p>
                        </div>

                        <div className="relative  px-4 mb-10 md:w-1/2 lg:mb-0">
                            <img src={img8} alt=""
                                className="relative z-40 object-cover w-full  md:h-[500px] h-40" />
                        </div>
                    </div>
                </div>
            </section>

            <div className='ml-56 mt-14'>
                <h2 className="mb-4 text-2xl font-bold text-blue-500">
                    There are many reasons why you should choose us for your cleaning needs. Here are just a few:
                </h2>
                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    - We are a licensed and insured company.
                </p>

                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    - We offer a wide range of services to meet your specific needs.
                </p>
                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    -We use only the best cleaning products and equipment.
                </p>
                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    - Our staff is highly trained and experienced.
                </p>
                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    - We offer a satisfaction guarantee on all of our work.
                </p>
                <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                    - We are committed to providing our customers with the highest quality cleaning services at an affordable price.
                </p>
            </div>

            <div>
                <h2 className="mb-4 text-2xl font-bold text-blue-500 mt-20 ml-56">
                    The Owners for cleanex clean :
                </h2>
            </div>


            <div className='flex flex-row  justify-evenly mt-14 ml-24 '>
                {/* first card */}
                <div className='mb-10'>
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img7} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Ramzi AbuLail</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Front-End Developer In Cleanex Clean</p>
                            <a href="https://github.com/ramzi-abulail" aria-current="page" className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 border border-blue-800 rounded-lg hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white mt-20 ">
                               More About Me 
                            </a>
                        </div>
                    </a>
                </div>

                {/* second card */}
                <div className='mb-10'> 
                    <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:h-64">
                        <img class="object-cover w-full rounded-t-lg h-96 md:h-64 md:w-48 md:rounded-none md:rounded-s-lg" src={img9} alt="" />
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">lorans alkhateeb</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Back-End Developer In Cleanex Clean</p>
                            <a href="#" aria-current="page" className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 border border-blue-800 rounded-lg hover:bg-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-white dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white mt-20 ">
                               More About Me 
                            </a>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default AboutUs