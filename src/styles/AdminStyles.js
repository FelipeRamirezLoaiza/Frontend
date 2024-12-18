import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const SubmitButton = styled.button`
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