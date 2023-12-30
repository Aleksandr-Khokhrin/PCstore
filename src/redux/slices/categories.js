import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const { data } = await axios.get('/categories/');
    return data;
})


const initialState = {
    categories: {
        items: [],
        status: 'loading',
    },
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.categories.items = [];
                state.categories.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories.items = action.payload;
                state.categories.status = 'loaded';
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.categories.items = [];
                state.categories.status = 'error';
            })
           
    },
});

export const { reducer: categoriesReducer } = categoriesSlice;
