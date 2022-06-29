import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../containers/home';
import Product from '../containers/Product';
import FinishOrder from '../containers/finishOrder';
import Show404 from '../containers/Show404';
import FoodOrder from '../containers/Order';
import ShoppingCart from '../containers/shoppingCart';
import QRscan from '../containers/QRscan';

const Routing = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/finish-ordering" element={<FinishOrder />} />
        <Route path="/404error" element={<Show404 />} />
        <Route path="/food-ordering" element={<FoodOrder />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/qrscan" element={<QRscan />} />
    </Routes>
)

export default Routing;