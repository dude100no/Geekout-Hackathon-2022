import { useState } from 'react'
import './App.css'
import React from "react"
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
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
   
  )
}
export default App
