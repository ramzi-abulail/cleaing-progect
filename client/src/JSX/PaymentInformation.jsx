import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentInformation() {
    const [paymentInfo, setPaymentInfo] = useState([]);

    const userId = localStorage.getItem('id')
    useEffect(() => {
        const fetchPaymentInfo = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/order?userId=${userId}`);
                const orders = response.data;

                console.log(response.data);
                setPaymentInfo(orders);
            } catch (error) {
                console.error('Error fetching payment info:', error);
            }
        };

        fetchPaymentInfo();
    }, [userId]);

    const userOrders = paymentInfo.filter(order => order.userId === userId);

    return (
        <div>
            <h2>Payment Information : {userId}</h2>
            {userOrders && userOrders.map((order, index) => (
                <div key={index} className='ml-4 my-10 shadow-xl w-80 '>
                    <p className='font-bold text-lg ml-4 mt-10'>Service Name: {order.serviceName}</p>
                    <p className='font-bold text-lg ml-4 mt-10'>Total Price: {order.totalPrice}</p>
                </div>
            ))}
        </div>
    );
}

export default PaymentInformation;
