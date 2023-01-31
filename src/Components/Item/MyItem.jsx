import { Box, Divider, Rating } from "@mui/material";

const MyItem = ({ producto }) => {
  return (
    <>
      <Box minWidth={350} minHeight={400} className="itemIndividual" href="#">
        <img
          className="Imagenes-product"
          src={producto.picture}
          alt={producto.description}
        />
        <h2>{producto.title}</h2>
        <Divider />
        <h2>
          "${producto.price}"{" "}
          <Rating
            name="half-rating-read"
            defaultValue={parseFloat(producto.rating)}
            precision={0.5}
            readOnly
            size="small"
          />
        </h2>
      </Box>
    </>
  );
};

export default MyItem;
