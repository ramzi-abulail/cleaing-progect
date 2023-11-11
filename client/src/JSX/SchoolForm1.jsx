import React from 'react'
import Counter from './Counter'

function SchoolForm1() {
    return (


        <div className='bg-blue-100' >
     
            <div>
                <div className=' text-center font-bold text-3xl text-blue-500 pt-2 ' >
                    <a >Book Us For Cleaning</a>
                </div>
                {/* livingroom */}
                <div className='flex flex-raw ml-10 mt-10 mb-10'>
                    <a className=' font-bold text-2xl pt-6'>LivingRoom Number = </a>
                    <Counter />
                </div>
            </div>

            {/* badroom */}
            <div>
                <div className='flex flex-raw ml-10 mt-10 mb-10'>
                    <a className=' font-bold text-2xl pt-6 md:w-64'>BedRoom Number = </a>
                    <Counter />
                </div>
            </div>
            {/* bathroom */}
            <div>

                <div className='flex flex-raw ml-10 mt-10 mb-10'>
                    <a className=' font-bold text-2xl pt-6  md:w-64'>BathRoom Number = </a>
                    <Counter />
                </div>
            </div>
            {/* kitchen */}
            <div>

                <div className='flex flex-raw ml-10 mt-10 mb-10'>
                    <a className=' font-bold text-2xl pt-6  md:w-64'> kitchen Number = </a>
                    <Counter />
                </div>
            </div>

            {/* Extra rooms */}
            <div>
                <div className='flex flex-raw ml-10 mt-10 mb-10'>
                    <a className=' font-bold text-2xl pt-6  md:w-68'>Extra Rooms Number = </a>
                    <Counter />
                </div>
            </div>

            <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-6 ml-[1200px]  md:w-40">next</button>

        </div>
    )
}

export default SchoolForm1