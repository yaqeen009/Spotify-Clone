import { createSlice } from "@reduxjs/toolkit";

interface sliceTypes {
    isExpanded: boolean
}

const initialState:sliceTypes  = {
    isExpanded :false
}

const expandSlice = createSlice({
 name: 'expander',
 initialState,
 reducers:{
    toggleExpand: (state)=>{
        state.isExpanded = !state.isExpanded
    }
 }
})

export const {toggleExpand} = expandSlice.actions
export const expanderReducer = expandSlice.reducer