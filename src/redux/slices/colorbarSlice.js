import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color : {
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
      },
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
        },
      }
}

export const colorbarSlice = createSlice({
    name: "colorbar",
    initialState,
    reducers: {
        changeColor: (state, action) => {
            state.color = action.payload
        },
        changeBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        }
    }
})

export const { changeColor, changeBackgroundColor } = colorbarSlice.actions;

export const selectColor = (state) => state.colorbar.color;
export const selectBackgroundColor = (state) => state.colorbar.backgroundColor;

export default colorbarSlice.reducer;