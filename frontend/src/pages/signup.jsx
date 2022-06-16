import React from "react";
//change background color
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function SignUp() {
  return (
   <div className="Sign">
      <header className="Signup-header">
        <h1 style={{ fontSize: 50, fontFamily: "monospace" }}>Sign Up</h1>
        <p style={{ fontSize: 30, fontFamily: "monospace" }}>Choose your preferred log in method.
        </p>
      </header>
      <>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: orange;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>Sign Up</Button>
</>
  </div>
  )
}
export default SignUp;
