import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  h1 {
    text-align: center;
  }
`;

export const CategoryFilterContainer = styled.div`
  margin-bottom: 20px;
`;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  h3 {
    margin: 10px 0;
  }
  p {
    margin: 5px 0;
  }
`;
