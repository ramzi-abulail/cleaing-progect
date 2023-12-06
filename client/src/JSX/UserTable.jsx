import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [editableRow, setEditableRow] = useState(null);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    StreetName: '',
    password: ''

  });

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    axios.post('http://localhost:3001/users', newUser)
      .then((response) => {
        setUserData([...userData, response.data]);
        setNewUser({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          country: '',
          StreetName: '',
          password: ''
        });
      })
      .catch((error) => {
        console.error('Error adding user:', error);
      });
  };

  const handleEdit = (rowIndex) => {
    setEditableRow(rowIndex);
  };

  const handleSave = (rowIndex) => {
    setEditableRow(null);
    const updatedUserData = [...userData];
    // Perform logic to save changes to the server using updatedUserData
    // For instance, you can use axios.put or axios.patch to update the data
    // Example:
    axios.put(`http://localhost:3001/usertable/${rowIndex}`, updatedUserData[rowIndex])
      .then(() => {
        // Assuming successful update, update the state with the modified user data
        setUserData(updatedUserData);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  const handleDelete = (rowIndex) => {
    const updatedUserData = userData.filter((row, index) => index !== rowIndex);
    setUserData(updatedUserData);
    // Perform logic to delete row from the server using userData state
    // For instance, you can use axios.delete to delete the data
    // Example:
    axios.delete(`http://localhost:3001/usertable/${rowIndex}`)
      .catch((error) => {
        console.error('Error deleting user:', error);
      });
  };

  const generateRows = () => {
    return userData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.firstName} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].firstName = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.firstName
        )}</td>

        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.lastName} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].lastName = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.lastName
        )}</td>

        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.email} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].email = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.email
        )}</td>
        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.phone} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].phone = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.phone
        )}</td>
        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.city} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].city = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.city
        )}</td>
        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.country} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].country = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.country
        )}</td>
        <td className="border px-4 py-2">{editableRow === rowIndex ? (
          <input type="text" value={row.StreetName} onChange={(e) => {
            const updatedUserData = [...userData];
            updatedUserData[rowIndex].StreetName = e.target.value;
            setUserData(updatedUserData);
          }} />
        ) : (
          row.StreetName
        )}</td>




        <td className="border px-4 py-2">
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
      <div className="flex justify-center items-center mb-4 mt-10 flex-col ">
        <h2 className="text-xl font-semibold mr-4">User Table</h2>
        <div className="flex items-center flex-col">
          <input
            type="text"
            placeholder="firstName"
            className="px-2 py-1 mr-2"
            name="firstName"
            value={newUser.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="lastName"
            className="px-2 py-1 mr-2"
            name="lastName"
            value={newUser.lastName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            className="px-2 py-1 mr-2"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Phone"
            className="px-2 py-1 mr-2"
            name="phone"
            value={newUser.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="city"
            className="px-2 py-1 mr-2"
            name="city"
            value={newUser.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="country"
            className="px-2 py-1 mr-2"
            name="country"
            value={newUser.country}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="StreetName"
            className="px-2 py-1 mr-2"
            name="StreetName"
            value={newUser.StreetName}
            onChange={handleChange}
          />
          <button className="px-3 py-1 bg-blue-500 text-white rounded-md" onClick={handleAddUser}>Add User</button>
        </div>
      </div>
      <table className="table-auto border-collapse border border-gray-800 ml-72 mt-6">
        <thead>
          <tr>
            <th className="border px-4 py-2">firstName</th>
            <th className="border px-4 py-2">lastName</th>
            <th className="border px-4 py-2">Gmail</th>
            <th className="border px-4 py-2">Phone</th>
            <th className="border px-4 py-2">city</th>
            <th className="border px-4 py-2">country</th>
            <th className="border px-4 py-2">StreetName</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{generateRows()}</tbody>
      </table>
    </div>
  );
};

export default UserTable;
