import React,{useState,useEffect} from "react";  
import "./Style.css"
import { useNavigate } from "react-router-dom";
function SignUpform({setCheck}) {
  const navigate = useNavigate();
 const [form,setForm] = useState({name:"",Email:"",password:""});
 const [face,setFace] = useState(true);
 const [show,setShow] = useState(false);
 function handleChange(e){
   const {name,value} = e.target;
   setForm((prev)=>
     ({...prev,[name]:value,}));
   if (show) setShow(false);
 }
 function handleSubmit(e){
  e.preventDefault();
  if(form.name.trim() === "" || form.Email.trim() === "" || form.password.trim() === ""){
    setShow(true);
    return;
  }
    setShow(false);
  setFace(false);
  setCheck(true);
  setForm({name:"",Email:"",password:""});
  navigate("/AddEntry");
 }
 
  return (
    <div style={{ background: face ? "rgba(76,32,32,0.2)" : "white" }}>

    <div className="forms" style={{ background: face ? "rgba(0,0,0,0.5)" : "white" }}>
      <form className="form" onSubmit={handleSubmit} style={{display:face? "flex" :"none"}} >
        <h2><center>Sign Up</center></h2>
        <label className="label">
        Username:</label>
      <input type="text" className="input" placeholder="Enter Username"
       name="name"
        value={form.name}
       onChange={handleChange}/>
      <label className="label1">
        Email:</label>
      <input type="email" className="input1" placeholder="Enter Email" name="Email" value={form.Email}
      onChange={handleChange} />
      <label className="label2">password:</label>
      <input type="password" className="input2" placeholder="Enter Password"
      name="password" value={form.password}
      onChange={handleChange}/>
      <button type="submit" className="button">submit</button>
      </form>
      {show && <p style={{color:"red",fontSize:"18px",position:"absolute"}}>please Enter Something!!!
        </p>}
    </div>
    </div>
  );
}
export default SignUpform;