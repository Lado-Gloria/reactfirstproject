import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDiscount, setProductDiscount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const queryParams = new URLSearchParams({
      name: productName,
      image: productImage,
      price: productPrice,
      discount: productDiscount,
    }).toString();
    
    navigate(`/products?${queryParams}`);
  };

  return (
    <div className='add'>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <label htmlFor="productName">Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(event) => setProductName(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productImage">Image:</label>
          <input
            type="text"
            id="productImage"
            value={productImage}
            onChange={(event) => setProductImage(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productPrice">Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(event) => setProductPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="productDiscount">Discount:</label>
          <input
            type="number"
            id="productDiscount"
            value={productDiscount}
            onChange={(event) => setProductDiscount(event.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProduct;