import { Container, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const getProducts = fetch('http://localhost:5000/platos');
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    if (category) {
      getProducts
        .then(res => res.json())
        .then(json => {
          const filterProducts = json.filter((producto) => producto.category === category);
          setProducts(filterProducts);
          setLoading(false);
        });
    }
    else {
      setTimeout(() => {
        getProducts
          .then(res => res.json())
          .then(json => setProducts(json))
        setLoading(false);

      }, 2000)
    }
  }, [category])

  return (

    loading ? <Box className="Carga"> <CircularProgress className="Load" color="inherit" /></Box>
            : <Container className='Pagina-contenedora' maxWidth="100%">
      <ItemList productos={products} nItems={products.length} />
    </Container>

  );
};

export default ItemListContainer;
