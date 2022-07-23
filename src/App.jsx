import Home from './pages/Home';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;