import {  Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  

const getProducts = fetch('http://localhost:5000/platos');



useEffect(() => {
  setTimeout(()=>{ 
    getProducts
    .then(res => res.json())
    .then(json => setProducts(json))
    },2000)
  },[]);

  
  
  

 
  return (
    <Container className='Pagina-contenedora' maxWidth="100%">
      <ItemList productos={products} nItems={products.length}/>
      <ItemCount />
    </Container>
    
    
    
  );
};

export default ItemListContainer;
