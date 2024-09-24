import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
    },
    reducers: {
        toggleSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export default gptSlice.reducer;

export const { toggleSearchView } = gptSlice.actions;
