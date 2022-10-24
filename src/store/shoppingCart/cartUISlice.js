import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice({
    name: 'cartUI',
    initialState: { cartIsVisiable: false },

    reducers: {
        toggle(state) {
            state.cartIsVisiable = !state.cartIsVisiable
        }
    }
})

export const cartUIActions = cartUISlice.actions

export default cartUISlice