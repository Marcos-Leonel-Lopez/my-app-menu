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
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import PaidIcon from "@mui/icons-material/Paid";

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
  const [validation, setValidation] = useState(false);
  const [configName, setConfigName] = useState({
    error: false,
    label: "Nombre",
  });
  const [configPhone, setConfigPhone] = useState({
    error: false,
    label: "Celular",
  });
  const [configEmail, setConfigEmail] = useState({
    error: false,
    label: "e-mail",
  });

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const configInicial = () => {
    setConfigName({ error: false, label: "Nombre" });
    setConfigPhone({ error: false, label: "Celular" });
    setConfigEmail({ error: false, label: "e-mail" });
    setValidation(false);
  };
  const handleOpen = () => setModal(true);
  const handleCloseOrder = () => {
    setModal(false);
    configInicial();
  };
  const handleOrder = (e) => {
    e.preventDefault();
    configInicial();
    if (
      (formValue.name !== "") &
      (formValue.phone !== "") &
      (formValue.email !== "")
    ) {
      handleCloseOrder();
      createOrder();
      removeCart();
    } else {
      console.log("llenar formulario");
      setValidation(true);
      formValue.name === "" &&
        setConfigName({ error: true, label: "Falta Nombre" });
      formValue.phone === "" &&
        setConfigPhone({ error: true, label: "Falta Celular" });
      formValue.email === "" &&
        setConfigEmail({ error: true, label: "Falta e-mail" });
    }
  };
  const handleInput = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const db = getFirestore();

  useEffect(() => {
    setOrder({
      buyer: {
        name: "",
        phone: "",
        email: "",
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
    const currentOrder = {
      ...order,
      buyer: formValue,
    };
    addDoc(querySnapshot, currentOrder)
      .then((res) => {
        updateStock();
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
                <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
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
                  error={configName.error}
                  name="name"
                  label={configName.label}
                  variant="standard"
                  required
                  value={formValue.name}
                  onChange={handleInput}
                ></TextField>
                <TextField
                  sx={{ mb: 2 }}
                  error={configPhone.error}
                  name="phone"
                  id="phone"
                  label={configPhone.label}
                  variant="standard"
                  required
                  value={formValue.phone}
                  onChange={handleInput}
                ></TextField>

                <TextField
                  sx={{ mb: 2 }}
                  error={configEmail.error}
                  name="email"
                  id="email"
                  label={configEmail.label}
                  variant="standard"
                  required={true}
                  value={formValue.email}
                  onChange={handleInput}
                ></TextField>

                <div>
                  <Button
                    onClick={handleCloseOrder}
                    variant="contained"
                    sx={{ ml: 2, mt: 2 }}
                  >
                    <ReplyAllIcon sx={{ mr: 1 }} />
                    Volver al carrito
                  </Button>
                  <Button
                    onClick={handleOrder}
                    variant="contained"
                    color="secondary"
                    sx={{ ml: 2, mt: 2 }}
                  >
                    <PaidIcon sx={{ mr: 1 }} />
                    confirmar Comprar
                  </Button>
                </div>
              </Box>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                En instantes le llegara una notificacion y link de pago a su
                mail
              </Typography>
              {validation && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color:'red',
                  }}
                >
                  {" "}
                  <h2>Faltan Datos!!!</h2>{" "}
                </Box>
              )}
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CartContainer;
