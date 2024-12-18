import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  ProductListContainer,
  ProductCard,
  FilterContainer,
  FilterButton
} from './ProductListStyle';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:3000/products');
        setProducts(res.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(product =>
        product.categories.some(category => category.id === parseInt(selectedCategory))
      )
    : products;

  return (
    <div>
      <h1>Lista de Productos</h1>
      <FilterContainer>
        <FilterButton onClick={() => setSelectedCategory('')}>
          Todas las Categorías
        </FilterButton>
        {products.flatMap(product => product.categories).map(category => (
          <FilterButton
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProductListContainer>
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <p>
              Categorías:{' '}
              {product.categories?.length > 0
                ? product.categories.map(category => category.name).join(', ')
                : 'Sin categorías'}
            </p>
          </ProductCard>
        ))}
      </ProductListContainer>
    </div>
  );
};

export default ProductList;





