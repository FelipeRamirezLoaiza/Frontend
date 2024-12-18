import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const ProductCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  background-color: #29a1c5;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219a9b;
  }
`;

