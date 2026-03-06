import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
}

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <div className="main-content">
          <AppRoutes />
        </div>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
