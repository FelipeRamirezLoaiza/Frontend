import React from 'react';
import ProductList from '../components/ProductList/ProductList.js';
import ProductDetail from '../components/ProductDetail/ProductDetail.js';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart.js';
import AdminPanel from '../pages/Admin.js';

function Home() {
  return (
    <div>
      <ProductList />
      <ProductDetail productId={1} />
      <ShoppingCart cartItems={[]} removeFromCart={() => {}} />
      <AdminPanel />
    </div>
  );
}

export default Home;

