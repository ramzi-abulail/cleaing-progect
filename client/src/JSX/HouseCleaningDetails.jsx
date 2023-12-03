import React from 'react'
import img11 from "../img/img11.jpg";
import { Link } from 'react-router-dom';
function HouseCleaningDetails() {
    return (
        <div >
            <div className="md:w-[400px] mb-10 ml-[620px]">
                <p className="text-5xl font-bold  text-blue-500">house cleaning</p>
            </div>
            <div className="flex flex-col md:flex-row items-center ">
                {/* Photo */}
                <div className="md:w-1/2 mb-4 md:mb-0">
                    <img
                        src={img11}
                        alt="Sample"
                        className="w-full h-auto rounded-xl shadow-xl ml-[350px]"
                    />
                </div>
            </div>
            {/* text */}
            <div className='flex flex-col mt-16'>
                <div className='mx-20'>
                    <p class="text-2xl text-gray-700 dark:text-gray-400 font-bold text-center">Our cleaning house services involve professional cleaners providing a range of services to ensure a clean, organized, and hygienic living space.  </p>
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
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Dusting: </p>Cleaning and wiping surfaces to remove dust and debris.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Vacuuming and Mopping:</p> Cleaning floors using appropriate equipment and products.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Kitchen Cleaning:</p> Wiping countertops, cleaning sinks, appliances, and the inside of microwaves/ovens.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Bathroom Cleaning:</p> Sanitizing toilets, sinks, showers, and tubs.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Surface Cleaning: </p>Cleaning and sanitizing surfaces throughout the house.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Trash Disposal:</p> Emptying trash bins and replacing liners.  </p>
                    <p class="text-m text-gray-700 dark:text-gray-400"> <p className=' font-bold text-xl'>Bed Making and Linen Changing: </p>Some services include changing bed linens and making beds.  </p>
                    

                </div>
            </div>
            <div className='mt-10 ml-[1100px] mb-10 '>
                <Link to="/HouseForm">
                <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center md:w-80 md:h-14 ">send a order</button>

                </Link>
            </div>

        </div>

    )
}

export default HouseCleaningDetails