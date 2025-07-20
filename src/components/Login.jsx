import React, { use, useState } from 'react'
import { motion} from 'motion/react'
import {  Link } from 'react-router-dom'; // ✅ Correct
import { useNavigate } from 'react-router-dom';
import { nav } from 'motion/react-client';
const Login = () => {
localStorage.setItem('isLoggedIn', 'true');


const [email, setemail] = useState('')
const [password, setpassword] = useState('')  
const [role, setrole] = useState('customer')  

const navigate = useNavigate();
const handleLogin = () => {
    if (email && password) {
      if (role) {
      localStorage.setItem('role', role);
      navigate('/');
    }}
  };

const formHandler = (e) => {
    e.preventDefault();
  if (email && password) {
    if (role === 'customer') {
      navigate('/');
    } else if (role === 'supplier') {
      navigate('/');
    }
    console.log(role, { email, password });
  } else {
    alert("Please fill all the fields");
  }
  setemail('')
    setpassword('')
     setrole('customer')
}


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
    boxShadow:"0px 0px 10px 0px rgba(169, 175, 176, 0.75)",
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
    marginTop:"-20px"
  }
}>
      <h1 
         style={{
          fontSize:"30px",
          fontWeight:"bold",
          textAlign:"center",
          color:"#f3f4f6",
          
         fontFamily: "Urbanist, sans-serif"
         }}
         >LOGIN
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
    < motion.button className='btn' type='button'
 
   onClick={
        () => {
            setrole("customer");
            setemail('')
    setpassword('')
        }
    }
    style={{
        backgroundColor:"#5a0f63ff",
        border:"none",
        padding:"10px 52px",
        borderRadius:"5px",
        cursor:"pointer",
        color: role === "customer" ? "#cbcbcbff" : "black",  
        outline:"none",
        display:"flex",
        fontFamily: "rubik, sans-serif",
        fontWeight:"bold",
        alignItems:"center",
        justifyContent:"center",   
         backgroundColor: role === "customer" ? "#5a0f63ff" : "#cbcbcbff"  
    }

}
 whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
   
    >Customer
    </ motion.button>
    <motion.button type='button'

    onClick={
        () => {
            setrole("supplier")
            setemail('')
    setpassword('')
        }
    }
      style={{
        backgroundColor:"#5a0f63ff",
         fontFamily: "rubik, sans-serif",
         fontWeight:"bold",
        border:"none",
        padding:"10px 52px",
        borderRadius:"5px",
        cursor:"pointer",
      color: role === "supplier" ? "#cbcbcbff" : "black",
        outline:"none",
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
    <input type="password"  value={password}placeholder='Enter your password'  required
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
   
    
    <motion.button
    
  onClick={handleLogin}
    
    style={{
        backgroundColor:"#5a0f63ff",
        border:"none",
        padding:"10px 20px",
        borderRadius:"5px",
        cursor:"pointer",
        color:"#f3f4f6",
        outline:"none",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:"5px",
         fontFamily: "rubik, sans-serif",
    }}
    whileTap={{scale:0.95,opacity:0.8}}
    whileHover={{opacity:0.8}}
   
    > Login
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
       <Link style={{
         fontSize:"15px",
            color:"#f3f4f6",
       }} >Forgot Password</Link>
    </div>
    </div>
<div
style={{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"10px",
    color:"#f3f4f6",
   
    
}}>Don't have an account?<Link to="/Signup" style={{
     fontSize:"15px",
            color:"#f3f4f6",
}}>Sign up</Link></div>
</form>
      
      </motion.div></div>
  )
}

export default Login