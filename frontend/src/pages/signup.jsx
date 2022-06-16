import React from "react";
//change background color
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "../styles/signup.css";

function SignUp() {
  return (
    <div id="signup-page" className="page">
      <h1>Sign Up</h1>
      <p>Choose your preferred log in method.</p>
      <div class="buttons">
        <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
export default SignUp;
