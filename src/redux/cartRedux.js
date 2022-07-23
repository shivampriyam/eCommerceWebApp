import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total =+ action.payload.price;
        }
    }
});

export const { addProduct } = CartSlice.actions;
export default CartSlice.reducer;