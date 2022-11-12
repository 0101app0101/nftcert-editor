import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: {
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        }
    },
    backgroundColor: {
        rgb: {
            r: 0,
            g: 0,
            b: 0,
            a: 1,
        }
    }
}

export const colorbarSlice = createSlice({
    name: "colorbar",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color.rgb = action.payload.rgb
        },
        changeBackgroundColor: (state, action) => {
            state.backgroundColor.rgb = action.payload.rgb
        }
    }
})

export const { changeColor, changeBackgroundColor } = colorbarSlice.actions;

export const selectColor = (state) => state.colorbar.color.rgb;
export const selectBackgroundColor = (state) => state.colorbar.backgroundColor.rgb;

export default colorbarSlice.reducer;