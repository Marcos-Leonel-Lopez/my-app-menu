import { Badge, IconButton } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useContext , useEffect, useState} from "react";
import { cartContext } from "../../context/cartContext";






const CarWidget = () => {
   
    const [n, setN] = useState(0);
    const { cart } = useContext(cartContext);
    
useEffect(()=>{
    console.log(cart);
    setN((cart.reduce((prev , curr)=>{
        return prev + curr.quantity
    },0))
    );
    console.log(n);
},[cart])
    

    return (
        <div>
            <Badge color="secondary" overlap="circular" badgeContent={n.toString()} >
                <IconButton sx={{ p: 0 }}>
                    <RestaurantIcon fontSize='large' color='action' />
                </IconButton>
            </Badge>
        </div>
    );
};

export default CarWidget;


