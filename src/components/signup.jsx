 import { useEffect,useState,useContext } from "react"
 import Navbar from "./Navbar";
export default function Signup(){
 
//  console.log(GoNew);
  const initState={
    username:"",
    email:"",
     password:"",
     passwordcon:"",
     done:false
  }
 const [Auth,setAuth]=useState(false);
  const newuser=()=>{
    setAuth(true)
  }
  const out=()=>{
    setAuth(false)
  }
  const [form,setfrom]=useState(initState);

  const handlechange=(e)=>{
    const val=e.target.type==="checkbox"?e.target.checked:e.target.value
   setfrom({...form ,[e.target.name]:val})
  };

  const handlesubmit=async(e)=>{
  e.preventDefault();
  console.log(form)
   setAuth(true);
   localStorage.setItem("newuser",JSON.stringify(form));
     document.location.href="/jiomart-ui-clone-react"
     localStorage.setItem("Auth",true);
  }
  
 

  //console.log(form);
  const {username,email,password,passwordcon,done}=form;
    const [time,settime]=useState(60);
    useEffect(()=>{
      const intervalid=setInterval(()=>{
        settime((prevcount)=>{
          if(prevcount<=1){
            clearInterval(intervalid)
            return 0;
          }
          return prevcount -1
        })
      },1000)


      const clean=()=>{
        clearInterval(intervalid);
      }
      return clean
    },[])

    if(time===0){
     document.querySelector(".resend").style.display="block";
     document.querySelector(".time").style.display="none"
    }
    const resendagain=()=>{
      document.querySelector(".time").style.display="block";
      document.querySelector(".resend").style.display="none"
      settime(30)
    }
   
  const basic={
    display:"grid",
     width:"25%",
     margin:"auto",
     gap:"10px",
     padding:"10px"
  }
  const inputstyle={
    padding:"10px",
    fontSize:'16px',
    outline:"none",
    border:"1px solid silver",
  }
  const buttons={
    background:"blue",
    color:"white",
     padding:"10px",
     fontSize:"16px",
     border:"none",
  }
  const number=localStorage.getItem("mobileNo");
    return(

    <div style={basic}>
        <h1>Sign up</h1>
        <p>Please enter your details.</p>
        <input style={inputstyle} type="text"  placeholder="Your Name" name="username"  value={username} onChange={handlechange}/>
          <input style={inputstyle} type="text" placeholder="Enter Your Email ID" name="email" value={email} onChange={handlechange} />
           
       <input style={inputstyle} type="password" id="" placeholder="Enter Your Password" name="password" value={password} onChange={handlechange}/>
       <p>Use 8 or more characters with a mix of letters & numbers
</p>
          
          <input style={inputstyle} type="password" placeholder="Confirm Your Password" name="passwordcon" value={passwordcon} onChange={handlechange}/>
           <label><p>Remember me:</p><input type="checkbox" name="done" value={done} onChange={handlechange} /></label>
           <h3>Verify</h3>
           <p>We have sent 6 digit OTP on..+91{number}</p>
           <input style={inputstyle} type="text" placeholder="Enter Your OTP" />
           <p className="resend" style={{color:"red",cursor:"pointer",display:"none"}} onClick={resendagain}>Resend OTP</p>
           <p className="time" style={{color:"red",fontSize:"15px",fontFamily:"sans-serif"}}>Waiting for OTP ... {time}Sec</p>
      <input style={buttons} type="submit" placeholder="Verify" value="Verfiy" onClick={handlesubmit}/>
      
    </div>

    )
}