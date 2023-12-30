import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from './slices/auth'
import { videosReducer } from './slices/videos'
import { bannersReducer } from "./slices/banners";
import { categoriesReducer } from "./slices/categories";
import { productsReducer } from "./slices/products";
const store = configureStore({
    reducer: {
        videos: videosReducer,
        banners: bannersReducer,
        auth: authReducer,
        categories: categoriesReducer,
        products: productsReducer,
        // categories: categoriesReducer,
    }
});

export default store;

// import { postsReducer } from './slices/products'