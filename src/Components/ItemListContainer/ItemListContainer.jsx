import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const getProducts = fetch('http://localhost:5000/platos');

  useEffect(() => {
    if (category) {
      getProducts
        .then(res => res.json())
        .then(json => {
          const filterProducts = json.filter((producto) => producto.category === category);
          setProducts(filterProducts);
        });
    }
    else {
      setTimeout(() => {
        getProducts
          .then(res => res.json())
          .then(json => setProducts(json))
      }, 2000)
    }
  }, [category])

  return (
    <Container className='Pagina-contenedora' maxWidth="100%">
      <ItemList productos={products} nItems={products.length} />
      <ItemCount />
    </Container>
  );
};

export default ItemListContainer;
