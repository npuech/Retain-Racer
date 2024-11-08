import React from "react";
import "./index.css";
import { HashRouter as Routes, Route } from "react-router-dom"
import NavBar from "./composents/NavBar";
import  Accueil from "./pages/Accueil";
import  Contact  from "./pages/contact";
import Jeux from "./pages/Jeux";
import QuizzLuxe from "./pages/QuizzLuxe";
import Mentions from "./pages/MentionsLegales";
import Footer from "./composents/Footer";

function App() {

  return (
    <div>
      <NavBar />
      <Accueil />
      <Footer />
    </div>
  );

}

export default App;