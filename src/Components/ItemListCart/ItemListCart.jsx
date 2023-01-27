import React, { useState, useEffect } from "react";
import ItemCart from "../ItemCart/ItemCart";


const ItemListCart = ({productos}) => {
  return (
    <ul>  
        {
           productos.map(producto=>(<ItemCart nombre={producto.name} precio={producto.price} cantidad= {producto.quantity} />))
        }     
    </ul>
  )
};

export default ItemListCart;


