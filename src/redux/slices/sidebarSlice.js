import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: true,
  templates: true,
  text: false,
  background: false,
  uploads: false,
  elements: false,
  textColorPallete: false,
  status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    openTemplates: (state) => {
      state.templates = true;
      state.text = false;
      state.background = false;
      state.uploads = false;
      state.elements = false;
      state.textColorPallete = false;
      state.isOpen = true;
    },
    openText: (state) => {
      state.templates = false;
      state.text = true;
      state.background = false;
      state.uploads = false;
      state.elements = false;
      state.textColorPallete = false;
      state.isOpen = true;
    },
    openBackground: (state) => {
      state.templates = false;
      state.text = false;
      state.background = true;
      state.uploads = false;
      state.elements = false;
      state.textColorPallete = false;
      state.isOpen = true;
    },
    openUploads: (state) => {
      state.templates = false;
      state.text = false;
      state.background = false;
      state.uploads = true;
      state.elements = false;
      state.textColorPallete = false;
      state.isOpen = true;
    },
    openElements: (state) => {
      state.templates = false;
      state.text = false;
      state.background = false;
      state.uploads = false;
      state.elements = true;
      state.textColorPallete = false;
      state.isOpen = true;
    },
    opentextColorPallete: (state) => {
      state.templates = false;
      state.text = false;
      state.background = false;
      state.uploads = false;
      state.elements = false;
      state.textColorPallete = true;
      state.isOpen = true;
    }
  },
});

export const { openTemplates, openText, openBackground, openUploads, openElements, opentextColorPallete, toggleSidebar } = sidebarSlice.actions;

export const selectTemplates = (state) => state.sidebar.templates;
export const selectText = (state) => state.sidebar.text;
export const selectBackground = (state) => state.sidebar.background;
export const selectUploads = (state) => state.sidebar.uploads;
export const selectElements = (state) => state.sidebar.elements;
export const selectTextColorPallete = (state) => state.sidebar.textColorPallete;
export const selectIsOpen = (state) => state.sidebar.isOpen;

export default sidebarSlice.reducer;