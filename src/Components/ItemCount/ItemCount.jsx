import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTheme } from '@mui/material/styles';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, Button, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { alpha, Container } from '@mui/system';


const ItemCount = () => {
    const theme = useTheme();
    const [count, setCount] = useState(0);
    const stock = 5;
    const suma = () => {
        if (stock === count) {
            return;
        }
        setCount(count + 1);
    };
    const resta = () => {
        if (count === 0) {
            return;
        }
        setCount(count - 1);
    };
    return (
        <Box sx={{
            minWidth: '100%'
        }}>
            <Card sx={{
                minWidth: 100,
                minHeight: 175,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: alpha(theme.palette.secondary.light, 0.2),

            }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 2, backgroundColor: alpha(theme.palette.secondary.light, 0.2), pb: 2, pt:2, pl:1, pr:1, borderRadius:5 }}>
                    <Button variant='contained' sx={{ mr: 6}} onClick={resta}><RemoveCircleIcon edge='end' /></Button>
                    <Box sx={{ backgroundColor: 'white', pt: 0.7, pb: 0.7, pl: 2, pr: 2, borderRadius: 2 }}>{count}</Box>
                    <Button variant='contained' sx={{ ml: 6 }} onClick={suma}><AddCircleIcon edge='end' /></Button>
                </Box>
                <Box>
                    <Button variant='contained'>Agregar al carrito</Button>
                </Box>
            </Card>
        </Box>
    );
};

export default ItemCount;