import { configureStore } from "@reduxjs/toolkit";
import { expanderReducer } from "./trackExpander";

export const store = configureStore({
    reducer: {
        expander: expanderReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch