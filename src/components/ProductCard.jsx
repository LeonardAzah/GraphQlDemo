import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Box } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 300,
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px",
        backgroundColor: "#fcfcfc",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height={80}
          image={product.imageUrl}
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
        <div style={{ padding: "10px" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "5px",
              fontWeight: 600,
              color: "#212122",
            }}
          >
            {product.name}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "5px",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <div>
                <span>{product.currency} </span>
                {product.amount}
              </div>
            </Box>
          </Box>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
