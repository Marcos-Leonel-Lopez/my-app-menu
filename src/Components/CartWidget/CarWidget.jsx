import { Badge, IconButton } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import React from "react";



const CarWidget = ({nItems}) => {
    return (
        <Badge color="secondary" overlap="circular" badgeContent={nItems.toString()} >
            <IconButton  sx={{ p: 0 }}>
                <RestaurantIcon fontSize='large' color='action' />
            </IconButton>
        </Badge>
    );
};

export default CarWidget;


