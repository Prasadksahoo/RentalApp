import React, { useEffect, useState } from 'react';
import { motion} from 'motion/react'
const SupplierHome = () => {
  const inputStyle = {
    padding: '10px',
    margin: '10px',
    border: '1px solid #e4d2d2f2',
    borderRadius: '5px',
    width:"70%",
    backgroundColor:"transparent",
    outline:"none"  
  }
  const [cards, setCards] = useState([]);
  const [newCard, setNewCard] = useState({
    name: '',
    price: '',
    imageUrl: ''
  });

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    setCards(storedCards);
  }, []);

  const handleAddCard = () => {
    if (!newCard.name || !newCard.price || !newCard.imageUrl) {
      alert('Please fill all fields');
      return;
    }

    const updatedCards = [...cards, newCard];
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setCards(updatedCards);

    // Clear inputs
    setNewCard({ name: '', price: '', imageUrl: '' });
  };

  const handleDeleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setCards(updatedCards);
  };

  return (
    <div 
    style={{ 
      padding: '30px', 
      fontFamily: 'sans-serif', 
      background:"linear-gradient(70deg, #2f343cff, #42536dff)",
       minHeight: '100vh', 
       display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:"column"}}>
      <form action="" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor:"transparent",
       backdropFilter:"blur(10px)",
        padding: '20px',
        borderRadius: '10px',
        boxShadow:"0px 0px 20px 0px rgba(9, 23, 26, 0.75)",
        maxWidth: '600px',
        minHeight: '400px',
        margin:"20px"
      }}>
        <h1 style=
        {{ textAlign: 'center',
         marginBottom: '30px'
          }}>Supplier Dashboard</h1>

    
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "400px",
        padding: '20px',
      }}>
        <h2>Add New Ride</h2>
        <input
          type="text"
          placeholder="Ride Name"
          value={newCard.name}
          onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
          style={
            inputStyle
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={newCard.price}
          onChange={(e) => setNewCard({ ...newCard, price: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newCard.imageUrl}
          onChange={(e) => setNewCard({ ...newCard, imageUrl: e.target.value })}
          style={inputStyle}
        />
        < motion.button onClick={handleAddCard} style={
          {
            padding: '10px 20px',
            backgroundColor: '#5a0f63ff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            outline: 'none',
            width:"75%"
          }
        }
        whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}>
          Add Ride
        </motion.button>
      </div>
      </form>

      {/* Ride Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {cards.length === 0 ? (
          <p>No rides available.</p>
        ) : (
          cards.map((card, index) => (
            <div key={index} style={{
                background: 'transparent',
              backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                boxShadow: '0 0px 10px rgba(238, 228, 228, 0.95)',
                padding: '15px',
                textAlign: 'center',
            }}>
              <img
                src={card.imageUrl}
                alt={card.name}
                style={{
                  width: '100%',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <h3>{card.name}</h3>
              <p>Price: ₹{card.price}/hr</p>
              < motion.button
              whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
                onClick={() => handleDeleteCard(index)}
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </motion.button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '6px',
  border: '1px solid #ccc'
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default SupplierHome;
