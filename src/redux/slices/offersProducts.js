import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";


export const fetchOffers = createAsyncThunk('offers/fetchOffers', async () => {
    const { data } = await axios.get('/offers/');
    return data;
})

const initialState = {
    offers: {
        items: [],
        status: 'loading',
    },
}

const offersSlice = createSlice({
    name: 'offers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOffers.pending, (state) => {
                state.offers.items = [];
                state.offers.status = 'loading';
            })
            .addCase(fetchOffers.fulfilled, (state, action) => {
                state.offers.items = action.payload;
                state.offers.status = 'loaded';
            })
            .addCase(fetchOffers.rejected, (state) => {
                state.offers.items = [];
                state.offers.status = 'error';
            })
    },
});

export const { reducer: offersReducer } = offersSlice; // Export the postsReducer
