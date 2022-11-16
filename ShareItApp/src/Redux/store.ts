import {configureStore} from "@reduxjs/toolkit";
import { configure } from "@testing-library/react";
import loginReducer from './loginSlice';

export const store = configureStore({
    reducer: {
        login: loginReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch