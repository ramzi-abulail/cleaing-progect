import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Counter from '../JSX/Counter';

function HouseForm() {
    const [selectedDate, setSelectedDate] = useState(null);
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (

        <div className='bg-white min-h-screen flex justify-center items-center'>

            <div className='max-w-3xl w-full px-6'>
                {/* 1 */}
                <div className='text-center font-bold text-3xl text-blue-500 pt-2'>
                    <a>Book Us For Cleaning</a>
                </div>
                <div className='ml-28'>
                    {/* BedRoom */}
                    <div>
                        <div className='flex flex-raw ml-10 mt-10 mb-10'>
                            <a className='font-bold text-2xl pt-6 md:w-64'>BedRoom Number = </a>
                            <Counter />
                        </div>
                    </div>

                    {/* BathRoom */}
                    <div>
                        <div className='flex flex-raw ml-10 mt-10 mb-10'>
                            <a className='font-bold text-2xl pt-6 md:w-64'>BathRoom Number = </a>
                            <Counter />
                        </div>
                    </div>

                    {/* Kitchen */}
                    <div>
                        <div className='flex flex-raw ml-10 mt-10 mb-10'>
                            <a className='font-bold text-2xl pt-6 md:w-64'>Kitchen Number = </a>
                            <Counter />
                        </div>
                    </div>

                    {/* Extra Rooms */}
                    <div>
                        <div className='flex flex-raw ml-10 mt-10 mb-10'>
                            <a className='font-bold text-2xl pt-6 md:w-68'>Extra Rooms Number = </a>
                            <Counter />
                        </div>
                    </div>
                </div>
                <br />
                <hr className='border border-gray-300 md:w-full' />
                {/* 2 */}
                <div>
                    <div className='flex flex-col text-center gap-3 mt-20'>
                        <a className='font-bold text-blue-500 text-4xl'>how frequent</a>
                        <div className='mt-10 ml-20'>
                            <ul className='flex space-x-4 ml-20'>
                                <li>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black rounded'>
                                        One Time
                                    </button>
                                </li>
                                <li>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black rounded'>
                                        Daily
                                    </button>
                                </li>
                                <li>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black rounded'>
                                        Weekly
                                    </button>
                                </li>
                                <li>
                                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-black rounded'>
                                        Monthly
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <br />
                <hr className='border border-gray-300 md:w-full' />
                {/* 3 */}
                <div className='bg-white mb-80'>
                    <div>
                        <div className='flex flex-col text-center gap-3 mt-20'>
                            <a className='font-bold text-blue-500 text-4xl'>When should we come clean?</a>
                            <div className='mx-auto max-w-xs'>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={handleDateChange}
                                    className='border border-gray-300 rounded px-3 py-2 text-gray-700 w-full'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <hr className='border border-gray-300 md:w-full' />


                <div className='mt-10 mb-10 ml-28'>
                    <a className='font-bold text-blue-500 text-4xl'>When should we come clean</a>
                    <div className="flex items-center justify-center mt-8">
                        <label htmlFor="hours" className="mr-10 font-bold text-2xl">
                            Choose an hour:
                        </label>
                        <select
                            id="hours"
                            className="px-3 py-1 border rounded-md mr-20"
                        // Handle your onChange event here
                        >
                            {hours.map((hour) => (
                                <option key={hour} value={hour}>
                                    {hour < 10 ? `0${hour}:00` : `${hour}:00`} {/* Formatting hour to HH:00 */}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <br />
                <hr className='border border-gray-300 md:w-full' />
                <div>


                    
                </div>

            </div>
        </div>
    );
}

export default HouseForm;
