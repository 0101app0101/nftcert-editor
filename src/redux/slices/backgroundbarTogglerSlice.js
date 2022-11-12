import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: true,
    image: false
}

export const backgroundbarTogglerSlice = createSlice({
    name: "backgroundbartoggler",
    initialState,
    reducers: {
        enableColor: (state) => {
            state.color = true
            state.image = false
        },
        enableImage: (state) => {
            state.color = false
            state.image = true
        }
    }
})

export const { enableColor, enableImage } = backgroundbarTogglerSlice.actions;

export const selectColor = (state) => state.backgroundbartoggler.color;
export const selectImage = (state) => state.backgroundbartoggler.image;

export default backgroundbarTogglerSlice.reducer; 