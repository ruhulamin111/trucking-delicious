import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './shoppingCart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})

export default store;