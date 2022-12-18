/* eslint-disable eqeqeq */
import React from "react"
import Images from "./Images"
import "./loginstyle.css"
import Signup from "./signup"
 import {Link} from "react-router-dom"

function validate(){
  var patt=[6,7,8,9];
  var x= document.getElementById("mobile").value;
  var bool = false;
  for(var a of patt)    
  {
    var i= x[0];
    if(i==a && x.length==10)
    {
      bool=true;
      break;
    }
  }
  if(bool===false)
  {
    document.getElementById("err").className="text-danger errtrigger";
    return;
  }
  else{
    document.getElementById("err").className="text-danger error";
  }
  let Number=document.querySelector("#mobile").value||[];
  localStorage.setItem("mobileNo",Number)
  
}

 const inputstyle={padding:"10px",fontSize:"20px"}
class Login extends React.Component{
  
    
    render(){
        return(
            <div className="container lgin-div mb-2">
        <div className="lgncont">
          <div className="mbl">
            <img  src={Images.login_banner} className="banner" alt="Banner"/>
          </div>
          <div className="form">
              <div className="formbd mt-4">
                <h2>Sign in</h2>
                <div>
                  <p className="">Sign in to access your Orders, Offers and Wishlist.</p>
                  <form action="">
                    <div className=" lgnform p-2">
                      <span style={{"border-right":"1px solid #000"}} className="mr-2 pr-2">+91 </span>
                      <input style={inputstyle} type="number"  id="mobile" autoFocus maxLength="10"  placeholder="Enter your mobile no."/>                  
                        
                    </div>
                    <span className="text-danger error" id="err"><i>Please enter a valid mobile number!</i><br/></span>
                    <br/>
                    <div className="btnalign">
                    
                  </div>
                  </form>
                 <div className="text-center"> <Link to="/signup"><button className="btn btn-primary btn1" onClick={validate} ><i className="fa fa-chevron-right"></i></button></Link></div>
                </div>
              </div>
          </div>
          
      </div>
      
  
      </div>
        )
    }
}

export default Login