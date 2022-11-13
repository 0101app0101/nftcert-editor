import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    canvasBackgroundColor: {
        hex: '#fff',
        rgb: {
          r: 1,
          g: 1,
          b: 1,
          a: 1,
        },
        hsl: {
          h: 1,
          s: 1,
          l: 1,
          a: 1,
        },
      }
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