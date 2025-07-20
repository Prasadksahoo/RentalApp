import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion} from 'motion/react'
import { nav } from 'motion/react-client';
const Header = () => {
const navigate = useNavigate();
 const [role, setRole] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedRole) setRole(storedRole);
    if (storedLogin === 'true') setIsLoggedIn(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('isLoggedIn');
  setRole('');
    setIsLoggedIn(false);
    navigate('/');
  };

   const [cards, setCards] = useState([]);
  
    useEffect(() => {
      const storedCards = localStorage.getItem('cards');
      if (storedCards) {
        setCards(JSON.parse(storedCards));
      }
      const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setRole(storedRole);
      console.log(storedRole);
    }
    }, []);
  const formHandler = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <section
     style={{
        
        
        padding:"30px",
        background:"linear-gradient(70deg, #242b36ff, #42536dff)",
        color:"white",
       // height:"100vh",
        width:"100vw",
        
        
      }}>
      <div
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"linear-gradient(70deg, #bec8d7ff, #42536dff",
        backdropFilter:"blur(20px)",
        boxShadow:"0px 0px 10px rgba(207, 202, 202, 0.3)",
        width:"91%",
        borderRadius:"10px",
        padding:"17px 12px",
        height:"40px",
                gap:"10px"
      }}
     
      >
        <h1
        style={{
          fontFamily: "Dancing Script, cursive",
          fontSize:"40px"
        }}>BikeHUB</h1>
       <form action="" onSubmit={(e)=>{
        formHandler(e);
       }}
       style={
          {
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
           gap:"8px",
           width:"50%"
            
          }
        }>
        
        
           <input type="search"  placeholder='search........'
           style={{
            padding:"10px",
            border:"1px solid #7d7979ff",
            background:"transparent",
            color:"white",
           borderRadius:"5px",
            width:"70%",
            outline:"none"
          
           }}/>
          
          <select name="date" id="" 
          style={{
            padding:"10px 12px",
           border:"1px solid #7d7979ff",
            background:"transparent",
            color:"white",
           borderRadius:"5px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontFamily:" rubik ,sans-serif"
          }}>
            <option value="">Date</option>
            
          </select>
          <select name="Time" id="" 
          style={{
             padding:"10px 12px",
            border:"1px solid #7d7979ff",
            background:"transparent",
            color:"white",
            borderRadius:"5px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontFamily:" rubik ,sans-serif"
          }}>
            <option value="">Time</option>
            
          </select>
           <motion.button 
           style={{
             display:"flex",
            justifyContent:"center",
            alignItems:"center",
            outline:"none",
            padding:"10px 15px",
            backgroundColor:"#5a0f63ff",
            border:"none",
            fontFamily:" rubik ,sans-serif",
            fontWeight:"bold"
           }}
           whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}>search</motion.button>
        
</form>
          
           
           <div
           style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          gap:"10px"
        

        }}>
          <a href="" style={{color:"white",fontFamily:" rubik ,sans-serif",fontWeight:"bold"}}>HOME</a>
          <a href="#bikes" style={{color:"white",fontFamily:" rubik ,sans-serif",fontWeight:"bold"}}>BIKES</a>
          <a href="#about" style={{color:"white",fontFamily:" rubik ,sans-serif",fontWeight:"bold"}}>ABOUT</a>
          <a href="#contact" style={{color:"white",fontFamily:" rubik ,sans-serif",fontWeight:"bold"}}>CONTACT</a>
         {!isLoggedIn ? ( <motion.button onClick={()=>{
             navigate("/Login")
           }}
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            outline:"none",
            padding:"10px 20px",
            backgroundColor:"#5a0f63ff",
            border:"none",
            fontFamily:" rubik ,sans-serif",
          
          }}
          whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}>Login</motion.button>):(
       <motion.button onClick={handleLogout}
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            outline:"none",
            padding:"10px 20px",
            backgroundColor:"#5a0f63ff",
            border:"none",
            fontFamily:" rubik ,sans-serif",
            fontWeight:"bold",
            borderRadius:"8px"
          }}
          whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}>Logout</motion.button>)}
     {role === 'supplier' && (
        < motion.button
        whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
          style={{
            
            padding: '9px 10px',
            backgroundColor: '#4caf50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            outline:"none",
            display:"flex",
            justifyContent:"center",    
            alignItems:"center"
          }}
          onClick={() => {
            // navigate or perform action
            navigate('/SupplierHome');
          }}
        >
          Dashboard
        </motion.button>)}
          </div>
        </div>
        <div
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          
        }}>
          <h1 style={{
            fontSize:"40px",
            fontFamily:" rubik ,sans-serif",
            marginTop:"20px"
          }}>Rent your ride. Explore the city your Way.</h1>
<p style={{
  
  fontSize:"20px",
 width:"50%",
  textAlign:"center",
  marginTop:"-30px",
  fontFamily:" rubik ,sans-serif"
}}>
  Discover, rent, and ride with ease. BikeHUB helps customers to  find the best reliable bikes from trusted suppliers across the city. Fast bookings, flexible pricing, and zero hassle.
</p>

<motion.button style={{
  fontFamily:" rubik ,sans-serif",
   padding:"10px 15px",
            backgroundColor:"#5a0f63ff",
            border:"none",
            
            outline:"none"
}}
whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}><a href="#bikes" 
    style={{color:"white",fontFamily:" rubik ,sans-serif",
            fontWeight:"bold",textDecoration:"none"}}>Book Now</a></motion.button>
<div style={{
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"20px",
  marginTop:"40px",
  transform:"translateX(5%)"
}}>
  <div style={{
    
  }}>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgD9ssUMo5nX6RGe9JrIa9qYchezdHAPT4g&s" alt=""  style={{
      width:"60px",
      height:"60px",borderRadius:"50%",
      display:"flex",
    transform:"translateX(100%)"
    }}/>
    <p style={{fontFamily:" rubik ,sans-serif",fontSize:"20px",width
    :"50%"
    }}><strong>Easy Booking</strong><br></br>
    Choose your location , Dates and bikes in just a few clicks</p>
  </div>
  <div>
    <img src="data:image/png;base64,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" alt="" 
    style={{
      width:"60px",
      height:"60px",
      borderRadius:"100%",
       transform:"translateX(100%)"
     }}/>
    <p style={{fontFamily:" rubik ,sans-serif",fontSize:"20px",width
    :"50%"}}><strong>High-Quality Bikes</strong><br></br>
    Our Bikes are Well maintained and suitable for your needs</p>
  </div>
  <div>
     <img src="data:image/png;base64,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" alt="" 
       style={{width:"60px",height:"60px",borderRadius:"50%", transform:"translateX(100%)"}}/>
    <p style={{fontFamily:" rubik ,sans-serif",fontSize:"20px",width
    :"50%"}}><strong>Affordable Prices</strong><br></br>
  Competitive hourly rates with no hideen fees</p>
  </div>
</div>
        </div>
        <p id="bikes"style={{
       fontFamily: "Dancing Script, cursive",
          fontSize: '30px',
          marginTop: '100px',
          width: '100%',
        }}>Trending Rides...........</p>
        
        <div 
         style={{
          marginTop: '70px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '30px',
          width: '100%',
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
               background: 'transparent',
              backdropFilter: 'blur(10px)',
                borderRadius: '10px',
                boxShadow: '0 0px 10px rgba(238, 228, 228, 0.95)',
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
              <motion.button
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
                whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
              >
                Book Now
              </motion.button>
            </div>
          ))
        )}

        </div>
        <div id='about'
        style={{
          width:"95%",
          
        }}>
          <h2 style={{
            textAlign:"center",
            fontSize:"40px",
            fontFamily:"dancing script, cursive" ,
            marginTop:"100px"  
          }}>About us.....</h2>
          <div style={{
            display:"flex",
            justifyContent:"center",
          }}>
            <p style={{fontSize:"18px",
              fontFamily:"rubik, sans-serif",
              textAlign:"justify"
            }}>Welcome to BikeHUB <strong>Your Trusted Bike Rental Partner!</strong> <br /><br />

At BikeHUB, we believe that mobility should be easy, affordable, and accessible. Whether you're a tourist exploring a new city, a student heading to class, or a professional on the move, we’ve got the perfect ride for you. <br /><br />

Founded with a passion for smart travel,  BikeHUB connects bike owners with riders through a seamless and secure digital platform. Our mission is to simplify bike renting and make two-wheeler transportation efficient, eco-friendly, and fun.
<br /><br />
Why Choose BikeHub?<br /><br />

🚴 Wide range of bikes & scooters <br /><br />

🛡️ Verified suppliers & legal compliance <br /> <br />

💰 Budget-friendly hourly & daily pricing <br /> <br />

📍 GPS-enabled bikes for safety and tracking <br /> <br />

📲 Easy booking through our app <br /><br />

We’re committed to improving urban mobility and promoting shared transportation across India, <br />

So, hope on and BikeHUB take you places!

</p>
          </div>
        </div>
        <div style={{
          width:"100%",
          
         
        }}>
        <h2 id="contact" style={{
          fontFamily: "Dancing Script, cursive",
          fontSize: '30px',
          marginTop: '200px',
          width: '100%',
          textAlign:"center"
        }}>Contact Us...........</h2>
         <p style={{
          fontSize:"18px",
          fontFamily:"rubik, sans-serif",
          textAlign:"center"
         }}>Have a question, suggestion, or just want to say hello? We're here to help!</p>
        <div style={{
          backgroundColor:"#342d2dff",
          width:"105%",
          height:"300px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          marginTop:"-120px",marginBottom:"-40px",marginLeft:"-30px"
        }}>
         
<div style={{
  display:"flex",
  justifyContent:"space-between",
  width:"90%",
  gap:"50px",
  marginTop:"80px",
  columnCount:"3"
}}>
  <div><p style={{
          
          fontFamily:"rubik, sans-serif",
       
         }}>📧 Email: support@bikehubs.com Phone: +91-96935499234  <br />🌐 Website: www.bikehubs.com</p></div>
  <div><p style={{
          
          fontFamily:"rubik, sans-serif",
          
         }}>📍 Address:
BikeHUB Mobility Solutions Pvt. Ltd.
3rd Floor, Startup Hub
patia, Bhubaneswar – 754201, India</p></div>
  <div><p style={{
          
          fontFamily:"rubik, sans-serif",
     
         }}>🕐 Support Hours:
Monday to Saturday – 9:00 AM to 7:00 PM
Sunday – Closed</p></div>
</div>
        </div>
        </div>
        </section>
        </div>
      
   
  )
}

export default Header