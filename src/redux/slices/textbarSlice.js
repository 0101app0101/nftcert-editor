import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    addHeading: true,
    addSubHeading: true,
    addText:true
}

export const textbarSlice = createSlice({
    name: "textbar",
    initialState,
    reducers: {
        addHeading: (state) => {
            state.addHeading = !state.addHeading
        },
        addSubHeading: (state) => {
            state.addSubHeading = !state.addSubHeading
        },
        addText: (state) => {
            state.addText = !state.addText
        },
    }
})

export const { addHeading, addSubHeading, addText } = textbarSlice.actions;

export const selectAddHeading = (state) => state.textbar.addHeading;
export const selectAddSubHeading = (state) => state.textbar.addSubHeading;
export const selectAddText = (state) => state.textbar.addText;

export default textbarSlice.reducer;