import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import AllFoods from '../pages/AllFoods';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import FoodDetails from '../pages/FoodDetails';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routers = () => {
    return (
        <Routes>
            {/* <Route path='/' element={<Navigate to='/home' />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/foods' element={<AllFoods />} />
            <Route path='/foods/:id' element={<FoodDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/singin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />

        </Routes>
    )
}

export default Routers