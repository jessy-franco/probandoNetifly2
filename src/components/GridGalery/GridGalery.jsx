import React from "react";
import "../GridGalery/GridGalery.css"

function GridProductos(props){
    return(
        <div className="gridContainer"> {props.children}</div>
    );

}

export default GridProductos; 