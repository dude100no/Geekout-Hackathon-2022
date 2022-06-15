import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Page() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontSize: 80, fontFamily: "Bradley Hand" }}>
            Honeycomb
          </h1>
          <p style={{ fontSize: 30, fontFamily: "monospace" }}>
            Welcome to Honeycomb, a web app that's here to help.
          </p>
        </header>
        <ul>
          <li>
            <Link to="/signup">Get Started</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default Page;
