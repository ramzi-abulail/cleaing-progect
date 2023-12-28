import React, { useState ,useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function SchoolForm() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        streetName: '',
        apartmentNumber: '',
        selectedDate: new Date(),
        selectedTime: '12:00',
        bathrooms: '0',
        Bedroom: '0',
        livingroom: '0',
        extraRooms: '0',
        cleaningFrequency: '--',
        serviceName:'House Cleaning',
    });

    const handleDateChange = (date) => {
        setFormData({ ...formData, selectedDate: date });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const calculateTotalPrice = () => {
        const bedroomPrice = 10; 
        const livingRoomPrice = 20; 
        const extraRoomPrice = 15; 
        const bathroomPrice = 6; 
    
        const cleaningFrequencyPrices = {
            daily: 20,
            weekly: 50,
            every2weeks: 80,
            monthly: 120,
            yearly: 500,
        };
    
        const totalBedrooms = parseInt(formData.Bedroom) * bedroomPrice;
        const totalLivingRooms = parseInt(formData.livingroom) * livingRoomPrice;
        const totalBathrooms = parseInt(formData.bathrooms) * bathroomPrice;
    
        let totalExtraRooms = parseInt(formData.extraRooms) * extraRoomPrice;
        if (formData.extraRooms === 'more than 10') {
            totalExtraRooms = 30 * extraRoomPrice; // Custom price for more than 10 rooms
        }
    
        let totalAdditionalBathrooms = totalBathrooms;
        if (formData.bathrooms === 'more than 10') {
            totalAdditionalBathrooms = 20 * bathroomPrice; // Custom price for more than 10 bathrooms
        }
    
        let totalBedroomsCost = totalBedrooms;
        if (formData.Bedroom === 'more than 10') {
            totalBedroomsCost = 20 * bedroomPrice; // Custom price for more than 10 bedrooms
        }
    
        const selectedFrequency = formData.cleaningFrequency;
        const cleaningPrice = cleaningFrequencyPrices[selectedFrequency] || 0;
    
        const totalPrice = totalBedroomsCost + totalLivingRooms + totalExtraRooms + totalAdditionalBathrooms + cleaningPrice;
        return totalPrice;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const totalPrice = calculateTotalPrice(); // Calculate total price
            const dataWithTotalPrice = { ...formData, totalPrice }; // Include totalPrice in the form data
    
            const response = await axios.post('http://localhost:3001/order', dataWithTotalPrice);
            console.log('Data sent to server:', response.data);
    
            setFormData({
                fullName: '',
                email: '',
                phoneNumber: '',
                streetName: '',
                apartmentNumber: '',
                selectedDate: '',
                selectedTime: '',
                bathrooms: '',
                Bedroom: '',
                livingroom: '',
                extraRooms: '',
                cleaningFrequency: '--',
            });
            
            navigate('/Payment2');
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    


    return (
        <div className="container mx-auto p-4  ">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto  shadow-3xl p-10 border-4 border-opacity-40 border-blue-800 mb-4 rounded-2xl">
                
                    {/* Full Name */}
                    <div className="mb-4 ">
                        <label htmlFor="fullName" className="block text-gray-700 text-sm font-bold mb-2">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/*      Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your phone number"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/*   Street Name*/}
                    <div className="mb-4">
                        <label htmlFor="streetName" className="block text-gray-700 text-sm font-bold mb-2">
                            Street Name
                        </label>
                        <input
                            id="streetName"
                            name="streetName"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter street name"
                            value={formData.streetName}
                            onChange={handleInputChange}
                        />
                    </div>
                    {/*  Apartment Number*/}
                    <div className="mb-4">
                        <label htmlFor="apartmentNumber" className="block text-gray-700 text-sm font-bold mb-2">
                            Apartment Number
                        </label>
                        <input
                            id="apartmentNumber"
                            name="apartmentNumber"
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter apartment number"
                            value={formData.apartmentNumber}
                            onChange={handleInputChange}
                        />
                    </div>
        
         
                {/* Date*/}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Select Date</label>
                    <DatePicker
                        selected={formData.selectedDate}
                        onChange={handleDateChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                {/* Time*/}
                <div className="mb-4">
                    <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">
                        Select Time
                    </label>
                    <input
                        id="time"
                        name="selectedTime"
                        type="time"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.selectedTime}
                        onChange={handleInputChange}
                    />
                </div>
                {/* bathroom */}
                <div className="mb-4">
                    <label htmlFor="bathrooms" className="block text-gray-700 text-sm font-bold mb-2">
                        Number of Bathrooms
                    </label>
                    <select
                        id="bathrooms"
                        name="bathrooms"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.bathrooms}
                        onChange={handleInputChange}
                    >
                        {[...Array(11).keys()].map((num) => (
                            <option key={num} value={String(num)}>
                                {num}
                            </option>
                        ))}
                        <option value="more than 10">More than 10</option>
                    </select>
                </div>
                {/* bedroom */}
                <div className="mb-4">
                    <label htmlFor="bathrooms" className="block text-gray-700 text-sm font-bold mb-2">
                        Number of Bedroom
                    </label>
                    <select
                        id="Bedroom"
                        name="Bedroom"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.Bedroom}
                        onChange={handleInputChange}
                    >
                        {[...Array(11).keys()].map((num) => (
                            <option key={num} value={String(num)}>
                                {num}
                            </option>
                        ))}
                        <option value="more than 10">More than 10</option>
                    </select>
                </div>
                {/* livingroom */}
                <div className="mb-4">
                    <label htmlFor="livingroom" className="block text-gray-700 text-sm font-bold mb-2">
                        Number of Living Rooms
                    </label>
                    <select
                        id="livingroom"
                        name="livingroom"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.livingroom}
                        onChange={handleInputChange}
                    >
                        {[...Array(11).keys()].map((num) => (
                            <option key={num} value={String(num)}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                {/* extra room */}
                <div className="mb-4">
                    <label htmlFor="extraRooms" className="block text-gray-700 text-sm font-bold mb-2">
                        Number of Extra Rooms
                    </label>
                    <select
                        id="extraRooms"
                        name="extraRooms"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.extraRooms}
                        onChange={handleInputChange}
                    >
                        {[...Array(21).keys()].map((num) => (
                            <option key={num} value={String(num)}>
                                {num}
                            </option>
                        ))}
                        <option value="more than 10">More than 20</option>
                    </select>
                </div>
                {/*    Cleaning Frequency */}
                <div className="mb-4">
                    <label htmlFor="cleaningFrequency" className="block text-gray-700 text-sm font-bold mb-2">
                        Cleaning Frequency
                    </label>
                    <select
                        id="cleaningFrequency"
                        name="cleaningFrequency"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={formData.cleaningFrequency}
                        onChange={handleInputChange}
                    >
                        <option value="--">--</option>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="every2weeks">Every 2 Weeks</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </div>

              {/* Total Price */}
              <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Total Price</label>
                    <p className="text-gray-700">{`$${calculateTotalPrice()}`}</p>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-full">
                    Submit
                </button>
            </form >
        </div >
    );
}

export default SchoolForm;
