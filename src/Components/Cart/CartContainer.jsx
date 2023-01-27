import { Box, Container, Divider } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import ItemListCart from "../ItemListCart/ItemListCart";


const CartContainer = () => {
  const {cart} = useContext(cartContext);
  const [ent, setEnt] = useState([]);
  const [pri, setPri] = useState([]);
  const [post, setPost] = useState([]);
  const [beb, setBeb] = useState([]);

 useEffect(()=>{
   setEnt(cart.filter(producto => producto.category === 'entrada'));
   setPri(cart.filter(producto => producto.category === 'principal'));
   setPost(cart.filter(producto => producto.category === 'postre'));
   setBeb(cart.filter(producto => producto.category === 'bebida'));
 },[])

  return (
    <>
      {cart.length !== 0 ? (
        <Container className="Carrito" maxWidth="100%">
          <ItemListCart productos={ent} />
          <Divider />
          <ItemListCart productos={pri} />
          <Divider />
          <ItemListCart productos={post} />
          <Divider />
          <ItemListCart productos={beb} />
          {console.log(ent, pri ,post , beb)}
        </Container>
        
      ) : (
        <div>
          <h2>NO HAY NADA</h2>
          {console.log("no hay nada")}
        </div>
      )}
    </>
  );
};

export default CartContainer;
