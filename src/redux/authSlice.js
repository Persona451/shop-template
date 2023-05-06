import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        loading: false,
        error: false,
        success: false
    },
    register: {
        loading: false,
        error: false,
        success: false
    },
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: []
})

export const { logout } = authSlice.actions

export default authSlice.reducer