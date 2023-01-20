import { Badge, IconButton } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useContext , useState} from "react";
import { cartContext } from "../../context/cartContext";






const CarWidget = () => {
    const [nItems, setNItems] = useState(0);
    const { cart } = useContext(cartContext);

 

    return (
        <>
            <Badge color="secondary" overlap="circular" badgeContent={nItems} >
                <IconButton sx={{ p: 0 }}>
                    <RestaurantIcon fontSize='large' color='action' />
                </IconButton>
            </Badge>
        </>
    );
};

export default CarWidget;


