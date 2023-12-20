import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
    const { data } = await axios.get('/youtube/videos/');
    return data;
})

const initialState = {
    videos: {
        video: [],
        status: 'loading',
    },
}

const videosSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Получение статей
            .addCase(fetchVideos.pending, (state) => {
                state.videos.items = [];
                state.videos.status = 'loading';
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.videos.items = action.payload;
                state.videos.status = 'loaded';
            })
            .addCase(fetchVideos.rejected, (state) => {
                state.videos.items = [];
                state.videos.status = 'error';
            })
    },
});

export const { reducer: videosReducer } = videosSlice; // Export the postsReducer
