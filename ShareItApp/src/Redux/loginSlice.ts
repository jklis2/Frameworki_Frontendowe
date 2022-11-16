import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userState {
    username: string,
    password: string,
    isLoggedIn: boolean
}

const initialState: userState = {
    username: '',
    password: '',
    isLoggedIn: false
}

export const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<{username: string, password: string}>) => {
        state.username = action.payload.username
        state.password = action.payload.password
        state.isLoggedIn = true
      }
    }
})

export const {login} = loginSlice.actions

export default loginSlice.reducer