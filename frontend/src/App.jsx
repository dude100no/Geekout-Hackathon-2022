import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./auth";
import { useEffect } from "react";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Other from "./pages/other";
import LogIn from "./pages/login";

function App() {
  const auth = useAuth();
  useEffect(() => {
    console.log(auth);
  }, [auth]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={auth.isAuthenticated ? <Dashboard /> : <Home />}
          />
          {!auth.isAuthenticated && (
            <Route path="/signup" element={<SignUp />} />
          )}
          {!auth.isAuthenticated && <Route path="/login" element={<LogIn />} />}
          <Route path="/other" element={<Other />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
