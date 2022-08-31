import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { ProductItem } from "./ProductItem";

const Container = styled.div``;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </Container>
  );
};
