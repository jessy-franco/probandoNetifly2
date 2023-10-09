import React, { useState } from "react";
import Button from "../Button/Buttons";
import "./itemcount.css";

function ItemCount({ stock, onAddToCart, text }) {
    const [count, setCount] = useState(1);

    function handleAdd() {
        if (count < stock) setCount(count + 1);
    }

    function handleSubstract() {
        if (count > 1) setCount(count - 1);
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button onClick={handleSubstract} color="whiteSmoke"  bGColor="#ff0101c2" >
                    -
                </Button>
                <span>{count}</span>
                <Button onClick={handleAdd} color="whiteSmoke"  bGColor="#047b04cc">
                    +
                </Button>
            </div>
            <div className="itemcount_btns">
                <Button onClick={() => onAddToCart(count)} bGColor= "#dcd8c6" >{text}</Button>
            </div>
        </div>
    );
}

export default ItemCount;