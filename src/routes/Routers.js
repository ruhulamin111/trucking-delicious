import React from 'react'
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Foods from '../pages/Foods';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/foods' element={<Foods />} />
            <Route path='/foods/:id' element={<FoodDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />

        </Routes>
    )
}

export default Routers