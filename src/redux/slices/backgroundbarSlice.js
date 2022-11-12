import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    canvasBackgroundColor: {}
}

export const backgroundbarSlice = createSlice({
    name: "backgroundbar",
    initialState,
    reducers: {
        changecanvasBackgroundColor: (state, action) => {
            state.canvasBackgroundColor = action.payload
        }
    }
})

export const { changecanvasBackgroundColor } = backgroundbarSlice.actions;

export const selectcanvasBackgroundColor = (state) => state.backgroundbar.canvasBackgroundColor;

export default backgroundbarSlice.reducer;