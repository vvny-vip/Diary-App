import React,{useState} from "react";  
function SignUpform() {
 const [form,setForm] = useState({name:"",Email:"",password:""});
 function handleChange(e){
   const {name,value} = e.target;
   setForm((prev)=>
     ({...prev,[name]:value,}));
 }
 function handleSubmit(e){
  e.preventDefault();
  if(!form.Email || !form.name || !form.password)
    alert("please all fields");
  return (0);
 }
  return (
    <div className="forms">
      <form className="form" onSubmit={handleSubmit} >
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