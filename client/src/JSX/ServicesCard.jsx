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
    const { id } = useParams(); // Access the 'id' parameter from the URL

    useEffect(() => {
        axios.get('http://localhost:3001/services')
            .then(response => {
                setServices(response.data);

            })
            .catch(error => {
                console.error('Error fetching services:', error);
            });
    }, []);
    console.log(`hi: ${details}`)
    const handleSubmit = (e, id) => {
        e.preventDefault();
        const serviceData = { photo, serviceName, cardName };

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
                })
                .catch(error => {
                    console.error('Error creating service:', error);
                });
        }
    };

    const handleEdit = (id, name, cardName, photo) => {
        setEditingId(id);
        setServiceName(name);
        setCardName(cardName);
        setPhoto(photo);
        setdetails(details);
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

    return (
        <div className="container mx-auto mt-8">
            <form onSubmit={handleSubmit} className="flex items-center justify-center">
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
                    className="border rounded px-4 py-2 mr-2"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Create Card
                </button>
            </form>
            <div className="mt-8 grid grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="border rounded p-4">
                        <img src={service.photo} alt={service.name} className="mb-2" />
                        <p className="font-bold">{service.name}</p>
                        <p>{service.cardName}</p>
                        <div className="flex justify-between mt-4">
                            <Link to={`/details/${service.id}`}>
                                <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded">Details</button>
                            </Link>
                            <div>
                                {editingId === service.id ? (
                                    <button onClick={(e) => handleSubmit(e, service.id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                                        Save
                                    </button>
                                ) : (
                                    <button onClick={() => handleEdit(service.id, service.name, service.cardName, service.photo)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">
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
        </div>
    );
};

export default ServicesCard;
