import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

    name: "Cart",
    initialState: [],
    reducers: {

        add(state, action) {
            state.push(action.payload)
        },

        remove(state, action) {
            state.splice(action.payload, 1)
        },

        removeAll(state, action){
            state.length = 0;
        }

    }
})

export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;