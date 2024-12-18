import React, { useState} from 'react';
import axios from 'axios';
import { FormContainer, FormInput, SubmitButton } from "../styles/AdminStyles.js";

const AdminPanel = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const createProduct = async () => {
    await axios.post('/products', { name: productName, price: productPrice });
  };

  const createCategory = async () => {
    await axios.post('/categories', { name: categoryName });
  };

  return (
    <div>
      <h2>Crear Producto</h2>
      <FormContainer>
        <FormInput
          type="text"
          placeholder="Nombre del Producto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <FormInput
          type="number"
          placeholder="Precio"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <SubmitButton onClick={createProduct}>Crear Producto</SubmitButton>
      </FormContainer>

      <h2>Crear Categoría</h2>
      <FormContainer>
        <FormInput
          type="text"
          placeholder="Nombre de la Categoría"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <SubmitButton onClick={createCategory}>Crear Categoría</SubmitButton>
      </FormContainer>
    </div>
  );
};

export default AdminPanel;