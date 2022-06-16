//add singpass pls farhan
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../styles/signup.css';


function SignUp() {
  return (
    <div id="signup-page" className="page">
      <h1>Sign Up/Log In</h1>
      <p>Please sign up/log in through Singpass.</p>
      <div class="buttons">
        <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>
          Sign Up/Log In
        </Button>
      </div>
      {/* <SingpassModal show={true} /> */}
    </div>
  );
}
export default SignUp;
