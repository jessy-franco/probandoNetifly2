import React from "react";
import { Link } from "react-router-dom";
import "../Checkout/checkout.css"
import dinoCheck from "../ImgHeader/dinoCheck.png"

function Checkout(){
    return (
        <section>
            <div className="ckeck">
            <h1 style={{padding: "2%"}}>Gracias Por su compra</h1>
            <img src={dinoCheck} alt="cabeza de tyrex" style={{padding: "2%"}}/>
            <h2 style={{padding: "2%"}}>Pronto llegara un mail a su casilla de correo con la informacion de su orden.</h2>

            <Link to = "/">
            <button>Volver a productos</button>
            </Link>
            </div>
        </section>
    )
}

export default Checkout; 