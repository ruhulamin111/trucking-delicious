import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/ShoppingCart.css'


const Cart = () => {


    return (
        <div className='cart_container'>
            <div className="cart">
                <div className="cart_close">
                    <span><CloseIcon /></span>
                </div>
                <div className="cart_item_list">
                    <CartItem />
                    <CartItem />

                </div>
                <div className="cart_bottom">
                    <h6>Subtotal amount: <span>$ 123</span> </h6>
                    <button className='home_button'><Link to='/checkout'>Checkout</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Cart
