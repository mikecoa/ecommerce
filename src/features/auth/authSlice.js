import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    // id: '',
    username: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => ({
            ...action.payload
        }),
        clearAuth: (state) => initialState
    },
})

// Action creators are generated for each case reducer function
export const { setAuth, clearAuth } = authSlice.actions

export default authSlice.reducer