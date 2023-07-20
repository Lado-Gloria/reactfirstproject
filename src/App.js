import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Products from './Products';
import AddProduct from './AddProduct';
import './App.css';

const App = () => {
  return (
    <Router>
      <nav className="nav">
        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/products">Products</Link>
          <Link to="/add-product">Add Product</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} /> {/* This is the route for the homepage */}
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};

export default App;