import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: {
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
    },
    backgroundColor: {
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

export const colorbarSlice = createSlice({
    name: "colorbar",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color.hex = action.payload.hex
            // state.color.rgb.a = action.payload.rgb.a
            // state.color.rgb.r = action.payload.rgb.r
            // state.color.rgb.g = action.payload.rgb.g
            // state.color.rgb.b = action.payload.rgb.b
            // state.color.hsl.h = action.payload.hsl.h
            // state.color.hsl.s = action.payload.hsl.s
            // state.color.hsl.l = action.payload.hsl.l
            // state.color.hsl.a = action.payload.hsl.a
            console.log(action)
        },
        changeBackgroundColor: (state, action) => {
            state.backgroundColor.hex = action.payload.hex
            // state.backgroundColor.rgb = action.payload.rgb
            // state.backgroundColor.hsl = action.payload.hsl
        }
    }
})

export const { changeColor, changeBackgroundColor } = colorbarSlice.actions;

export const selectColor = (state) => state.colorbar.color;
export const selectBackgroundColor = (state) => state.colorbar.backgroundColor;

export default colorbarSlice.reducer;