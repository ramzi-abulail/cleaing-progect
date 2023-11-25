import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServicesTable = () => {
  const [userData, setUserData] = useState([]);
  const [editableRow, setEditableRow] = useState(null);
  const [newService, setNewService] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/ServicesTable')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    setNewService(e.target.value);
  };

  const handleAddService = () => {
    if (newService.trim() !== '') {
      const newUserData = [...userData, { Services: newService }];
      setUserData(newUserData);
      setNewService('');
      
      axios.post('http://localhost:3001/ServicesTable', { Services: newService })
        .then((response) => {
          // handle success if needed
        })
        .catch((error) => {
          console.error('Error adding service:', error);
        });
    }
  };

  const handleEdit = (rowIndex) => {
    setEditableRow(rowIndex);
  };

  const handleSave = (rowIndex) => {
    setEditableRow(null);
    const updatedUserData = [...userData];

    axios.put(`http://localhost:3001/ServicesTable/${rowIndex}`, updatedUserData[rowIndex])
      .then(() => {
        setUserData(updatedUserData);
      })
      .catch((error) => {
        console.error('Error updating service:', error);
      });
  };

  const handleDelete = (rowIndex) => {
    const updatedUserData = userData.filter((row, index) => index !== rowIndex);
    setUserData(updatedUserData);

    axios.delete(`http://localhost:3001/ServicesTable/${rowIndex}`)
      .catch((error) => {
        console.error('Error deleting service:', error);
      });
  };

  const generateRows = () => {
    return userData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        <td className="border px-4 py-2">
          {editableRow === rowIndex ? (
            <input
              type="text"
              value={row.Services}
              onChange={(e) => {
                const updatedUserData = [...userData];
                updatedUserData[rowIndex].Services = e.target.value;
                setUserData(updatedUserData);
              }}
            />
          ) : (
            row.Services
          )}
        </td>
        <td className="border px-4 py-4 ">
          {editableRow === rowIndex ? (
            <button onClick={() => handleSave(rowIndex)} className='bg-blue-500 mr-4 rounded p-2'>Save</button>
          ) : (
            <>
              <button onClick={() => handleEdit(rowIndex)} className='bg-green-500 mr-4 rounded p-2'>Edit</button>
              <button onClick={() => handleDelete(rowIndex)} className='bg-red-500 rounded p-2'>Delete</button>
            </>
          )}
        </td>
      </tr>
    ));
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-4 mt-10 border">
        <h2 className="text-xl font-semibold mr-4 mb-4">Services Table</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Services"
            className="px-2 py-1 mr-2 "
            value={newService}
            onChange={handleChange}
          />
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md" onClick={handleAddService}>
            Add Service
          </button>
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-800 ml-72 mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">Services</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className='font-bold'>
          {generateRows()}
        </tbody>
      </table>
    </div>
  );
};

export default ServicesTable;
