import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo from '../logo.svg';
import SingpassModal from "../components/SingpassModal";

import "../styles/home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <header id="home-page">
      <img src={Logo} />
      <h1>Honeycomb</h1>
      <p>Welcome to Honeycomb, a web app that's here to help.</p>
      <div className="buttons">
        <Button variant="flat" size="lg" onClick={() => navigate("/signup")}>
          Get Started
        </Button>
        <Button variant="flat" size="lg" onClick={() => navigate("/profile")}>
          Sign In
        </Button>
      </div>
      {/* <SingpassModal show={true} /> */}
    </header>
  );
}
export default Home;
