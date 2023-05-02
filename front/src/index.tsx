import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Home} from "./pages/home/home";
import {Login} from "./pages/login/login";
import {AccountCreation} from "./pages/accountCreation/accountCreation";
import {CartDetails} from "./pages/cartDetails/cartDetails";
import {Products} from "./pages/products/products";
import {Orders} from "./pages/orders/orders";
import {Header} from "./modules/header/header";
import {Payment} from "./pages/payment/payment";

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
                <Route path="/payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<App/>);