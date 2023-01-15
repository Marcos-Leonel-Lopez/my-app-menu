import { Box, Divider, Rating, Typography } from "@mui/material";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";



const ItemDetail = ({ producto }) => {
    const [value, setValue] = useState(2.5);
    return (
        <>
            <Box className="Item-detail" href="#">
                <div>
                    <img className="Imagen-detail" src={producto.picture} alt={producto.description} />
                </div>
                <div className="Text-detail">
                    <div className="Description-detail">
                        <h2 className="Nombre">{producto.title}: ${producto.price}</h2>
                        <h4 className="Descipcion">{producto.description}</h4>
                        <Divider />
                    </div>
                    <ItemCount className="Add-detail" />
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
