import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartItem = ({ item }) => {

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
                        <span><AddIcon /></span>
                        <span>{item.quantity}</span>
                        <span><RemoveIcon /></span>
                    </div>
                </div>
                <span><CloseIcon /></span>
            </div>
        </div>
    )
}

export default CartItem
