import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from '../../store/CartContext';
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import Button from "../Button/Buttons";
import "./itemDetail.css"



function ItemDetail({product}) {
    const [isInCart, setIsInCart] = useState(false);

    console.log(product)
    const { cart,  addToCart} = useContext(cartContext);

    let itemInCart = cart.find((item) => product.index === item.index)
    let stock = product.stock;
    if(itemInCart) stock -= itemInCart.count;

    function onAddToCart(count) { 
        
        swal({
            title: `Agregaste ${count} unidad/es  de ${product.name} al carrito`,
            text: "Siga viendo nuestros productos!!!",
            icon: "success",
            button: "Ok"
        });
        const itemForCart = {
            ...product,
            count,

        };
        addToCart(itemForCart);
        setIsInCart(true);
    } 
    return (
        
        <div className="newCard">
            <div className="card-img">
                <img src={product.img} alt="Product img" />
            </div>
            <div className="detailProducts">
                <h2>{product.name} </h2>
                <p className="subTitle">{product.descripcion}</p>
                <p style={{textAlign: "center", fontSize: "1.1rem"}}>{product.info}</p>
                {/* podemos usar ternario, o operador logico and && cuando el cambio es pequeño....si el cambio es mas grande early return(if retornando antes)*/}
                {
                    product.discount && <h4 className="discount">{product.discount}% de descuento!</h4> 
                }
                <h4 className="priceTag" style={{textAlign: "center", fontSize: "2.5rem"}}>$ {product.price}</h4>

            </div>
            {!isInCart ? (
                <ItemCount
                    text="Agregar al carrito :D"
                    onAddToCart={onAddToCart}
                    stock={stock}
                />
            ) : (
                <div style={{display:"flex", flexDirection: "row", padding:"10% 0"}}>
                    <Link to="/cart">
                    <Button style={{maxWidth: "100px"}} >Ir al Carrito</Button>
                    </Link>
                    <Link to="/">
                    <Button style={{maxWidth: "100px"}} >Volver a productos</Button>
                    </Link>
                    <Button style={{maxWidth: "100px"}} >Quitar del carrito</Button>
                </div>
            )} 
        </div>
    );
}

export default ItemDetail; 