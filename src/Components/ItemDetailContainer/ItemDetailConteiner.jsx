import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailConteiner = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const {id} = useParams();
    const getProduct = fetch(`http://localhost:5000/platos/${id}`);

    useEffect(() => {
       
          getProduct
          .then(res => res.json())
          .then(json => setSingleProduct(json))
          
        },[])
  return (
    <>
    <Container className='Detalles' sx={{display:'flex', flexDirection:'row'}} maxWidth="100%">
        
            <ItemDetail producto={singleProduct} />
        
    </Container>
    </>
  );
};

export default ItemDetailConteiner;
