import { Container, Divider, Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import ItemListCart from "../ItemListCart/ItemListCart";

const CartContainer = () => {
  const { cart, bill, removeItem, removeCart } = useContext(cartContext);
  const [ent, setEnt] = useState([]);
  const [pri, setPri] = useState([]);
  const [post, setPost] = useState([]);
  const [beb, setBeb] = useState([]);

  useEffect(() => {
    setEnt(cart.filter((producto) => producto.category === "entrada"));
    setPri(cart.filter((producto) => producto.category === "principal"));
    setPost(cart.filter((producto) => producto.category === "postre"));
    setBeb(cart.filter((producto) => producto.category === "bebida"));
  }, [cart]);

  return (
    <>
      {cart.length !== 0 ? (
        <Container className="Carrito" maxWidth="100%" sx={{ mt: 5 }}>
          <Divider />
          <ItemListCart productos={ent} />
          <Divider />
          <ItemListCart productos={pri} />
          <Divider />
          <ItemListCart productos={post} />
          <Divider />
          <ItemListCart productos={beb} />
          <Divider />
          <h1>Total a pagar: ${bill}</h1>
          <div>
            <Button
              onClick={() => removeCart()}
              variant="outlined"
              sx={{ mr: 3, mb: 3 }}
            >
              Eliminar todo
            </Button>
            <Button
              onClick={() => removeCart()}
              variant="outlined"
              sx={{ mr: 3, mb: 3 }}
            >
              Comprar
            </Button>
          </div>
        </Container>
      ) : (
        <div className="Carrito-vacio">
          <h2>CARRITO VACIO</h2>
        </div>
      )}
    </>
  );
};

export default CartContainer;
