//add singpass pls farhan
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../styles/login.css";

function LogIn() {
  return (
    <div id="login-page" className="page">
      <h1>Log In</h1>
      <p>Please log in through Singpass.</p>
      <div class="buttons">
        <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>
          Log In
        </Button>
      </div>
      {/* <SingpassModal show={true} /> */}
    </div>
  );
}
export default LogIn;
