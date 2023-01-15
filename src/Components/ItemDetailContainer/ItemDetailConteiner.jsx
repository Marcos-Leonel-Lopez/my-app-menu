import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect,useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const ItemDetailConteiner = () => {
    const id = 3;
    const [singleProduct, setSingleProduct] = useState({});
    const getProduct = fetch(`http://localhost:5000/platos/${id}`);

    useEffect(() => {
        setTimeout(()=>{ 
          getProduct
          .then(res => res.json())
          .then(json => setSingleProduct(json))
          },2000)
        },[])
  return (
    <>
    <Container className='Pagina-contenedora' sx={{display:'flex', flexDirection:'row', justifyContent:'center'}} maxWidth="100%">
        <Box >
            <ItemDetail producto={singleProduct} />
        </Box>
    </Container>
    </>
  );
};

export default ItemDetailConteiner;
