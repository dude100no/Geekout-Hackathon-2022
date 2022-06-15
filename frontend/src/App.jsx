import { useState } from 'react'
import './App.css'
import React from "react"
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/signup'
import Profile from './pages/profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App
