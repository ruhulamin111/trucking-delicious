import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import '../styles/Cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/shoppingCart/cartSlice';
import { Link } from 'react-router-dom';


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
                    <p className='my-2'>Taxes and shipping will calculate at checkout</p>
                    <div className='flex gap-5'>
                        <button className="home_button"><Link to='/foods'>Continue shopping</Link></button>
                        <button className="home_button"><Link to='/checkout'>Proceed to checkout</Link></button>

                    </div>
                </div>
            </section>
        </Helmet>
    )
}

export default Cart
