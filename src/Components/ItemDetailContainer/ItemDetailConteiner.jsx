import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import CircularProgress from "@mui/material/CircularProgress";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailConteiner = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProduct = () => {
    const db = getFirestore();
    const querySnapshot = doc(db, "products", id);

    getDoc(querySnapshot)
      .then((res) => {
        setSingleProduct({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err)).finally(()=>setLoading(false));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
    {loading ? (
        <Box className="Carga">
          <CircularProgress className="Load" color="inherit" />
        </Box>
      ) : (
      <Container
        className="Detalles"
        sx={{ display: "flex", flexDirection: "row" }}
        maxWidth="100%"
      >
        <ItemDetail producto={singleProduct}/>
      </Container>
      )}
    </>
  );
};

export default ItemDetailConteiner;
