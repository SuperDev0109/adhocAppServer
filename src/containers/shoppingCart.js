import React, { Fragment } from 'react';
import Footer from '../components/layouts/footer/footer';
import Header from '../components/layouts/header/header';
import ShoppingCart from '../components/sections/shoppingCart';
import './screen.scss'
export default function ShoppingCartPage() {
    return (
        <div className="container-fluid screen">
            <Header/>
            <div className='container'>
                <ShoppingCart />
            </div>
            <Footer/>
        </div>
    )
}