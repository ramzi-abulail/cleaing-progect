import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ServiceDetailsHome = (props) => {
  const [service, setService] = useState({});
  const { id } = useParams(); // Get ID from props
  console.log("id", id)

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

  return (
    <div className="container mx-auto mt-8">
    {service && Object.keys(service).length > 0 && (
      <div className="border rounded p-4">
        <div className='flex flex-col items-center ml-60'>
          {service.serviceName && (
            <div className='text-blue-500 font-bold text-5xl my-10'>
              {service.serviceName}
            </div>
          )}
          {service.photo && <img src={service.photo} alt={service.serviceName} className='md:w-[700px] md-h-[700px] rounded-xl shadow-xl mt-6' />}
        </div>

        {(service.details || (service.cleaningTypes && service.cleaningTypes.some(type => type.trim() !== ''))) && (
          <div className='flex flex-col ml-80 mr-20 mt-20'>
            {service.details && (
              <>
                <h2 className=' font-bold text-3xl text-blue-500'>Service Details</h2>
                <p className='text-black text-xl'>{service.details}</p>
              </>
            )}

            {service.cleaningTypes && service.cleaningTypes.some(type => type.trim() !== '') && (
              <div>
                <h3 className='text-blue-500 font-bold text-3xl mt-4'>Cleaning Types:</h3>
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
      </div>
    )}
      
  </div>
);
};

export default ServiceDetailsHome;
