import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async (value) => {
    const { data } = await axios.get(`products/?category=${value[0]}${value[1] ? `&qty=${value[1]}` : ''}`);
    return data;
})

// export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
//     const { data } = await axios.get('/tags');
//     return data;
// })
// export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) =>
//     axios.delete(`/posts/${id}`)
// )

const initialState = {
    products: {
        items: [],
        status: 'loading',
    },
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products.items = [];
                state.products.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.items = action.payload;
                state.products.status = 'loaded';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.products.items = [];
                state.products.status = 'error';
            })
            // //Получение тегов
            // .addCase(fetchTags.pending, (state) => {
            //     state.tags.items = [];
            //     state.tags.status = 'loading';
            // })
            // .addCase(fetchTags.fulfilled, (state, action) => {
            //     state.tags.items = action.payload;
            //     state.tags.status = 'loaded';
            // })
            // .addCase(fetchTags.rejected, (state) => {
            //     state.tags.items = [];
            //     state.tags.status = 'error';
            // })
            // //Удаление статьи
            // .addCase(fetchRemovePost.pending, (state, action) => {
            //     state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg)
            // })
    },
});

export const { reducer: productsReducer } = productsSlice; // Export the postsReducer
