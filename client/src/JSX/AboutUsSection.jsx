import React from 'react'
import img8 from '../img/img8.jpg';
import { Link } from 'react-router-dom';
function AboutUsSection() {
    return (
        <div>

            <section className="flex items-center bg-whitelg:h-screen font-poppins bg-white mt-5 border shadow-2xl mx-6">
                <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                    <div className="px-4 mb-10 md:text-center md:mb-20">
                        <p className="mb-2 text-3xl font-bold text-blue-800">
                            About Us
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full px-4 mb-10 md:w-1/2 lg:mb-0 ">
                            <h2 className="mb-4 text-2xl font-bold text-blue-800">
                                Who We Are
                            </h2>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                - We are committed to providing our customers with the highest quality cleaning services at an affordable price. We use only the best cleaning products and equipment, and our staff is highly trained and experienced.
                            </p>
                            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
                                - We understand that a clean environment is important for your health and well-being. That's why we are dedicated to providing our customers with the best possible cleaning services.
                            </p>
                        </div>

                        <div className="relative  px-4 mb-10 md:w-1/2 lg:mb-0 ">
                            <img src={img8} alt=""
                                className="relative z-40 object-cover w-full  md:h-[500px] h-40" />
                        </div>
                    </div>
                    <Link to="/AboutUs" >
                    <button  type="button" className="text-white bg-blue-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                    
                            read more
                  
                    </button>  
                    </Link>           
                       </div>
            </section>




        </div>
    )
}

export default AboutUsSection