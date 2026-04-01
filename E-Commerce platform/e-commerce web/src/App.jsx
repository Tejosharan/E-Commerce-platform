import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css'

// Components
import Layout from "./components/Layout";

// Pages
import Cart from './pages/Cart';
import Home from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';
import ProductDetail from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
    <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
