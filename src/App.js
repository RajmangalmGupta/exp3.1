import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

const App = () => {
  // Data matching the screenshot
  const products = [
    { id: 1, title: 'Wireless Headphones', price: '$129.99', inStock: true },
    { id: 2, title: 'Mechanical Keyboard', price: '$89.99', inStock: false },
    { id: 3, title: 'Smart Watch', price: '$199.99', inStock: true },
  ];

  return (
    <div className="app-container">
      <div className="card-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;