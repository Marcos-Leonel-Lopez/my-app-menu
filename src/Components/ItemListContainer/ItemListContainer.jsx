import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import CircularProgress from "@mui/material/CircularProgress";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");

    getDocs(querySnapshot)
      .then((res) => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(data);
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false));
  };

  const getCategory = () => {
    const db = getFirestore();
    const querySnapshot = collection(db, "products");
    const newConfiguration = query(
      querySnapshot,
      where("category", "==", category)
    );

    getDocs(newConfiguration)
      .then((res) => {
        const data = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(data);
        
      })
      .catch((err) => console.log(err))
      .finally(()=>setLoading(false));
      
  };

  useEffect(() => {
    if (category) {
      getCategory();
    } else {
      getProducts();
    }
  }, [category]);

  return (
    <>
      {loading ? (
        <Box className="Carga">
          <CircularProgress className="Load" color="inherit" />
        </Box>
      ) : (
        <Container className="Pagina-contenedora" maxWidth="100%">
          <ItemList productos={products} />
        </Container>
      )}
    </>
  );
};

export default ItemListContainer;
