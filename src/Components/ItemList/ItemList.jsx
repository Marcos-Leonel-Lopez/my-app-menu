import { Box } from "@mui/material";
import MyItem from "../Item/MyItem";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        minHeight: "100vh",
      }}
    >
      {productos.map((producto) => (
        <Link to={`/item/${producto.id}`} key={producto.id} className="Inactive">
          <MyItem producto={producto} />
        </Link>
      ))}
    </Box>
  );
};

export default ItemList;
