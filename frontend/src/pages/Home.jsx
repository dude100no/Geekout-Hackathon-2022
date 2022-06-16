import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo from "../logo.svg";
import SingpassModal from "../components/SingpassModal";

import "../styles/home.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);

  return (
    <div id="home-page" className="page">
      <img src={Logo} />
      <h1>Honeycomb</h1>
      <p>Welcome to Honeycomb, a web app that's here to help.</p>
      <div className="buttons">
        <Button variant="flat" size="lg" onClick={() => setShowLogin(true)}>
          Get Started
        </Button>
        <Button variant="flat" size="lg" onClick={() => navigate("/other")}>
          Other Resources
        </Button>
      </div>
        <SingpassModal show={showLogin} onHide={() => setShowLogin(false)} />
    </div>
  );
}
export default Home;
