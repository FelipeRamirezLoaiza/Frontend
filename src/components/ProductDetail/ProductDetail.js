import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AddToCartButton, ProductDetailContainer } from "./ProductDetailStyle";

const ProductDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${product.name} se agregó al carrito.`);
  };

  return (
    <ProductDetailContainer>
      {product && (
        <>
          <h2>{product.name}</h2>
          <p>{product.details.description}</p>
          <p>{product.price} USD</p>
          <AddToCartButton onClick={() => console.log('Producto agregado al carrito')}>
            Agregar al carrito
          </AddToCartButton>
        </>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;


