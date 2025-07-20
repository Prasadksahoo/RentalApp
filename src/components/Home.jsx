import React, { useEffect, useState } from 'react';

const Home = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
        width: '100vw',
        height: '100vh',
        fontFamily: 'sans-serif',
        background:"linear-gradient(70deg, #242b36ff, #42536dff, #262f3eff, #4a648bff, #212e44ff)",
      }}
    >
      <div
        style={{
        display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CXZiMQ1GFtfPyOPxA6bYEPvUmb0Xha3ZKg&s"
          alt="Banner"
          style={{
            width: '100%',
            height: '250px',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.7)',
          }}
        />
        <h1
          style={{
          transform: 'translateY(-50%)',
          top: '20%',
          position: 'absolute',
            color: 'white',
            fontSize: '2.5rem',
            textShadow: '1px 1px 5px rgba(0,0,0,0.5)',
            zIndex: 2,
          }}
        >
          Welcome to Our Rental Service
        </h1>
      </div>    
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
          marginTop: '-30px',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '60%',
            maxWidth: '600px',
            backgroundColor: '#383b56ff',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            boxShadow: '0 10px 20px 0px rgba(215, 192, 192, 0.2)',
            padding: '15px 20px',
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <input
            type="search"
            placeholder="Search your ride..."
            style={{
              flex: 1,
              padding: '10px',
              fontSize: '1rem',
              borderRadius: '6px',
              border: '1px solid #ccc',
              outline: 'none',
              background: 'transparent',
              backdropFilter: 'blur(10px)',
            }}
          />
          <button
            style={{
              padding: '12px 20px',
              backgroundColor: '#5a0f63ff',
              color: 'white',
              border: 'none',
              outline: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Search
          </button>
        </div>
      </div>
     <div
        style={{
          marginTop: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          width: '90%',
          maxWidth: '1200px',
          paddingBottom: '30px',
        }}
      >
        {cards.length === 0 ? (
          <p style={{ textAlign: 'center', width: '100%' }}>No rides available.</p>
        ) : (
          cards.map((card, index) => (
            <div
              key={index}
              style={{
               background: '#9fa99fff',
              //backdropFilter: 'blur(10px)'
                borderRadius: '10px',
                boxShadow: '0 10px 20px rgba(224, 196, 196, 0.1)',
                padding: '15px',
                textAlign: 'center',
              }}
            >
              <img
                src={card.imageUrl}
                alt={card.name}
                style={{
                  width: '200px',
                  height: '160px',
                  objectFit: 'fill',
                  borderRadius: '8px',
                }}
              />
              <h3 style={{ margin: '10px 0',
                fontWeight: 'bold',
                fontFamily:"rubik, sans-serif"
              }}>{card.name}</h3>
              <p style={{
                margin: '10px 0',
                fontWeight: 'bold',
                fontFamily:"rubik, sans-serif"
              }}>Price: ₹{card.price}/hr</p>
              <button
                style={{
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#5a0f63ff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                outline: 'none',
                fontWeight: 'bold',
                fontFamily:"rubik, sans-serif"
                }}
              >
                Book Now
              </button>
            </div>
          ))
        )}
      </div>
    </div>
    
  );
};

export default Home;
