import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Home'
import Category from './Category'
import Login from './Login';
import Register from './Register';
import Forgot_password from './Forgot_Password';
import ChangePassword from './ChangePassword';
import Cart from './Cart';
import Checkout from './Checkout';
import Logout from './Logout';
import ProductList from './ProductList'
import ProductDetail from './ProductDetail';
import Confirmation from './Confirmation';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter() {
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product-category' element={<Category />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot_password' element={<Forgot_password />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/product-list/:categoryid' element={<ProductList />} />
            <Route path='/product_detail/:productid' element={<ProductDetail />} />
            <Route path='/order-confirmation' element={<Confirmation />} />
          
        </Routes>
    </BrowserRouter>
    );
}
root.render(<MyRouter />);