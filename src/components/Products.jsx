import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { ProductItem } from "./ProductItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((prod) => (
        <ProductItem key={prod.id} product={prod} />
      ))}
    </Container>
  );
};
