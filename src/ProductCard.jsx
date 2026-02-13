import React from 'react';
import './App.css'; // Assuming styles are here

const ProductCard = ({ title, price, inStock }) => {
  return (
    <div className="product-card">
      {/* Image Placeholder Area */}
      <div className="image-container">
        <div className="image-placeholder"></div>
      </div>

      {/* Product Details */}
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>

      {/* Conditional Rendering for Stock Status */}
      <div className={`stock-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
        {inStock ? 'In Stock' : 'Out of Stock'}
      </div>
    </div>
  );
};

export default ProductCard;