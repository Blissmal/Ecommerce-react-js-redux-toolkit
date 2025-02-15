import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    searchTerm: '',
    filteredData: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action) {
            state.products = action.payload
        },
        setSearchTerm(state, action){
            
        }
    },
})

export const { setProducts } = productSlice.actions;
export default productSlice.reducer