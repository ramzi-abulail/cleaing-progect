import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceDetails = (props) => {
  const [service, setService] = useState({});
  const { id } = props; // Get ID from props

  useEffect(() => {
    // Fetch service details using the ID
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/services${id}`); // Replace 'your_api_endpoint' with your actual API endpoint
        setService(response.data); // Update service state with fetched data
      } catch (error) {
        console.error('Error fetching service details:', error);
      }
    };

    fetchServiceDetails();
  }, [id]); // Trigger effect when ID changes

  return (
    <div className="container mx-auto mt-8">
      <div className="border rounded p-4">
        <h2>Service Details</h2>
        <p>ID: {service.id}</p>
        <p>Service Name: {service.name}</p>
        <p>Photo: {service.photo}</p>
        <p>Card Name: {service.cardName}</p>
        <p>Details: {service.details}</p>
        {/* Display other service details */}
      </div>
    </div>
  );
};

export default ServiceDetails;
