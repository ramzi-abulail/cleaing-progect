import React from 'react'
import img12 from "../img/img12.jpg";
import { Link } from 'react-router-dom';

function SchoolCleaningDetails() {
    return (
        <div >
            <div className="md:w-[450px] mb-10 ml-[570px]">
                <p className="text-5xl font-bold  text-blue-500">School cleaning</p>
            </div>
            <div className="flex flex-col md:flex-row items-center ">
                {/* Photo */}
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                        src={img12}
                        alt="Sample"
                        className="w-full h-auto rounded-xl shadow-xl ml-[400px]"
                    />
                </div>
            </div>
            {/* text */}
            <div className='flex flex-col mt-16'>
                <div className='mx-20'>
                    <p class="text-2xl text-gray-700 dark:text-gray-400 font-bold text-center">  School cleaning services are essential for maintaining a safe, hygienic, and conducive learning environment for students and staff.  </p>
                </div>
            </div>
               {/* text 2 */}
            <div className='flex flex-col '>
                <p className=" text-4xl font-bold  text-blue-500 ml-20 mt-10">Types of Cleaning Services Offered</p>
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
                    <p class="text-m text-gray-700 dark:text-gray-400">  Classroom Cleaning   Dusting, wiping, and disinfecting desks, chairs, tables, and other surfaces to eliminate dust, dirt, and germs </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Floor Care:   Sweeping, mopping, vacuuming, and possibly specialized floor treatments to keep floors clean and well-maintained. </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Restroom Sanitization Thorough cleaning and disinfection of toilets, sinks, countertops, mirrors, floors, and restocking essential supplies like toilet paper, soap, and hand towels. </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Bathroom Cleaning: Sanitizing toilets, sinks, showers, and tubs.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Common Area Cleaning: Cleaning and disinfecting common areas such as corridors, hallways, cafeterias, and gymnasiums.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Trash Removal Emptying and replacing trash bags in bins throughout the school premises and ensuring proper disposal of waste and recyclables. </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  High-Touch Surface Disinfection  Regularly sanitizing and disinfecting frequently touched surfaces like doorknobs, light switches, handrails, shared equipment, and other common touchpoints to minimize the spread of germs. </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Window and Glass Cleaning Cleaning windows, glass doors, partitions, and other transparent surfaces to maintain cleanliness and a pleasant learning environment. </p>
                    <p class="text-m text-gray-700 dark:text-gray-400">  Playground Area Cleaning:   Cleaning and sanitizing outdoor play equipment and areas to ensure a safe and hygienic environment for children </p>


                </div>
            </div>
            <div className='mt-10 ml-[1100px] mb-10 '>
                <Link to="/SchoolForm">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-80 md:h-14 ">send a order</button>

                </Link>
            </div>

        </div>

    )
}

export default SchoolCleaningDetails