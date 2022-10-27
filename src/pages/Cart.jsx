import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/shoppingCart/cartSlice';


const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    console.log('totalamoun', totalAmount)
    const disPatch = useDispatch()
    const deleteItem = (id) => {
        disPatch(cartActions.deleteItem(id))
    }

    return (
        <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section className="cart_section">
                <section className="cart_table">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartItems.length === 0 ? <h5>No item available</h5> : cartItems.map(item => <tr key={item.id}>
                                    <td><img className='h-12' src={item.image01} alt="" /></td>
                                    <td>{item.title}</td>
                                    <td>$ {item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><span onClick={() => deleteItem(item.id)}><DeleteIcon /></span></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </section>
                <div>
                    <h1>Subtotal: $ <span>{totalAmount}</span></h1>
                </div>
            </section>
        </Helmet>
    )
}

export default Cart
