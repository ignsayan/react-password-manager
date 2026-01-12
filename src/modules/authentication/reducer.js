import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('USER') || null,
    loading: false,
}

export const authSlice = createSlice({
    'name': 'authentication',
    initialState,
    reducers: {
        initiateLogin: (state) => {
            state.loading = true
        },
        attemptLogin: (state, action) => {
            const user = action.payload
            localStorage.setItem('USER', user._id)
            state.user = user
            state.loading = false
        },
        logout: (state) => {
            localStorage.removeItem('USER')
            state.user = null
        }
    }
})

export const { initiateLogin, attemptLogin, logout } = authSlice.actions

export default authSlice.reducer