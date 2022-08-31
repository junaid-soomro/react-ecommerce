import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import { ProductItem } from "./ProductItem";

//removed display property commit
//added some more property for the prod fix

const Container = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
`;
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
