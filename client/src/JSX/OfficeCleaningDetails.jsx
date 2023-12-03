import React from 'react'
import img11 from "../img/img11.jpg";
import { Link } from 'react-router-dom';

function OfficeCleaningDetails() {
    return (

        <div>
            <div className="md:w-[400px] mb-10 ml-[620px]">
                <p className="text-5xl font-bold  text-blue-500">house cleaning</p>
            </div>
            <div className="flex flex-col md:flex-row items-center ">
                {/* Photo */}
                <div className="md:w-1/2 mb-4 md:mb-0 ml-10">
                    <img
                        src={img11}
                        alt="Sample"
                        className="w-full h-auto rounded-xl shadow-xl ml-[350px]" />
                </div>
            </div>

            {/* text */}
            <div className='flex flex-col mt-16'>
                <div className='mx-20'>
                    <p class="text-2xl text-gray-700 dark:text-gray-400 font-bold text-center" >Our office cleaning services encompass a range of tasks designed to maintain a clean, hygienic, and organized workplace. </p>
                </div>
            </div>
            {/* text 2 */}
            <div className='flex flex-col '>
                <p className="text-4xl font-bold  text-blue-500 ml-20 mt-10">Types of Cleaning Services Offered</p>
                <div className='ml-28 mt-6 flex flex-col justify-evenly space-y-4' >
                    <p class="text-m text-gray-700 dark:text-gray-400">  <p className=' font-bold text-xl'>Regular Cleaning:</p>  This includes routine cleaning tasks like dusting, vacuuming, mopping floors, cleaning bathrooms, and kitchens on a regular basis.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">   <p className=' font-bold text-xl'>Deep Cleaning:</p> A more intensive and thorough cleaning that covers areas not typically addressed in regular cleaning, such as baseboards, behind appliances, inside cabinets, etc.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  <p className=' font-bold text-xl'> Specialized Services: </p>Some companies offer specialized services like carpet cleaning, upholstery cleaning, window cleaning, and more.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">   <p className=' font-bold text-xl'>Move-in/Move-out Cleaning:</p> Cleaning services specifically tailored for when someone moves into a new home or moves out of one. This can involve a more comprehensive cleaning of the entire house. </p>
                </div>
            </div>
            {/* text 3 */}
            <div className='flex flex-col '>
                <p className="text-4xl font-bold  text-blue-500 ml-20 mt-10"> What we Do </p>
                <div className='ml-28 mt-6 flex flex-col justify-evenly space-y-4' >
                <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl' >Dusting and Wiping Surfaces: </p> This involves dusting desks, tables, shelves, and other surfaces to remove dust, dirt, and debris. Wiping down surfaces with appropriate cleaning agents ensures cleanliness..  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Floor Care:</p> Vacuuming carpets, mopping hard floors, and sweeping to remove dirt and debris. Additionally, specialized floor treatments like waxing, buffing, or steam cleaning might be included for floor maintenance.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Restroom Cleaning:</p> Thoroughly cleaning and disinfecting toilets, sinks, counters, mirrors, floors, and restocking supplies such as toilet paper, soap, and hand towels.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Trash Removal:</p> Emptying trash bins and ensuring proper disposal of waste and recycling materials.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Window and Glass Cleaning:</p> Cleaning windows, glass partitions, and other glass surfaces to maintain a clear and professional appearance </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Kitchen/Break Room Cleaning </p>Cleaning kitchen appliances, wiping down countertops, and ensuring sinks are clean and sanitized. </p>

                </div>
            </div>

            <div className='mt-10 ml-[1100px] mb-10 '>
                <Link to="/MyForm">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-80 md:h-14 ">send a order</button>

                </Link>
            </div>

        </div>

    )
}

export default OfficeCleaningDetails