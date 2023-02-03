import { useState } from "react";
import { cartContext } from "./cartContext";


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [bill, setBill] = useState(0);
  const [open, setOpen] = useState(false);


  const addItem = (item, quantity) => {
    let newCart;
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      if(product.quantity + quantity > product.stock){
        setOpen(true);
        return ;
      }else{
        product.quantity += quantity;
      }
      newCart = [...cart]; 
    } else {
      const newObj = {
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        img: item.picture,
        category: item.category,
        rating: item.rating,
        stock: item.stock,
        quantity: quantity,
      };
      newCart = [...cart, newObj]
    }
    setCart(newCart);
      const subTotal = item.price * quantity;
      setBill(bill + subTotal);
  };

  const cuenta = (cart) => {
    let subtotal = cart.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setBill(subtotal);
  };

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    cuenta(cart.filter((product) => product.id !== id));
  };

  const removeCart = () => {
    setCart([]);
    setBill(0);
  };

  


  return (
    <cartContext.Provider
      value={{ cart, bill, setCart, addItem, removeItem, removeCart, open, setOpen,  }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
