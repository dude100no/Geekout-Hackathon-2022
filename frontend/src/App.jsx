import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContext, useAuth } from "./auth";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Other from "./pages/other";
import { useContext } from "react";


function App() {
  const auth = useContext(AuthContext);
  useEffect(() => {
    console.log(auth.user);
  }, [auth.user]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={auth.isAuthenticated ? <Dashboard /> : <Home />}
        />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
