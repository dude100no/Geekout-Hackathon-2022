import React from "react";
import {useNavigate} from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <div className="App">
        <header className="App-header">
        <h1 style={{fontSize: 80, fontFamily: 'Bradley Hand'}}>Honeycomb</h1>
        <p style={{fontSize: 30, fontFamily: 'monospace'}}>Welcome to Honeycomb, a web app that's here to help.</p> 
        </header>
      <button onClick={() => navigate('/signup')}>Get Started</button>
    </div>
  
    )
}
export default Home