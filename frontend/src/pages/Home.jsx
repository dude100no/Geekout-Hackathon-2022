import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

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
      <Button onClick={() => navigate("/signup")}>Get Started</Button>
      <Button onClick={() => navigate("/profile")}>Sign In</Button>
    </div>
  );
}
export default Home;
