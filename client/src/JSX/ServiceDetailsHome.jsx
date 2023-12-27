import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetailsHome = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [service, setService] = useState([]);
    const { id } = useParams(); // Get ID from props
    console.log("id", id);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch service details using the ID
        const fetchServiceDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/services/${id}`);
                setService(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching service details:', error);
            }
        };

        fetchServiceDetails();
    }, [id]);




    const handleClick = () => {
        console.log('Service Name:', service.serviceName);
    
        switch (service.serviceName.toLowerCase()) {
            case 'house cleaning':
                navigate('/HouseForm');
                break;
            case 'office cleaning':
                navigate('/OfficeForm');
                break;
            case 'company cleaning':
                navigate('/CompanyForm');
                break;
            case 'school cleaning':
                navigate('/SchoolForm1');
                break;
            default:
                console.error('Service does not match');
                break;
        }
    };

    return (
        <div className="container mx-auto mt-10 ">
            {service && Object.keys(service).length > 0 && (
                <div className="border rounded p-4">
                    <div className='flex flex-col items-center'>
                        {service.serviceName && (
                            <div className='text-blue-800 font-bold text-5xl my-10'>
                                {service.serviceName}
                            </div>
                        )}
                        {service.photo && <img src={service.photo} alt={service.serviceName} className='md:w-[700px] md-h-[700px] rounded-xl shadow-2xl mt-6 ' />}
                    </div>

                    {(service.details || (service.cleaningTypes && service.cleaningTypes.some(type => type.trim() !== ''))) && (
                        <div className='flex flex-col  mr-20 mt-20 mx-16'>
                            {service.details && (
                                <>
                                    <h2 className=' font-bold text-3xl text-blue-800'>Service Details</h2>
                                    <p className='text-black text-xl'>{service.details}</p>
                                </>
                            )}

                            {service.cleaningTypes && service.cleaningTypes.some(type => type.trim() !== '') && (
                                <div>
                                    <h3 className='text-blue-800 font-bold text-3xl mt-4'>Cleaning Types:</h3>
                                    <ul className='list-disc pl-6'>
                                        {service.cleaningTypes.map((type, index) => {
                                            if (type.trim() !== '') {
                                                return <li key={index}>{type}</li>;
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                            )}

                        </div>
                    )}
                    <div className="ml-[1100px] my-4">


                        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-60 h-12">

                            book with us now
                        </button>

                    </div>
                </div>
            )}

        </div>
    );
};

export default ServiceDetailsHome;
