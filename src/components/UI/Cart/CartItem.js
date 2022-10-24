import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shoppingCart/cartSlice';

const CartItem = ({ item }) => {
    const { id, title, price, image01 } = item
    const disPatch = useDispatch()

    const incrementItem = () => {
        disPatch(cartActions.addItem({
            id,
            title,
            price,
            image01,
        }))
    }
    const decrementItem = () => {
        disPatch(cartActions.removeItem(id))
    }
    const deleteItem = () => {
        disPatch(cartActions.deleteItem(id))
    }


    return (
        <div className='cart_item_info'>
            <img src={item.image01} alt="" />
            <div className="cart_product_info flex items-center gap-5 justify-between w-full">
                <div>
                    <h6 className='text-lg font-bold text-[#ff4d6d]'>{item.title}</h6>
                    <div className='flex gap-16'>
                        <p>{item.quantity} x</p>
                        <p className='text-[#ff4d6d] font-semibold'>$ {item.totalPrice}</p>
                    </div>
                    <div className='bg-[#ff4d9d] text-white rounded flex justify-between p-1 my-2'>
                        <span onClick={incrementItem}><AddIcon /></span>
                        <span>{item.quantity}</span>
                        <span onClick={decrementItem}><RemoveIcon /></span>
                    </div>
                </div>
                <span onClick={deleteItem}><CloseIcon /></span>
            </div>
        </div>
    )
}

export default CartItem
