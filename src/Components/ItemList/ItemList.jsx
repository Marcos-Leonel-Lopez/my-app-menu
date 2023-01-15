import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import MyItem from "../Item/MyItem";



const ItemList = ({ productos }) => {

    return (
        
            <Box sx={{display:'flex', flexDirection:'row', justifyContent: 'space-evenly', flexWrap:'wrap'}} >
                {
                    productos.map((producto) => <MyItem key={producto.id} producto={producto} />)
                }
            </Box>
        



    )
};

export default ItemList;
    // useEffect(() => {
    //     <LoadingButton
    //     loading
    //     loadingPosition="start"
    //     startIcon={<SaveIcon />}
    //     variant="contained"
    //   >
    //     Cargando...
    //     {console.log('hola')}
    //   </LoadingButton>
    //   },[{ productos }]);

{/* <li key={producto.id} sx={{mb:50}}>{producto.title}</li> */ }
{/* <Box
            sx={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'end',
                listStyleType: 'none'
            }}>
                <ul className="itemList">
                
                </ul>
                
          
        </Box> */}
        
        
        
        
        // 2do intento con fallos
        
        // <Box sx={{ flexGrow: 1 }}>
        //     <Grid container spacing={{ xs: 2, md: 3 }} >
        //         {
        //             productos.map((producto) => <Item key={producto.id} producto={producto} />)
        //         }
        //     </Grid>
        // </Box>

        // <Grid xs={6}>
        //   <Item>1</Item>
        // </Grid>
        // <Grid xs={6}>
        //   <Item>2</Item>
        // </Grid>
        // <Grid xs={6}>
        //   <Item>3</Item>
        // </Grid>
        // <Grid xs={6}>
        //   <Item>4</Item>
        // </Grid>