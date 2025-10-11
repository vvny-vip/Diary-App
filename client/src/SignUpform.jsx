import React,{useState,useEffect} from "react";  
import { useNavigate } from "react-router-dom";
function SignUpform({setCheck}) {
  const navigate = useNavigate();
 const [form,setForm] = useState({name:"",Email:"",password:""});
 const [face,setFace] = useState(true);
 function handleChange(e){
   const {name,value} = e.target;
   setForm((prev)=>
     ({...prev,[name]:value,}));
 }
 function handleSubmit(e){
  e.preventDefault();
  if(!form.name || !form.Email || !form.password){
    alert("enter all fields");
    return;
  }
  setFace(false);
  setCheck(true);
  setForm({name:"",Email:"",password:""});
  navigate("/AddEntry");
 }
 useEffect(() => {
    document.body.style.background = face ? "rgba(0,0,0,0.2)" : "white";
  }, [face]);

  return (
    <div className="forms" style={{ background: face ? "rgba(0,0,0,0.5)" : "white" }}>
      <form className="form" onSubmit={handleSubmit} style={{display:face? "flex" :"none"}} >
        <h2><center>Sign Up</center></h2>
        <label className="label">
        Username:</label>
      <input type="text" className="input" placeholder="Enter Username"
       name="name"
        value={form.name}
       onChange={handleChange} required/>
      <label className="label1">
        Email:</label>
      <input type="email" className="input1" placeholder="Enter Email" name="Email" value={form.Email}
      onChange={handleChange}  required/>
      <label className="label2">password:</label>
      <input type="password" className="input2" placeholder="Enter Password"
      name="password" value={form.password}
      onChange={handleChange} required/>
      <button type="submit" className="button">submit</button>
      </form>
    </div>
  );
}
export default SignUpform;