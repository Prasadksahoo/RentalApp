import React, { use, useState } from 'react'
import { motion} from 'motion/react'
import {  Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast ,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')  
  const [role, setrole] = useState('customer')  
  const [companyName, setcompanyName] = useState('')
  const navigate = useNavigate();
  
  
  
  const formHandler = (e) => {
      e.preventDefault();
      if (role === 'customer' && name && email && password) {
  console.log(role, { name, email, password });
  toast.success("Signed Up Successfully");
} else if (role === 'supplier' && name && email && password && companyName) {
  console.log(role, { name, companyName, email, password });
  toast.success("Signed Up Successfully");
} else {
  alert("Please fill all the fields");
}

    
    setemail('')
      setpassword('')
       setrole('customer')
       setcompanyName('')
       setname('')  
       setTimeout(() => {
    navigate('/Login');
  }, 1500); 
       
  }
//const notify=() => toast("Signed Up Successfully");
  return (
    <div 
     style={{display:"flex",
 justifyContent:"center",
 alignItems:"center",
 height:"100vh",
 width:"100vw",
  background:"linear-gradient(70deg, #242b36ff, #42536dff)",
  }} >
       <motion.div drag  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
       style={{display:"flex",
       justifyContent:"center",
       alignItems:"center",
       flexDirection:"column",
      backgroundColor:"transparent",
       backdropFilter:"blur(10px)",
       padding:" 100px 50px",
       borderRadius:"10px",
    text:"bold",
    boxShadow:"0px 0px 20px 0px rgba(169, 175, 176, 0.75)",
    maxHeight:"350px",
  transition: "all 0.1s ease-in-out",
   
}}
       >
       
<form action="" onSubmit={(e) =>{
 formHandler(e);
 

}} style={
  {
    display:"flex",
    flexDirection:"column",
    gap:"5px",
  }
}>
      <h1 
         style={{
          fontSize:"30px",
          fontWeight:"bold",
          textAlign:"center",
          color:"#f3f4f6",
          marginTop:"-35px",
          fontFamily: "Urbanist, sans-serif"
         }}
         >
         Sign Up
         </h1>

   <div 
   style={
    {
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      gap:"10px", 
    }
   }> 
    <motion.button className='btn' type='button'
 
   onClick={
        () => {
            setrole("customer");
            setemail('')
    setpassword('')
    setname('')
    
        }
    }
    style={{
        backgroundColor:"#5a0f63ff",
        border:"none",
          fontFamily: "rubik, sans-serif",
        fontWeight:"bold",
        padding:"10px 52px",
        borderRadius:"5px",
        cursor:"pointer",
        color: role === "customer" ? "#cbcbcbff" : "black",  
        outline:"none",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",   
         backgroundColor: role === "customer" ? "#5a0f63ff" : "#cbcbcbff"  
    }
}

whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}

    >Customer
    </motion.button>
    <motion.button type='button'

    onClick={
        () => {
            setrole("supplier")
            setemail('')
    setpassword('')
    setname('')
   
    
        }
    }
      style={{
        backgroundColor:"#5a0f63ff",
        border:"none",
          fontFamily: "rubik, sans-serif",
        fontWeight:"bold",
        padding:"10px 52px",
        borderRadius:"5px",
        cursor:"pointer",
      color: role === "supplier" ? "#cbcbcbff" : "black",
        outline:"none",
        display:"flex",
        alignItems:"center",
        justifyContent:"center", 
         backgroundColor: role === "supplier" ? "#5a0f63ff" : "#cbcbcbff" 
    }
}
whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
>Supplier
</motion.button>
    </div>
    <div
    style={{
        display:"flex",
        flexDirection:"column",
        gap:"10px",
        marginTop:"15px",
    }}>

       <input type="Text"  value={name}placeholder='Enter your username' required
       onChange={(e) => setname(e.target.value)}
     style={{
        padding:"10px",
        border:"1px solid #ccc",
        borderRadius:"5px",
 backgroundColor:"transparent",
        color:"#ece1e1ff",
  outline:"none",
   fontFamily: "rubik, sans-serif",

    }}
    />

    <input type="Email"value={email} placeholder='Enter your email'  required
    onChange={
        (e) => {
            setemail(e.target.value)
  }
}
    style={{
        padding:"10px",
        border:"1px solid #ccc",
        borderRadius:"5px",
        backgroundColor:"transparent",
        color:"#ece1e1ff",
        outline:"none",
         fontFamily: "rubik, sans-serif",

    }}
    />
   
    <input type="password"    value={password}placeholder='Enter your password'  required
     onChange={(e) => setpassword(e.target.value)}
     style={{
        padding:"10px",
        border:"1px solid #ccc",
        borderRadius:"5px",
  backgroundColor:"transparent",
        color:"#ece1e1ff",
  outline:"none",
   fontFamily: "rubik, sans-serif",

    }}
    />
    {role==='supplier' && (
      <input type="Text"  value={companyName} placeholder='Enter your company name'  required
       onChange={(e) => setcompanyName(e.target.value)}
     style={{
        padding:"10px",
        border:"1px solid #ccc",
        borderRadius:"5px",
  backgroundColor:"transparent",
        color:"#ece1e1ff",
  outline:"none",
   fontFamily: "rubik, sans-serif",

    }}
    />)}
   
    
    <motion.button 
    
    style={{
        backgroundColor:"#5a0f63ff",
        border:"none",
        padding:"10px 20px",
        borderRadius:"5px",
        cursor:"pointer",
        color:"white",
        outline:"none",
        fontFamily: "rubik, sans-serif",
         display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"5px",
    }}
     whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
   
   
    >Sign Up
     <span className="material-symbols-outlined">
login</span>
    </motion.button>
   
    </div>
    <div
    style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"5px",
    }}
        >
        <div
    style={{
        display:"flex",

        alignItems:"center",
        marginTop:"10px",
    }}
    >
        <input type="checkbox" />
        <h1
        style={{
             fontSize:"15px",
            color:"#f3f4f6",
        }}
        >Remember Me
        </h1>
    </div>
    <div>
        
    </div>
    </div>
<div
style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"10px",
    
            color:"#f3f4f6",
}}>Already have an account?<Link to="/Signup">Sign in </Link></div>
</form>
      
      </motion.div>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </div>
  )
}

export default Signup