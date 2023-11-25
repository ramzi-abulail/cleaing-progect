import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdmainUser = () => {
    const [userData, setUserData] = useState([]);
    const [editableRow, setEditableRow] = useState(null);
    const [newUser, setNewUser] = useState({
        fullName: '',
        gmail: '',
        phone: '',
    });

    useEffect(() => {
        axios.get('http://localhost:3001/AdmainUser')
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
        axios.post('http://localhost:3001/AdmainUser', newUser)
            .then((response) => {
                setUserData([...userData, response.data]);
                setNewUser({
                    fullName: '',
                    gmail: '',
                    phone: '',
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
        axios.put(`http://localhost:3001/AdmainUser/${rowIndex}`, updatedUserData[rowIndex])
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
        axios.delete(`http://localhost:3001/AdmainUser/${rowIndex}`)
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    const generateRows = () => {
        return userData.map((row, rowIndex) => (
            <tr key={rowIndex}>
                <td className="border px-4 py-2">{editableRow === rowIndex ? (
                    <input type="text" value={row.fullName} onChange={(e) => {
                        const updatedUserData = [...userData];
                        updatedUserData[rowIndex].fullName = e.target.value;
                        setUserData(updatedUserData);
                    }} />
                ) : (
                    row.fullName
                )}</td>
                <td className="border px-4 py-2">{editableRow === rowIndex ? (
                    <input type="text" value={row.gmail} onChange={(e) => {
                        const updatedUserData = [...userData];
                        updatedUserData[rowIndex].gmail = e.target.value;
                        setUserData(updatedUserData);
                    }} />
                ) : (
                    row.gmail
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
                <td className="border px-4 py-2">
                    {editableRow === rowIndex ? (
                        <button onClick={() => handleSave(rowIndex)}>Save</button>
                    ) : (
                        <>
                            <button onClick={() => handleEdit(rowIndex)}>Edit</button>
                            <button onClick={() => handleDelete(rowIndex)}>Delete</button>
                        </>
                    )}
                </td>
            </tr>
        ));
    };

    return (


        <div>
            <div className="flex justify-center items-center mb-4 mt-10">
                <h2 className="text-xl font-semibold mr-4">AdmainUser Table</h2>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="px-2 py-1 mr-2"
                        name="fullName"
                        value={newUser.fullName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Gmail"
                        className="px-2 py-1 mr-2"
                        name="gmail"
                        value={newUser.gmail}
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
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md" onClick={handleAddUser}>Add User</button>
                </div>
            </div>
            <table className="table-auto border-collapse border border-gray-800 ml-72 mt-6">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">FullName</th>
                        <th className="border px-4 py-2">Gmail</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>{generateRows()}</tbody>
            </table>
        </div>
    );
};

export default AdmainUser;
