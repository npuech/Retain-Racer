import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./composents/NavBar";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Jeux from "./pages/Jeux";
import QuizzLuxe from "./pages/QuizzLuxe";
import Mentions from "./pages/MentionsLegales";
import Footer from "./composents/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jeux" element={<Jeux />} />
        <Route path="/quizzluxe" element={<QuizzLuxe />} />
        <Route path="/mentions" element={<Mentions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;