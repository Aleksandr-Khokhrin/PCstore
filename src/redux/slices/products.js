import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async (value) => {
    const { data } = await axios.get(`products/?category=${value[0]}${value[1] ? `&qty=${value[1]}` : ''}`);
    return data;
})
export const fetchProduct = createAsyncThunk('products/fetchProduct', async (id) => {
    const { data } = await axios.get(`products/${id}`);
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
    selectedProduct: {
        item: [],
        status: 'loading',
    },
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Получение всех продуктов
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
            //Получение одного продукта
            .addCase(fetchProduct.pending, (state) => {
                state.selectedProduct.item = [];
                state.selectedProduct.status = 'loading';
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {
                state.selectedProduct.item = action.payload;
                state.selectedProduct.status = 'loaded';
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.selectedProduct.item = [];
                state.selectedProduct.status = 'error';
            })
        // //Удаление статьи
        // .addCase(fetchRemovePost.pending, (state, action) => {
        //     state.posts.items = state.posts.items.filter(obj => obj._id !== action.meta.arg)
        // })
    },
});

export const { reducer: productsReducer } = productsSlice; // Export the postsReducer
