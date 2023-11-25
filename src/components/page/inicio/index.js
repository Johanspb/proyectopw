import React from 'react'
import { Link } from 'react-router-dom';
import Portada from "../../../images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">   
            <Link to="/">
            <h1>home</h1>
            </Link>
            <Link to="/productos">
            <h1>Productos</h1>
            </Link>
            <img src="https://www.shutterstock.com/image-vector/realistic-laptop-mockup-blank-screen-600nw-2149245383.jpg" alt=""/>
        </div>
    )
}
