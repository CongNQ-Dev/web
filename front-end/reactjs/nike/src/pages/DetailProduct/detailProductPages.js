import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router";
import ProductDetail from "../../components/detailProduct/productDetail";

const DetailProductPages = () => {
  const { id } = useParams();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <ProductDetail id={id} />
      </Container>
    </React.Fragment>
  );
};

export default DetailProductPages;
