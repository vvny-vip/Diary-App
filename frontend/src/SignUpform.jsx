import React from "react";  
function SignUpform() {
  return (
    <div className="forms">
      <form className="form" >
        <h2><center>Sign Up</center></h2>
        <label className="label">
        Username:</label>
      <input type="text" className="input" placeholder="Enter Username"/>
      <label className="label1">
        Email:</label>
      <input type="email" className="input1" placeholder="Enter Email" />
      <label className="label2">password:</label>
      <input type="password" className="input2" placeholder="Enter Password" />
      <button type="submit" className="button">submit</button>
      </form>
    </div>
  );
}
export default SignUpform;