import { Box, Divider, Rating, Typography, Modal } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";

const ItemDetail = ({ producto }) => {
  const [value, setValue] = useState(2.5);
  const { open, setOpen } = useContext(cartContext);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box className="Item-detail">
        <div>
          <img
            className="Imagen-detail"
            src={producto.picture}
            alt={producto.description}
          />
        </div>
        <div className="Text-detail">
          <div className="Description-detail">
            <h1 className="Nombre">
              {producto.title}:${producto.price}
            </h1>
            <h4 className="Descipcion">{producto.description}</h4>
            <Divider />
            {producto.stock == 0 && <h3>Sin Stock!!</h3>}
          </div>
          <ItemCount
            className="Add-detail"
            stock={producto.stock}
            producto={producto}
          />
          <Typography variant="caption" display="block" gutterBottom>
            Puntuanos:{" "}
            <Rating
              className="Rating"
              name="simple-controlled"
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Typography>
        </div>
      </Box>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              NO HAY STOCK SUFICIENTE!!!
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ItemDetail;
