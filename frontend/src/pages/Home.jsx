import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: 80, fontFamily: "Bradley Hand" }}>Honeycomb</h1>
        <p style={{ fontSize: 30, fontFamily: "monospace" }}>
          Welcome to Honeycomb, a web app that's here to help.
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

  <Button variant="flat" size="xl" onClick={() => navigate("/signup")}>Get Started</Button>
  <Button variant="flat" size="xl" onClick={() => navigate("/profile")}>Sign In</Button>
</>
      
    </div>
  );
}
export default Home;
