import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "@mui/material/styles";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Box, Button, Card } from "@mui/material";
import { useState, useContext } from "react";
import { alpha } from "@mui/system";
import { cartContext } from "../../context/cartContext";

const ItemCount = ({ stock, producto }) => {
  const theme = useTheme();
  const [desAdd, setDesAdd] = useState(false);
  const [desRem, setDesRem] = useState(true);
  const { addItem } = useContext(cartContext);
  const [count, setCount] = useState(0);

  const add = () => {
    if (count !== 0) {
      addItem(producto, count);
    } else {
      console.log("no se agrego item");
    }
  };
  const suma = () => {
    if (stock === count) {
      return setDesAdd(true);
    }
    setCount(count + 1);
    setDesAdd(false);
    setDesRem(false);
  };
  const resta = () => {
    if (count === 0) {
      return setDesRem(true);
    }
    setCount(count - 1);
    setDesAdd(false);
  };
  return (
    <Box
      sx={{
        minWidth: "100%",
      }}
    >
      <Card
        className="Card-count"
        sx={{
          backgroundColor: alpha(theme.palette.secondary.light, 0.2),
        }}
      >
        <Box
          className="Box-button"
          sx={{ backgroundColor: alpha(theme.palette.secondary.light, 0.2) }}
        >
          <Button
            variant="contained"
            sx={{ mr: 6 }}
            onClick={resta}
            disabled={desRem}
          >
            <RemoveCircleIcon edge="end" />
          </Button>
          <Box
            sx={{
              backgroundColor: "white",
              pt: 0.7,
              pb: 0.7,
              pl: 2,
              pr: 2,
              borderRadius: 2,
            }}
          >
            {count}
          </Box>
          <Button
            variant="contained"
            sx={{ ml: 6 }}
            onClick={suma}
            disabled={desAdd}
          >
            <AddCircleIcon edge="end" />
          </Button>
        </Box>
        <Box>
          <Button variant="contained" onClick={add}>
            Agregar al carrito
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ItemCount;
