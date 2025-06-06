import { configureStore } from "@reduxjs/toolkit"
import productFilterSlice from './slices/product.filter.slice'
import cartSlice from "./../redux/slices/cart.slice"

const reduxStore = configureStore({
    reducer: {
        filter: productFilterSlice,
        cart: cartSlice
    },
})

export default reduxStore