import {
  Container,
  Divider,
  Button,
  Box,
  Modal,
  Typography,
  TextField,

} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import ItemListCart from "../ItemListCart/ItemListCart";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  updateDoc,
} from "firebase/firestore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import PaidIcon from '@mui/icons-material/Paid';

const style = {
  bgcolor: "background.paper",
};

const CartContainer = () => {
  const { cart, bill, removeCart } = useContext(cartContext);
  const [ent, setEnt] = useState([]);
  const [pri, setPri] = useState([]);
  const [post, setPost] = useState([]);
  const [beb, setBeb] = useState([]);
  const [order, setOrder] = useState({});
  const [modal, setModal] = useState(false);
  const [formValue, setFormValue] = useState({
    name: '',
    phone:'',
    email:'',
  })
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const handleOrder = (e) => {
    e.preventDefault(); 
    handleClose();
    createOrder();
    removeCart();
    
  };
  const handleInput = (e) =>{
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }



  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: '',
        phone: '',
        email: '',
      },
      items: cart.map((obj) => {
        const { name, price, id, quantity } = obj;
        return {
          name: name,
          price: price,
          id: id,
          quantity: quantity,
        };
      }),
      total: bill,
    });
  }, [cart]);

  useEffect(() => {
    setEnt(cart.filter((producto) => producto.category === "entrada"));
    setPri(cart.filter((producto) => producto.category === "principal"));
    setPost(cart.filter((producto) => producto.category === "postre"));
    setBeb(cart.filter((producto) => producto.category === "bebida"));
  }, [cart]);

  const createOrder = () => {
    const querySnapshot = collection(db, "orders");
    const currentOrder={
      ...order,
      buyer: formValue,
    }
    addDoc(querySnapshot, currentOrder)
      .then((res) => {
        updateStock();
        console.log("orden creada");
      })
      .catch((err) => console.log(err));
  };

  const updateStock = () => {
    cart.forEach((product) => {
      const querySnapshot = doc(db, "products", product.id);
      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          console.log("producto " + product.name + " actualizado");
        })
        .catch((err) => console.log(err));
    });
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
          <Box sx={{ ml: 10 }}>
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
                onClick={handleOpen}
                variant="contained"
                sx={{ mr: 3, mb: 3 }}
                color="secondary"
              >
                <ShoppingCartCheckoutIcon sx={{ mr:1 }}/>
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
      ;
      <div>
        <Modal
          open={modal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Modal-fin-orden" sx={style}>
            <Box id="odal-modal-title" className="Modal-orden-lista">
              {[...ent, ...pri, ...post, ...beb].map((pedido) => (
                <li key={pedido.id}>
                  {" "}
                  {pedido.name} x{pedido.quantity} - ${pedido.price}{" "}
                </li>
              ))}
            </Box>
            <Box className="Modal-orden-input" autoComplete="off">
              <Box component="form" className="Modal-orden-formulario">
                <TextField
                  sx={{ mb: 2 }}
                  name="name"
                  label="Nombre"
                  variant="standard"
                  required
                  value={formValue.name}
                  onChange={handleInput}
                >
                  
                </TextField>
                <TextField
                  sx={{ mb: 2 }}
                  name="phone"
                  id="phone"
                  label="Celular"
                  variant="standard"
                  required
                  value={formValue.phone}
                  onChange={handleInput}
                >
                  
                </TextField>

                <TextField
                  sx={{ mb: 2 }}
                  name="email"
                  id="email"
                  label="e-mail"
                  variant="standard"
                  required
                  value={formValue.email}
                  onChange={handleInput}
                >
                  
                </TextField>

                <div>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{ ml: 2, mt: 2 }}
                  >
                    <ReplyAllIcon sx={{ mr:1 }}/>Volver al carrito
                  </Button>
                  <Button
                    onClick={handleOrder}
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 2, mt: 2 }}
                  >
                    <PaidIcon sx={{ mr:1 }} />confirmar Comprar
                  </Button>
                </div>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                En instantes le llegara una notificacion y link de pago a su
                mail
              </Typography>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CartContainer;
