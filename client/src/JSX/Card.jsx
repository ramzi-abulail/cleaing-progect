import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';

const Card = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const userRole = localStorage.getItem('role');
  const canCreateCard = userRole === '2';
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('id');




  useEffect(() => {
    const storedId = localStorage.getItem('id');
    const storedFirstName = localStorage.getItem('firstName');
    const storedLastName = localStorage.getItem('lastName');

    if (storedId) {
      setUserData({ id: storedId });
      setFirstName(storedFirstName || '');
      setLastName(storedLastName || '');
    }
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/card')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/card')
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cards:', error);
      });
  }, []);

  const isUserCard = (cardUserId) => {
    console.log(userId);
    console.log(cardUserId);
    console.log(userId == cardUserId);
    return userId == cardUserId;
  };

  const handleEdit = (cardId, cardUserId) => {
    if (userRole === '2' && isUserCard(cardUserId)) {
      const cardToEdit = cards.find((card) => card.id === cardId);
      setFirstName(cardToEdit.firstName);
      setLastName(cardToEdit.lastName);
      setSubject(cardToEdit.subject);
      setEditingCardId(cardId);
    } else {
      console.log('You are not allowed to edit this card.');
    }
  };


  const handleDelete = async (cardId, cardUserId) => {
    if (userRole === '2' && isUserCard(cardUserId)) {
      try {
        await axios.delete(`http://localhost:3001/card/${cardId}`);
        const updatedCards = cards.filter((card) => card.id !== cardId);
        setCards(updatedCards);
      } catch (error) {
        console.error('Error deleting card:', error);
      }
    } else {
      console.log('You are not allowed to delete this card.');
    }
  };



  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (canCreateCard) {
        const userData = {
          firstName: localStorage.getItem('firstName') || '',
          lastName: localStorage.getItem('lastName') || '',
          userId: localStorage.getItem('id') || '',

        };

        if (editingCardId !== null) {
          await axios.put(`http://localhost:3001/card/${editingCardId}`, {
            ...userData,
            subject: subject,
          });
          console.log('Card updated successfully');
          const updatedCards = cards.map((card) =>
            card.id === editingCardId ? { ...card, ...userData, subject } : card
          );
          setCards(updatedCards);
          setEditingCardId(null);
        } else {
          const response = await axios.post('http://localhost:3001/card', {
            ...userData,
            subject: subject,
          });
          console.log('Card created successfully');
          const newCard = response.data;
          setCards([...cards, newCard]);
        }
        setSubject('');
      } else {
        console.log('You do not have permission to create or edit a card.');
        // Optionally show a message or handle unauthorized action
      }
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
    <div className='bg-white md:w-[800px] mx-auto  shadow-2xl mb-10'>
      <div className="container mx-auto px-20">
        <h1 className="text-3xl font-bold text-center mt-4 text-blue-800 pt-4">Your Feedback</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-8">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
          <button type="submit" className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            {editingCardId !== null ? 'Update Card' : 'Add your feedback'}
          </button>
        </form>

        <div className="my-32 mx-auto flex flex-col justify-center z-[] w-full h-80">
          {paginatedCards.map((card) => (
            <div key={card.id} className="flex flex-row bg-white border rounded-lg shadow-lg w-full h-72 p-4 my-4 justify-between">
              <div className='flex flex-col'>
                <p className="ml-4 mb-2">{card.firstName} {card.lastName}</p>
                <p className="mt-2 ml-4 mb-4">Subject: {card.subject}</p>
              </div>

              <div className="flex items-center justify-around mt-auto z-10">
                {isUserCard(card.userId) && (
                  <div className="flex items-center justify-around mt-auto z-10">
                    <button
                      type="button"
                      onClick={() => handleEdit(card.id, card.userId)}
                      className="text-black font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(card.id, card.userId)}
                      className="text-black font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                )}

              </div>

            </div>

          ))}
        </div>

        <div className="flex justify-center my-10 py-4">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 h-8 rounded-full focus:outline-none ${currentPage === page ? 'bg-blue-800 text-white' : 'bg-gray-200 text-black'
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
