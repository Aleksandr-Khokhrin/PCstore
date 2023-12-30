import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchBannersSlider = createAsyncThunk('bgImg/fetchBannersSlider', async () => {
    const { data } = await axios.get('/banners/');
    return data;
})
export const fetchBannersClients = createAsyncThunk('bgImg/fetchBannersClients', async () => {
    const { data } = await axios.get('/clients/');
    return data;
})


const initialState = {
    banners: {
        items: [],
        status: 'loading',
    },
    clients: {
        items: [],
        status: 'loading',
    },
}

const bannersSlice = createSlice({
    name: 'banners',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBannersSlider.pending, (state) => {
                state.banners.items = [];
                state.banners.status = 'loading';
            })
            .addCase(fetchBannersSlider.fulfilled, (state, action) => {
                state.banners.items = action.payload;
                state.banners.status = 'loaded';
            })
            .addCase(fetchBannersSlider.rejected, (state) => {
                state.banners.items = [];
                state.banners.status = 'error';
            })
            .addCase(fetchBannersClients.pending, (state) => {
                state.clients.items = [];
                state.clients.status = 'loading';
            })
            .addCase(fetchBannersClients.fulfilled, (state, action) => {
                state.clients.items = action.payload;
                state.clients.status = 'loaded';
            })
            .addCase(fetchBannersClients.rejected, (state) => {
                state.clients.items = [];
                state.clients.status = 'error';
            })
           
    },
});

export const { reducer: bannersReducer } = bannersSlice; // Export the postsReducer
