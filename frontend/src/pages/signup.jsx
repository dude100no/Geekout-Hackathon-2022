//add singpass pls farhan
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../styles/signup.css';


function SignUp() {
  return (
    <header id="signup-page">
      <h1>Sign Up</h1>
      <p>Please sign up through Singpass.</p>
      <div class="buttons">
        <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>
          Sign Up
        </Button>
      </div>
      {/* <SingpassModal show={true} /> */}
    </header>
  );
}
export default SignUp;
