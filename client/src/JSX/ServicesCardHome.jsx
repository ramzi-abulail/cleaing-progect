import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ServicesCardHome = () => {
    const [services, setServices] = useState([]);
    const [currentPage, setCurrentPage] = useState();



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
        <div className="container mx-auto mt-8">
            <div>
                <div className='text-center font-bold text-3xl mb-2 text-blue-500'>
                    <a>Our Services</a>
                </div>
                <div className='text-center font-bold text-2xl mb-4 text-blue-500'>
                    <a>What We Are Offering</a>
                </div>

            </div>
            <div className="mt-8 grid grid-cols-4 md-w-[1200px] ">
                {paginatedServices.map((service) => (
                    <div key={service.id} className="border shadow-2xl ml-10 p-4 md:w-[300px] md:h-[320px] mb-20 mt-20">
                        <img src={service.photo} alt={service.name} className="mb-2 md:w-[300px] md:h-[200px]" />
                        <p className="font-bold">{service.name}</p>
                        <p>{service.cardName}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/details/${service.id}`}
                                className="bg-blue-500 text-white px-2 py-1 rounded w-full text-center"
                                onClick={handleClick} // Attach the handleClick function to onClick event
                            >
                                Details

                            </Link>

                        </div>

                    </div>

                ))}

            </div>
            {/* Pagination Buttons */}
            <div className="flex justify-center mt-4">
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page - 1)}
                        className={`px-3 h-8 rounded-full focus:outline-none ${currentPage === page - 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
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
