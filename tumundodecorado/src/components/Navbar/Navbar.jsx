import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
      return(
        <nav>

            <h1 className="titulo">Tu Mundo Decorado</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Proyectos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>

            <CartWidget/>
            
        </nav>
        
      )
}

export default Navbar

