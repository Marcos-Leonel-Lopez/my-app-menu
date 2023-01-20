import { Box, Divider, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ producto }) => {
    const [value, setValue] = useState(2.5);
    const [nItem, setNItem] = useState();

    const setItem = (e) =>{
        setNItem(e);
        
    };

    return (
        <>
            <Box className="Item-detail">
                <div>
                    <img className="Imagen-detail" src={producto.picture} alt={producto.description} />
                </div>
                <div className="Text-detail">
                    <div className="Description-detail">
                        <h1 className="Nombre">{producto.title}: ${producto.price}</h1>
                        <h4 className="Descipcion">{producto.description}</h4>
                        <Divider />
                    </div>
                    <ItemCount className="Add-detail" stock={producto.stock} cantidad={setItem} />
                    <Typography variant="caption" display="block" gutterBottom>
                        Puntuanos: <Rating className="Rating"
                            name="simple-controlled"
                            value={value}
                            precision={0.5}
                            onChange={(event, newValue) => { setValue(newValue); }}
                        />
                    </Typography>
                </div>
            </Box>
        </>
    );
};

export default ItemDetail;

{/* <ItemCount className="Add-detail" stock={producto.stock} cantidad={setItem} /> */}
