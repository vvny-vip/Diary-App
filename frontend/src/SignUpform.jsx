import React from "react";  
function SignUpform() {
  return (
    <div className="forms">
      <form className="form">
      <input type="text" className="input" placeholder="Enter Username"/>
      <input type="email" className="input1" placeholder="Enter Email" />
      <input type="password" className="input2" placeholder="Enter Password" />
      </form>
    </div>
  );
}

export default SignUpform;