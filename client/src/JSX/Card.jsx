import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

const Card= () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('http://localhost:3001/card');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editingCardId !== null) {
        await axios.put(`http://localhost:3001/card/${editingCardId}`, {
          name: name,
          subject: subject,
        });
        console.log('Card updated successfully');
        setEditingCardId(null);
      } else {
        await axios.post('http://localhost:3001/card', {
          name: name,
          subject: subject,
        });
        console.log('Card created successfully');
      }
      setName('');
      setSubject('');
      fetchCards();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditCard = (id) => {
    const cardToEdit = cards.find((card) => card.id === id);
    if (cardToEdit) {
      setName(cardToEdit.name);
      setSubject(cardToEdit.subject);
      setEditingCardId(id);
    }
  };

  const handleDeleteCard = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/card/${id}`);
      console.log('Card deleted successfully:', id);
      fetchCards();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 4;
  const offset = currentPage * pageSize;
  const paginatedCards = cards.slice(offset, offset + pageSize);
  const totalPages = Math.ceil(cards.length / pageSize);
  const pageNumbers = Array.from(Array(totalPages).keys());

  return (
    <div className='bg-white md:w-[800px] mx-auto'>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mt-4 text-blue-500">Your Feedback</h1>
  
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            {editingCardId !== null ? 'Update Card' : 'Add Card'}
          </button>
        </form>
  
        {/* Display Paginated Cards */}
        <div className="mt-10 flex flex-wrap justify-center">
          {paginatedCards.map((card) => (
            <div key={card.id} className="flex flex-col bg-white border rounded-lg shadow-lg w-80 h-72 p-4 m-4">
              <div className="flex items-center justify-between ml-4 mt-2">
                <h2 className="text-xl font-bold mb-2">{card.name}</h2>
              </div>
              <hr />
              <p className="mt-2 ml-4 mb-4">{card.subject}</p>
              <div className="flex items-center justify-around mt-auto">
                <button
                  type="button"
                  onClick={() => handleEditCard(card.id)}
                  className="text-black font-bold py-2 px-4 rounded"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteCard(card.id)}
                  className="text-black font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
  
        {/* Pagination Buttons */}
        <div className="flex justify-center mt-4">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 h-8 rounded-full focus:outline-none ${
                currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
