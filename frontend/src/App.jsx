import { useState } from 'react'
import './App.css'
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
     <div className="App">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <Routes>
            <Route exact path='/home' element={< Home />}></Route>
      </Routes>
     <header className="App-header">
     <h1 style={{fontSize: 80, fontFamily: 'Bradley Hand'}}>Honeycomb</h1>
       <p style={{fontSize: 30, fontFamily: 'monospace'}}>Welcome to Honeycomb, a web app that's here to help.</p>
         <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
         </a>
        
         <a
           className="App-link"
           href="https://vitejs.dev/guide/features.html"
           target="_blank"
           rel="noopener noreferrer"
         >
           Vite Docs
         </a>
       
     </header>
    </div>
  </Router>
  )
}

export default App
