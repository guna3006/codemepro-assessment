import React from 'react';

const ProductsList = ({ products, onSelectProduct }) => {
  return (
    <div>
      {products.map(product => (
        <p key={product.Name}>
          <input type="checkbox" onChange={(e) => onSelectProduct(product, e.target.checked)} />
          {product.Name} - ${product.Price} - {product.Weight}g
        </p>
      ))}
    </div>
  );
};

export default ProductsList;
