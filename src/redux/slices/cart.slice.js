import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        quantity: 0
    },
    reducers: {
        addToCart: (state) => {

            state.quantity += 1;
        },


    },
    extraReducers: builder => builder


})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer