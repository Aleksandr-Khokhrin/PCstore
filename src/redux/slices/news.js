import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchAllNews = createAsyncThunk('/news', async () => {
    const { data } = await axios.get(`/news`);
    return data;
})
export const fetchOneNews = createAsyncThunk('news/oneNews', async (id) => {
    const { data } = await axios.get(`/news/${id}`);
    return data;
})


const initialState = {
    news: {
        items: [],
        status: 'loading',
    },
    oneNews: {
        item: [],
        status: 'loading',
    },
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Получение всех новостей
            .addCase(fetchAllNews.pending, (state) => {
                state.news.items = [];
                state.news.status = 'loading';
            })
            .addCase(fetchAllNews.fulfilled, (state, action) => {
                state.news.items = action.payload;
                state.news.status = 'loaded';
            })
            .addCase(fetchAllNews.rejected, (state) => {
                state.news.items = [];
                state.news.status = 'error';
            })
            //Получение одной новости
            .addCase(fetchOneNews.pending, (state) => {
                state.oneNews.item = [];
                state.oneNews.status = 'loading';
            })
            .addCase(fetchOneNews.fulfilled, (state, action) => {
                state.oneNews.item = action.payload;
                state.oneNews.status = 'loaded';
            })
            .addCase(fetchOneNews.rejected, (state) => {
                state.oneNews.item = [];
                state.oneNews.status = 'error';
            })
    },
});

export const { reducer: newsReducer } = newsSlice; // Export the postsReducer
