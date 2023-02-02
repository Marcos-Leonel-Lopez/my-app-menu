import { Container, Divider, Button, Box } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import ItemListCart from "../ItemListCart/ItemListCart";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartContainer = () => {
  const { cart, bill, removeCart } = useContext(cartContext);
  const [ent, setEnt] = useState([]);
  const [pri, setPri] = useState([]);
  const [post, setPost] = useState([]);
  const [beb, setBeb] = useState([]);
  const [order, setOrder] = useState({});
  const db = getFirestore();

  useEffect(()=>{
    setOrder({
      buyer: {
        name: "juan cruz",
        phone: "+54 98676845",
        email: "juan@cruz",
      },
      items: cart.map((obj) => {
        const { name, price, id } = obj;
        return {
          name: name,
          price: price,
          id: id,
        };
      }),
      total: bill,
    });
  },[cart]);


useEffect(() => {
    setEnt(cart.filter((producto) => producto.category === "entrada"));
    setPri(cart.filter((producto) => producto.category === "principal"));
    setPost(cart.filter((producto) => producto.category === "postre"));
    setBeb(cart.filter((producto) => producto.category === "bebida"));
  }, [cart]);


  const createOrder = () => {
    const querySnapshot = collection(db, "orders");
    addDoc(querySnapshot, order)
      .then((res) => {
        updateStock();
        console.log("orden creada")
      })
      .catch((err) => console.log(err));
  };

  const updateStock = () =>{
    cart.forEach((product)=>{
      const querySnapshot = doc(db, 'products', product.id);
      updateDoc(querySnapshot, {
        
        stock: product.stock - product.quantity,
       
      })
      .then(()=>{
        console.log('producto '+product.name+' actualizado')
      })
      .catch((err)=>console.log(err))
    })
    
  };
  
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
          <Box sx={{ml:10 }}>
            <h1>Total a pagar: ${bill}</h1>
          <div>
            <Button
              onClick={() => removeCart()}
              variant="contained"
              sx={{ mr: 3, mb: 3 }}
            >
              Limpiar carrito
            </Button>
            <Button
              onClick={createOrder}
              variant="contained"
              sx={{ mr: 3, mb: 3 }}
              color="secondary"
            ><ShoppingCartCheckoutIcon/>
              FINALIZAR COMPRA
            </Button>
          </div>
          </Box>
          
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
