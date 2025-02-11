import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <header>
                <div className="container_header">
                <div className="logo">
                    <img className="animate__animated animate__jackInTheBox" src="images/R.png" alt="Logo RetainRacer"/>
                </div>
                <div className="title">
                    <h1>etainRacer • Devine le nom de la marque</h1>
                </div>
                <nav>
                    <div className="container_nav">
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/jeux">Jeux</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/quizzluxe">Quizz Luxe</Link></li>
                            <li><Link to="/mentions">Mentions Légales</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="icon_pencil">
                    <img src="images/icons8-crayon-65.png" alt="Icone Crayon"/>
                </div>
                </div>
            </header>
        </div>
    )
}

export default NavBar;