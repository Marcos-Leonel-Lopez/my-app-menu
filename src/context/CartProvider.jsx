import { useState } from "react";
import { cartContext } from "./cartContext";


const CartProvider = ({children}) => {

    const [cart, setCart]=useState([]);

    const addToCart=(item, quantity)=>{
        const newObj = {
            id: item.id,
            name: item.title,
            price: item.price,
            category: item.category,
            quantity: quantity
        };
        setCart([ ...cart, newObj]);
        console.log(cart);
    };

    const removeToCart=()=>{};


  return (
    <cartContext.Provider value={{cart, setCart, addToCart}}>
        {children}
    </cartContext.Provider>
  )
};

export default CartProvider;
