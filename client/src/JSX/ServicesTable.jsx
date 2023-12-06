import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ServicesCard = () => {
  const [services, setServices] = useState([]);
  const [photo, setPhoto] = useState('');
  const [serviceName, setServiceName] = useState('');
  const [cardName, setCardName] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [details, setdetails] = useState('');
  const { id } = useParams();
  const [cleaningTypes, setCleaningTypes] = useState(['', '', '', '', '', '', '', '', '']);
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
  const pageSize = 3;
  const offset = currentPage * pageSize;
  const paginatedServices = services.slice(offset, offset + pageSize);
  const totalPages = Math.ceil(services.length / pageSize);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    const serviceData = { photo, serviceName, cardName, details, cleaningTypes };

    if (id) {
      // Update existing service
      axios.put(`http://localhost:3001/services/${id}`, serviceData)
        .then(response => {
          setServices(services.map(service => (service.id === id ? response.data : service)));
          setPhoto('');
          setServiceName('');
          setCardName('');
          setEditingId(null);
          setdetails('');
          setCleaningTypes(['', '', '', '', '', '', '', '', '']);

        })
        .catch(error => {
          console.error('Error updating service:', error);
        });
    } else {
      // Create new service
      axios.post('http://localhost:3001/services', serviceData)
        .then(response => {
          setServices([...services, response.data]);
          setPhoto('');
          setServiceName('');
          setCardName('');
          setdetails('');
          setCleaningTypes(['', '', '', '', '', '', '', '', '']);

        })
        .catch(error => {
          console.error('Error creating service:', error);
        });
    }
  };

  const handleEdit = (id, name, cardName, photo, details, cleaningTypes,) => {
    setEditingId(id);
    setServiceName(name);
    setCardName(cardName);
    setPhoto(photo);
    setdetails(details);
    setCleaningTypes(cleaningTypes || ['', '', '', '', '', '', '', '', '']);


  };
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/services/${id}`)
      .then(() => {
        setServices(services.filter(service => service.id !== id));
      })
      .catch(error => {
        console.error('Error deleting service:', error);
      });
  };
  const handleClick = () => {

    console.log('Button clicked!');
  };

  return (
    <div className="container mx-auto mt-8">
      <form onSubmit={handleSubmit} className="flex items-center justify-center flex-wrap gap-4 ml-60">
        <input
          type="text"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="Card Name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          className="border rounded px-4 py-2 mr-2"
        />
        <input
          type="text"
          placeholder="details"
          value={details}
          onChange={(e) => setdetails(e.target.value)}
          className="border rounded px-4 py-2 mr-2" />

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <input
            key={index}
            type="text"
            placeholder={`Type of Cleaning ${index}`}
            value={cleaningTypes[index - 1]}
            onChange={(e) => {
              const updatedCleaningTypes = [...cleaningTypes];
              updatedCleaningTypes[index - 1] = e.target.value;
              setCleaningTypes(updatedCleaningTypes);
            }}
            className="border rounded px-4 py-2 mr-2" />
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Card
        </button>
      </form>
      <div className="flex flex-row justify-evenly  items-center md:w-[1200px] ml-72">
        {paginatedServices.map((service) => (
          <div key={service.id} className="border shadow-2xl mx-auto  p-4 md:w-[320px] md:h-[320px] mb-10 mt-10   ">
            <img src={service.photo} alt={service.name} className="mb-2 md:w-[300px] md:h-[200px]" />
            <p className="font-bold">{service.name}</p>
            <p>{service.cardName}</p>
            <div className="flex justify-between mt-4">
              <Link to={`/details/${service.id}`}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                onClick={handleClick} >
                DetailsF
              </Link>
              <div>
                {editingId === service.id ? (
                  <button onClick={(e) => handleSubmit(e, service.id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEdit(service.id, service.serviceName, service.cardName, service.photo, service.details, service.cleaningTypes)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDelete(service.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </div>

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

export default ServicesCard;
