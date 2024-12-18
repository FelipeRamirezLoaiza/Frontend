import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

export const CartTotal = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;

export const RemoveButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;


