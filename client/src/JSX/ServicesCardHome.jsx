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
        <div className="container mt-8 md:w-[1200px] mx-auto px-4">
        <div className='mt-20'>
            <div className='text-center font-bold text-3xl mb-2 text-blue-800'>
                <a>Our Services</a>
            </div>
            <div className='text-center font-bold text-2xl mb-4 text-blue-800'>
                <a>What We Are Offering</a>
            </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {paginatedServices.map((service) => (
                <div key={service.id} className="border shadow-2xl mb-8 md:h-[300px] text-center rounded-tr-3xl rounded-bl-3xl">
                    <img src={service.photo} alt={service.name} className="w-full h-[200px] rounded-tr-3xl rounded-bl-3xl   p-3 " />
                    <div className="p-4 font-bold text-xl">
                        <p>{service.name}</p>
                        <p>{service.cardName}</p>
                        <div className="flex justify-center mt-2 ">
                            <Link
                                to={`/ServiceDetailsHome/${service.id}`}
                                className=" hover:bg-[#5354a8dd] bg-transparent border-2 border-[#5354a8dd] text-[#5354a8dd] translate-x-3 hover:text-white h-9 w-32 text-center rounded-lg pt-1"
                                onClick={handleClick}
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8">
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page - 1)}
                    className={`px-3 h-8 rounded-full focus:outline-none ${
                        currentPage === page - 1 ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
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
