import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    canvasBackgroundColor: {
        hex: '#000',
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        },
        hsl: {
            h: 0,
            s: 0,
            l: 0,
            a: 1,
        }
    }
}

export const backgroundbarSlice = createSlice({
    name: "backgroundbar",
    initialState,
    reducers: {
        changecanvasBackgroundColor: (state, action) => {
            state.canvasBackgroundColor.hex = action.payload.hex
        }
    }
})

export const { changecanvasBackgroundColor } = backgroundbarSlice.actions;

export const selectcanvasBackgroundColor = (state) => state.backgroundbar.canvasBackgroundColor;

export default backgroundbarSlice.reducer;