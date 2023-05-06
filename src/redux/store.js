import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import authSlice from './authSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartReducer
    },
})

export default store