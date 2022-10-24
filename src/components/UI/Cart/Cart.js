import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import '../../../styles/ShoppingCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartUIActions } from '../../../store/shoppingCart/cartUISlice';


const Cart = () => {
    const disPatch = useDispatch()
    const toggleCart = () => {
        disPatch(cartUIActions.toggle())
    }
    const cartProducts = useSelector(state => state.cart.cartItems)

    return (
        <div className='cart_container'>
            <div className="cart">
                <div className="cart_close">
                    <span onClick={toggleCart}><CloseIcon /></span>
                </div>
                <div className="cart_item_list">
                    {
                        cartProducts.length === 0 ? <h6>No item available</h6> : cartProducts.map((item, i) => (
                            < CartItem key={i} item={item} />
                        ))
                    }
                </div>
                <div className="cart_bottom">
                    <h6>Subtotal: <span>$ 123</span> </h6>
                    <button className='home_button'><Link to='/checkout'>Checkout</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Cart
