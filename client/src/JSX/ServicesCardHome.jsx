import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ServicesCardHome = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);



    useEffect(() => {
        axios.get('http://localhost:3001/services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);




    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const pageSize = 4;
    const offset = currentPage * pageSize;
    const paginatedServices = services.slice(offset, offset + pageSize);
    const totalPages = Math.ceil(services.length / pageSize);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleClick = () => {

        console.log('Button clicked!');
    };

    return (
        <div className="container mt-8 md:w-[1200px] ml-28">
            <div className='mt-20 ml-36'>
                <div className='text-center font-bold text-3xl mb-2 text-blue-500'>
                    <a>Our Services</a>
                 </div>
                <div className='text-center font-bold text-2xl mb-4 text-blue-500'>
                    <a>What We Are Offering</a>
                </div>

            </div>
            <div className="mt-8 grid grid-cols-4 md-w-[1200px] gap-20   ">
                {paginatedServices.map((service) => (

                    <div key={service.id} className="border shadow-2xl md:w-[300px] md:h-[320px] mb-20 mt-20  text-2xl text-center rounded-3xl ">
                        
                        <img src={service.photo} alt={service.name} className="mb-2 md:w-[300px] md:h-[200px] rounded-3xl p-2 " />
                        
                        <p className="font-bold">{service.name}</p>
                           
                           < p>{service.cardName}</p>
                        
                        <div className="flex justify-between mt-4 ">
                        
                            <Link to={`/ServiceDetailsHome/${service.id}`}
                                className="bg-blue-500 text-white md:h-10 md:w-60 text-center rounded-2xl ml-8 " onClick={handleClick} >
                                Details
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            {/* Pagination Buttons */}
            <div className="flex justify-center ml-20">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page - 1)}
                        className={`px-3 h-8 rounded-full focus:outline-none ${currentPage === page - 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black '
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>


        </div>

    );
};

export default ServicesCardHome;
