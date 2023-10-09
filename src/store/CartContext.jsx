
import { useState, createContext } from "react"

//context = Almacenamiento
//Provider (proveedor, componente contenedor de componentes para que accedan al context)
// Los children son todos los componentes que le pasamos por app.js...osea los routes
// estos componentes se interrelacionan con el provider// 
// creamos un value para que los componenetes que usen contect


const cartContext = createContext();

export function CartContextProvider(props) {
    const [cart, setCart] = useState([])

    function addToCart(itemData) {

        console.log(itemData)
        let itemFound = cart.find(itemsInCart => itemsInCart.id === itemData.id);

        if (itemFound) {
            let newCart = cart.map(itemsInCart => {
                if (itemsInCart.id === itemData.id) {
                    itemsInCart.count += itemData.count;
                    return itemsInCart;
                }
                else {
                    return itemsInCart;
                }
            })
            setCart(newCart)
            
        }
        else {
            const newCart = [...cart];
            newCart.push(itemData);
            setCart(newCart);
        } 
    }

    function totalItemsInCart() {
        let total = 0;
        cart.forEach(itemsInCart => {
            total = total + itemsInCart.count
        });
        return total;
    }

    function removeItem(itemId){
        let itemRemove = cart.filter((itemsInCart)=>itemsInCart.id === itemId);
            if (itemRemove === -1) {
                console.error("id no encontrado");
                return;
        };
        const newCart = [...cart];
        newCart.splice(itemRemove, 1);
        setCart(newCart);
        
    }

    function totalPriceInCart(){
        let totalPrice = 0;
        cart.forEach(itemsInCart => {
            totalPrice  = totalPrice  + (itemsInCart.count * itemsInCart.price)
        });
        return totalPrice ;
    }
    
    function clear(){
        setCart([]);
    }

    const value = {
        cart,
        addToCart,
        totalItemsInCart,
        totalPriceInCart,
        removeItem,
        clear,
    };
    
    //Le pasamos una value para que los componentes puedan usar el context

    return (
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext