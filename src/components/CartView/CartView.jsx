import React, { useContext } from "react";
import cartContext from "../../store/CartContext";
import Button from "../Button/buttons";
import dinoError from "../ImgHeader/dinoError.png"
import { Link } from "react-router-dom";
import { createBuyOrderFirestoreWithStock } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import "../CartView/cartView.css"
import BuyForm from "../Forms/BuyForms";
import Table from 'react-bootstrap/Table';


/* 1-conectarlo al context---importando el context y el useContext */
/* 2-mostrar el listado de items del array guardado en el context */

function CartView() {
    const { cart, removeItem, totalPriceInCart, clear } = useContext(cartContext);
    const navigation = useNavigate();

    if (cart.length === 0) {
        return <section className="carritoVacio">
            <h1>Su carrito esta vacio</h1>
            <img src={dinoError} alt="dinoError" />
            <Link to="/">
                <Button>Volver a productos</Button>
            </Link>
        </section>

    }



    function createBuyOrder(userData) {
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date(),
        }
        createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
            clear();
            navigation(`/checkout/`);
            swal({
                title: `GRACIAS POR SU COMPRA :)`,
                text: `Su orden de compra es ${orderId}`,
                icon: "success",
                button: "Ok"
            });


        })

    }

    return (
        <section >
            <h2>Tu carrito:</h2>
            <section className="vistaCart">
                {cart.map((cartItem) => (
                    <Table key={cartItem.id} striped="columns" style={{width: "80%", height: "auto", margin: "0 5%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={{width: "auto", height: "auto",}}>Imagen</th>
                                <th style={{width: "50%", height: "auto", textOverflow: "ellipsis"}}>Nombre</th>
                                <th style={{width: "40%", height: "auto",}}>Precio</th>
                                <th style={{width: "auto", height: "auto",}}>Cantidad</th>
                                <th style={{width: "auto", height: "auto",}}>Precio total del producto</th>
                                <th style={{width: "30%", height: "auto",}}>Remover item</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>*</td>
                                <td><img src={cartItem.img} alt="Imagenes ilustrativas de los productos del carrito" width={"120px"} height={"auto"} /></td>
                                <td><h4 style={{fontSize:"1.8rem", padding:"0 2%"}}>{cartItem.name}</h4></td>
                                <td><h4>${cartItem.price}</h4></td>
                                <td><h4>{cartItem.count}</h4></td>
                                <td><h4> ${cartItem.count * cartItem.price}</h4></td>
                                <td><Button onClick={() => removeItem(cartItem.id)} color="whiteSmoke" bGColor="#ff0101c2">X</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                    
                ))}
                <Button onClick={clear}>Vaciar Carrito</Button>
                <div><h5>El total de su compra es: ${totalPriceInCart()}</h5></div>
                <Link to="/" >
                    <Button>Volver a productos...</Button>
                </Link>
                <BuyForm onSubmit={createBuyOrder} />

            </section>
        </section>
    )
};


export default CartView