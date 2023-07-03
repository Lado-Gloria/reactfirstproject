import Login from './Login';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Products from './Products';
import AddProduct from './AddProduct';

const App = () => {
  return (
    <Router>
      <nav>
    
        
              <Link to="/login">Login</Link>
          
          
          
           <Link to="/products">Products</Link>
          
         
          <Link to="/add-product">AddProduct</Link>
         
    
      </nav>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;