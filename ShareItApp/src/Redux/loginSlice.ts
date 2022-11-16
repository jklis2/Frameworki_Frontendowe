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
    name: 'counter',
    initialState,
    reducers: {
      login: (state, action: PayloadAction<string>) => {
        state.username = 'nazwausera'
        state.password = 'jakieshaslo'
        state.isLoggedIn = true
      }
    }
})

export const {login} = loginSlice.actions

export default loginSlice.reducer