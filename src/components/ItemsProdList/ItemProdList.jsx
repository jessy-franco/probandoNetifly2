import React from "react";
import ItemsCard from "../Items/Items"
import GridProductos from "../GridGalery/GridGalery"
import Loader from "../Loader/Loader"

function ItemsProd(props) {
    
    let emptyArray = props.productsList?.length === 0;
    

    return (
        <section className="containerProducts">

            {emptyArray ? 
                <Loader />
                : 
                    <GridProductos>
                        {props.productsList.map((item) => (
                            <ItemsCard key={item.id} {...item} />
                        ))}
                    </GridProductos>
                }

        </section>

    );
}


export default ItemsProd;