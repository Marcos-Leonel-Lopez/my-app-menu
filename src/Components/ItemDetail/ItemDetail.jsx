import { Box, Divider, Rating, Typography } from "@mui/material";
import { useContext } from "react";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context/cartContext";
import { useEffect } from "react";



const ItemDetail = ({ producto }) => {
    const [value, setValue] = useState(2.5);
    const {cart , addItem} = useContext(cartContext);
    const [nItem, setNItem] = useState(0);



//  const newItemCart = (e) => {
//         console.log(e);
//         if (e !== 0) {
//             setNItem(e);
//             addItem(producto, nItem);
//         }
//     };

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
                    <ItemCount className="Add-detail" stock={producto.stock} producto={producto} />
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


