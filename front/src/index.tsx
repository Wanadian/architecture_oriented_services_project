import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {AccountCreation} from "./pages/accountCreation/accountCreation";
import {CartDetails} from "./pages/cartDetails/cartDetails";
import {Products} from "./pages/products/products";
import {Orders} from "./pages/orders/orders";
import {Header} from "./modules/header/header";

const App = () => (
    <React.StrictMode>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/create" element={<AccountCreation />} />
                <Route path="/cartDetails" element={<CartDetails />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

ReactDOM.render(<App />, document.getElementById('root'));