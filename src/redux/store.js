import { configureStore } from "@reduxjs/toolkit";
// import { postsReducer } from './slices/products'
// import { authReducer } from './slices/auth'
import { videosReducer } from './slices/videos'
import { bannersReducer } from "./slices/banners";
const store = configureStore({
    reducer: {
        videos: videosReducer,
        banners: bannersReducer,
        // auth: authReducer
    }
});

export default store;
