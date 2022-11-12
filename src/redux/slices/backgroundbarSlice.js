import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    canvasBackgroundColor: {
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        }
    }
}

export const backgroundbarSlice = createSlice({
    name: "backgroundbar",
    initialState,
    reducers: {
        changecanvasBackgroundColor: (state, action) => {
            state.canvasBackgroundColor.rgb = action.payload.rgb
        }
    }
})

export const { changecanvasBackgroundColor } = backgroundbarSlice.actions;

export const selectcanvasBackgroundColor = (state) => state.backgroundbar.canvasBackgroundColor.rgb;

export default backgroundbarSlice.reducer;