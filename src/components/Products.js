import React from 'react';
import '../styles/Products.css';

const Products = ({ onCardClick }) => {
  const products = [
    { title: 'Engine Oils', icon: 'fas fa-oil-can' },
    { title: 'Lubricants', icon: 'fas fa-tools' },
    { title: '2-Wheeler Batteries', icon: 'fas fa-car-battery' },
    { title: 'Auto Parts', icon: 'fas fa-cogs' },
  ];

  return (
    <section className="section" id="products">
      <h2>Our Products</h2>
      <div className="cards">
        {products.map((product) => (
          <div
            className="card"
            key={product.title}
            onClick={() => onCardClick(product.title)}
          >
            <i className={product.icon}></i>
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;