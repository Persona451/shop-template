import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        quantityCart: 0,
        productsCart: [],
        isOpen: false,
        sum: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.isOpen = true
            const indexProduct = state.productsCart.findIndex(product => product._id === action.payload._id)
            state.sum += action.payload.price * action.payload.quantity
            if(indexProduct === -1) {
                state.productsCart.push(action.payload)
                state.quantityCart++
            } else {
                state.productsCart[indexProduct].quantity += action.payload.quantity
            }
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        openModal: (state) => {
            state.isOpen = true
        }
    }
})

export const { addToCart, closeModal, openModal } = cartSlice.actions
export default cartSlice.reducer