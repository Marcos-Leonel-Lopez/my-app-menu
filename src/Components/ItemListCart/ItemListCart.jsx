import { Box, Button, Grid } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import React, {  useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";



const ItemListCart = ({ productos }) => {
  const { removeItem } = useContext(cartContext);
  return (
    <Box>
      {productos.map((producto) => (
        <Grid container spacing={2} sx={{ mt: 2, mb: 2, alignItems: "center" }}>
          <Grid item xs={4} className="Container-foto">
            <Link to={`/item/${producto.id}`}>
              <img
                className="List-foto"
                src={producto.img}
                alt={producto.name}
              />
            </Link>
          </Grid>
          <Grid item xs={4}>
              <h2>{producto.name}</h2>
              <h5>{producto.description}</h5>
          </Grid>
          <Grid item xs={2}>
            <h2>
              ${producto.price} x{producto.quantity}
            </h2>
          </Grid>
          <Grid item xs={"auto"}>
            <Button
              onClick={() => removeItem(producto.id)}
              variant="outlined"
              sx={{ mr: 3 }}
            >
              <DeleteIcon />
              ELIMINAR
            </Button>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default ItemListCart;

