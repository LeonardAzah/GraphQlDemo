import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries/productQueries";
import { Box } from "@mui/system";
import ProductCard from "../components/ProductCard";
import Pagination from "@mui/material/Pagination";
import Header from "../components/Header";

export default function Home() {
  const [page, setPage] = useState(1);
  const pageSize = 20;
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: {
      page,
      pageSize,
    },
  });
  if (loading) return <p>Loading</p>;
  if (error) {
    console.log(error);
    return <p>Error: {error.message}</p>;
  }
  return (
    <>
      <Header />
      <Box
        sx={{
          paddingRight: "24px",
          paddingLeft: "24px",
          paddingBottom: "30px",
        }}
      >
        <h3>Products</h3>
        <div>
          {!loading && !error && (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", position: "relative" }}
            >
              {data.products.products.map((product) => (
                <Box sx={{ width: "calc(25% - 20px)", margin: "10px" }}>
                  <ProductCard key={product.id} product={product} />
                </Box>
              ))}
            </Box>
          )}
          <div
            style={{
              paddingTop: "15px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination
              count={Math.ceil(data.products.totalCount / pageSize)}
              page={page}
              onChange={(event, value) => setPage(value)}
              showFirstButton
              showLastButton
            />
          </div>
        </div>
      </Box>
    </>
  );
}
