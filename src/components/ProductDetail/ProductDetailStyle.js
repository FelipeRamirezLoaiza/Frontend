import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const AddToCartButton = styled.button`
  padding: 10px;
  background-color: #29a1c5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219a9b;
  }
`;
